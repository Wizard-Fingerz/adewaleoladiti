import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
    <section id="about" className="py-32 px-5 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #C8A85A 0%, transparent 70%)' }} />

      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <ScrollReveal>
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="section-label mb-4">About</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0B0B0B] tracking-tight leading-[1.05] max-w-2xl">
              Engineer who thinks{' '}
              <span className="text-gradient italic font-light">like a builder</span>,<br />
              operates like a strategist.
            </h2>
          </div>
        </ScrollReveal>

        {/* Main narrative — 2 col split */}
        <ScrollReveal delay={100}>
          <div className="grid md:grid-cols-5 gap-16 mb-20">
            <div className="md:col-span-3 space-y-6">
              <p className="text-lg text-[#0B0B0B]/65 leading-relaxed">
                I started from software engineering and have worked across real production systems in healthcare, education, travel and fintech. My engineering experience includes backend architecture, frontend development, API design, database design, authentication, payments, deployment and cloud infrastructure.
              </p>
              <p className="text-lg text-[#0B0B0B]/65 leading-relaxed">
                But my interests have expanded beyond writing code. I am pursuing an MBA and increasingly work at the intersection of technology, operations, product thinking and business strategy.
              </p>
              <p className="text-lg text-[#0B0B0B]/65 leading-relaxed">
                I am particularly interested in why organizations fail even when they have technology, and how African businesses can use technology without simply copying Western SaaS models.
              </p>
            </div>

            <div className="md:col-span-2 space-y-4">
              {/* Education card */}
              <div className="card-hover gradient-border p-6 bg-white rounded-2xl border border-[#0B0B0B]/[0.07] shadow-sm">
                <div className="section-label mb-4">Education</div>
                <div className="space-y-4">
                  <div>
                    <p className="text-[#0B0B0B] font-semibold text-base">B.Sc. Software Engineering</p>
                    <p className="text-[#8A8A8A] text-sm mt-0.5">First Technical University</p>
                  </div>
                  <div className="w-full h-px bg-[#0B0B0B]/[0.06]" />
                  <div>
                    <p className="text-[#0B0B0B] font-semibold text-base">MBA <span className="text-[#C8A85A] text-xs font-normal">(Ongoing)</span></p>
                    <p className="text-[#8A8A8A] text-sm mt-0.5">University of Ibadan</p>
                  </div>
                </div>
              </div>

              {/* Location card */}
              <div className="card-hover gradient-border p-6 bg-white rounded-2xl border border-[#0B0B0B]/[0.07] shadow-sm">
                <div className="section-label mb-4">Location</div>
                <p className="text-[#0B0B0B] font-semibold text-base">Ibadan, Nigeria</p>
                <p className="text-[#8A8A8A] text-sm mt-1">Open to remote & international work</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Questions I Explore */}
        <ScrollReveal delay={150}>
          <div className="border-t border-[#0B0B0B]/[0.07] pt-16">
            <div className="section-label mb-10">Questions I Explore</div>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
              {[
                'Why do organizations fail even when they have technology?',
                'How should technology fit into an organization\'s actual workflow?',
                'How can fragmented information become one working system?',
                'How can African businesses use technology without copying Western SaaS models?',
                'How do you turn an idea into an operating system for a real organization?',
                'What makes a product truly valuable to its end users in emerging markets?',
              ].map((question, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 group py-2"
                >
                  <span className="mt-1.5 w-5 h-5 rounded-full bg-[#C8A85A]/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#C8A85A]/20">
                    <span className="text-[#C8A85A] text-xs">→</span>
                  </span>
                  <span className="text-[#0B0B0B]/70 leading-relaxed group-hover:text-[#0B0B0B] transition-colors duration-300">
                    {question}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
