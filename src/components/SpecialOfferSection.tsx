import React from 'react';
import { ShoppingBag, Sparkles, Utensils } from 'lucide-react';
import { RestaurantConfig } from '../data/restaurantData';

interface SpecialOfferSectionProps {
  config: RestaurantConfig;
  onOpenOrder: () => void;
  onExploreMenu: () => void;
}

export const SpecialOfferSection: React.FC<SpecialOfferSectionProps> = ({
  config,
  onOpenOrder,
  onExploreMenu,
}) => {
  return (
    <section className="py-20 lg:py-24 bg-[#191515] relative overflow-hidden">
      {/* Decorative background jali pattern */}
      <div className="absolute inset-0 bg-jali-pattern opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-[#58151D] via-[#3B0E14] to-[#191515] border border-[#D5A64A]/40 shadow-2xl overflow-hidden text-center">
          {/* Subtle gold decorative corners */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#D5A64A]/50 rounded-tl-xl pointer-events-none" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#D5A64A]/50 rounded-tr-xl pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#D5A64A]/50 rounded-bl-xl pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#D5A64A]/50 rounded-br-xl pointer-events-none" />

          {/* Top royal tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#191515]/60 border border-[#D5A64A]/40 text-[#D5A64A] text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>A Feast Awaits</span>
          </div>

          {/* Main Heading as specified */}
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFF8EB] mb-4 max-w-2xl mx-auto leading-tight">
            Something Delicious Is Waiting for You
          </h2>

          {/* Supporting text as specified */}
          <p className="text-base sm:text-lg text-[#FFF8EB]/85 font-light max-w-xl mx-auto leading-relaxed mb-8">
            Explore our menu and discover your next favourite meal.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenOrder}
              className="w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-semibold text-[#191515] bg-gradient-to-r from-[#F5D280] via-[#D5A64A] to-[#C4973B] rounded-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-[#D5A64A]/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-[#191515]" />
              <span>Order Now</span>
            </button>

            <button
              onClick={onExploreMenu}
              className="w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-medium text-[#FFF8EB] border border-[#D5A64A]/50 hover:bg-[#58151D]/60 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Utensils className="w-4 h-4 text-[#D5A64A]" />
              <span>View Full Menu</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
