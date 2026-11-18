import React, { useState } from 'react';
import {
  defaultRestaurantConfig,
  initialMenuItems,
  RestaurantConfig,
  MenuItem,
} from './data/restaurantData';
import { CartItem } from './utils/whatsapp';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { SpecialOfferSection } from './components/SpecialOfferSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppDrawer } from './components/WhatsAppDrawer';
import { TableReservationModal } from './components/TableReservationModal';
import { PitchConfigDrawer } from './components/PitchConfigDrawer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [config, setConfig] = useState<RestaurantConfig>(defaultRestaurantConfig);
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isWhatsAppDrawerOpen, setIsWhatsAppDrawerOpen] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [isPitchDrawerOpen, setIsPitchDrawerOpen] = useState(false);

  // Cart Handlers
  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [
        ...prev,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: 1,
        },
      ];
    });
  };

  const handleQuickWhatsAppOrder = (item: MenuItem) => {
    handleAddToCart(item);
    setIsWhatsAppDrawerOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleExploreMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleUpdateConfig = (updated: Partial<RestaurantConfig>) => {
    setConfig((prev) => ({ ...prev, ...updated }));
  };

  const handleResetDefaults = () => {
    setConfig(defaultRestaurantConfig);
    setMenuItems(initialMenuItems);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#191515] text-[#FFF8EB] selection:bg-[#D5A64A] selection:text-[#191515] relative">
      {/* A. Sticky Navigation Bar */}
      <Navbar
        config={config}
        cartCount={totalCartCount}
        onOpenCart={() => setIsWhatsAppDrawerOpen(true)}
        onOpenReservation={() => setIsReservationModalOpen(true)}
      />

      {/* Main Homepage Sections */}
      <main>
        {/* B. Hero Section */}
        <Hero
          config={config}
          onExploreMenu={handleExploreMenu}
          onOpenOrder={() => setIsWhatsAppDrawerOpen(true)}
          onOpenReservation={() => setIsReservationModalOpen(true)}
        />

        {/* C. Restaurant Introduction */}
        <AboutSection
          config={config}
          onExploreMenu={handleExploreMenu}
          onOpenReservation={() => setIsReservationModalOpen(true)}
        />

        {/* D. Signature Dishes & Food Menu */}
        <MenuSection
          items={menuItems}
          config={config}
          onAddToCart={handleAddToCart}
          onQuickWhatsAppOrder={handleQuickWhatsAppOrder}
          onOpenPitchDrawer={() => setIsPitchDrawerOpen(true)}
        />

        {/* E. Why Choose Us? */}
        <WhyChooseUs />

        {/* F. Food Gallery with Lightbox */}
        <GallerySection />

        {/* G. Special Offer Section */}
        <SpecialOfferSection
          config={config}
          onOpenOrder={() => setIsWhatsAppDrawerOpen(true)}
          onExploreMenu={handleExploreMenu}
        />

        {/* H. Customer Testimonials (Demonstration Placeholders) */}
        <TestimonialsSection />

        {/* I. Location and Contact */}
        <ContactSection
          config={config}
          onOpenReservation={() => setIsReservationModalOpen(true)}
          onOpenOrder={() => setIsWhatsAppDrawerOpen(true)}
          onOpenPitchDrawer={() => setIsPitchDrawerOpen(true)}
        />
      </main>

      {/* J. Footer */}
      <Footer
        config={config}
        onOpenOrder={() => setIsWhatsAppDrawerOpen(true)}
        onOpenReservation={() => setIsReservationModalOpen(true)}
      />

      {/* Interactive WhatsApp Order Slide-Over Drawer */}
      <WhatsAppDrawer
        isOpen={isWhatsAppDrawerOpen}
        onClose={() => setIsWhatsAppDrawerOpen(false)}
        cart={cart}
        config={config}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Interactive Table Reservation Modal */}
      <TableReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
        config={config}
      />

      {/* Presenter Pitch Config Drawer (Collapsible) */}
      <PitchConfigDrawer
        isOpen={isPitchDrawerOpen}
        onClose={() => setIsPitchDrawerOpen(false)}
        config={config}
        onUpdateConfig={handleUpdateConfig}
        onResetDefaults={handleResetDefaults}
      />

      {/* Floating Action Buttons (WhatsApp & Pitch controls) */}
      <FloatingActions
        config={config}
        onOpenOrder={() => setIsWhatsAppDrawerOpen(true)}
        onOpenPitchDrawer={() => setIsPitchDrawerOpen(true)}
      />
    </div>
  );
}
