import React from 'react';
import { AboutSection } from '../components/AboutSection';
import { QualityFeatures } from '../components/QualityFeatures';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Sparkles, Phone, MessageCircle, Heart, ShieldCheck, Leaf } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export const AboutPage: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Namaste! I would like to learn more about Yashoda’s Divine Kitchen and your traditional preparation methods."
  )}`;

  return (
    <div className="space-y-0">
      
      {/* About Page Hero */}
      <section className="relative bg-[#FAF6EE] py-14 border-b border-[#D4AF37]/40 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Official Emblem */}
          <div className="flex justify-center mb-4">
            <div className="relative rounded-full drop-shadow-md hover:scale-105 transition-transform duration-200">
              <img
                src="/images/yashoda_logo.png"
                alt="Yashoda’s Divine Kitchen - Flavors of Tradition"
                className="w-28 h-28 sm:w-36 sm:h-36 object-contain rounded-full"
              />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D4AF37] shadow-2xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B38728]" />
            <span className="text-[11px] font-serif-devotional font-bold uppercase tracking-widest text-[#0D472B]">
              Our Heritage & Values
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-bold text-[#0D472B]">
            About Yashoda’s Divine Kitchen
          </h1>

          <p className="text-sm sm:text-base text-gray-700 mt-3 font-serif-devotional max-w-2xl mx-auto leading-relaxed">
            "{BUSINESS_INFO.supportingText}"
          </p>

          <div className="mt-4 inline-flex items-center gap-2 bg-[#FFFBEB] px-4 py-2 rounded-xl border border-[#FDE68A] text-xs font-serif-devotional font-bold text-[#92400E]">
            <ShieldCheck className="w-4 h-4 text-[#0D472B]" />
            <span>{BUSINESS_INFO.suitableForText}</span>
          </div>

        </div>
      </section>

      {/* Main Story: Flavors of Tradition */}
      <AboutSection />

      {/* Traditional Principles Section */}
      <section className="py-16 bg-white border-b border-[#D4AF37]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-serif-devotional font-bold text-[#0D472B]">
              Our Kitchen Principles
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Adhering faithfully to traditional domestic food preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF6EE] border border-[#D4AF37]/40 text-center">
              <div className="w-12 h-12 rounded-full bg-white border border-[#D4AF37] flex items-center justify-center mx-auto mb-3 text-[#0D472B]">
                <Leaf className="w-6 h-6 text-[#0D472B]" />
              </div>
              <h4 className="font-serif-devotional font-bold text-base text-[#0D472B] mb-2 uppercase tracking-wide">
                Strictly Sattvic
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Prepared with reverence in a sacred atmosphere completely free from onions, garlic, or non-vegetarian cooking utensils.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF6EE] border border-[#D4AF37]/40 text-center">
              <div className="w-12 h-12 rounded-full bg-white border border-[#D4AF37] flex items-center justify-center mx-auto mb-3 text-[#991B1B]">
                <ShieldCheck className="w-6 h-6 text-[#991B1B]" />
              </div>
              <h4 className="font-serif-devotional font-bold text-base text-[#0D472B] mb-2 uppercase tracking-wide">
                Natural Preservation
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                We preserve our pickles exclusively using time-tested methods: cold-pressed sesame oil, rock salt, and natural sunlight.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF6EE] border border-[#D4AF37]/40 text-center">
              <div className="w-12 h-12 rounded-full bg-white border border-[#D4AF37] flex items-center justify-center mx-auto mb-3 text-[#B38728]">
                <Heart className="w-6 h-6 text-[#B38728]" />
              </div>
              <h4 className="font-serif-devotional font-bold text-base text-[#0D472B] mb-2 uppercase tracking-wide">
                Stone Ground Flavors
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Our podis and daily masalas are slow-roasted in traditional iron vessels and milled to preserve their innate essential oils.
              </p>
            </div>
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-[#0D472B] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-[#E5C158] uppercase">Licensed Food Business</span>
              <h4 className="font-serif-devotional font-bold text-lg text-white">FSSAI LIC. NO. {BUSINESS_INFO.fssaiLicense}</h4>
            </div>
            <div className="flex gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="px-4 py-2.5 rounded-xl bg-white text-[#0D472B] font-serif-devotional text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" /> Call Kitchen
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-[#25D366] text-white font-serif-devotional text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Features from Poster */}
      <QualityFeatures />

      {/* Why Choose Us */}
      <WhyChooseUs />

    </div>
  );
};
