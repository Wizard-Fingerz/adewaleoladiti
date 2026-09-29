'use client';

import { useState } from 'react';
import { contactCategories, personalInfo } from '@/data/contact';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: typeof contactCategories[0]) => {
    setSelectedCategory(category.id);
    const subject = encodeURIComponent(category.emailSubject);
    const body = encodeURIComponent(`I'm interested in: ${category.title}\n\n`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const categoryIcons: Record<string, string> = {
    'freelance': '◆',
    'fulltime': '◇',
    'collaboration': '◈',
    'consulting': '⬡',
  };

  return (
    <section id="contact" className="py-32 px-5 sm:px-8 md:px-16 lg:px-24 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A85A]/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-[0.03] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(circle, #C8A85A, transparent)' }} />

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-20 flex flex-col items-center text-center">
            <div className="section-label mb-4">Let's Talk</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0B0B0B] tracking-tight mb-6 max-w-2xl">
              Have a Problem
              <br />
              <span className="text-gradient italic font-light">Worth Solving?</span>
            </h2>
            <p className="text-[#8A8A8A] text-lg max-w-md font-light leading-relaxed">
              Let's work together to build systems that make ideas work.
            </p>
          </div>
        </ScrollReveal>

        {/* Contact categories */}
        <ScrollReveal delay={80} stagger>
          <div className="grid sm:grid-cols-2 gap-4 mb-20">
            {contactCategories.map((category) => {
              const icon = categoryIcons[category.id] || '◆';
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category)}
                  className={`card-hover gradient-border p-7 bg-[#F7F5F0]/60 rounded-2xl border text-left group transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'border-[#C8A85A]/50 bg-[#C8A85A]/[0.04]'
                      : 'border-[#0B0B0B]/[0.07] hover:border-[#C8A85A]/30 hover:bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-2xl text-[#C8A85A]/60 group-hover:text-[#C8A85A] transition-colors duration-300">
                      {icon}
                    </span>
                    <svg
                      className="w-4 h-4 text-[#0B0B0B]/20 group-hover:text-[#C8A85A] transition-all duration-300 -translate-y-0.5 translate-x-0.5 group-hover:translate-x-1 group-hover:-translate-y-1"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                  <h3 className="text-base font-semibold text-[#0B0B0B] mb-2 group-hover:text-[#C8A85A] transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-[#8A8A8A] text-sm leading-relaxed">{category.description}</p>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Personal info grid */}
        <ScrollReveal delay={160}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-[#0B0B0B]/[0.06]">
            <div>
              <div className="section-label mb-4">Contact</div>
              <div className="space-y-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="block text-[#0B0B0B]/70 hover:text-[#C8A85A] transition-colors duration-300 text-sm break-all"
                >
                  {personalInfo.email}
                </a>
                {personalInfo.whatsapp && (
                  <a
                    href={`https://wa.me/${personalInfo.whatsapp.replace(/\D/g, '')}`}
                    target="_blank" rel="noopener noreferrer"
                    className="block text-[#0B0B0B]/70 hover:text-[#C8A85A] transition-colors duration-300 text-sm"
                  >
                    WhatsApp: {personalInfo.whatsapp} ↗
                  </a>
                )}
              </div>
            </div>

            <div>
              <div className="section-label mb-4">Connect</div>
              <div className="space-y-2">
                {personalInfo.github !== '[CONTENT NEEDED]' && (
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                    className="block text-[#0B0B0B]/70 hover:text-[#C8A85A] transition-colors duration-300 text-sm">
                    GitHub ↗
                  </a>
                )}
                {personalInfo.linkedin !== '[CONTENT NEEDED]' && (
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                    className="block text-[#0B0B0B]/70 hover:text-[#C8A85A] transition-colors duration-300 text-sm">
                    LinkedIn ↗
                  </a>
                )}
              </div>
            </div>

            <div>
              <div className="section-label mb-4">Location</div>
              <p className="text-[#0B0B0B]/70 text-sm">{personalInfo.location}</p>
            </div>

            <div>
              <div className="section-label mb-4">Availability</div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                <p className="text-[#0B0B0B]/70 text-sm">{personalInfo.availability}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
