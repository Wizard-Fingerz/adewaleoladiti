'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';
import ScrollReveal from './ScrollReveal';

const featuredProjects = projects.filter(p => p.projectType === 'featured');

const categoryColors: Record<string, string> = {
  'Healthcare': 'bg-emerald-50 text-emerald-700 border-emerald-100',
  'Education': 'bg-blue-50 text-blue-700 border-blue-100',
  'Travel': 'bg-purple-50 text-purple-700 border-purple-100',
  'Fintech': 'bg-amber-50 text-amber-700 border-amber-100',
  'E-commerce': 'bg-pink-50 text-pink-700 border-pink-100',
};

export default function FeaturedProjects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleProject = (slug: string) => {
    setExpandedProject(expandedProject === slug ? null : slug);
  };

  return (
    <section id="work" className="py-32 px-5 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden" style={{ background: '#F4F2EC' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(11,11,11,0.08) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="section-label mb-4">Selected Work</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0B0B0B] tracking-tight mb-4">
              Featured Projects
            </h2>
            <p className="text-[#8A8A8A] text-lg max-w-2xl">
              Production systems built across healthcare, education, travel, and fintech.
            </p>
          </div>
        </ScrollReveal>

        {/* Projects */}
        <div className="space-y-5">
          {featuredProjects.map((project, index) => {
            const isExpanded = expandedProject === project.slug;
            const colorClass = categoryColors[project.category] || 'bg-gray-50 text-gray-700 border-gray-100';

            return (
              <ScrollReveal key={project.slug} delay={index * 80}>
                <div
                  className={`bg-white rounded-2xl overflow-hidden border transition-all duration-500 ${
                    isExpanded
                      ? 'border-[#C8A85A]/40 shadow-xl shadow-[#C8A85A]/5'
                      : 'border-[#0B0B0B]/[0.07] hover:border-[#0B0B0B]/20 hover:shadow-lg hover:shadow-[#0B0B0B]/[0.05]'
                  }`}
                >
                  {/* Card header */}
                  <button
                    onClick={() => toggleProject(project.slug)}
                    className="w-full text-left p-8 md:p-10 group"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1">
                        {/* Meta row */}
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${colorClass}`}>
                            {project.category}
                          </span>
                          <span className="text-xs text-[#8A8A8A]">·</span>
                          <span className="text-xs text-[#8A8A8A] font-medium">{project.status}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-semibold text-[#0B0B0B] mb-3 tracking-tight group-hover:text-[#C8A85A] transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-[#0B0B0B]/60 leading-relaxed max-w-2xl">
                          {project.description}
                        </p>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-2 mt-6">
                          {project.technologies.slice(0, 5).map((tech) => (
                            <span key={tech} className="tag">{tech}</span>
                          ))}
                          {project.technologies.length > 5 && (
                            <span className="tag">+{project.technologies.length - 5} more</span>
                          )}
                        </div>
                      </div>

                      {/* Expand toggle */}
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full border transition-all duration-300 flex items-center justify-center ${
                        isExpanded
                          ? 'bg-[#C8A85A] border-[#C8A85A] text-white'
                          : 'border-[#0B0B0B]/15 text-[#0B0B0B]/40 group-hover:border-[#C8A85A]/50 group-hover:text-[#C8A85A]'
                      }`}>
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>

                  {/* Expanded case study */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="border-t border-[#0B0B0B]/[0.06] mx-8 md:mx-10" />
                    <div className="p-8 md:p-10 pt-8" style={{ background: 'rgba(247,245,240,0.5)' }}>
                      <div className="grid md:grid-cols-2 gap-10">
                        {/* Left */}
                        <div className="space-y-8">
                          <div>
                            <div className="section-label mb-3">Context</div>
                            <p className="text-[#0B0B0B]/70 leading-relaxed">{project.problem}</p>
                          </div>
                          <div>
                            <div className="section-label mb-3">My Role</div>
                            <p className="text-[#0B0B0B] font-semibold">{project.role}</p>
                          </div>
                          <div>
                            <div className="section-label mb-4">Responsibilities</div>
                            <ul className="space-y-2.5">
                              {project.responsibilities.map((resp) => (
                                <li key={resp} className="flex items-start gap-3 text-[#0B0B0B]/70">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C8A85A] flex-shrink-0" />
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Right */}
                        <div className="space-y-8">
                          <div>
                            <div className="section-label mb-3">Architecture</div>
                            <p className="text-[#0B0B0B]/70 leading-relaxed">{project.architecture}</p>
                          </div>
                          <div>
                            <div className="section-label mb-4">Key Features</div>
                            <ul className="space-y-2.5">
                              {project.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-3 text-[#0B0B0B]/70">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C8A85A] flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          {project.outcome && (
                            <div className="p-5 rounded-xl" style={{ background: 'rgba(200,168,90,0.08)', border: '1px solid rgba(200,168,90,0.15)' }}>
                              <div className="section-label mb-3">Outcome</div>
                              <p className="text-[#0B0B0B]/80 leading-relaxed">{project.outcome}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
