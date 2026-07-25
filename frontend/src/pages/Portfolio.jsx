import Sidebar from '../components/Sidebar';
import RightNav from '../components/RightNav';
import FloatingWhatsapp from '../components/FloatingWhatsapp';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Resume from '../components/sections/Resume';
import Services from '../components/sections/Services';
import Skills from '../components/sections/Skills';
import { profile } from '../data/mock';
import { Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Portfolio() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white selection:bg-emerald-400/30 selection:text-white">
      <div className="pointer-events-none fixed top-[-160px] right-[-120px] h-[520px] w-[520px] rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none fixed bottom-[-180px] left-[20%] h-[520px] w-[520px] rounded-full bg-emerald-500/5 blur-3xl" />

      <Sidebar />
      <RightNav />
      <FloatingWhatsapp />

      <div className="lg:hidden sticky top-0 z-40 backdrop-blur bg-[#0a0a0b]/80 border-b border-white/10">
        <div className="flex items-center justify-between px-5 h-14">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full border border-emerald-500/60 flex items-center justify-center">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </div>
            <div className="text-white font-semibold">{profile.logo}</div>
          </div>
          <button onClick={() => setOpen(!open)} className="h-9 w-9 rounded-full border border-white/15 flex items-center justify-center text-white">
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
        {open && (
          <div className="px-5 pb-5 grid gap-2 text-sm">
            {['home', 'about', 'resume', 'services', 'skills'].map((s) => (
              <a key={s} href={`#${s}`} onClick={() => setOpen(false)} className="py-2 border-b border-white/5 capitalize text-white/80 hover:text-emerald-400">{s}</a>
            ))}
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center gap-2 h-11 justify-center rounded-full bg-emerald-400 text-[#08130f] font-semibold">
              <Mail size={16}/> LET'S CONNECT
            </a>
          </div>
        )}
      </div>

      <main className="lg:pl-[360px] lg:pr-[100px] px-5 md:px-10 max-w-[1400px]">
        <Hero />
        <About />
        <Resume />
        <Services />
        <Skills />

        <footer className="mt-16 pt-8 pb-16 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-white/40 text-xs">
          <div>© {new Date().getFullYear()} {profile.copyright}</div>
          <div>{profile.email} · {profile.phone}</div>
        </footer>
      </main>
    </div>
  );
}