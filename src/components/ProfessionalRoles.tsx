import { professionalRoles } from '@/data/capabilities';
import ScrollReveal from './ScrollReveal';

const roleCategories = [
  { key: 'technology', title: 'Technology', emoji: '⬡' },
  { key: 'productSystems', title: 'Product & Systems', emoji: '◈' },
  { key: 'businessOperations', title: 'Business & Operations', emoji: '◇' },
  { key: 'entrepreneurship', title: 'Entrepreneurship', emoji: '◎' },
];

export default function ProfessionalRoles() {
  return (
    <section className="py-32 px-5 sm:px-8 md:px-16 lg:px-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C8A85A]/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-20 flex flex-col items-center text-center">
            <div className="section-label mb-4">Value Creation</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0B0B0B] tracking-tight max-w-lg mb-4">
              Where I Can Create Value
            </h2>
            <p className="text-[#8A8A8A] text-sm max-w-sm leading-relaxed">
              Areas where my skills can be applied — not claims of every title held.
            </p>
          </div>
        </ScrollReveal>

        {/* Role grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {roleCategories.map((category, index) => (
            <ScrollReveal key={category.key} delay={index * 80}>
              <div className="card-hover gradient-border p-8 bg-[#F7F5F0]/60 rounded-2xl border border-[#0B0B0B]/[0.06] h-full">
                <div className="flex items-center gap-3 mb-7">
                  <span className="text-2xl text-[#C8A85A] font-light">{category.emoji}</span>
                  <h3 className="text-xs font-semibold text-[#C8A85A] uppercase tracking-[0.15em]">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {professionalRoles[category.key as keyof typeof professionalRoles].map((role) => (
                    <li key={role} className="flex items-center gap-3 group/role">
                      <span className="w-px h-4 bg-[#C8A85A]/30 flex-shrink-0 group-hover/role:bg-[#C8A85A] transition-colors duration-300" />
                      <span className="text-[#0B0B0B]/70 text-base group-hover/role:text-[#0B0B0B] transition-colors duration-300">
                        {role}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
