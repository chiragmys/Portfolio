import { Award } from 'lucide-react';
import { skills, certifications } from '../../data/mock';
import Reveal from '../Reveal';

export default function Skills() {
  return (
    <section id="skills" className="py-28">
      <Reveal>
        <div className="inline-flex items-center gap-2 h-8 px-3 rounded-full border border-white/15 text-[11px] tracking-[0.2em] text-white/70">
          <Award size={13} /> MY SKILLS
        </div>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="font-serif-display mt-8 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-white max-w-3xl">
          My <span className="text-emerald-400">Advantages</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {skills.map((skill, i) => (
          <Reveal key={skill.name} delay={((i + 1) % 4) + 1}>
            <div className="rounded-2xl border border-white/10 bg-[#0f0f11] p-5 hover:border-emerald-500/40 transition-colors">
              <div className="relative h-24 w-24 mx-auto">
                <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
                  <circle
                    cx="50" cy="50" r="42" fill="none"
                    stroke="#10b981" strokeWidth="6" strokeLinecap="round"
                    strokeDasharray={`${(skill.level / 100) * 264} 264`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-white font-medium text-sm">
                  {skill.level}%
                </div>
              </div>
              <div className="mt-4 text-center text-white/85 text-sm">{skill.name}</div>
            </div>
          </Reveal>
        ))}
      </div>

      {certifications?.length > 0 && (
        <div className="mt-14">
          <Reveal>
            <h3 className="font-serif-display text-2xl text-white">Certifications</h3>
          </Reveal>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            {certifications.map((c, i) => (
              <Reveal key={i} delay={((i + 1) % 4) + 1}>
                <div className="rounded-xl border border-white/10 bg-[#0f0f11] p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <Award size={18} />
                  </div>
                  <div>
                    <div className="text-white text-[15px]">{c.title}</div>
                    <div className="text-white/50 text-xs mt-1">{c.issuer} · {c.year}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}