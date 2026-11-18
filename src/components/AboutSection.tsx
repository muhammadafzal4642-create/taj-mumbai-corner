import React from 'react';
import { Sparkles, Utensils, HeartHandshake, Clock } from 'lucide-react';
import { RestaurantConfig } from '../data/restaurantData';
import ambienceImg from '@/src/assets/images/restaurant_ambience_1793354252518.jpg';

interface AboutSectionProps {
  config: RestaurantConfig;
  onExploreMenu: () => void;
  onOpenReservation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  config,
  onExploreMenu,
  onOpenReservation,
}) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#191515] relative overflow-hidden">
      {/* Subtle gold radial background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#58151D]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D5A64A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#D5A64A]/30 shadow-2xl group">
              <img
                src={ambienceImg}
                alt="Taj Mumbai Corner luxury dining room ambience with velvet booths and golden lattice"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#191515] via-transparent to-transparent opacity-80" />

              {/* Inset badge card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#191515]/90 border border-[#D5A64A]/40 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#D5A64A] font-semibold block">
                      Fine Dining Ambience
                    </span>
                    <span className="text-sm font-serif-luxury font-medium text-[#FFF8EB]">
                      Warm Hospitality & Intimate Seating
                    </span>
                  </div>
                  <button
                    onClick={onOpenReservation}
                    className="px-3 py-1.5 text-xs font-semibold text-[#191515] bg-[#D5A64A] hover:bg-[#F5D280] rounded transition-colors whitespace-nowrap"
                  >
                    Book Table
                  </button>
                </div>
              </div>
            </div>

            {/* Decorative ornamental accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#D5A64A]/40 -z-0 rounded-tl-2xl hidden sm:block" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#D5A64A]/40 -z-0 rounded-br-2xl hidden sm:block" />
          </div>

          {/* Right Column: Introductory Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D5A64A] font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>A Passion For Authentic Indian Cuisine</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFF8EB] leading-tight">
              Welcome to <span className="gold-gradient-text">{config.name}</span>
            </h2>

            <p className="text-base sm:text-lg text-[#FFF8EB]/85 leading-relaxed font-light">
              At Taj Mumbai Corner, dining is an art form rooted in authentic culinary traditions,
              generous hospitality, and the vibrant culinary heartbeat of Mumbai. From the aromatic
              depths of slow-cooked dum biryanis to the fiery crackle of clay-oven tandoor skewers,
              every recipe is prepared with meticulous care.
            </p>

            <p className="text-sm sm:text-base text-[#FFF8EB]/75 leading-relaxed font-light">
              We blend carefully selected whole spices, slow-simmered gravies, and fresh produce to
              deliver unforgettable flavours on every plate. Whether you are gathering with loved ones
              for an intimate dinner, celebrating a special milestone, or enjoying your favourite dishes
              from the comfort of home, we are dedicated to providing a dining experience worth remembering.
            </p>

            {/* Core Values Strip */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#D5A64A]/20">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#58151D]/60 border border-[#D5A64A]/30 text-[#D5A64A] shrink-0 mt-1">
                  <Utensils className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#FFF8EB]">Made to Order</h3>
                  <p className="text-xs text-[#FFF8EB]/70">Freshly cooked using authentic Indian spices.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#58151D]/60 border border-[#D5A64A]/30 text-[#D5A64A] shrink-0 mt-1">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#FFF8EB]">Warm Service</h3>
                  <p className="text-xs text-[#FFF8EB]/70">Attentive care for every guest and occasion.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onExploreMenu}
                className="px-6 py-3 text-sm font-semibold text-[#191515] bg-gradient-to-r from-[#F5D280] via-[#D5A64A] to-[#C4973B] rounded-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-md shadow-[#D5A64A]/20 cursor-pointer"
              >
                View Demonstration Menu
              </button>

              <button
                onClick={onOpenReservation}
                className="px-6 py-3 text-sm font-medium text-[#FFF8EB] border border-[#D5A64A]/40 rounded-lg hover:border-[#D5A64A] hover:bg-[#58151D]/30 transition-colors cursor-pointer"
              >
                Reserve a Table
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
