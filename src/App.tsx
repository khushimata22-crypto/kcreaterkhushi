/**
 * K Creator - Digital Creative Brand
 * Owner: Khushi Mata
 * WhatsApp: +91 9673832077
 */

import React from 'react';
import { ImageProvider } from './context/ImageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Portfolio } from './components/Portfolio';
import { InquirySection } from './components/InquirySection';
import { WhatsAppCTA } from './components/WhatsAppCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ImageManagerModal } from './components/ImageManagerModal';

export default function App() {
  return (
    <ImageProvider>
      <div className="relative min-h-screen bg-[#09090e] text-slate-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
        {/* Top Sticky Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-grow">
          {/* Hero Section with AI Creator Khushi Promo */}
          <Hero />

          {/* About Me Section with Khushi Mata Portrait & AI Creator Logo */}
          <About />

          {/* My Services Section */}
          <Services />

          {/* Why Choose K Creator Section */}
          <WhyChooseUs />

          {/* Portfolio & Creative Work Section */}
          <Portfolio />

          {/* Inquiry Form Section with Automatic WhatsApp Message Generator */}
          <InquirySection />

          {/* Dedicated WhatsApp CTA Section */}
          <WhatsAppCTA />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp Action Button */}
        <FloatingWhatsApp />

        {/* Image Assets Modal */}
        <ImageManagerModal />
      </div>
    </ImageProvider>
  );
}
