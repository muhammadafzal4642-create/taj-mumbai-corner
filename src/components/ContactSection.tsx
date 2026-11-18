import React from 'react';
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  Mail,
  Navigation,
  Calendar,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { RestaurantConfig } from '../data/restaurantData';

interface ContactSectionProps {
  config: RestaurantConfig;
  onOpenReservation: () => void;
  onOpenOrder: () => void;
  onOpenPitchDrawer?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  config,
  onOpenReservation,
  onOpenOrder,
  onOpenPitchDrawer,
}) => {
  const cleanPhone = config.phoneNumber.replace(/[^0-9+]/g, '');
  const cleanWhatsApp = config.whatsappNumber.replace(/[^0-9]/g, '');

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#191515] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D5A64A] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visit Us & Get In Touch</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFF8EB] mb-4">
            Location & Inquiries
          </h2>
          <p className="text-sm sm:text-base text-[#FFF8EB]/75 font-light leading-relaxed">
            We look forward to welcoming you. Reserve your table in advance, contact us directly on WhatsApp, or request directions.
          </p>
        </div>

        {/* Contact Info & Interactive Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="card-luxury rounded-2xl p-6 sm:p-8 border border-[#D5A64A]/25 space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#58151D]/70 border border-[#D5A64A]/30 text-[#D5A64A] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#D5A64A] font-semibold block">
                    Restaurant Address
                  </span>
                  <p className="text-sm sm:text-base text-[#FFF8EB] font-medium mt-1">
                    {config.address}
                  </p>
                  <p className="text-xs text-[#FFF8EB]/70">{config.cityArea}</p>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#58151D]/70 border border-[#D5A64A]/30 text-[#D5A64A] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#D5A64A] font-semibold block">
                    Direct Phone & WhatsApp
                  </span>
                  <a
                    href={`tel:${cleanPhone}`}
                    className="text-sm sm:text-base text-[#FFF8EB] font-medium mt-1 block hover:text-[#D5A64A] transition-colors"
                  >
                    {config.phoneNumber}
                  </a>
                  <a
                    href={`https://wa.me/${cleanWhatsApp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#25D366] font-medium hover:underline flex items-center gap-1 mt-0.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp: {config.whatsappNumber}</span>
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#58151D]/70 border border-[#D5A64A]/30 text-[#D5A64A] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#D5A64A] font-semibold block">
                    Dining Hours
                  </span>
                  <ul className="text-xs sm:text-sm text-[#FFF8EB]/85 space-y-1 mt-1 font-light">
                    <li>{config.openingHours.weekdays}</li>
                    <li>{config.openingHours.weekends}</li>
                    <li>{config.openingHours.sunday}</li>
                  </ul>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#58151D]/70 border border-[#D5A64A]/30 text-[#D5A64A] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#D5A64A] font-semibold block">
                    Email Inquiries
                  </span>
                  <a
                    href={`mailto:${config.emailAddress}`}
                    className="text-xs sm:text-sm text-[#FFF8EB]/90 hover:text-[#D5A64A] transition-colors mt-1 block"
                  >
                    {config.emailAddress}
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons as requested */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <a
                href={`tel:${cleanPhone}`}
                className="flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-[#58151D] hover:bg-[#791E29] text-[#FFF8EB] border border-[#D5A64A]/40 text-xs font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D5A64A]" />
                <span>Call Now</span>
              </a>

              <a
                href={`https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(
                  'Hello Taj Mumbai Corner, I would like to know more about your menu and place an order.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#191515] text-xs font-semibold transition-colors shadow-md"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href={config.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-[#191515] hover:bg-[#120E0E] text-[#FFF8EB] border border-[#D5A64A]/40 text-xs font-semibold transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#D5A64A]" />
                <span>Directions</span>
              </a>
            </div>
          </div>

          {/* Map & Reservation Trigger Column */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="card-luxury rounded-2xl overflow-hidden border border-[#D5A64A]/30 h-full min-h-[350px] relative flex flex-col">
              {/* Map Graphic Preview */}
              <div className="relative flex-1 bg-[#120E0E] min-h-[260px] flex items-center justify-center overflow-hidden">
                {/* Styled dark map simulation grid */}
                <div className="absolute inset-0 bg-jali-pattern opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191515] via-transparent to-transparent opacity-90" />

                {/* Map Pin Highlight */}
                <div className="relative z-10 text-center p-6 max-w-sm">
                  <div className="w-14 h-14 rounded-full bg-[#58151D] border-2 border-[#D5A64A] mx-auto flex items-center justify-center text-[#D5A64A] shadow-xl animate-bounce">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif-luxury text-xl font-bold text-[#FFF8EB] mt-4">
                    {config.name}
                  </h3>
                  <p className="text-xs text-[#FFF8EB]/80 mt-1">
                    {config.address}, {config.cityArea}
                  </p>
                  <a
                    href={config.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D5A64A] text-[#191515] text-xs font-semibold hover:bg-[#F5D280] transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Table Booking Callout Bar */}
              <div className="p-6 bg-[#58151D]/60 border-t border-[#D5A64A]/25 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif-luxury text-base font-bold text-[#FFF8EB]">
                    Planning an Evening Out?
                  </h4>
                  <p className="text-xs text-[#FFF8EB]/75 font-light">
                    Reserve your dining table online or inquire about private group bookings.
                  </p>
                </div>
                <button
                  onClick={onOpenReservation}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-[#191515] bg-gradient-to-r from-[#F5D280] to-[#D5A64A] rounded-lg hover:brightness-105 active:scale-[0.98] transition-all whitespace-nowrap shadow cursor-pointer"
                >
                  Reserve Table Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
