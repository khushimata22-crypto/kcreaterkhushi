import React from 'react';
import { Megaphone, Layout, Globe, MessageCircle, ArrowUpRight, Check } from 'lucide-react';
import { buildWhatsAppUrl, defaultMessages } from '../utils/whatsapp';

export const Services: React.FC = () => {
  const servicesData = [
    {
      id: 'ads',
      name: 'Advertisement Design',
      icon: Megaphone,
      tagline: 'High-Impact Creative Ads',
      description:
        'Creative and professional advertisements designed to present your product or service in an attractive and engaging way.',
      features: [
        'Engaging Social & Display Ad Creatives',
        'AI-Enhanced Visual Composition',
        'Clear Value & Call-To-Action Focus',
        'Customized for Your Target Audience',
      ],
      borderHover: 'hover:border-amber-400/40',
      badgeColor: 'text-amber-300 bg-amber-950/40 border-amber-500/30',
      buttonBg: 'from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950',
    },
    {
      id: 'landing',
      name: 'Landing Page Design',
      icon: Layout,
      tagline: 'Conversion-Focused Funnels',
      description:
        'Modern and responsive landing pages designed with clear information, attractive visuals and strong call-to-action sections.',
      features: [
        'Mobile & Tablet Responsive Framework',
        'Compelling Hierarchy & Story Flow',
        'High-Conversion Action Placements',
        'Fast, Lightweight & Optimized Layout',
      ],
      borderHover: 'hover:border-purple-400/40',
      badgeColor: 'text-purple-300 bg-purple-950/40 border-purple-500/30',
      buttonBg: 'from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white',
      featured: true,
    },
    {
      id: 'website',
      name: 'Website Design',
      icon: Globe,
      tagline: 'Full Digital Presence',
      description:
        'Professional, modern and responsive websites created according to your business, brand and requirements.',
      features: [
        'Tailored Brand Identity Alignment',
        'Seamless Multi-Device Experience',
        'Integrated Contact & Inquiry Systems',
        'Direct WhatsApp Customer Connect',
      ],
      borderHover: 'hover:border-blue-400/40',
      badgeColor: 'text-blue-300 bg-blue-950/40 border-blue-500/30',
      buttonBg: 'from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-purple-300 uppercase tracking-widest px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30">
            What I Deliver
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight">
            My Services
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Tailored digital creative solutions designed by Khushi Mata to position your business with authority and drive customer action.
          </p>
        </div>

        {/* 3 Premium Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {servicesData.map((service) => {
            const Icon = service.icon;
            const enquireWhatsAppUrl = buildWhatsAppUrl(defaultMessages.serviceInquiry(service.name));

            return (
              <div
                key={service.id}
                className={`relative flex flex-col justify-between rounded-2xl glass-panel p-7 sm:p-8 transition-all duration-300 ${
                  service.borderHover
                } ${
                  service.featured
                    ? 'border-purple-500/40 bg-[#160f2e]/80 shadow-2xl shadow-purple-950/50 -translate-y-1'
                    : 'border-purple-500/15 bg-[#100b24]/60 hover:-translate-y-1'
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-[11px] font-bold text-white uppercase tracking-wider shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  {/* Service Icon & Tagline */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl p-3 bg-purple-950/70 border border-purple-500/30 flex items-center justify-center text-purple-300 shadow-inner">
                      <Icon className="w-7 h-7 text-amber-300" />
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${service.badgeColor}`}>
                      {service.tagline}
                    </span>
                  </div>

                  {/* Service Name */}
                  <h3 className="font-heading text-2xl font-bold text-white mb-3 tracking-tight">
                    {service.name}
                  </h3>

                  {/* Description from prompt */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-purple-500/10 mb-8">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Inquiry Button: "Enquire Now" */}
                <div className="pt-2">
                  <a
                    href={enquireWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-bold text-sm bg-gradient-to-r ${service.buttonBg} shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enquire Now</span>
                    <ArrowUpRight className="w-4 h-4 ml-0.5 opacity-80" />
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
