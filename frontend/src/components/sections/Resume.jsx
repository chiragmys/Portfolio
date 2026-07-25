import { Briefcase } from 'lucide-react';
import { timeline } from '../../data/mock';
import Reveal from '../Reveal';

const tagColor = {
  PROJECT: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10',
  LEADERSHIP: 'text-amber-300 border-amber-500/40 bg-amber-500/10',
  EDUCATION: 'text-sky-300 border-sky-500/40 bg-sky-500/10',
};

export default function Resume() {
  return (
    <section id="resume" className="py-28">
      <Reveal>
        <div className="inline-flex items-center gap-2 h-8 px-3 rounded-full border border-white/15 text-[11px] tracking-[0.2em] text-white/70">
          <Briefcase size={13} /> RESUME
        </div>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="font-serif-display mt-8 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-white max-w-3xl">
          Education & <span className="text-emerald-400">Experience</span>
        </h2>
      </Reveal>

      <div className="mt-14 relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10" />

        <div className="space-y-14">
          {timeline.map((item, i) => (
            <Reveal key={i} delay={((i + 1) % 4) + 1}>
              <div className="relative pl-10">
                <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-emerald-400 border-2 border-[#0a0a0b] pulse-green" />
                <div className="flex flex-wrap items-center gap-3">
                  <div className="text-white/60 text-sm">{item.date}</div>
                  <span className={`text-[10px] tracking-widest px-2 py-1 rounded-full border ${tagColor[item.tag] || 'text-white/70 border-white/20 bg-white/5'}`}>{item.tag}</span>
                </div>
                <h3 className="font-serif-display text-2xl sm:text-3xl text-white mt-2">{item.title}</h3>
                <div className="text-white/50 text-sm mt-1">{item.org}</div>
                <ul className="mt-4 space-y-2 text-white/70 text-[14.5px] leading-relaxed">
                  {item.points.map((p, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 rounded-full bg-emerald-400/80 flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}