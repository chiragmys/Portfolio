## API
- POST /api/contact — body: { name, phone, message } → stores message. Returns { id, created_at }.
- GET  /api/contact — returns list (admin/debug, hidden from UI).

## Backend
- Mongo collection: contact_messages with fields id, name, phone, message, created_at.
- Phone validation regex on server, mirror of frontend.

## Frontend Integration
- Contact.jsx posts via axios to `${REACT_APP_BACKEND_URL}/api/contact`.
- On success: toast success + reset form. On error: toast destructive message.