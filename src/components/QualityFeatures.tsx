import React from 'react';
import { ShieldCheck, Leaf, Sparkles, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export const QualityFeatures: React.FC = () => {
  return (
    <section className="py-12 bg-[#FAF6EE] border-y border-[#D4AF37]/30 relative overflow-hidden">
      
      {/* Subtle traditional mandala / dot accent */}
      <div className="absolute inset-0 bg-radial-dots opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D4AF37] shadow-2xs mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B38728]" />
            <span className="text-[11px] font-serif-devotional font-bold uppercase tracking-widest text-[#0D472B]">
              Standard of Traditional Purity
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#0D472B]">
            Purity Without Compromise
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 font-serif-devotional">
            Crafted following age-old domestic disciplines, exactly as highlighted on our official label.
          </p>
        </div>

        {/* 3 Prominent Cards from Poster */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: NO ADDED COLORS */}
          <div className="bg-white rounded-2xl border-2 border-[#D4AF37]/60 p-6 text-center shadow-xs hover:shadow-md transition-shadow relative group">
            <div className="w-16 h-16 rounded-full bg-[#FAF6EE] border-2 border-[#D4AF37] flex items-center justify-center mx-auto mb-4 text-[#0D472B] group-hover:scale-105 transition-transform">
              <Sparkles className="w-8 h-8 text-[#B38728]" />
            </div>
            <h3 className="font-serif-devotional font-bold text-lg text-[#0D472B] tracking-wider uppercase">
              NO ADDED COLORS
            </h3>
            <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto my-2" />
            <p className="text-xs text-gray-600 leading-relaxed">
              No artificial colors. The vibrant red in our pickles comes exclusively from sun-ripened chillies and cold-pressed oil.
            </p>
          </div>

          {/* Card 2: NO ARTIFICIAL PRESERVATIVES */}
          <div className="bg-white rounded-2xl border-2 border-[#D4AF37]/60 p-6 text-center shadow-xs hover:shadow-md transition-shadow relative group">
            <div className="w-16 h-16 rounded-full bg-[#FAF6EE] border-2 border-[#D4AF37] flex items-center justify-center mx-auto mb-4 text-[#991B1B] group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-8 h-8 text-[#991B1B]" />
            </div>
            <h3 className="font-serif-devotional font-bold text-lg text-[#0D472B] tracking-wider uppercase">
              NO ARTIFICIAL PRESERVATIVES
            </h3>
            <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto my-2" />
            <p className="text-xs text-gray-600 leading-relaxed">
              Made with care using traditional methods. Free from chemical acidity regulators, sodium benzoate, or artificial vinegar.
            </p>
          </div>

          {/* Card 3: NATURAL PRESERVATIVES */}
          <div className="bg-white rounded-2xl border-2 border-[#D4AF37]/60 p-6 text-center shadow-xs hover:shadow-md transition-shadow relative group">
            <div className="w-16 h-16 rounded-full bg-[#FAF6EE] border-2 border-[#D4AF37] flex items-center justify-center mx-auto mb-4 text-[#0D472B] group-hover:scale-105 transition-transform">
              <Leaf className="w-8 h-8 text-[#0D472B]" />
            </div>
            <h3 className="font-serif-devotional font-bold text-lg text-[#0D472B] tracking-wider uppercase">
              NATURAL PRESERVATIVES
            </h3>
            <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto my-2" />
            <p className="text-xs text-gray-600 leading-relaxed">
              Traditional ingredients & preservation methods. Hand-ground rock salt and pure cold-pressed gingelly oil preserve naturally.
            </p>
          </div>

        </div>

        {/* FSSAI Verified License Strip */}
        <div className="mt-8 bg-white border border-[#D4AF37] rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#FAF6EE] border border-[#D4AF37] flex items-center justify-center text-[#0D472B] font-bold text-xs flex-shrink-0">
              <Award className="w-5 h-5 text-[#B38728]" />
            </div>
            <div className="text-center sm:text-left">
              <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase block">
                Food Safety and Standards Authority of India
              </span>
              <span className="font-mono text-sm sm:text-base font-bold text-[#0D472B] tracking-wider">
                FSSAI LIC. NO. {BUSINESS_INFO.fssaiLicense}
              </span>
            </div>
          </div>

          <div className="text-center sm:text-right">
            <span className="text-xs font-serif-devotional font-bold text-[#991B1B] bg-[#FFFBEB] px-3 py-1 rounded-full border border-[#FDE68A]">
              {BUSINESS_INFO.suitableForText}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
