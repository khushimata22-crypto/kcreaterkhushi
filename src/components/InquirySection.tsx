import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle, Sparkles, AlertCircle } from 'lucide-react';
import { openWhatsApp, WHATSAPP_PHONE_RAW } from '../utils/whatsapp';

export const InquirySection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [service, setService] = useState('Advertisement');
  const [projectRequirement, setProjectRequirement] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    'Advertisement',
    'Landing Page',
    'Website',
    'Advertisement + Landing Page',
    'Advertisement + Website',
    'Landing Page + Website',
    'Other',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!whatsappNumber.trim()) {
      setErrorMsg('Please enter your WhatsApp contact number.');
      return;
    }
    if (!projectRequirement.trim()) {
      setErrorMsg('Please provide a brief description of your project requirement.');
      return;
    }

    setErrorMsg('');

    // Exact message template required by the prompt
    const formattedMessage = `Hello Khushi Mata,\nI would like to inquire about K Creator services.\n\nName: ${fullName.trim()}\nWhatsApp Number: ${whatsappNumber.trim()}\nService Required: ${service}\nProject Requirement: ${projectRequirement.trim()}\n\nPlease contact me regarding my project.`;

    // Open WhatsApp directly to +91 9673832077
    openWhatsApp(formattedMessage);
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="py-20 md:py-28 relative overflow-hidden bg-[#0a0718]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-purple-600/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-amber-300 uppercase tracking-widest px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30">
            Start Your Journey
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-4 tracking-tight">
            Tell Me About Your Project
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Fill out the form below and it will instantly connect with Khushi Mata on WhatsApp with your complete project details pre-formatted.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Container */}
          <div className="lg:col-span-8 rounded-3xl glass-panel bg-[#130c29]/90 border border-purple-500/25 p-6 sm:p-10 shadow-2xl relative">
            {submitted ? (
              <div className="py-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6 shadow-inner">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-3">
                  Inquiry Ready on WhatsApp!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
                  Your project details have been formulated. If WhatsApp didn't open automatically, tap the button below to start the conversation with Khushi Mata.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      const formattedMessage = `Hello Khushi Mata,\nI would like to inquire about K Creator services.\n\nName: ${fullName.trim()}\nWhatsApp Number: ${whatsappNumber.trim()}\nService Required: ${service}\nProject Requirement: ${projectRequirement.trim()}\n\nPlease contact me regarding my project.`;
                      openWhatsApp(formattedMessage);
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 shadow-lg cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open WhatsApp Again</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFullName('');
                      setWhatsappNumber('');
                      setProjectRequirement('');
                    }}
                    className="px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-purple-950/40 border border-purple-500/20"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMsg && (
                  <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-red-950/50 border border-red-500/30 text-red-200 text-xs sm:text-sm">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Field 1: Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Full Name <span className="text-pink-400">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#0e0821] border border-purple-500/25 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm transition-colors"
                  />
                </div>

                {/* Field 2: WhatsApp Number */}
                <div>
                  <label htmlFor="whatsappNumber" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    WhatsApp Number <span className="text-pink-400">*</span>
                  </label>
                  <input
                    id="whatsappNumber"
                    type="tel"
                    required
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#0e0821] border border-purple-500/25 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm transition-colors"
                  />
                </div>

                {/* Field 3: Select Service */}
                <div>
                  <label htmlFor="service" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Select Service <span className="text-pink-400">*</span>
                  </label>
                  <select
                    id="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#0e0821] border border-purple-500/25 text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm transition-colors cursor-pointer"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#120a2a] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Field 4: Project Requirement */}
                <div>
                  <label htmlFor="requirement" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Project Requirement <span className="text-pink-400">*</span>
                  </label>
                  <textarea
                    id="requirement"
                    rows={4}
                    required
                    value={projectRequirement}
                    onChange={(e) => setProjectRequirement(e.target.value)}
                    placeholder="Tell me about your business goals, timeline, and any design ideas..."
                    className="w-full px-4 py-3.5 rounded-xl bg-[#0e0821] border border-purple-500/25 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 shadow-xl shadow-emerald-950/40 border border-emerald-400/30 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20" />
                  <span>Send Inquiry on WhatsApp</span>
                </button>

                <p className="text-center text-xs text-slate-400">
                  Direct WhatsApp dispatch to <span className="font-semibold text-slate-200">{WHATSAPP_PHONE_RAW}</span>.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Information & Live Preview */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl glass-panel bg-[#110a24]/70 border border-purple-500/20 p-6">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>How It Works</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-purple-900/60 text-purple-300 font-bold flex items-center justify-center shrink-0">1</span>
                  <span>Enter your project info and preferred service.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-purple-900/60 text-purple-300 font-bold flex items-center justify-center shrink-0">2</span>
                  <span>Click "Send Inquiry on WhatsApp".</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-purple-900/60 text-purple-300 font-bold flex items-center justify-center shrink-0">3</span>
                  <span>WhatsApp opens with the ready message directly to Khushi Mata.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl glass-panel bg-[#110a24]/70 border border-purple-500/20 p-6">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Message Preview
              </h4>
              <div className="p-3.5 rounded-xl bg-[#090516] border border-purple-500/15 text-[11px] font-mono text-purple-200/90 whitespace-pre-line leading-relaxed">
                {`Hello Khushi Mata,
I would like to inquire about K Creator services.

Name: ${fullName.trim() || '[Your Name]'}
WhatsApp Number: ${whatsappNumber.trim() || '[Your Number]'}
Service Required: ${service}
Project Requirement: ${projectRequirement.trim() || '[Your Project Requirement]'}

Please contact me regarding my project.`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
