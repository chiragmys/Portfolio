import { Home } from 'lucide-react';
import { profile } from '../../data/mock';
import Reveal from '../Reveal';

export default function Hero() {
  return (
    <section id="home" className="min-h-[100vh] flex flex-col justify-center py-24">
      <Reveal>
        <div className="inline-flex items-center gap-2 h-8 px-3 rounded-full border border-white/15 text-[11px] tracking-[0.2em] text-white/70">
          <Home size={13} /> INTRODUCE
        </div>
      </Reveal>

      <Reveal delay={1}>
        <h1 className="font-serif-display mt-8 text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-white max-w-4xl">
          Hi, I'm <span className="text-emerald-400">{profile.heroName}</span>, {profile.headlineTitle}
        </h1>
      </Reveal>

      <Reveal delay={2}>
        <p className="mt-8 text-white/70 max-w-xl text-[15px] leading-relaxed">
          {profile.heroTagline}{' '}
          Currently focused on building projects around <span className="text-white font-medium">{profile.heroHighlight}</span> and beyond.
        </p>
      </Reveal>

      <div className="mt-14 flex flex-wrap items-end gap-14">
        {profile.stats.map((s, i) => (
          <Reveal key={s.label} delay={((i + 1) % 4) + 1}>
            <div>
              <div className="font-serif-display text-emerald-400 text-6xl lg:text-7xl leading-none">
                {s.value}
              </div>
              <div className="mt-3 text-white/60 text-[11px] tracking-[0.2em] uppercase">
                {s.suffix && <>{s.suffix}<br /></>}{s.label}
              </div>
            </div>
          </Reveal>
        ))}

        <Reveal delay={3}>
          <a href="#services" className="relative ml-auto hidden sm:flex h-32 w-32 items-center justify-center">
            <svg viewBox="0 0 200 200" className="absolute inset-0 spin-slow">
              <defs>
                <path id="circlePath" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
              </defs>
              <text fill="#e7e7ea" style={{ fontSize: '15px', letterSpacing: '4px' }}>
                <textPath href="#circlePath">My Specializations • My Specializations •</textPath>
              </text>
            </svg>
            <div className="h-14 w-14 rounded-full border border-white/20 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}