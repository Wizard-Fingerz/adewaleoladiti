import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Capabilities from '@/components/Capabilities';
import ProfessionalRoles from '@/components/ProfessionalRoles';
import FeaturedProjects from '@/components/FeaturedProjects';
import Ventures from '@/components/Ventures';
import Experience from '@/components/Experience';
import Teaching from '@/components/Teaching';
import BeyondCode from '@/components/BeyondCode';
import Thinking from '@/components/Thinking';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#0B0B0B] text-[#F7F5F0] px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>
      <Navigation />
      <main className="flex-1" id="main-content">
        <Hero />
        <About />
        <FeaturedProjects />
        <Experience />
        <Capabilities />
        <ProfessionalRoles />
        <Ventures />
        <Teaching />
        <BeyondCode />
        <Thinking />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-12 px-5 sm:px-8 md:px-16 lg:px-24 bg-white border-t border-[#0B0B0B]/[0.06]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#0B0B0B] flex items-center justify-center">
                <span className="text-[#F7F5F0] text-xs font-bold">AJ</span>
              </div>
              <span className="text-[#0B0B0B]/50 text-sm">
                © {new Date().getFullYear()} Oladiti Adewale John
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[#8A8A8A] text-xs">Available for new opportunities</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
