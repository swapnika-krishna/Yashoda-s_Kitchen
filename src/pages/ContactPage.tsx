import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { GoogleMap } from '../components/GoogleMap';
import { Sparkles, Phone, MessageCircle, Navigation, Award, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export const ContactPage: React.FC = () => {
  return (
    <div className="space-y-0">
      
      {/* Contact Page Header */}
      <section className="relative bg-[#FAF6EE] py-14 border-b border-[#D4AF37]/40 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D4AF37] shadow-2xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B38728]" />
            <span className="text-[11px] font-serif-devotional font-bold uppercase tracking-widest text-[#0D472B]">
              Get In Touch
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-bold text-[#0D472B]">
            Contact Yashoda’s Divine Kitchen
          </h1>

          <p className="text-sm sm:text-base text-gray-700 mt-2 font-serif-devotional max-w-xl mx-auto">
            Direct communication for retail enquiries, domestic orders, and Google Business Profile visits.
          </p>

          <div className="mt-3 inline-flex items-center gap-2 bg-[#FFFBEB] px-4 py-1.5 rounded-full border border-[#FDE68A] text-xs font-serif-devotional font-bold text-[#92400E]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0D472B]" />
            <span>FSSAI LIC. NO. {BUSINESS_INFO.fssaiLicense}</span>
          </div>

        </div>
      </section>

      {/* Prominent Contact Section with Call, WhatsApp, Get Directions */}
      <ContactSection />

      {/* Dedicated Find Us / Google Maps Section */}
      <GoogleMap />

    </div>
  );
};
