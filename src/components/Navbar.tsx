import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { useBrandImages } from '../context/ImageContext';
import { buildWhatsAppUrl, defaultMessages, WHATSAPP_PHONE_RAW } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const { images } = useBrandImages();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Inquiry', href: '#inquiry' },
    { label: 'Contact', href: '#contact' },
  ];

  const whatsappUrl = buildWhatsAppUrl(defaultMessages.header);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090e]/90 backdrop-blur-xl border-b border-purple-500/15 py-3 shadow-2xl shadow-purple-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Zone */}
          <a
            href="#home"
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-lg"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl p-0.5 bg-gradient-to-br from-amber-400 via-purple-600 to-indigo-600 shadow-md shadow-purple-900/40 group-hover:scale-105 transition-transform duration-200 overflow-hidden">
              <img
                src={images.kCreatorLogo}
                alt="K Creator Logo"
                className="w-full h-full object-cover rounded-[10px]"
                onError={(e) => {
                  // Fallback to svg
                  const target = e.target as HTMLImageElement;
                  if (!target.src.endsWith('.svg')) {
                    target.src = '/images/k-creator-logo.svg';
                  }
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-xl font-extrabold tracking-wider bg-gradient-to-r from-white via-slate-100 to-amber-200 bg-clip-text text-transparent">
                K CREATOR
              </span>
              <span className="text-[10px] tracking-widest text-purple-300/80 uppercase font-medium">
                Digital Creative Brand
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-purple-400 after:to-amber-400 after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Direct WhatsApp Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-lg shadow-emerald-950/40 border border-emerald-400/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white/20 text-white" />
              <span>WhatsApp Me</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-purple-950/40 border border-purple-500/20 text-slate-300 hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl glass-panel border border-purple-500/20 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-purple-900/30 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-1 border-t border-purple-500/15 flex flex-col gap-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-500 shadow-md shadow-emerald-950/30"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Me ({WHATSAPP_PHONE_RAW})</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
