import { ventures } from '@/data/ventures';
import ScrollReveal from './ScrollReveal';

export default function Ventures() {
  return (
    <section id="ventures" className="py-32 px-5 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden" style={{ background: '#0E0D0B' }}>
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10 rounded-full"
          style={{ background: 'radial-gradient(circle, #C8A85A, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-5 rounded-full"
          style={{ background: 'radial-gradient(circle, #C8A85A, transparent 70%)' }} />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-20 flex flex-col items-center text-center">
            <div className="section-label mb-4" style={{ color: '#C8A85A' }}>
              Building Forward
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F7F5F0] tracking-tight mb-6">
              Ventures
            </h2>
            <p className="text-[#F7F5F0]/45 text-lg max-w-xl font-light leading-relaxed">
              Exploring how organizations themselves should work — not just the software they use.
            </p>
          </div>
        </ScrollReveal>

        {/* Ventures grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {ventures.map((venture, index) => (
            <ScrollReveal key={venture.name} delay={index * 100}>
              <div className="card-hover-dark h-full rounded-2xl border border-[#F7F5F0]/[0.07] p-8 relative overflow-hidden"
                style={{ background: 'rgba(247,245,240,0.03)' }}>

                {/* Status badge */}
                <div className="flex items-center justify-between mb-8">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C8A85A] uppercase tracking-[0.12em]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8A85A] animate-pulse" />
                    {venture.status}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-3xl font-semibold text-[#F7F5F0] mb-3 tracking-tight">{venture.name}</h3>
                <p className="text-[#F7F5F0]/50 leading-relaxed mb-8">{venture.description}</p>

                {/* Thesis */}
                <div className="mb-8 pl-4 border-l-2 border-[#C8A85A]/40">
                  <p className="text-xs font-semibold text-[#C8A85A] uppercase tracking-[0.1em] mb-2">Thesis</p>
                  <p className="text-[#F7F5F0]/75 italic leading-relaxed text-lg">"{venture.thesis}"</p>
                </div>

                {/* Areas */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-[#F7F5F0]/30 uppercase tracking-[0.1em] mb-3">Areas of Exploration</p>
                  <div className="flex flex-wrap gap-2">
                    {venture.areas.map((area) => (
                      <span key={area} className="tag-dark">{area}</span>
                    ))}
                  </div>
                </div>

                {/* Role */}
                <div className="pt-6 border-t border-[#F7F5F0]/[0.06]">
                  <p className="text-xs font-semibold text-[#F7F5F0]/30 uppercase tracking-[0.1em] mb-1">Role</p>
                  <p className="text-[#F7F5F0]/80 font-semibold">{venture.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Context note */}
        <ScrollReveal delay={200}>
          <div className="p-6 rounded-xl border border-[#F7F5F0]/[0.06] bg-[#F7F5F0]/[0.02]">
            <p className="text-[#F7F5F0]/35 text-sm leading-relaxed text-center">
              These ventures are in concept and planning phases — reflecting my transition from building software for organizations to thinking about how organizations themselves should work.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
