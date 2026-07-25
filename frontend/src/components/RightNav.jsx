import { Home, User, Briefcase, LayoutList, Award } from 'lucide-react';
import { useEffect, useState } from 'react';

const items = [
  { id: 'home', Icon: Home, label: 'Home' },
  { id: 'about', Icon: User, label: 'About' },
  { id: 'resume', Icon: Briefcase, label: 'Resume' },
  { id: 'services', Icon: LayoutList, label: 'Services' },
  { id: 'skills', Icon: Award, label: 'Skills' },
];

export default function RightNav() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observers = [];
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && setActive(id)),
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-2 rounded-full border border-white/10 bg-[#0d0d0f]/80 backdrop-blur px-2 py-3">
      {items.map(({ id, Icon, label }) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={label}
          title={label}
          className={`relative h-10 w-10 flex items-center justify-center rounded-full transition-colors group ${
            active === id ? 'bg-emerald-400 text-[#08130f]' : 'text-white/60 hover:text-white'
          }`}
        >
          <Icon size={16} />
          <span className="pointer-events-none absolute right-full mr-3 px-2 py-1 rounded-md bg-white/10 text-white text-[11px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {label}
          </span>
        </a>
      ))}
    </nav>
  );
}