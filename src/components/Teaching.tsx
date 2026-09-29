import ScrollReveal from './ScrollReveal';

export default function Teaching() {
  const institutions = [
    { name: 'AppClick ICT Academy', role: 'Python & Computer Science Instructor' },
    { name: 'Erudite Group of Schools', role: 'Python & Computer Science Instructor' },
    { name: 'Great Messiah International School', role: 'Python & Computer Science Instructor' },
  ];

  const teachingAreas = [
    'Python Programming',
    'Computer Science Fundamentals',
    'Programming Fundamentals',
    'Software Development',
    'Technical Mentoring',
    'Curriculum Development',
  ];

  return (
    <section className="py-32 px-5 sm:px-8 md:px-16 lg:px-24 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-[0.03] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C8A85A, transparent)' }} />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-20 flex flex-col items-center text-center">
            <div className="section-label mb-4">Knowledge Sharing</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0B0B0B] tracking-tight mb-6">
              Teaching & Mentoring
            </h2>
            <p className="text-[#8A8A8A] text-lg max-w-xl font-light leading-relaxed">
              I believe in sharing knowledge and helping others develop their technical skills.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Areas */}
          <ScrollReveal delay={80}>
            <div>
              <div className="section-label mb-8">Areas of Instruction</div>
              <div className="grid grid-cols-2 gap-3">
                {teachingAreas.map((area, i) => (
                  <div
                    key={area}
                    className="card-hover p-4 rounded-xl border border-[#0B0B0B]/[0.06] bg-[#F7F5F0]/60 group text-center"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <p className="text-[#0B0B0B]/75 font-medium text-sm group-hover:text-[#C8A85A] transition-colors duration-300">{area}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Institutions */}
          <ScrollReveal delay={160}>
            <div>
              <div className="section-label mb-8">Institutions</div>
              <div className="space-y-4">
                {institutions.map((inst, i) => (
                  <div
                    key={inst.name}
                    className="card-hover gradient-border p-5 rounded-xl bg-white border border-[#0B0B0B]/[0.06] flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#C8A85A]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#C8A85A] text-sm font-bold">{String.fromCharCode(65 + i)}</span>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-[#0B0B0B] mb-0.5">{inst.name}</h4>
                      <p className="text-[#8A8A8A] text-sm">{inst.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Note */}
              <div className="mt-6 p-5 rounded-xl bg-[#C8A85A]/[0.06] border border-[#C8A85A]/[0.15]">
                <p className="text-[#0B0B0B]/65 text-sm leading-relaxed">
                  I have designed and delivered structured Python and Computer Science curricula across these institutions, helping students develop foundational programming skills and computational thinking.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
