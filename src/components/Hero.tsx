import React from 'react';
import { Phone, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_INFO } from '../data/products';

export const Hero: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Namaste! I would like to enquire about ordering traditional pickles and spice powders from Yashoda’s Divine Kitchen."
  )}`;

  return (
    <section className="relative bg-[#FAF6EE] pt-8 pb-16 lg:pt-14 lg:pb-20 overflow-hidden border-b border-[#D4AF37]/40">
      
      {/* Background Decorative Traditional Radial Grid */}
      <div className="absolute inset-0 bg-radial-dots opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Content Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D4AF37] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B38728]" />
              <span className="text-xs sm:text-sm font-serif-devotional font-bold uppercase tracking-widest text-[#0D472B]">
                {BUSINESS_INFO.tagline}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#B38728]" />
            </div>

            {/* Main Brand Heading */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#0D472B] tracking-tight leading-tight">
                YASHODA’S<br />
                <span className="text-[#B38728]">DIVINE KITCHEN</span>
              </h1>
              <p className="text-lg sm:text-xl font-serif-devotional font-semibold text-[#991B1B] uppercase tracking-widest pt-1">
                {BUSINESS_INFO.subtitle}
              </p>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              "{BUSINESS_INFO.supportingText}"
            </p>

            {/* Devotional Suitability Banner from Poster */}
            <div className="inline-flex items-center gap-2 bg-[#FFFBEB] px-4 py-2 rounded-xl border border-[#FDE68A] text-xs sm:text-sm font-serif-devotional font-bold text-[#92400E] shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-[#0D472B] flex-shrink-0" />
              <span>{BUSINESS_INFO.suitableForText}</span>
            </div>

            {/* Call to Actions: CALL NOW & WHATSAPP US */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#0D472B] hover:bg-[#14532D] text-white font-serif-devotional text-sm font-bold uppercase tracking-widest transition-all shadow-md active:scale-98"
              >
                <Phone className="w-4 h-4 text-[#E5C158]" />
                <span>CALL NOW</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5B] text-white font-serif-devotional text-sm font-bold uppercase tracking-widest transition-all shadow-md active:scale-98"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WHATSAPP US</span>
              </a>
            </div>

            {/* Quick Contact Micro Info */}
            <div className="pt-2 text-xs text-gray-500 font-serif-devotional">
              <span>Direct Kitchen Helpline: </span>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="font-mono font-bold text-[#0D472B] hover:underline text-sm">
                +91 {BUSINESS_INFO.phone}
              </a>
            </div>

          </div>

          {/* Right Hero Visual Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-md w-full">
              
              {/* Decorative Gold Frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-[#D4AF37] via-[#F3EAD8] to-[#996515] opacity-50 blur-xs" />

              <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-xl bg-[#FAF6EE]">
                <img
                  src="/images/yashoda_hero_poster.jpg"
                  alt="Yashoda's Divine Kitchen traditional pickles and powders promotional display"
                  className="w-full h-auto object-cover object-center aspect-4/3 sm:aspect-square"
                />

                {/* Floating Brand Stamp on Image */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#FAF6EE]/95 backdrop-blur-xs p-3 rounded-xl border border-[#D4AF37]/50 shadow-sm flex items-center gap-3">
                  <BrandLogo size="sm" showText={false} />
                  <div>
                    <span className="block font-serif-devotional font-bold text-xs text-[#0D472B]">
                      Yashoda’s Divine Kitchen
                    </span>
                    <span className="block text-[11px] text-[#991B1B] font-medium">
                      100% Sattvic • Zero Onion & Garlic
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
