import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { RestaurantConfig } from '../data/restaurantData';

interface FooterProps {
  config: RestaurantConfig;
  onOpenOrder: () => void;
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  config,
  onOpenOrder,
  onOpenReservation,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#120E0E] border-t border-[#D5A64A]/25 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#D5A64A]/15">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#D5A64A]/60 flex items-center justify-center bg-[#58151D] text-[#D5A64A]">
                <span className="font-display-royal text-sm font-bold">T</span>
              </div>
              <span className="font-display-royal text-xl font-bold tracking-wide text-[#FFF8EB]">
                {config.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#FFF8EB]/75 font-light leading-relaxed max-w-sm">
              Authentic Indian cuisine and vibrant Mumbai street delicacies crafted with heritage spices, slow-cooking traditions, and warm hospitality.
            </p>

            {/* Social Media Placeholders */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#contact"
                className="w-8 h-8 rounded-full bg-[#191515] border border-[#D5A64A]/30 flex items-center justify-center text-[#FFF8EB]/80 hover:text-[#D5A64A] hover:border-[#D5A64A] transition-colors"
                aria-label="Instagram profile placeholder"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="w-8 h-8 rounded-full bg-[#191515] border border-[#D5A64A]/30 flex items-center justify-center text-[#FFF8EB]/80 hover:text-[#D5A64A] hover:border-[#D5A64A] transition-colors"
                aria-label="Facebook page placeholder"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#191515] border border-[#25D366]/40 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-[#191515] transition-all"
                aria-label="WhatsApp direct messaging"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-luxury text-sm font-semibold uppercase tracking-wider text-[#D5A64A]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#FFF8EB]/75">
              <li>
                <a href="#hero" className="hover:text-[#D5A64A] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D5A64A] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#D5A64A] transition-colors">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#D5A64A] transition-colors">
                  Food Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D5A64A] transition-colors">
                  Location & Contact
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenReservation}
                  className="hover:text-[#D5A64A] transition-colors text-left"
                >
                  Table Reservations
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif-luxury text-sm font-semibold uppercase tracking-wider text-[#D5A64A]">
              Contact Details
            </h4>
            <div className="space-y-2 text-xs text-[#FFF8EB]/75">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D5A64A] shrink-0 mt-0.5" />
                <span>{config.address}, {config.cityArea}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D5A64A] shrink-0" />
                <a href={`tel:${config.phoneNumber}`} className="hover:text-[#D5A64A]">
                  {config.phoneNumber}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>WhatsApp: {config.whatsappNumber}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D5A64A] shrink-0" />
                <span>{config.emailAddress}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF8EB]/60">
          <p>
            © {new Date().getFullYear()} {config.name}. All rights reserved. Professional Restaurant Website Showcase.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#D5A64A] hover:text-[#FFF8EB] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
