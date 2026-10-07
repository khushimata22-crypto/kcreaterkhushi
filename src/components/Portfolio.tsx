import React, { useState } from 'react';
import { Sparkles, MessageCircle, ExternalLink, Eye } from 'lucide-react';
import { useBrandImages } from '../context/ImageContext';
import { SafeImage } from './SafeImage';
import { buildWhatsAppUrl } from '../utils/whatsapp';

type CategoryType = 'All' | 'Advertisement' | 'Landing Pages' | 'Websites' | 'Creative Designs';

export const Portfolio: React.FC = () => {
  const { images, updateImage } = useBrandImages();
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');

  const categories: CategoryType[] = [
    'All',
    'Advertisement',
    'Landing Pages',
    'Websites',
    'Creative Designs',
  ];

  // Portfolio items showcasing K Creator works including the provided official assets
  const portfolioItems = [
    {
      id: 'promo-showcase',
      title: 'AI Creator Khushi Promotional Campaign',
      category: 'Advertisement' as const,
      image: images.heroPromo,
      fallbackSrc: '/images/ai-creator-khushi-promo.svg',
      description: 'Official digital brand promotion campaign combining futuristic AI typography, glowing visual assets, and high-conversion layout.',
      highlight: 'Official Asset',
      aspectRatio: '16/9',
    },
    {
      id: 'logo-brand-mark',
      title: 'AI Creator Khushi Studio Emblem',
      category: 'Creative Designs' as const,
      image: images.aiCreatorLogo,
      fallbackSrc: '/images/ai-creator-khushi-logo.svg',
      description: 'Original futuristic insignia and circular emblem badge featuring royal gold and purple glowing contours.',
      highlight: 'Official Asset',
      aspectRatio: '1/1',
    },
    {
      id: 'k-creator-brand',
      title: 'K Creator Luxury Brand Identity',
      category: 'Creative Designs' as const,
      image: images.kCreatorLogo,
      fallbackSrc: '/images/k-creator-logo.jpg',
      description: 'Official 3D luxury gold & royal purple crown monogram emblem for K Creator.',
      highlight: 'Official Brand Logo',
      aspectRatio: '1/1',
    },
    {
      id: 'landing-fintech',
      title: 'Next-Gen FinTech Responsive Landing Page',
      category: 'Landing Pages' as const,
      image: images.heroPromo,
      fallbackSrc: '/images/ai-creator-khushi-promo.svg',
      description: 'High-conversion SaaS landing page with dark mode hierarchy, interactive calculator cards, and seamless lead capture.',
      highlight: 'Landing Page Concept',
      aspectRatio: '16/9',
    },
    {
      id: 'web-agency',
      title: 'Boutique Architecture Studio Website',
      category: 'Websites' as const,
      image: images.heroPromo,
      fallbackSrc: '/images/ai-creator-khushi-promo.svg',
      description: 'Editorial-grade multi-page website featuring minimalist grid alignment, fluid typography, and inquiry funnels.',
      highlight: 'Full Website Design',
      aspectRatio: '16/9',
    },
    {
      id: 'ad-ecommerce',
      title: 'Luxury Product Launch Advertisement Suite',
      category: 'Advertisement' as const,
      image: images.aiCreatorLogo,
      fallbackSrc: '/images/ai-creator-khushi-logo.svg',
      description: 'Targeted visual creatives optimized for Instagram, Facebook, and Google Display networks with high click-through rates.',
      highlight: 'Ad Campaign',
      aspectRatio: '1/1',
    },
  ];

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-700/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold text-purple-300 uppercase tracking-widest px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30">
            Selected Works
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight">
            Creative Work By K Creator
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Explore authentic brand assets, advertising campaigns, and responsive interfaces designed with precision and aesthetic focus.
          </p>
        </div>

        {/* Interactive Filter Tabs (Segmented Control conforming to constitution) */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#140e2b]/80 border border-purple-500/20 rounded-2xl max-w-2xl mx-auto mb-14 backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-950/50'
                  : 'text-slate-300 hover:text-white hover:bg-purple-900/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const itemInquiryUrl = buildWhatsAppUrl(
              `Hello Khushi Mata, I saw your portfolio work "${item.title}" and would like to build something similar for my business.`
            );

            const isMainLogo = item.id === 'k-creator-brand';
            const isAiLogo = item.id === 'logo-brand-mark';

            return (
              <div
                key={item.id}
                className={`group flex flex-col justify-between rounded-2xl glass-panel overflow-hidden transition-all duration-300 ${
                  isAiLogo
                    ? 'bg-[#140b28]/95 border-2 border-pink-500/50 shadow-2xl shadow-pink-950/60 hover:border-cyan-400/70 hover:shadow-cyan-500/25 ring-1 ring-cyan-500/30'
                    : isMainLogo
                    ? 'bg-[#160b2e]/95 border-2 border-amber-400/60 shadow-2xl shadow-purple-950/80 ring-2 ring-purple-500/30 hover:border-amber-300 hover:ring-amber-400/50 hover:shadow-amber-500/20'
                    : 'bg-[#110b24]/70 border border-purple-500/20 hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-950/40'
                }`}
              >
                <div>
                  {/* Image container */}
                  <div className="relative bg-[#0c081a] overflow-hidden group/img">
                    <SafeImage
                      src={item.image}
                      fallbackSrc={item.fallbackSrc}
                      alt={item.title}
                      aspectRatio={item.aspectRatio}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Corner Tag */}
                    <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-lg backdrop-blur-md border text-[11px] font-semibold ${
                      isAiLogo
                        ? 'bg-black/80 border-pink-500/30 text-pink-300'
                        : 'bg-black/75 border-white/10 text-amber-300'
                    }`}>
                      {item.highlight}
                    </div>

                    {/* Direct "Change Image" Button on AI Creator Logo Card */}
                    {isAiLogo && (
                      <div className="absolute top-3 right-3 z-20">
                        <label
                          htmlFor="portfolio-ai-logo-upload"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black text-pink-300 hover:text-cyan-300 border border-pink-500/40 hover:border-cyan-400/60 backdrop-blur-md text-xs font-semibold cursor-pointer shadow-lg transition-all duration-200 hover:scale-105"
                          title="Change / Upload Your Logo"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="17 8 12 3 7 8" />
                            <line x1="12" x2="12" y1="3" y2="15" />
                          </svg>
                          <span>Change Image</span>
                        </label>
                        <input
                          id="portfolio-ai-logo-upload"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onload = () => {
                                if (typeof reader.result === 'string') {
                                  updateImage('aiCreatorLogo', reader.result);
                                }
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                        />
                      </div>
                    )}

                    {/* Direct "Change Logo" Button on K Creator Logo Card */}
                    {isMainLogo && (
                      <div className="absolute top-3 right-3 z-20">
                        <label
                          htmlFor="portfolio-logo-upload"
                          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-purple-700 hover:from-amber-400 hover:via-amber-500 hover:to-purple-600 text-white border border-amber-300/80 backdrop-blur-md shadow-xl shadow-amber-950/60 cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 group/btn"
                          title="Click to Upload / Change Your Logo"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-amber-200 group-hover/btn:rotate-12 transition-transform duration-200"
                          >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="17 8 12 3 7 8" />
                            <line x1="12" x2="12" y1="3" y2="15" />
                          </svg>
                          <span className="font-extrabold tracking-wider uppercase text-[11px] text-white drop-shadow-md">
                            Change Logo
                          </span>
                        </label>
                        <input
                          id="portfolio-logo-upload"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onload = () => {
                                if (typeof reader.result === 'string') {
                                  updateImage('kCreatorLogo', reader.result);
                                }
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-purple-300/80 mb-2 font-medium">
                      <span>{item.category}</span>
                      <span>·</span>
                      <span className="text-slate-400">K Creator</span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-white mb-2.5 group-hover:text-amber-200 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 border-t border-purple-500/10 mt-4">
                  <a
                    href={itemInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 hover:text-amber-200 transition-colors pt-3"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Inquire About Similar Work</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
