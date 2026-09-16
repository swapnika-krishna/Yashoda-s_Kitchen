import React from 'react';
import { Sparkles, Leaf, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#FAF6EE] border-b border-[#D4AF37]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Imagery Column from Poster */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-lg bg-white">
              <img
                src="/images/yashoda_spices_powders.jpg"
                alt="Traditional Indian spices, red chillies, and brass bowls at Yashoda's Divine Kitchen"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-serif-devotional text-[#E5C158] font-bold uppercase tracking-widest block">
                  Sacred Kitchen Craft
                </span>
                <p className="font-serif-devotional font-bold text-sm sm:text-base leading-snug">
                  "Traditional flavors prepared with care, inspired by timeless Indian recipes."
                </p>
              </div>
            </div>

            {/* Quality Seal Box */}
            <div className="p-4 bg-white rounded-xl border border-[#D4AF37]/50 shadow-2xs flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#0D472B]" />
                <span className="font-bold text-[#0D472B] font-serif-devotional">FSSAI Certified</span>
              </div>
              <span className="font-mono text-gray-600 font-semibold">{BUSINESS_INFO.fssaiLicense}</span>
            </div>
          </div>

          {/* Right Narrative Column */}
          <div className="lg:col-span-7 space-y-5">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D4AF37] shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B38728]" />
              <span className="text-[11px] font-serif-devotional font-bold uppercase tracking-widest text-[#0D472B]">
                {BUSINESS_INFO.tagline}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#0D472B]">
              Flavors of Tradition
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
              <p>
                <strong>Yashoda’s Divine Kitchen</strong> brings traditional Indian flavors through our specialized collection of Sattvic pickles, podis, masalas, and daily spice powders. Our recipes are rooted deeply in regional domestic heritage, created with devotion and patience.
              </p>

              <p>
                We focus on authentic Indian culinary traditions where ingredients are handled with reverence. Our pickles are naturally cured in porcelain Bharani jars using cold-pressed gingelly oil and pure rock salt, while our powders and podis are stone-ground to preserve the essential volatile oils and comforting aromas of home cooking.
              </p>

              <p>
                Every preparation is strictly made without onions or garlic, ensuring that our products are completely <strong>{BUSINESS_INFO.suitableForText}</strong>, as well as for all families who cherish clean, mindful Indian nutrition.
              </p>
            </div>

            {/* 3 Core Highlights */}
            <div className="grid grid-cols-3 gap-3 pt-3 text-center">
              <div className="p-3 rounded-xl bg-white border border-[#D4AF37]/30 shadow-2xs">
                <Leaf className="w-5 h-5 text-[#0D472B] mx-auto mb-1" />
                <span className="font-bold text-[11px] text-[#0D472B] block uppercase tracking-wider">No Added Colors</span>
                <span className="text-[10px] text-gray-500">100% Natural Spices</span>
              </div>

              <div className="p-3 rounded-xl bg-white border border-[#D4AF37]/30 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-[#991B1B] mx-auto mb-1" />
                <span className="font-bold text-[11px] text-[#0D472B] block uppercase tracking-wider">Natural Preservation</span>
                <span className="text-[10px] text-gray-500">Oil & Vedic Rock Salt</span>
              </div>

              <div className="p-3 rounded-xl bg-white border border-[#D4AF37]/30 shadow-2xs">
                <Heart className="w-5 h-5 text-[#B38728] mx-auto mb-1" />
                <span className="font-bold text-[11px] text-[#0D472B] block uppercase tracking-wider">Sattvic Vrata</span>
                <span className="text-[10px] text-gray-500">No Onion • No Garlic</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
