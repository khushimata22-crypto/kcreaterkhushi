import React from 'react';
import { MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { useBrandImages } from '../context/ImageContext';
import { SafeImage } from './SafeImage';
import { buildWhatsAppUrl, WHATSAPP_PHONE_RAW } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  const { images } = useBrandImages();

  // "Get a Free Inquiry" opens WhatsApp with inquiry intent or can scroll to #inquiry form
  const freeInquiryWhatsAppUrl = buildWhatsAppUrl(
    'Hello Khushi Mata, I would like to get a free inquiry for my project with K Creator.'
  );

  const directWhatsAppUrl = buildWhatsAppUrl(
    'Hello Khushi Mata, I am reaching out to discuss design services for my brand.'
  );

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glows: purple, pink, blue, gold */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-purple-700/25 via-pink-600/15 to-blue-600/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Brand Kicker / Status */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-semibold text-purple-200 mb-6 shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>AI-Powered Digital Creative Studio</span>
              <span className="text-purple-400">·</span>
              <span className="text-amber-300 font-medium">Khushi Mata</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 text-balance">
              Turn Your Ideas Into{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
                Powerful Digital Experiences
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-8">
              Professional Advertisement, Landing Page & Website Design with AI-powered creativity.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* Button 1: Get a Free Inquiry */}
              <a
                href="#inquiry"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-900/25 border border-amber-300 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Get a Free Inquiry</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>

              {/* Button 2: WhatsApp Me */}
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 shadow-xl shadow-emerald-950/40 border border-emerald-400/40 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>WhatsApp Me</span>
              </a>
            </div>

            {/* Quick Proof & Availability Badges */}
            <div className="mt-10 pt-6 border-t border-purple-500/15 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-slate-300 font-medium">Available for New Projects</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-purple-400 font-medium">Direct WhatsApp:</span>
                <span className="text-slate-200 font-mono">{WHATSAPP_PHONE_RAW}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset (Promotional Image) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 opacity-30 blur-xl transition duration-500 group-hover:opacity-60" />

              <div className="relative rounded-2xl overflow-hidden glass-panel border border-purple-500/30 shadow-2xl p-1.5 sm:p-2 bg-[#120a26]/90">
                <SafeImage
                  src={images.heroPromo}
                  fallbackSrc="/images/ai-creator-khushi-promo.svg"
                  alt="AI Creator Khushi Promotional Feature"
                  aspectRatio="16/9"
                  priority={true}
                  className="rounded-xl w-full object-cover"
                />

                {/* Overlaid Floating Official K Creator Crown Logo Emblem */}
                <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl p-1 bg-gradient-to-br from-amber-400 via-purple-600 to-pink-500 shadow-2xl shadow-purple-950/90 transform hover:scale-105 transition-transform duration-300 z-10">
                  <div className="w-full h-full rounded-[14px] overflow-hidden bg-[#0c0618] border border-amber-400/50 p-0.5">
                    <SafeImage
                      src={images.kCreatorLogo}
                      fallbackSrc="/images/k-creator-logo.jpg"
                      alt="K Creator Official Crown Logo"
                      aspectRatio="1/1"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>

                {/* Caption Bar */}
                <div className="py-2.5 px-4 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400" />
                    <span className="font-semibold text-slate-200">AI Creator Khushi Showcase</span>
                  </div>
                  <span className="text-amber-400 font-medium tracking-wider text-[11px]">
                    OFFICIAL ASSET
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
