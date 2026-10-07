import React from 'react';
import {
  Palette,
  Sparkles,
  Award,
  Smartphone,
  Sliders,
  Target,
  MessageCircle,
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      title: 'Creative & Modern Designs',
      description: 'Sophisticated aesthetics, balanced layouts, and premium visuals that elevate your brand image.',
      icon: Palette,
      accent: 'from-purple-500/20 to-pink-500/10 border-purple-500/30',
      iconColor: 'text-purple-400',
    },
    {
      title: 'AI-Powered Creative Solutions',
      description: 'Leveraging cutting-edge digital AI tools for smart composition, rapid ideation, and impactful visuals.',
      icon: Sparkles,
      accent: 'from-amber-500/20 to-purple-500/10 border-amber-500/30',
      iconColor: 'text-amber-400',
    },
    {
      title: 'Professional Presentation',
      description: 'Flawless design standards tailored to inspire confidence, trust, and credibility among your clients.',
      icon: Award,
      accent: 'from-blue-500/20 to-purple-500/10 border-blue-500/30',
      iconColor: 'text-blue-400',
    },
    {
      title: 'Mobile-Friendly Designs',
      description: '100% responsive interfaces engineered to look stunning and load quickly across smartphones, tablets, and desktops.',
      icon: Smartphone,
      accent: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30',
      iconColor: 'text-emerald-400',
    },
    {
      title: 'Customized According To Your Business',
      description: 'No cookie-cutter templates. Every asset is carefully aligned with your industry, brand voice, and goals.',
      icon: Sliders,
      accent: 'from-pink-500/20 to-purple-500/10 border-pink-500/30',
      iconColor: 'text-pink-400',
    },
    {
      title: 'Clear Call-To-Action',
      description: 'Strategic funnel design and compelling action triggers designed to turn casual visitors into paying leads.',
      icon: Target,
      accent: 'from-amber-500/20 to-yellow-500/10 border-amber-500/30',
      iconColor: 'text-amber-300',
    },
    {
      title: 'Direct WhatsApp Communication',
      description: 'Quick, transparent, and direct collaboration with Khushi Mata without bureaucratic agency delays.',
      icon: MessageCircle,
      accent: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30',
      iconColor: 'text-emerald-400',
      highlighted: true,
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#0c0918]/70">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-amber-300 uppercase tracking-widest px-3 py-1 rounded-full bg-amber-950/50 border border-amber-500/30">
            The K Creator Edge
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight">
            Why Choose K Creator?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Partnering with Khushi Mata means getting high-caliber design, personal accountability, and conversion-focused digital experiences.
          </p>
        </div>

        {/* 7 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className={`rounded-2xl p-6 sm:p-7 glass-panel border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                  pt.highlighted
                    ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-br from-emerald-950/40 via-purple-950/30 to-[#0e0a22] border-emerald-500/40 shadow-lg shadow-emerald-950/20'
                    : 'bg-[#110b26]/70 border-purple-500/15 hover:border-purple-400/35'
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center shrink-0 shadow-inner">
                    <Icon className={`w-6 h-6 ${pt.iconColor}`} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white tracking-tight">
                    {pt.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
