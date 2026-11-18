import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Phone, MessageSquare, Calendar } from 'lucide-react';
import { RestaurantConfig } from '../data/restaurantData';

interface NavbarProps {
  config: RestaurantConfig;
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  config,
  cartCount,
  onOpenCart,
  onOpenReservation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#191515]/95 backdrop-blur-md border-b border-[#D5A64A]/25 py-3 shadow-xl'
          : 'bg-gradient-to-b from-[#120E0E]/90 via-[#191515]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-3 text-left whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D5A64A]"
          >
            <div className="w-9 h-9 rounded-full border border-[#D5A64A]/60 flex items-center justify-center bg-[#58151D]/60 text-[#D5A64A] shadow-inner group-hover:border-[#D5A64A] transition-colors">
              <span className="font-display-royal text-sm font-bold tracking-wider">T</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display-royal text-lg sm:text-xl font-bold tracking-wide text-[#FFF8EB] group-hover:text-[#F5D280] transition-colors">
                {config.name}
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#D5A64A]/80 -mt-1 font-medium">
                Modern Indian Dining
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Single-Line, Desktop) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#FFF8EB]/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#D5A64A] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D5A64A] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenReservation}
              className="hidden lg:flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-[#FFF8EB] border border-[#D5A64A]/40 rounded-lg hover:border-[#D5A64A] hover:bg-[#58151D]/40 transition-colors whitespace-nowrap shrink-0"
              title="Book a table"
            >
              <Calendar className="w-3.5 h-3.5 text-[#D5A64A]" />
              <span>Reserve Table</span>
            </button>

            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#191515] bg-gradient-to-r from-[#F5D280] via-[#D5A64A] to-[#C4973B] rounded-lg hover:brightness-105 active:scale-[0.98] transition-all shadow-md shadow-[#D5A64A]/15 whitespace-nowrap shrink-0"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#191515]" />
              <span>Order Now</span>
              {cartCount > 0 && (
                <span className="ml-1 px-1.5 py-0.2 text-[10px] font-bold bg-[#58151D] text-[#FFF8EB] rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#FFF8EB] hover:text-[#D5A64A] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#191515]/98 border-b border-[#D5A64A]/30 px-6 py-6 mt-3 backdrop-blur-xl animate-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#FFF8EB] hover:text-[#D5A64A] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-[#D5A64A]/20 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#FFF8EB] border border-[#D5A64A]/50 rounded-lg hover:bg-[#58151D]/40"
              >
                <Calendar className="w-4 h-4 text-[#D5A64A]" />
                <span>Reserve a Table</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCart();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#191515] bg-gradient-to-r from-[#F5D280] via-[#D5A64A] to-[#C4973B] rounded-lg shadow-md"
              >
                <ShoppingBag className="w-4 h-4 text-[#191515]" />
                <span>Open Order & WhatsApp</span>
              </button>

              <div className="flex items-center justify-between pt-2 text-xs text-[#FFF8EB]/70">
                <a
                  href={`tel:${config.phoneNumber}`}
                  className="flex items-center gap-1.5 hover:text-[#D5A64A]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D5A64A]" />
                  <span>{config.phoneNumber}</span>
                </a>
                <a
                  href={`https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#25D366] hover:underline"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Direct</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
