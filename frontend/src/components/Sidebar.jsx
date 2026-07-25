import { Mail, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { profile } from '../data/mock';

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex fixed left-6 top-6 bottom-6 w-[320px] rounded-2xl border border-white/10 bg-[#0d0d0f] flex-col p-6 z-30 shadow-[0_0_60px_-30px_rgba(16,185,129,0.35)]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full border border-emerald-500/60 flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-emerald-400" />
          </div>
          <div className="text-white font-semibold tracking-tight text-lg">{profile.logo}</div>
        </div>
        <div className="text-[11px] uppercase tracking-widest text-white/60 text-right leading-tight">
          Python<br />Developer
        </div>
      </div>

      <div className="mt-6 relative rounded-xl overflow-hidden aspect-[4/5] border border-white/5 bg-gradient-to-br from-emerald-500/10 via-transparent to-emerald-500/5">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-full h-full object-cover grayscale contrast-105"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f] via-transparent to-transparent" />
      </div>

      <div className="mt-6 text-center">
        <div className="text-white/90 text-sm font-medium">{profile.email}</div>
        <div className="text-white/60 text-sm mt-1">Based in {profile.location}</div>
      </div>

      <div className="my-5 h-px bg-white/10" />
      <div className="text-center text-[11px] text-white/40">© {new Date().getFullYear()} {profile.copyright}</div>

      <div className="mt-5 flex items-center justify-center gap-3">
        {[
          { Icon: Mail, href: profile.email ? `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}` : null, label: 'Email' },
          { Icon: Instagram, href: profile.instagram || null, label: 'Instagram' },
          { Icon: Github, href: profile.github || null, label: 'GitHub' },
          { Icon: Linkedin, href: profile.linkedin || null, label: 'LinkedIn' },
        ].filter((s) => s.href).map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="h-9 w-9 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
          >
            <Icon size={15} />
          </a>
        ))}
      </div>

      <a
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
        target="_blank"
        rel="noreferrer"
        className="mt-6 group relative inline-flex items-center justify-center gap-2 h-12 rounded-full bg-emerald-400 hover:bg-emerald-300 text-[#08130f] font-semibold text-sm transition-colors"
      >
        <Mail size={16} />
        LET'S CONNECT
      </a>
    </aside>
  );
}