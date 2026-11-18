import React, { useState } from 'react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryItems, GalleryItem } from '../data/restaurantData';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Biryani', 'Curries', 'Tandoor', 'Ambience'];

  const filteredGallery =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (item: GalleryItem) => {
    const originalIndex = galleryItems.findIndex((g) => g.id === item.id);
    setActiveLightboxIndex(originalIndex);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : galleryItems.length - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev! < galleryItems.length - 1 ? prev! + 1 : 0));
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#120E0E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D5A64A] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Story</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFF8EB] mb-4">
            The Culinary Gallery
          </h2>
          <p className="text-sm sm:text-base text-[#FFF8EB]/75 font-light leading-relaxed">
            Immerse yourself in the colours, textures, and craft of authentic Indian dining.
            Click any image to view in high definition.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#D5A64A] text-[#191515] font-semibold shadow'
                  : 'bg-[#191515] text-[#FFF8EB]/70 hover:text-[#FFF8EB] border border-[#D5A64A]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-[#D5A64A]/25 cursor-pointer shadow-lg card-luxury-hover"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#191515] via-[#191515]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* View Icon Overlay */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#191515]/80 border border-[#D5A64A]/50 flex items-center justify-center text-[#D5A64A] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-100 scale-75">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <span className="text-[11px] uppercase tracking-wider text-[#D5A64A] font-semibold block mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif-luxury text-lg font-bold text-[#FFF8EB] leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#FFF8EB]/75 font-light line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div
          onClick={() => setActiveLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-[#191515] border border-[#D5A64A]/40 text-[#FFF8EB] hover:text-[#D5A64A] transition-colors z-20 cursor-pointer"
            aria-label="Close high-resolution photo viewer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#191515]/80 border border-[#D5A64A]/40 text-[#FFF8EB] hover:text-[#D5A64A] transition-colors z-20 hidden sm:flex cursor-pointer"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#191515]/80 border border-[#D5A64A]/40 text-[#FFF8EB] hover:text-[#D5A64A] transition-colors z-20 hidden sm:flex cursor-pointer"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full flex flex-col items-center"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#D5A64A]/40 shadow-2xl max-h-[75vh] w-full flex items-center justify-center bg-black">
              <img
                src={galleryItems[activeLightboxIndex].image}
                alt={galleryItems[activeLightboxIndex].title}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="mt-4 text-center max-w-xl">
              <span className="text-xs uppercase tracking-widest text-[#D5A64A] font-semibold">
                {galleryItems[activeLightboxIndex].category}
              </span>
              <h3 className="font-serif-luxury text-xl font-bold text-[#FFF8EB] mt-1">
                {galleryItems[activeLightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#FFF8EB]/80 font-light mt-1">
                {galleryItems[activeLightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
