import { User } from 'lucide-react';
import { about } from '../../data/mock';
import Reveal from '../Reveal';

export default function About() {
  return (
    <section id="about" className="py-28">
      <Reveal>
        <div className="inline-flex items-center gap-2 h-8 px-3 rounded-full border border-white/15 text-[11px] tracking-[0.2em] text-white/70">
          <User size={13} /> ABOUT
        </div>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="font-serif-display mt-8 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-white max-w-4xl">
          {about.heading} <span className="text-emerald-400">{about.headingAccent}</span>
        </h2>
      </Reveal>

      <div className="mt-10 space-y-6 max-w-3xl">
        {about.paragraphs.map((p, i) => (
          <Reveal key={i} delay={((i + 1) % 4) + 1}>
            <p className="text-white/70 leading-relaxed text-[15px]" dangerouslySetInnerHTML={{ __html: p }} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}