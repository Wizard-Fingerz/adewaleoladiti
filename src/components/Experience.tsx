import { experience, additionalExperience } from '@/data/experience';
import ScrollReveal from './ScrollReveal';

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-5 sm:px-8 md:px-16 lg:px-24 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-20 flex flex-col items-center text-center">
            <div className="section-label mb-4">Career</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0B0B0B] tracking-tight">
              Experience
            </h2>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-[#C8A85A] via-[#C8A85A]/30 to-transparent" />

          <div className="space-y-0">
            {experience.map((exp, index) => (
              <ScrollReveal key={index} delay={index * 80}>
                <div className="relative pl-16 pb-14 last:pb-0 group timeline-item">
                  {/* Timeline dot */}
                  <div className="absolute left-[14px] top-1 timeline-dot" />

                  {/* Date */}
                  {exp.startDate !== '[CONTENT NEEDED]' && (
                    <div className="mb-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C8A85A] uppercase tracking-[0.12em]">
                        {exp.startDate}
                        {exp.endDate && exp.endDate !== '[CONTENT NEEDED]' && ` – ${exp.endDate}`}
                      </span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 rounded-2xl border border-[#0B0B0B]/[0.06] bg-[#F7F5F0]/50 hover:bg-white hover:border-[#0B0B0B]/10 hover:shadow-md transition-all duration-300 card-hover">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-[#0B0B0B] tracking-tight mb-1">{exp.role}</h3>
                        <p className="text-[#8A8A8A] text-sm">
                          {exp.organization}
                          {exp.location && ` · ${exp.location}`}
                        </p>
                      </div>
                      <div className="mt-1 sm:mt-0 self-start">
                        <span className="inline-block text-xs font-semibold text-[#8A8A8A] uppercase tracking-[0.1em] px-3 py-1 bg-[#0B0B0B]/[0.04] rounded-full">
                          {exp.category}
                        </span>
                      </div>
                    </div>

                    <p className="text-[#0B0B0B]/65 leading-relaxed mb-5">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Additional Experience */}
        <ScrollReveal delay={100}>
          <div className="mt-24 pt-16 border-t border-[#0B0B0B]/[0.07] flex flex-col items-center text-center">
            <div className="section-label mb-6">Additional</div>
            <h3 className="text-2xl font-semibold text-[#0B0B0B] mb-10 tracking-tight">Other Roles & Projects</h3>
            <div className="grid md:grid-cols-2 gap-5">
              {additionalExperience.map((exp, index) => (
                <div
                  key={index}
                  className="card-hover gradient-border p-6 bg-white rounded-2xl border border-[#0B0B0B]/[0.07] hover:border-[#C8A85A]/20"
                >
                  <h4 className="text-base font-semibold text-[#0B0B0B] mb-1">{exp.title}</h4>
                  <p className="text-[#8A8A8A] text-sm mb-3">{exp.organization}</p>
                  <p className="text-[#0B0B0B]/65 text-sm leading-relaxed mb-4">{exp.description}</p>

                  {exp.dates && exp.dates !== '[CONTENT NEEDED]' && (
                    <p className="text-xs text-[#C8A85A] font-medium">{exp.dates}</p>
                  )}

                  {exp.institutions && (
                    <div className="mt-4 pt-4 border-t border-[#0B0B0B]/[0.06]">
                      <p className="text-xs text-[#8A8A8A] uppercase tracking-[0.1em] font-semibold mb-2">Institutions</p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.institutions.map((inst) => (
                          <span key={inst} className="text-xs px-2.5 py-1 bg-[#0B0B0B]/[0.04] text-[#0B0B0B]/60 rounded-full">{inst}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
