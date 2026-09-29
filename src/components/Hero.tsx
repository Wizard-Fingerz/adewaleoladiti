'use client';

import { useEffect, useState } from 'react';
import CVDownload from './CVDownload';

const flowItems = ['Problem', 'Strategy', 'Product', 'Technology', 'Operations', 'Impact'];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [activeFlow, setActiveFlow] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveFlow(prev => (prev + 1) % flowItems.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col px-5 sm:px-8 md:px-16 lg:px-24 pt-24 md:pt-15 pb-16 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Warm gradient orbs */}
        <div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(200,168,90,0.12) 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(200,168,90,0.10) 0%, transparent 70%)' }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(11,11,11,1) 1px, transparent 1px), linear-gradient(90deg, rgba(11,11,11,1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className={`max-w-5xl mx-auto w-full mt-8 md:mt-12 mb-auto flex flex-col items-center transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        {/* System flow pill */}
        <div className="flex justify-center w-full mb-12 md:mb-14" aria-hidden="true">
          <div className="flex flex-wrap justify-center items-center gap-y-2 bg-white border border-black/[0.06] rounded-[2rem] px-2 py-1.5 shadow-sm max-w-full">
            {flowItems.map((item, i) => (
              <span key={item} className="inline-flex items-center">
                <span
                  className="px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-500 whitespace-nowrap"
                  style={{
                    background: activeFlow === i ? 'linear-gradient(135deg, #C8A85A, #A8863A)' : 'transparent',
                    color: activeFlow === i ? '#fff' : 'rgba(11,11,11,0.4)',
                    transform: activeFlow === i ? 'scale(1.05)' : 'scale(1)',
                  }}
                >
                  {item}
                </span>
                {i < flowItems.length - 1 && (
                  <span className="text-[#C8A85A]/40 text-xs mx-0.5 md:mx-1">→</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-8">
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-semibold text-[#0B0B0B] leading-[1.1] tracking-tight max-w-4xl mx-auto"
            style={{ animationDelay: '0.2s' }}
          >
            I build{' '}
            <span className="relative inline-block">
              <span className="text-gradient">technology</span>
            </span>{' '}
            and business
            <br className="hidden md:block" />
            <span className="italic font-light"> systems</span>{' '}
            that make ideas work.
          </h1>
        </div>

        {/* Supporting copy */}
        <p className="text-center text-lg md:text-xl text-[#0B0B0B]/55 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          I'm <span className="text-[#0B0B0B]/80 font-medium">Adewale Oladiti</span> — software engineer,
          MBA candidate, and technology-minded business builder from Nigeria.
          I work across engineering, product, and business systems.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a href="#work" className="btn-primary group">
            <span>View My Work</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#contact" className="btn-outline group">
            <span>Let's Work Together</span>
          </a>
        </div>

        {/* CV download picker */}
        <div className="flex justify-center mb-16">
          <CVDownload />
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2 animate-bounce mt-auto" aria-hidden="true">
          <span className="text-xs text-[#8A8A8A]/60 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#C8A85A]/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
