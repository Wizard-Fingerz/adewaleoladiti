'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Experience', href: '#experience' },
  { name: 'Capabilities', href: '#capabilities' },
  { name: 'Ventures', href: '#ventures' },
  { name: 'Thinking', href: '#thinking' },
  { name: 'Contact', href: '#contact' }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 30);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[60] transition-all duration-100"
        style={{
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #C8A85A, #D9BE7E)',
        }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F7F5F0]/85 backdrop-blur-xl border-b border-[#0B0B0B]/[0.06] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-16 lg:px-24">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A85A] rounded"
            >
              <div className="w-8 h-8 rounded-lg bg-[#0B0B0B] flex items-center justify-center transition-all duration-300 group-hover:bg-[#C8A85A]">
                <span className="text-[#F7F5F0] text-xs font-bold tracking-tight">AJ</span>
              </div>
              <span className="text-[#0B0B0B] font-semibold text-sm tracking-tight transition-colors duration-300 group-hover:text-[#C8A85A]">
                Adewale Oladiti
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="nav-pill focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A85A] rounded"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e as React.MouseEvent<HTMLAnchorElement>, '#contact')}
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-[#0B0B0B] text-[#F7F5F0] rounded-lg text-xs font-medium tracking-wide hover:bg-[#C8A85A] hover:text-[#0B0B0B] transition-all duration-300"
              >
                Get in Touch
              </a>

              {/* Mobile toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-[#0B0B0B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A85A] rounded-lg"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                <span className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
                <span className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-400 ${isMobileMenuOpen ? 'max-h-[500px]' : 'max-h-0'}`}
          role="menu"
        >
          <div className="bg-[#F7F5F0]/95 backdrop-blur-xl border-t border-[#0B0B0B]/[0.06] px-6 py-4">
            <div className="space-y-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex items-center justify-between px-3 py-3 text-sm font-medium text-[#0B0B0B]/60 hover:text-[#0B0B0B] hover:bg-[#0B0B0B]/[0.04] rounded-lg transition-all duration-200 group"
                  role="menuitem"
                >
                  {item.name}
                  <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 text-[#C8A85A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
              <div className="pt-3 mt-3 border-t border-[#0B0B0B]/[0.06]">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e as React.MouseEvent<HTMLAnchorElement>, '#contact')}
                  className="flex items-center justify-center w-full py-3 bg-[#0B0B0B] text-[#F7F5F0] rounded-lg text-sm font-medium hover:bg-[#C8A85A] hover:text-[#0B0B0B] transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
