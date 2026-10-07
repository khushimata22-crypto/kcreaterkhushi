import React from 'react';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { buildWhatsAppUrl, defaultMessages, WHATSAPP_PHONE_RAW } from '../utils/whatsapp';

export const WhatsAppCTA: React.FC = () => {
  const ctaUrl = buildWhatsAppUrl(defaultMessages.chatCta);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background glow banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 lg:p-16 bg-gradient-to-r from-[#170e33] via-[#221045] to-[#130b2c] border border-purple-500/30 shadow-2xl text-center">
          {/* Decorative ambient spots */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-amber-500/15 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 bg-emerald-500/15 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/50 border border-purple-400/30 text-xs font-semibold text-purple-200 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Direct Creative Collaboration</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Have a Project In Mind?
            </h2>

            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed">
              Let's create something professional for your business.
            </p>

            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 shadow-2xl shadow-emerald-950/60 border border-emerald-400/40 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            >
              <MessageCircle className="w-6 h-6 fill-white/20" />
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-5 h-5 ml-1" />
            </a>

            <div className="mt-6 text-xs text-slate-400 flex items-center gap-2">
              <span>Instant Chat:</span>
              <span className="font-mono text-slate-200 font-semibold">{WHATSAPP_PHONE_RAW}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
