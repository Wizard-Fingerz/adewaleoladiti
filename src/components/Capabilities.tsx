import { capabilities } from '@/data/capabilities';
import ScrollReveal from './ScrollReveal';

const categories = ['Engineering', 'Product & Systems', 'Business & Operations', 'Education & Mentoring'];

const categoryIcons: Record<string, string> = {
  'Engineering': '⬡',
  'Product & Systems': '◈',
  'Business & Operations': '◇',
  'Education & Mentoring': '◎',
};

export default function Capabilities() {
  const groupedCapabilities = categories.map(category => ({
    category,
    icon: categoryIcons[category] || '○',
    items: capabilities.filter(c => c.category === category)
  }));

  return (
    <section id="capabilities" className="py-32 px-5 sm:px-8 md:px-16 lg:px-24 dark-noise relative">
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(247,245,240,1) 1px, transparent 1px), linear-gradient(90deg, rgba(247,245,240,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-20 flex flex-col items-center text-center">
            <div className="section-label mb-4" style={{ color: '#C8A85A' }}>
              Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#F7F5F0] tracking-tight">
              What I Do
            </h2>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {groupedCapabilities.map((group, groupIndex) => (
            <ScrollReveal key={group.category} delay={groupIndex * 80}>
              <div className="card-hover-dark rounded-2xl border border-[#F7F5F0]/[0.07] p-8 h-full"
                style={{ background: 'rgba(247,245,240,0.03)' }}>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-2xl text-[#C8A85A] font-light leading-none">{group.icon}</span>
                  <h3 className="text-xs font-semibold text-[#C8A85A] uppercase tracking-[0.15em]">
                    {group.category}
                  </h3>
                </div>

                {/* Capabilities list */}
                <ul className="space-y-5">
                  {group.items.map((capability) => (
                    <li key={capability.capability} className="group/item">
                      <div className="flex items-start gap-3 mb-1.5">
                        <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-[#C8A85A]/50 flex-shrink-0 transition-all duration-300 group-hover/item:bg-[#C8A85A] group-hover/item:scale-125" />
                        <p className="text-[#F7F5F0]/90 font-medium text-base group-hover/item:text-[#C8A85A] transition-colors duration-300">
                          {capability.capability}
                        </p>
                      </div>
                      <p className="text-[#F7F5F0]/40 text-sm leading-relaxed pl-[18px]">
                        {capability.description}
                      </p>
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
