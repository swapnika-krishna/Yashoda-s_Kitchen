import React from 'react';
import { ProductGrid } from '../components/ProductGrid';
import { Sparkles, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export const PowdersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF6EE] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D4AF37] shadow-2xs mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B38728]" />
            <span className="text-[11px] font-serif-devotional font-bold uppercase tracking-widest text-[#0D472B]">
              Hand-Sorted & Stone-Ground
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#0D472B]">
            Powders, Podis & Masalas
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-2xl mx-auto font-serif-devotional">
            Aromatic single-origin spices, traditional breakfast gunpowders, and consecrated Ekadasi vrata seasonings without additives.
          </p>

          <div className="mt-3 inline-flex items-center gap-2 bg-[#FFFBEB] px-4 py-1.5 rounded-full border border-[#FDE68A] text-xs font-serif-devotional font-bold text-[#92400E]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0D472B]" />
            <span>{BUSINESS_INFO.suitableForText} • FSSAI LIC. NO. {BUSINESS_INFO.fssaiLicense}</span>
          </div>
        </div>

        {/* Product Grid for Powders */}
        <ProductGrid initialCategory="powders" showCategoryTabs={false} />

      </div>
    </div>
  );
};
