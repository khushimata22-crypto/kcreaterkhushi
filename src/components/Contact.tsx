import React, { useState } from 'react';
import { MessageCircle, Copy, Check, Sparkles, Phone, ArrowUpRight } from 'lucide-react';
import { buildWhatsAppUrl, defaultMessages, WHATSAPP_PHONE_RAW, WHATSAPP_PHONE_CLEAN } from '../utils/whatsapp';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const whatsappUrl = buildWhatsAppUrl(defaultMessages.contactDirect);

  const handleCopy = () => {
    navigator.clipboard.writeText(WHATSAPP_PHONE_RAW);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const services = [
    'Advertisement Design',
    'Landing Page Design',
    'Website Design',
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden bg-[#0c081c]/70">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-700/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-purple-300 uppercase tracking-widest px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30">
            Get In Touch
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Ready to turn your business idea into an attractive, high-converting digital experience? Connect directly via WhatsApp.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Brand & Creator Info */}
          <div className="md:col-span-6 rounded-2xl glass-panel bg-[#120a28]/80 border border-purple-500/20 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-widest mb-3">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Brand & Creative Leadership</span>
              </div>

              <h3 className="font-heading text-2xl font-bold text-white mb-1">
                K Creator
              </h3>
              <p className="text-base text-purple-300 font-semibold mb-6">
                Khushi Mata
              </p>

              <div className="pt-4 border-t border-purple-500/15">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
                  Services Offered:
                </span>
                <ul className="space-y-2.5">
                  {services.map((svc) => (
                    <li key={svc} className="flex items-center gap-2.5 text-sm text-slate-200">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span>{svc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-purple-500/15 text-xs text-slate-400">
              Creative Agency Based in India · Global Client Delivery
            </div>
          </div>

          {/* Card 2: Direct WhatsApp Action */}
          <div className="md:col-span-6 rounded-2xl glass-panel bg-gradient-to-br from-[#180e36] via-[#1c0f42] to-[#120a2a] border border-emerald-500/30 p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6 shadow-inner">
                <MessageCircle className="w-7 h-7" />
              </div>

              <h3 className="font-heading text-2xl font-bold text-white mb-2">
                Direct WhatsApp Contact
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Connect directly with Khushi Mata for swift consultation, quotation, and project kick-off.
              </p>

              {/* Phone Display Box */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-[#0e0722] border border-purple-500/25 mb-6">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-400" />
                  <span className="font-mono text-base sm:text-lg font-bold text-white tracking-wide">
                    {WHATSAPP_PHONE_RAW}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="p-2 rounded-lg bg-purple-950/60 hover:bg-purple-900/60 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy number"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Clickable WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-base text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 shadow-xl shadow-emerald-950/50 border border-emerald-400/40 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Message on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
