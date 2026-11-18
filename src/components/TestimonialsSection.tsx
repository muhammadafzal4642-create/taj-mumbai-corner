import React from 'react';
import { Star, Quote, Sparkles, MessageSquareQuote } from 'lucide-react';
import { testimonialPlaceholders } from '../data/restaurantData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#120E0E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D5A64A] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Guest Impressions</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFF8EB] mb-4">
            Guest Testimonial Showcase
          </h2>
          <p className="text-sm sm:text-base text-[#FFF8EB]/75 font-light leading-relaxed">
            Experience real hospitality through our diners' words.
          </p>

          {/* Explicit Demonstration Notice as required by prompt */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#58151D]/40 border border-[#D5A64A]/30 text-xs text-[#FFF8EB]/80">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#D5A64A]" />
            <span>Demonstration Review Slots – Ready to connect with verified Google or TripAdvisor ratings</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonialPlaceholders.map((item) => (
            <div
              key={item.id}
              className="card-luxury rounded-2xl p-6 sm:p-8 flex flex-col justify-between card-luxury-hover border border-[#D5A64A]/25 relative group"
            >
              {/* Subtle Quote Icon */}
              <div className="mb-6 flex items-center justify-between">
                <Quote className="w-8 h-8 text-[#D5A64A]/40 group-hover:text-[#D5A64A] transition-colors" />
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#D5A64A] text-[#D5A64A]"
                    />
                  ))}
                </div>
              </div>

              {/* Title & Quote */}
              <div className="mb-6">
                <h3 className="font-serif-luxury text-lg font-bold text-[#FFF8EB] mb-3">
                  "{item.title}"
                </h3>
                <p className="text-xs sm:text-sm text-[#FFF8EB]/80 leading-relaxed font-light italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-[#D5A64A]/15 flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-[#FFF8EB] block">
                    {item.reviewer}
                  </span>
                  <span className="text-[#D5A64A]/80 font-light">
                    {item.visitType}
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-[#FFF8EB]/40 border border-[#FFF8EB]/15 px-2 py-0.5 rounded">
                  Demo
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
