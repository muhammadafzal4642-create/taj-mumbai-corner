import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle, MessageSquare, Sparkles } from 'lucide-react';
import { RestaurantConfig } from '../data/restaurantData';
import { generateWhatsAppReservationUrl } from '../utils/whatsapp';

interface TableReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: RestaurantConfig;
}

export const TableReservationModal: React.FC<TableReservationModalProps> = ({
  isOpen,
  onClose,
  config,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('19:30');
  const [guests, setGuests] = useState('2');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const url = generateWhatsAppReservationUrl(config.whatsappNumber, {
      name: name || 'Guest',
      phone: phone || config.phoneNumber,
      date,
      time,
      guests: parseInt(guests, 10) || 2,
      notes: notes.trim() || undefined,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-2xl bg-[#191515] border border-[#D5A64A]/40 shadow-2xl overflow-hidden text-left"
      >
        {/* Header */}
        <div className="p-6 bg-[#120E0E] border-b border-[#D5A64A]/25 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#58151D] text-[#D5A64A] border border-[#D5A64A]/30">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#FFF8EB]">
                Reserve a Table
              </h3>
              <p className="text-xs text-[#FFF8EB]/70">
                Experience exceptional hospitality at {config.name}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#FFF8EB]/70 hover:text-[#FFF8EB] hover:bg-[#58151D]/40 rounded-lg transition-colors cursor-pointer"
            aria-label="Close table reservation modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/50 mx-auto flex items-center justify-center text-emerald-400">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-serif-luxury text-2xl font-bold text-[#FFF8EB]">
                Reservation Request Received
              </h4>
              <p className="text-sm text-[#FFF8EB]/80 font-light max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-[#D5A64A] font-semibold">{name || 'Guest'}</span>! We have prepared your table reservation for{' '}
                <span className="font-medium text-[#FFF8EB]">{date} at {time}</span> for{' '}
                <span className="font-medium text-[#FFF8EB]">{guests} guests</span>.
              </p>
              <div className="p-4 rounded-xl bg-[#120E0E] border border-[#D5A64A]/20 text-xs text-[#FFF8EB]/70 max-w-md mx-auto">
                Our front-of-house host will confirm table placement shortly via phone or WhatsApp.
              </div>
              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-lg bg-[#D5A64A] text-[#191515] text-xs font-semibold hover:bg-[#F5D280] transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#FFF8EB]/80 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#120E0E] border border-[#D5A64A]/30 text-[#FFF8EB] focus:outline-none focus:border-[#D5A64A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#FFF8EB]/80 mb-1">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+44 7000 000000"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#120E0E] border border-[#D5A64A]/30 text-[#FFF8EB] focus:outline-none focus:border-[#D5A64A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#FFF8EB]/80 mb-1">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#120E0E] border border-[#D5A64A]/30 text-[#FFF8EB] focus:outline-none focus:border-[#D5A64A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#FFF8EB]/80 mb-1">
                    Time Slot *
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#120E0E] border border-[#D5A64A]/30 text-[#FFF8EB] focus:outline-none focus:border-[#D5A64A]"
                  >
                    <option value="12:30">12:30 PM (Lunch)</option>
                    <option value="13:30">1:30 PM (Lunch)</option>
                    <option value="18:00">6:00 PM (Dinner)</option>
                    <option value="19:00">7:00 PM (Dinner)</option>
                    <option value="19:30">7:30 PM (Dinner)</option>
                    <option value="20:00">8:00 PM (Dinner)</option>
                    <option value="20:30">8:30 PM (Dinner)</option>
                    <option value="21:30">9:30 PM (Late Dinner)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#FFF8EB]/80 mb-1">
                    Number of Guests *
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#120E0E] border border-[#D5A64A]/30 text-[#FFF8EB] focus:outline-none focus:border-[#D5A64A]"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="8">8 Guests (Large Table)</option>
                    <option value="10">10+ Guests (Private Area)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#FFF8EB]/80 mb-1">
                  Special Requests / Occasion (Optional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Birthday celebration, booth preference, high chair needed."
                  rows={2}
                  className="w-full px-3 py-2 text-xs rounded-lg bg-[#120E0E] border border-[#D5A64A]/30 text-[#FFF8EB] focus:outline-none focus:border-[#D5A64A] resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#F5D280] via-[#D5A64A] to-[#C4973B] text-[#191515] text-xs font-bold shadow-lg hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer"
                >
                  Confirm Table Request
                </button>

                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="w-full sm:w-auto py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#191515] text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                  title="Send reservation request directly to WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Reserve via WhatsApp</span>
                </button>
              </div>

              <p className="text-[10px] text-[#FFF8EB]/60 text-center pt-1">
                Direct booking with immediate host confirmation · No cancellation fee
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
