import React from 'react';
import { ArrowDown, ShoppingBag, Utensils, MessageSquare, Sparkles } from 'lucide-react';
import { RestaurantConfig } from '../data/restaurantData';
import heroFeastImg from '@/src/assets/images/hero_mumbai_feast_1793354249223.jpg';

interface HeroProps {
  config: RestaurantConfig;
  onExploreMenu: () => void;
  onOpenOrder: () => void;
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  config,
  onExploreMenu,
  onOpenOrder,
  onOpenReservation,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12"
    >
      {/* Background Image with Deep Luxury Gradient Scrims */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroFeastImg}
          alt="Taj Mumbai Corner Indian Royal Feast with Dum Biryani, Butter Chicken, and Sizzling Tandoori"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform scale-105 animate-in fade-in duration-1000"
        />
        {/* Multilayered luxury gradient scrim: deep charcoal + rich burgundy wash */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#191515] via-[#191515]/75 to-[#120E0E]/60" />
        <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_30%,_#191515_90%] opacity-90" />
        <div className="absolute inset-0 bg-[#58151D]/25 mix-blend-multiply" />
      </div>

      {/* Decorative Gold Flourish Corners */}
      <div className="absolute top-28 left-6 sm:left-12 w-16 h-16 border-t-2 border-l-2 border-[#D5A64A]/30 pointer-events-none hidden sm:block" />
      <div className="absolute top-28 right-6 sm:right-12 w-16 h-16 border-t-2 border-r-2 border-[#D5A64A]/30 pointer-events-none hidden sm:block" />
      <div className="absolute bottom-16 left-6 sm:left-12 w-16 h-16 border-b-2 border-l-2 border-[#D5A64A]/30 pointer-events-none hidden sm:block" />
      <div className="absolute bottom-16 right-6 sm:right-12 w-16 h-16 border-b-2 border-r-2 border-[#D5A64A]/30 pointer-events-none hidden sm:block" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6">
        {/* Subtle royal badge / kicker */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D5A64A]/40 bg-[#58151D]/60 backdrop-blur-md mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#D5A64A]" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#F5D280]">
            Welcome to {config.name}
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#FFF8EB] leading-[1.12] max-w-4xl mx-auto drop-shadow-md">
          {config.mainHeading}
        </h1>

        {/* Decorative Gold Divider */}
        <div className="flex items-center justify-center gap-3 my-6">
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#D5A64A]" />
          <div className="w-2.5 h-2.5 rotate-45 border border-[#D5A64A] bg-[#58151D]" />
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#D5A64A]" />
        </div>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg md:text-xl text-[#FFF8EB]/85 font-light max-w-2xl mx-auto leading-relaxed drop-shadow">
          {config.supportingText}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-10">
          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-semibold text-[#191515] bg-gradient-to-r from-[#F5D280] via-[#D5A64A] to-[#C4973B] rounded-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-[#D5A64A]/20 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Utensils className="w-4 h-4 text-[#191515]" />
            <span>Explore Our Menu</span>
          </button>

          <button
            onClick={onOpenOrder}
            className="w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-semibold text-[#FFF8EB] bg-[#58151D]/80 hover:bg-[#791E29] border border-[#D5A64A]/50 rounded-lg active:scale-[0.98] transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-[#D5A64A]" />
            <span>Order Now</span>
          </button>

          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-6 py-3.5 text-sm sm:text-base font-medium text-[#FFF8EB]/80 hover:text-[#FFF8EB] border border-[#FFF8EB]/20 hover:border-[#D5A64A]/60 rounded-lg hover:bg-black/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Book a Table</span>
          </button>
        </div>

        {/* Highlight Trust Bar */}
        <div className="mt-14 pt-8 border-t border-[#D5A64A]/20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="p-3 bg-[#191515]/60 backdrop-blur-sm rounded-lg border border-[#D5A64A]/15">
            <span className="text-[11px] uppercase tracking-wider text-[#D5A64A] block font-semibold">
              Heritage Recipes
            </span>
            <span className="text-xs sm:text-sm text-[#FFF8EB] font-medium">
              Authentic Indian Spices
            </span>
          </div>

          <div className="p-3 bg-[#191515]/60 backdrop-blur-sm rounded-lg border border-[#D5A64A]/15">
            <span className="text-[11px] uppercase tracking-wider text-[#D5A64A] block font-semibold">
              Clay Oven
            </span>
            <span className="text-xs sm:text-sm text-[#FFF8EB] font-medium">
              Smoking Charcoal Tandoor
            </span>
          </div>

          <div className="p-3 bg-[#191515]/60 backdrop-blur-sm rounded-lg border border-[#D5A64A]/15">
            <span className="text-[11px] uppercase tracking-wider text-[#D5A64A] block font-semibold">
              Slow Cooked
            </span>
            <span className="text-xs sm:text-sm text-[#FFF8EB] font-medium">
              Dum Pukht Handi Biryani
            </span>
          </div>

          <div className="p-3 bg-[#191515]/60 backdrop-blur-sm rounded-lg border border-[#D5A64A]/15">
            <span className="text-[11px] uppercase tracking-wider text-[#D5A64A] block font-semibold">
              Direct Service
            </span>
            <span className="text-xs sm:text-sm text-[#FFF8EB] font-medium">
              WhatsApp & Table Booking
            </span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 flex justify-center">
          <a
            href="#about"
            className="text-[#D5A64A]/70 hover:text-[#D5A64A] transition-colors flex flex-col items-center gap-1 group"
            aria-label="Scroll to restaurant introduction"
          >
            <span className="text-[10px] tracking-widest uppercase">Scroll Down</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
