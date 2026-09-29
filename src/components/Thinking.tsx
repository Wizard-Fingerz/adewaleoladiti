import { philosophyStatements } from '@/data/philosophy';
import ScrollReveal from './ScrollReveal';

export default function Thinking() {
  return (
    <section id="thinking" className="py-32 px-5 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden dark-noise">
      {/* Decorative orb */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #C8A85A, transparent 60%)' }} />

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-24 flex flex-col items-center text-center">
            <div className="section-label mb-4" style={{ color: '#C8A85A' }}>
              Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F7F5F0] tracking-tight">
              How I Think
            </h2>
          </div>
        </ScrollReveal>

        {/* Philosophy statements */}
        <div className="space-y-20">
          {philosophyStatements.map((item, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="relative">
                {/* Number */}
                <div className="absolute -left-8 top-0 text-6xl font-bold text-[#F7F5F0]/[0.03] leading-none select-none" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 mt-3">
                    <div className="w-px h-16 bg-gradient-to-b from-[#C8A85A] to-transparent" />
                  </div>
                  <div>
                    <blockquote className="text-2xl md:text-3xl text-[#F7F5F0]/90 leading-relaxed mb-4 font-light">
                      "{item.statement}"
                    </blockquote>
                    <p className="text-[#F7F5F0]/40 text-base leading-relaxed max-w-2xl">
                      {item.context}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Closing statement */}
        <ScrollReveal delay={200}>
          <div className="mt-28 pt-16 border-t border-[#F7F5F0]/[0.07]">
            <div className="text-center">
              <p className="text-3xl md:text-4xl text-[#F7F5F0]/85 leading-relaxed font-light mb-6 tracking-tight">
                I don't just build software.
                <br />
                <span className="text-gradient font-semibold">I build systems that help ideas work.</span>
              </p>
              <p className="text-[#F7F5F0]/35 text-base tracking-wide">
                Software engineer · MBA candidate · Product builder · Systems thinker · Entrepreneur
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
