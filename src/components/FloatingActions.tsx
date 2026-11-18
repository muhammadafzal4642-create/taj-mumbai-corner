import React from 'react';
import { MessageSquare, Settings2 } from 'lucide-react';
import { RestaurantConfig } from '../data/restaurantData';

interface FloatingActionsProps {
  config: RestaurantConfig;
  onOpenOrder: () => void;
  onOpenPitchDrawer: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  config,
  onOpenOrder,
  onOpenPitchDrawer,
}) => {
  const cleanNumber = config.whatsappNumber.replace(/[^0-9]/g, '');
  const defaultText = 'Hello Taj Mumbai Corner, I would like to know more about your menu and place an order.';
  const waUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(defaultText)}`;

  return (
    <>
      {/* Floating Bottom-Right WhatsApp Order Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-[#191515] font-semibold text-xs shadow-2xl hover:bg-[#20ba5a] active:scale-95 transition-all duration-200 border border-white/20"
          aria-label="Chat & Order via WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-current text-[#191515]" />
          <span className="hidden sm:inline font-bold">WhatsApp Order</span>
        </a>
      </div>

      {/* Floating Discreet Pitch & Demo Trigger (Bottom-Left) */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={onOpenPitchDrawer}
          className="p-2.5 rounded-full bg-[#191515]/80 hover:bg-[#58151D] text-[#D5A64A] hover:text-[#F5D280] border border-[#D5A64A]/30 backdrop-blur-md shadow-lg transition-all active:scale-95 group cursor-pointer"
          title="Demo Presentation & Live Configurator"
          aria-label="Demo Presentation & Live Configurator"
        >
          <Settings2 className="w-4 h-4 group-hover:rotate-45 transition-transform" />
        </button>
      </div>
    </>
  );
};
