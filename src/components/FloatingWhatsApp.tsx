import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, defaultMessages, WHATSAPP_PHONE_RAW } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(defaultMessages.chatCta);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <div className="hidden sm:block mr-3 px-3 py-1.5 rounded-xl bg-[#140b2a] border border-purple-500/30 text-xs font-semibold text-slate-200 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Chat with Khushi Mata
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp chat with Khushi Mata"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-2xl shadow-emerald-950/60 border border-emerald-400/40 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 animate-ping opacity-75" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#09090e]" />
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </a>
    </div>
  );
};
