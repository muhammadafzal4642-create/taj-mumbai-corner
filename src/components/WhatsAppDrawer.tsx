import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, Send, MessageSquare } from 'lucide-react';
import { MenuItem, RestaurantConfig } from '../data/restaurantData';
import { CartItem, generateWhatsAppOrderUrl } from '../utils/whatsapp';

interface WhatsAppDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  config: RestaurantConfig;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const WhatsAppDrawer: React.FC<WhatsAppDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  config,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [guestName, setGuestName] = useState('');
  const [orderType, setOrderType] = useState('Dine-in / Table');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSendWhatsApp = () => {
    const url = generateWhatsAppOrderUrl(config.whatsappNumber, cart, config.currencySymbol, {
      name: guestName.trim() || undefined,
      orderType,
      notes: notes.trim() || undefined,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#191515] border-l border-[#D5A64A]/30 flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-5 border-b border-[#D5A64A]/20 flex items-center justify-between bg-[#120E0E]">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-[#58151D] text-[#D5A64A] border border-[#D5A64A]/30">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif-luxury text-lg font-bold text-[#FFF8EB]">
                  Your WhatsApp Order
                </h3>
                <p className="text-xs text-[#FFF8EB]/70">
                  Direct connection with {config.name}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#FFF8EB]/70 hover:text-[#FFF8EB] hover:bg-[#58151D]/40 transition-colors cursor-pointer"
              aria-label="Close order drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-12 px-4 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#58151D]/60 border border-[#D5A64A]/30 mx-auto flex items-center justify-center text-[#D5A64A]">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <h4 className="font-serif-luxury text-lg font-bold text-[#FFF8EB]">
                  Your Order Tray is Empty
                </h4>
                <p className="text-xs sm:text-sm text-[#FFF8EB]/75 font-light max-w-xs mx-auto">
                  You can explore our signature dishes and add them to this tray, or send an open inquiry to our kitchen.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleSendWhatsApp}
                    className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#191515] text-xs font-semibold flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send General WhatsApp Inquiry</span>
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* Itemized List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#FFF8EB]/70 pb-2 border-b border-[#D5A64A]/15">
                    <span>Selected Dishes ({cart.reduce((n, i) => n + i.quantity, 0)})</span>
                    <button
                      onClick={onClearCart}
                      className="text-red-400 hover:underline text-[11px]"
                    >
                      Clear All
                    </button>
                  </div>

                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 rounded-xl bg-[#120E0E] border border-[#D5A64A]/15 flex items-center justify-between gap-3"
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-[#FFF8EB] truncate">
                          {item.name}
                        </h4>
                        <span className="text-xs text-[#D5A64A] font-medium tabular-nums">
                          {config.currencySymbol}{item.price.toFixed(2)} each
                        </span>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="w-7 h-7 rounded bg-[#58151D] hover:bg-[#791E29] text-[#FFF8EB] flex items-center justify-center border border-[#D5A64A]/30 text-xs transition-colors cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-[#FFF8EB] w-5 text-center tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="w-7 h-7 rounded bg-[#58151D] hover:bg-[#791E29] text-[#FFF8EB] flex items-center justify-center border border-[#D5A64A]/30 text-xs transition-colors cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="p-1.5 text-red-400 hover:text-red-300 ml-1 cursor-pointer"
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Guest Details Form */}
                <div className="space-y-4 pt-4 border-t border-[#D5A64A]/20">
                  <h4 className="text-xs uppercase tracking-wider text-[#D5A64A] font-semibold">
                    Order Details & Preferences
                  </h4>

                  <div>
                    <label className="block text-xs text-[#FFF8EB]/80 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3 py-2 text-xs rounded-lg bg-[#120E0E] border border-[#D5A64A]/30 text-[#FFF8EB] focus:outline-none focus:border-[#D5A64A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#FFF8EB]/80 mb-1">
                      Order Preference
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Dine-in / Table', 'Collection', 'Delivery'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setOrderType(type)}
                          className={`py-1.5 px-2 text-[11px] font-medium rounded-lg border transition-all cursor-pointer ${
                            orderType === type
                              ? 'bg-[#58151D] border-[#D5A64A] text-[#F5D280]'
                              : 'bg-[#120E0E] border-[#D5A64A]/20 text-[#FFF8EB]/70'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-[#FFF8EB]/80 mb-1">
                      Spice Level or Dietary Notes (Optional)
                    </label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Mild spice on curries, extra mint chutney please."
                      rows={2}
                      className="w-full px-3 py-2 text-xs rounded-lg bg-[#120E0E] border border-[#D5A64A]/30 text-[#FFF8EB] focus:outline-none focus:border-[#D5A64A] resize-none"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer with Subtotal & WhatsApp CTA */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-[#D5A64A]/25 bg-[#120E0E] space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#FFF8EB]/80">Estimated Subtotal:</span>
                <span className="font-serif-luxury text-xl font-bold text-[#F5D280] tabular-nums">
                  {config.currencySymbol}{subtotal.toFixed(2)}
                </span>
              </div>

              <button
                onClick={handleSendWhatsApp}
                className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#191515] text-sm font-bold flex items-center justify-center gap-2 shadow-xl hover:shadow-[#25D366]/20 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Order via WhatsApp</span>
              </button>

              <p className="text-[10px] text-[#FFF8EB]/60 text-center">
                Opens WhatsApp with your structured order inquiry to {config.whatsappNumber}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
