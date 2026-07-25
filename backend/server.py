from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import re
import logging
from pathlib import Path
from pydantic import BaseModel, Field, field_validator
from typing import List
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")


PHONE_RE = re.compile(r"^[+]?[0-9\s\-]{7,20}$")


class ContactCreate(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    phone: str = Field(min_length=7, max_length=25)
    message: str = Field(min_length=1, max_length=4000)

    @field_validator("phone")
    @classmethod
    def _phone(cls, v: str) -> str:
        if not PHONE_RE.match(v.strip()):
            raise ValueError("Invalid phone number format")
        return v.strip()

    @field_validator("name", "message")
    @classmethod
    def _strip(cls, v: str) -> str:
        return v.strip()


class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


@api_router.get("/")
async def root():
    return {"message": "Chirag Portfolio API", "status": "ok"}


@api_router.post("/contact", response_model=ContactMessage)
async def create_contact(payload: ContactCreate):
    try:
        msg = ContactMessage(**payload.model_dump())
        doc = msg.model_dump()
        doc_to_store = {**doc, "created_at": doc["created_at"].isoformat()}
        await db.contact_messages.insert_one(doc_to_store)
        return msg
    except ValueError as e:
        raise HTTPException(status_code=422, detail=str(e))
    except Exception as e:
        logging.exception("contact insert failed")
        raise HTTPException(status_code=500, detail="Could not save message")


@api_router.get("/contact", response_model=List[ContactMessage])
async def list_contacts():
    items = await db.contact_messages.find().sort("created_at", -1).to_list(500)
    out: List[ContactMessage] = []
    for it in items:
        it.pop("_id", None)
        ca = it.get("created_at")
        if isinstance(ca, str):
            try:
                it["created_at"] = datetime.fromisoformat(ca)
            except Exception:
                it["created_at"] = datetime.now(timezone.utc)
        out.append(ContactMessage(**it))
    return out


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()