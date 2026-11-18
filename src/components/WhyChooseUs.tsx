import React from 'react';
import { Flame, Sparkles, HeartHandshake, UtensilsCrossed } from 'lucide-react';
import { whyChooseUsFeatures } from '../data/restaurantData';

export const WhyChooseUs: React.FC = () => {
  const icons = [
    <UtensilsCrossed key="fresh" className="w-6 h-6 text-[#D5A64A]" />,
    <Flame key="authentic" className="w-6 h-6 text-[#D5A64A]" />,
    <HeartHandshake key="hospitality" className="w-6 h-6 text-[#D5A64A]" />,
    <Sparkles key="experience" className="w-6 h-6 text-[#D5A64A]" />,
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#191515] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#58151D]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D5A64A] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Taj Standard</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFF8EB] mb-4">
            Why Dine With Us?
          </h2>
          <p className="text-sm sm:text-base text-[#FFF8EB]/75 font-light leading-relaxed">
            From our hand-hammered copper cookware to our authentic charcoal tandoor,
            every element is thoughtfully curated to provide an unforgettable culinary journey.
          </p>
        </div>

        {/* Feature Cards Grid (4 Columns on Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {whyChooseUsFeatures.map((feature, idx) => (
            <div
              key={feature.title}
              className="card-luxury rounded-2xl p-6 sm:p-8 flex flex-col justify-between card-luxury-hover border border-[#D5A64A]/25 relative group"
            >
              {/* Subtle gold top border line */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#D5A64A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-[#58151D]/80 border border-[#D5A64A]/40 flex items-center justify-center mb-6 shadow-inner group-hover:border-[#D5A64A] transition-colors">
                  {icons[idx]}
                </div>

                {/* Title */}
                <h3 className="font-serif-luxury text-xl font-bold text-[#FFF8EB] group-hover:text-[#F5D280] transition-colors mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#FFF8EB]/75 leading-relaxed font-light mb-6">
                  {feature.description}
                </p>
              </div>

              {/* Quiet unboxed highlight */}
              <div className="pt-4 border-t border-[#D5A64A]/15 text-[11px] font-semibold uppercase tracking-wider text-[#D5A64A]">
                {feature.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
