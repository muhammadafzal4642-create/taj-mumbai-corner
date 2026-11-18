import React, { useState } from 'react';
import {
  Settings2,
  X,
  RotateCcw,
  Check,
  Copy,
  Terminal,
  FileCode,
  DollarSign,
  Phone,
  MessageSquare,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import { RestaurantConfig, defaultRestaurantConfig } from '../data/restaurantData';

interface PitchConfigDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  config: RestaurantConfig;
  onUpdateConfig: (updated: Partial<RestaurantConfig>) => void;
  onResetDefaults: () => void;
}

export const PitchConfigDrawer: React.FC<PitchConfigDrawerProps> = ({
  isOpen,
  onClose,
  config,
  onUpdateConfig,
  onResetDefaults,
}) => {
  const [activeTab, setActiveTab] = useState<'customizer' | 'nextjs_export'>('customizer');
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  const nextJsDeploymentCode = `
# 1. Initialize Next.js Project with Tailwind CSS
npx create-next-app@latest taj-mumbai-corner --js --tailwind --app --eslint
cd taj-mumbai-corner

# 2. Install Required Lucide Icons
npm install lucide-react

# 3. Project Structure:
app/
  ├── layout.js          # Google Fonts & SEO metadata (Taj Mumbai Corner)
  ├── page.js            # Homepage composition with all luxury sections
  └── globals.css        # Tailwind @import and luxury gold variables
components/
  ├── Navbar.jsx         # Sticky 3-zone header with WhatsApp & cart
  ├── Hero.jsx           # Cinematic feast photography & CTAs
  ├── AboutSection.jsx   # Warm hospitality & ambience showcase
  ├── MenuSection.jsx    # Signature dishes with price & spice filters
  ├── WhyChooseUs.jsx    # 4 luxury feature cards
  ├── GallerySection.jsx # Visual grid with high-res Lightbox
  ├── SpecialOffer.jsx   # "Something Delicious Is Waiting for You"
  ├── Testimonials.jsx   # Verified guest reviews layout
  ├── ContactSection.jsx # Maps, phone, WhatsApp & directions
  ├── Footer.jsx         # Royal crest & site navigation
  ├── WhatsAppDrawer.jsx # Slide-out cart & WhatsApp message generator
  └── ReservationModal.jsx # Table reservation flow

# 4. Deploy to Vercel
npm run build
npx vercel
`.trim();

  const handleCopyCode = () => {
    navigator.clipboard.writeText(nextJsDeploymentCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-lg bg-[#191515] border-l border-[#D5A64A]/40 flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-5 border-b border-[#D5A64A]/25 flex items-center justify-between bg-[#120E0E]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#58151D] text-[#D5A64A] border border-[#D5A64A]/30">
                <Settings2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif-luxury text-lg font-bold text-[#FFF8EB]">
                  Client Pitch & Demo Controls
                </h3>
                <p className="text-[11px] text-[#FFF8EB]/70">
                  Customize details live on screen to impress the restaurant owner
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#FFF8EB]/70 hover:text-[#FFF8EB] hover:bg-[#58151D]/40 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-[#D5A64A]/20 bg-[#120E0E] text-xs font-medium">
            <button
              onClick={() => setActiveTab('customizer')}
              className={`flex-1 py-3 text-center transition-colors border-b-2 cursor-pointer ${
                activeTab === 'customizer'
                  ? 'border-[#D5A64A] text-[#F5D280] font-semibold'
                  : 'border-transparent text-[#FFF8EB]/70 hover:text-[#FFF8EB]'
              }`}
            >
              Live Demo Customizer
            </button>
            <button
              onClick={() => setActiveTab('nextjs_export')}
              className={`flex-1 py-3 text-center transition-colors border-b-2 cursor-pointer ${
                activeTab === 'nextjs_export'
                  ? 'border-[#D5A64A] text-[#F5D280] font-semibold'
                  : 'border-transparent text-[#FFF8EB]/70 hover:text-[#FFF8EB]'
              }`}
            >
              Next.js & Vercel Guide
            </button>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            {activeTab === 'customizer' ? (
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-[#58151D]/40 border border-[#D5A64A]/20 text-xs text-[#FFF8EB]/80 leading-relaxed">
                  💡 <strong className="text-[#F5D280]">Pitch Tip:</strong> Type the restaurant owner's actual phone number, city, or currency while demonstrating. The whole page (including WhatsApp buttons) updates instantly.
                </div>

                {/* Restaurant Name */}
                <div>
                  <label className="block text-xs font-medium text-[#FFF8EB]/80 mb-1">
                    Restaurant Brand Name
                  </label>
                  <input
                    type="text"
                    value={config.name}
                    onChange={(e) => onUpdateConfig({ name: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#120E0E] border border-[#D5A64A]/30 text-[#FFF8EB] focus:outline-none focus:border-[#D5A64A]"
                  />
                </div>

                {/* WhatsApp Number */}
                <div>
                  <label className="block text-xs font-medium text-[#FFF8EB]/80 mb-1 flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>WhatsApp Number (WHATSAPP_NUMBER)</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    value={config.whatsappNumber}
                    onChange={(e) => onUpdateConfig({ whatsappNumber: e.target.value })}
                    placeholder="+447000000000"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#120E0E] border border-[#D5A64A]/30 text-[#FFF8EB] focus:outline-none focus:border-[#D5A64A]"
                  />
                  <span className="text-[10px] text-[#FFF8EB]/60 mt-0.5 block">
                    Used for all direct 1-click WhatsApp order buttons & cart messages.
                  </span>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-medium text-[#FFF8EB]/80 mb-1 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-[#D5A64A]" />
                    <span>Contact Phone</span>
                  </label>
                  <input
                    type="text"
                    value={config.phoneNumber}
                    onChange={(e) => onUpdateConfig({ phoneNumber: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#120E0E] border border-[#D5A64A]/30 text-[#FFF8EB] focus:outline-none focus:border-[#D5A64A]"
                  />
                </div>

                {/* Currency Symbol */}
                <div>
                  <label className="block text-xs font-medium text-[#FFF8EB]/80 mb-1 flex items-center gap-1">
                    <DollarSign className="w-3.5 h-3.5 text-[#D5A64A]" />
                    <span>Currency Symbol</span>
                  </label>
                  <div className="flex gap-2">
                    {['£', '$', '€', 'AED ', '₹'].map((curr) => (
                      <button
                        key={curr}
                        type="button"
                        onClick={() => onUpdateConfig({ currencySymbol: curr })}
                        className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition-colors cursor-pointer ${
                          config.currencySymbol === curr
                            ? 'bg-[#58151D] border-[#D5A64A] text-[#F5D280]'
                            : 'bg-[#120E0E] border-[#D5A64A]/20 text-[#FFF8EB]/70'
                        }`}
                      >
                        {curr}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-xs font-medium text-[#FFF8EB]/80 mb-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D5A64A]" />
                    <span>Address Placeholder</span>
                  </label>
                  <input
                    type="text"
                    value={config.address}
                    onChange={(e) => onUpdateConfig({ address: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#120E0E] border border-[#D5A64A]/30 text-[#FFF8EB] focus:outline-none focus:border-[#D5A64A]"
                  />
                </div>

                {/* City & Area */}
                <div>
                  <label className="block text-xs font-medium text-[#FFF8EB]/80 mb-1">
                    City / Neighborhood
                  </label>
                  <input
                    type="text"
                    value={config.cityArea}
                    onChange={(e) => onUpdateConfig({ cityArea: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#120E0E] border border-[#D5A64A]/30 text-[#FFF8EB] focus:outline-none focus:border-[#D5A64A]"
                  />
                </div>

                {/* Reset Action */}
                <div className="pt-4 border-t border-[#D5A64A]/20">
                  <button
                    onClick={onResetDefaults}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#120E0E] hover:bg-[#58151D]/60 text-[#FFF8EB] border border-[#D5A64A]/30 text-xs font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-[#D5A64A]" />
                    <span>Reset to Demonstration Defaults</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#D5A64A] uppercase tracking-wider">
                    Next.js App Router Architecture
                  </span>
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 px-2.5 py-1 text-xs bg-[#58151D] text-[#FFF8EB] border border-[#D5A64A]/30 rounded hover:bg-[#791E29] transition-colors cursor-pointer"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Commands</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-[#0e0a0a] border border-[#D5A64A]/25 font-mono text-[11px] text-[#FFF8EB]/90 overflow-x-auto leading-relaxed">
                  <pre>{nextJsDeploymentCode}</pre>
                </div>

                <div className="p-4 rounded-xl bg-[#120E0E] border border-[#D5A64A]/20 space-y-2 text-xs text-[#FFF8EB]/80">
                  <h5 className="font-semibold text-[#F5D280]">
                    Selling Points For Restaurant Pitch:
                  </h5>
                  <ul className="space-y-1.5 list-disc list-inside text-[#FFF8EB]/75 font-light">
                    <li><strong className="text-[#FFF8EB]">Direct WhatsApp Orders:</strong> Zero 30% delivery commission lost to third-party aggregator apps.</li>
                    <li><strong className="text-[#FFF8EB]">100% Mobile Optimized:</strong> 85% of restaurant diners order and browse on mobile phones.</li>
                    <li><strong className="text-[#FFF8EB]">Table Reservation Engine:</strong> Instant guest party reservations with date & time preferences.</li>
                    <li><strong className="text-[#FFF8EB]">SEO & Local Search:</strong> Structured LocalBusiness schema to attract nearby diners on Google.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
