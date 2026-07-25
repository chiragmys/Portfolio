import { LayoutList, ArrowUpRight } from 'lucide-react';
import { services } from '../../data/mock';
import Reveal from '../Reveal';

export default function Services() {
  return (
    <section id="services" className="py-28">
      <Reveal>
        <div className="inline-flex items-center gap-2 h-8 px-3 rounded-full border border-white/15 text-[11px] tracking-[0.2em] text-white/70">
          <LayoutList size={13} /> SERVICES
        </div>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="font-serif-display mt-8 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-white max-w-3xl">
          My <span className="text-emerald-400">Specializations</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid sm:grid-cols-2 gap-5">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={((i + 1) % 4) + 1}>
            <div className="group relative rounded-2xl border border-white/10 bg-[#0f0f11] p-6 hover:border-emerald-500/40 transition-colors overflow-hidden">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-500/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-serif-display text-2xl text-white leading-tight">{s.title}</h3>
                <div className="h-9 w-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 group-hover:border-emerald-500/50 group-hover:text-emerald-400 transition-colors">
                  <ArrowUpRight size={16} />
                </div>
              </div>
              <p className="mt-3 text-white/60 text-[14px] leading-relaxed">{s.desc}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-[10px] tracking-widest text-emerald-400/90">{s.badge?.toUpperCase()}</span>
                <span className="h-px w-16 bg-white/10 group-hover:bg-emerald-500/40 transition-colors" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}