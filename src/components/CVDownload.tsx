'use client';

import { useState, useEffect } from 'react';
import { cvFiles } from '@/data/cv';

const categoryIcons: Record<string, string> = {
  engineering: '⚙️',
  business: '📊',
  product: '🧩',
  finance: '🏦',
  general: '🎓',
  education: '📚',
};

export default function CVDownload() {
  const [isOpen, setIsOpen] = useState(false);
  const [downloaded, setDownloaded] = useState<string | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const handleDownload = (filename: string) => {
    setDownloaded(filename);
    setTimeout(() => setDownloaded(null), 3000);
  };

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="group inline-flex items-center gap-2 px-5 py-3 border border-[#0B0B0B]/20 rounded-xl text-sm font-medium text-[#0B0B0B]/70 hover:border-[#C8A85A]/60 hover:text-[#C8A85A] hover:bg-[#C8A85A]/[0.04] transition-all duration-300"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Download CV
      </button>

      {/* Modal overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-modal-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#0B0B0B]/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal panel */}
          <div className="relative z-10 w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up flex flex-col max-h-[90vh]">

            {/* Header */}
            <div className="px-6 sm:px-8 pt-7 pb-5 border-b border-[#0B0B0B]/[0.06] flex-shrink-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 id="cv-modal-title" className="text-xl font-semibold text-[#0B0B0B] tracking-tight mb-1">
                    Download CV
                  </h2>
                  <p className="text-sm text-[#8A8A8A]">
                    Choose the version best suited to the role you&apos;re hiring for.
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#0B0B0B]/[0.06] text-[#8A8A8A] hover:text-[#0B0B0B] transition-all duration-200"
                  aria-label="Close modal"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* CV grid — scrollable */}
            <div className="overflow-y-auto p-4 sm:p-6 flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cvFiles.map((cv) => {
                  const isDownloaded = downloaded === cv.filename;
                  return (
                    <a
                      key={cv.filename}
                      href={`/cv/${encodeURIComponent(cv.filename)}`}
                      download={cv.filename}
                      onClick={() => handleDownload(cv.filename)}
                      className={`flex items-start gap-3 p-4 rounded-2xl border transition-all duration-200 group ${
                        isDownloaded
                          ? 'border-emerald-200 bg-emerald-50'
                          : 'border-[#0B0B0B]/[0.06] hover:border-[#C8A85A]/30 hover:bg-[#F7F5F0]'
                      }`}
                    >
                      {/* Icon */}
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-base border transition-colors duration-200 ${
                        isDownloaded
                          ? 'bg-emerald-100 border-emerald-200'
                          : 'bg-[#F7F5F0] border-[#0B0B0B]/[0.06] group-hover:bg-white'
                      }`}>
                        {isDownloaded ? '✓' : categoryIcons[cv.category]}
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-semibold leading-snug transition-colors duration-200 ${
                          isDownloaded ? 'text-emerald-700' : 'text-[#0B0B0B] group-hover:text-[#C8A85A]'
                        }`}>
                          {cv.label}
                        </p>
                        <p className="text-xs text-[#8A8A8A] mt-0.5 leading-relaxed">{cv.description}</p>
                        {isDownloaded && (
                          <span className="inline-block mt-1.5 text-xs text-emerald-600 font-medium">
                            Downloading…
                          </span>
                        )}
                      </div>

                      {/* Arrow icon */}
                      {!isDownloaded && (
                        <svg
                          className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#0B0B0B]/15 group-hover:text-[#C8A85A] transition-colors duration-200"
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      )}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 sm:px-8 py-4 border-t border-[#0B0B0B]/[0.06] bg-[#F7F5F0]/60 flex-shrink-0">
              <p className="text-xs text-[#8A8A8A] text-center leading-relaxed">
                All CVs are tailored to specific role types · Files are in{' '}
                <span className="font-medium text-[#0B0B0B]/50">.docx</span> format
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
