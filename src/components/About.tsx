import React from 'react';
import { MessageCircle, CheckCircle2, Award, Zap } from 'lucide-react';
import { useBrandImages } from '../context/ImageContext';
import { SafeImage } from './SafeImage';
import { buildWhatsAppUrl, defaultMessages, WHATSAPP_PHONE_RAW } from '../utils/whatsapp';

export const About: React.FC = () => {
  const { images, updateImage } = useBrandImages();
  const startProjectUrl = buildWhatsAppUrl(defaultMessages.startProject);

  const keyStrengths = [
    'Customized Advertisement Campaigns',
    'High-Conversion Landing Page Design',
    'Modern, Responsive Business Websites',
    'AI-Powered Visual & Creative Solutions',
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden bg-[#0c0919]/60">
      {/* Subtle radial background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-900/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Khushi Mata Professional Portrait & Brand Emblem */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              {/* Decorative background aura */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-400 rounded-3xl blur-lg opacity-40" />

              {/* Portrait Container */}
              <div className="relative rounded-2xl overflow-hidden glass-panel border border-purple-500/40 p-2 sm:p-2.5 bg-[#120a26] shadow-2xl shadow-purple-950/60 transition-all duration-300 hover:border-amber-400/40 hover:shadow-amber-500/10 group">
                <SafeImage
                  src={images.khushiPortrait}
                  fallbackSrc="/images/khushi-mata-portrait.svg"
                  alt="Khushi Mata - Founder & Creative Director of K Creator"
                  aspectRatio="3/4"
                  className="rounded-xl w-full object-cover"
                />

                {/* Direct Photo Change/Upload Button */}
                <div className="absolute top-4 right-4 z-20">
                  <label
                    htmlFor="portrait-upload-direct"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/70 hover:bg-black/90 text-amber-300 hover:text-amber-200 border border-amber-400/30 backdrop-blur-md text-xs font-semibold cursor-pointer shadow-lg transition-all duration-200 hover:scale-105"
                    title="Change / Upload Your Photo"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
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
                    <span>Change Photo</span>
                  </label>
                  <input
                    id="portrait-upload-direct"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = () => {
                          if (typeof reader.result === 'string') {
                            updateImage('khushiPortrait', reader.result);
                          }
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                </div>

                {/* Overlaid Floating K Creator Official Crown Logo Emblem */}
                <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl p-1 bg-gradient-to-br from-amber-400 via-purple-600 to-pink-500 shadow-2xl shadow-purple-950/80 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-[14px] overflow-hidden bg-[#0c0618] border border-amber-400/40 p-0.5">
                    <SafeImage
                      src={images.kCreatorLogo}
                      fallbackSrc="/images/k-creator-logo.jpg"
                      alt="K Creator Official Crown Logo"
                      aspectRatio="1/1"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>

                {/* Name Plate */}
                <div className="mt-3 px-3 py-2 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white font-heading">Khushi Mata</h3>
                    <p className="text-xs text-amber-300 font-medium">Digital Creative Director</p>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-purple-900/50 border border-purple-500/30 text-purple-200">
                    K Creator
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Message */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">
              <Award className="w-4 h-4 text-amber-400" />
              <span>About the Creator</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-400 to-purple-400">Khushi Mata</span>
            </h2>

            {/* Prompt exact text requirement */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-8">
              "I create professional advertisements, landing pages and websites using modern design and AI-powered creative solutions. My goal is to turn your business ideas into attractive digital experiences that communicate your brand clearly."
            </p>

            {/* Feature points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-9">
              {keyStrengths.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/15 text-slate-200 text-sm font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Call to action button */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={startProjectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-500 hover:to-pink-500 shadow-xl shadow-purple-950/50 border border-purple-400/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Start Your Project</span>
                <MessageCircle className="w-5 h-5 fill-white/20" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/50 transition-colors"
              >
                <span>Explore Services</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
