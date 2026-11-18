import React, { useState } from 'react';
import { Plus, ShoppingBag, Flame, Sparkles, Check } from 'lucide-react';
import { MenuItem, RestaurantConfig } from '../data/restaurantData';

interface MenuSectionProps {
  items: MenuItem[];
  config: RestaurantConfig;
  onAddToCart: (item: MenuItem) => void;
  onQuickWhatsAppOrder: (item: MenuItem) => void;
  onOpenPitchDrawer?: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  items,
  config,
  onAddToCart,
  onQuickWhatsAppOrder,
  onOpenPitchDrawer,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [addedItemId, setAddedItemId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Demonstration Dishes' },
    { id: 'biryani', label: 'Royal Biryani' },
    { id: 'curries', label: 'Curries & Karahi' },
    { id: 'tandoor', label: 'Clay Oven Tandoor' },
    { id: 'breads', label: 'Fresh Naan & Breads' },
    { id: 'street', label: 'Mumbai Delicacies' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItemId(item.id);
    setTimeout(() => setAddedItemId(null), 1500);
  };

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#120E0E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D5A64A] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Culinary Signatures</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFF8EB] mb-4">
            Signature Demonstration Menu
          </h2>
          <p className="text-sm sm:text-base text-[#FFF8EB]/75 font-light leading-relaxed">
            A sample preview of authentic dishes, rich curries, and smoking tandoor specialties.
            All items, descriptions, and prices are fully customizable to match the restaurant’s exact offering.
          </p>

          {/* Demonstration Notice */}
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-[#58151D]/40 border border-[#D5A64A]/30 rounded text-xs text-[#FFF8EB]/80">
            <span>Sample Menu Demonstration</span>
            {onOpenPitchDrawer && (
              <>
                <span aria-hidden="true">·</span>
                <button
                  onClick={onOpenPitchDrawer}
                  className="text-[#D5A64A] hover:underline cursor-pointer font-medium"
                >
                  Edit Prices & Items
                </button>
              </>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#D5A64A] to-[#B88523] text-[#191515] font-semibold shadow-md shadow-[#D5A64A]/20'
                  : 'bg-[#191515] text-[#FFF8EB]/75 hover:text-[#FFF8EB] border border-[#D5A64A]/20 hover:border-[#D5A64A]/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="card-luxury rounded-2xl overflow-hidden flex flex-col justify-between card-luxury-hover border border-[#D5A64A]/25 group"
            >
              <div>
                {/* Food Image Container */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-[#191515]">
                  <img
                    src={item.image}
                    alt={`${item.name} - ${item.categoryLabel}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191515] via-transparent to-transparent opacity-85" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    {item.isChefSpecial ? (
                      <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase text-[#191515] bg-[#D5A64A] rounded shadow">
                        Chef Special
                      </span>
                    ) : (
                      <span />
                    )}

                    {item.dietary && (
                      <span className="px-2.5 py-1 text-[11px] font-medium tracking-wide text-[#FFF8EB] bg-[#58151D]/90 backdrop-blur-md rounded border border-[#D5A64A]/30">
                        {item.dietary}
                      </span>
                    )}
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded bg-[#191515]/90 border border-[#D5A64A]/50 backdrop-blur-md">
                    <span className="font-serif-luxury text-lg font-bold text-[#F5D280] tabular-nums">
                      {config.currencySymbol}{item.price.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6">
                  {/* Category and Spice Level Metadata */}
                  <div className="flex items-center gap-2 text-xs text-[#D5A64A]/90 font-medium mb-2">
                    <span>{item.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Flame className="w-3 h-3 text-[#E25822]" />
                      <span>{item.spiceLevel}</span>
                    </span>
                  </div>

                  {/* Dish Name */}
                  <h3 className="font-serif-luxury text-xl font-bold text-[#FFF8EB] group-hover:text-[#F5D280] transition-colors mb-2">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#FFF8EB]/75 leading-relaxed font-light line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center gap-2 border-t border-[#D5A64A]/15 mt-2">
                <button
                  onClick={() => handleAdd(item)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    addedItemId === item.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#58151D] hover:bg-[#791E29] text-[#FFF8EB] border border-[#D5A64A]/40'
                  }`}
                >
                  {addedItemId === item.id ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Added to Order</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5 text-[#D5A64A]" />
                      <span>Add to Order</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => onQuickWhatsAppOrder(item)}
                  title="Direct WhatsApp Order"
                  className="p-2.5 rounded-lg bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-[#191515] border border-[#25D366]/40 transition-all cursor-pointer"
                  aria-label={`Order ${item.name} via WhatsApp`}
                >
                  <ShoppingBag className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Menu Banner / Customization note */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#58151D]/80 via-[#191515] to-[#58151D]/80 border border-[#D5A64A]/30 text-center max-w-4xl mx-auto">
          <h4 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#FFF8EB] mb-2">
            Looking for something specific or dietary accommodations?
          </h4>
          <p className="text-xs sm:text-sm text-[#FFF8EB]/80 max-w-2xl mx-auto mb-4 font-light">
            We prepare our dishes to your preference. Vegetarian, Halal, gluten-sensitive, and custom spice level options are always available.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                'Hello Taj Mumbai Corner, I have a special dietary request regarding your menu.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#191515] bg-[#D5A64A] hover:bg-[#F5D280] rounded-lg transition-colors inline-flex items-center gap-2"
            >
              <span>Ask Our Kitchen on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
