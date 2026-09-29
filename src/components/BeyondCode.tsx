import ScrollReveal from './ScrollReveal';

export default function BeyondCode() {
  const interestAreas = [
    'Entrepreneurship',
    'Operations',
    'Organizational Systems',
    'Strategy',
    'Human Resources',
    'Business Process Improvement',
    'Innovation',
    'Technology Adoption',
    'African Business Systems',
  ];

  return (
    <section className="py-32 px-5 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden" style={{ background: '#F4F2EC' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="section-label mb-4">Business Dimension</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0B0B0B] tracking-tight">
              Beyond Code
            </h2>
          </div>
        </ScrollReveal>

        {/* Main statement */}
        <ScrollReveal delay={80}>
          <div className="mb-16 relative">
            <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#C8A85A] to-transparent" />
            <p className="text-3xl md:text-4xl text-[#0B0B0B] leading-relaxed font-light pl-6 text-center md:text-left">
              Software taught me{' '}
              <span className="font-semibold text-[#0B0B0B]">how systems are built.</span>
              <br />
              Business is teaching me{' '}
              <span className="text-gradient font-semibold">why systems succeed or fail.</span>
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10">
          {/* MBA card */}
          <ScrollReveal delay={120}>
            <div className="card-hover p-8 bg-white rounded-2xl border border-[#0B0B0B]/[0.07] shadow-sm h-full">
              <div className="section-label mb-6">Current Education</div>
              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#0B0B0B] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C8A85A] font-bold text-lg">MBA</span>
                </div>
                <div>
                  <p className="text-[#0B0B0B] font-semibold text-xl">University of Ibadan</p>
                  <p className="text-[#C8A85A] text-sm font-medium mt-0.5">Ongoing</p>
                </div>
              </div>
              <p className="text-[#0B0B0B]/60 leading-relaxed text-sm">
                My MBA studies complement my engineering background by providing the business context needed to understand how technology decisions impact organizational success.
              </p>
            </div>
          </ScrollReveal>

          {/* Interest areas */}
          <ScrollReveal delay={160}>
            <div className="h-full">
              <div className="section-label mb-6">Areas of Interest</div>
              <div className="flex flex-wrap gap-2">
                {interestAreas.map((area, i) => (
                  <span
                    key={area}
                    className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 cursor-default hover:border-[#C8A85A]/50 hover:bg-[#C8A85A]/5 hover:text-[#A8863A]"
                    style={{
                      background: 'white',
                      borderColor: 'rgba(11,11,11,0.08)',
                      color: 'rgba(11,11,11,0.65)',
                    }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
