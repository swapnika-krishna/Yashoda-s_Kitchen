import React from 'react';
import { ProductGrid } from '../components/ProductGrid';
import { Sparkles, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export const ProductsPage: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Namaste! I would like to inquire about placing an order for Yashoda’s Divine Kitchen pickles and powders."
  )}`;

  return (
    <div className="py-12 bg-[#FAF6EE] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D4AF37] shadow-2xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B38728]" />
            <span className="text-[11px] font-serif-devotional font-bold uppercase tracking-widest text-[#0D472B]">
              Authentic Domestic Catalog
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-bold text-[#0D472B]">
            Our Sattvic Products
          </h1>

          <p className="text-sm sm:text-base text-gray-700 mt-2 font-serif-devotional">
            Pickles & powders prepared in small devotional batches according to timeless Indian tradition.
          </p>

          <div className="mt-3 inline-flex items-center gap-2 bg-[#FFFBEB] px-4 py-1.5 rounded-full border border-[#FDE68A] text-xs font-serif-devotional font-bold text-[#92400E]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0D472B]" />
            <span>{BUSINESS_INFO.suitableForText} • FSSAI LIC. NO. {BUSINESS_INFO.fssaiLicense}</span>
          </div>

          {/* Direct Ordering / Inquiring Note */}
          <div className="mt-4 p-3 bg-white rounded-xl border border-[#D4AF37]/40 text-xs text-gray-600 max-w-xl mx-auto">
            <span>To check availability, pack sizes, or place a direct pickup order, click </span>
            <strong className="text-[#0D472B]">"Enquire on WhatsApp"</strong>
            <span> or call our kitchen directly at </span>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="font-bold text-[#991B1B] hover:underline font-mono">
              +91 {BUSINESS_INFO.phone}
            </a>.
          </div>
        </div>

        {/* Product Grid with Category Breakdown */}
        <ProductGrid initialCategory="all" showCategoryTabs={true} />

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-[#0D472B] text-white border-2 border-[#D4AF37] shadow-xl text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-serif-devotional font-bold uppercase tracking-widest text-[#E5C158] block">
            Special Dietary or Fasting Needs?
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif-devotional font-bold text-white">
            Custom Festival & Vrata Batches
          </h3>
          <p className="text-xs sm:text-sm text-white/80 max-w-2xl mx-auto leading-relaxed">
            Need special Ekadasi fasting podis or custom quantities for auspicious family functions? Contact us directly on WhatsApp with your requirements.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5B] text-white font-serif-devotional text-xs font-bold uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire on WhatsApp</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/40 hover:bg-white/10 text-white font-serif-devotional text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#E5C158]" />
              <span>Call +91 {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
