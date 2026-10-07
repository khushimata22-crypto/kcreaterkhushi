import React from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { useBrandImages } from '../context/ImageContext';
import { buildWhatsAppUrl, defaultMessages, WHATSAPP_PHONE_RAW } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const { images } = useBrandImages();
  const whatsappUrl = buildWhatsAppUrl(defaultMessages.header);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#07050e] border-t border-purple-500/15 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-purple-500/10">
          {/* Logo & Brand Identity */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
            <div className="w-14 h-14 rounded-2xl p-1 bg-gradient-to-br from-amber-400 via-purple-600 to-indigo-600 shadow-lg shadow-purple-950/60 overflow-hidden shrink-0">
              <img
                src={images.kCreatorLogo}
                alt="K Creator Official Logo"
                className="w-full h-full object-cover rounded-xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.endsWith('.svg')) {
                    target.src = '/images/k-creator-logo.svg';
                  }
                }}
              />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-extrabold text-white tracking-wider">
                K Creator
              </h3>
              <p className="text-sm text-slate-300 mt-1 font-medium">
                Creative Advertisement • Landing Page • Website Design
              </p>
              <p className="text-xs text-amber-300/90 font-medium mt-1">
                Created by Khushi Mata
              </p>
            </div>
          </div>

          {/* WhatsApp Direct Action & Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-lg shadow-emerald-950/40 border border-emerald-400/30 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>WhatsApp Me ({WHATSAPP_PHONE_RAW})</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-purple-950/40 hover:bg-purple-900/60 text-slate-300 hover:text-white border border-purple-500/20 transition-colors cursor-pointer"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Subtle Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} K Creator · All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-slate-200 transition-colors">Home</a>
            <a href="#about" className="hover:text-slate-200 transition-colors">About</a>
            <a href="#services" className="hover:text-slate-200 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-slate-200 transition-colors">Portfolio</a>
            <a href="#inquiry" className="hover:text-slate-200 transition-colors">Inquiry</a>
            <a href="#contact" className="hover:text-slate-200 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
