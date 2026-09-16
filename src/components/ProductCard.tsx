import React from 'react';
import { MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { Product } from '../types';
import { BUSINESS_INFO } from '../data/products';

interface ProductCardProps {
  product: Product;
  onOpenDetails?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenDetails }) => {
  const whatsappInquiryUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Namaste! I would like to enquire about ordering "${product.name}" (${product.teluguName || ''}) from Yashoda’s Divine Kitchen.`
  )}`;

  return (
    <div className="group bg-[#FAF6EE] rounded-2xl border border-[#D4AF37]/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1">
      
      {/* Product Image Area */}
      <div 
        className="relative aspect-square overflow-hidden bg-[#F3EAD8] cursor-pointer"
        onClick={() => onOpenDetails && onOpenDetails(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Subtle Gold Corner Accent */}
        <div className="absolute inset-0 border border-inset border-[#D4AF37]/30 pointer-events-none rounded-t-2xl" />

        {/* Badge Tag */}
        {product.badge && (
          <div className="absolute top-2.5 left-2.5 bg-[#991B1B] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">
            {product.badge}
          </div>
        )}

        {product.isEkadasiSpecial && (
          <div className="absolute top-2.5 right-2.5 bg-[#0D472B] text-[#E5C158] text-[10px] font-semibold px-2.5 py-0.5 rounded-full shadow-xs flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Ekadasi Fasting
          </div>
        )}
      </div>

      {/* Product Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white border-t border-[#D4AF37]/30">
        <div>
          {/* Category & Telugu Name */}
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#991B1B] font-bold">
              {product.category === 'pickles' ? 'Traditional Pickle' : product.subCategory || 'Powder / Podi'}
            </span>
            {product.teluguName && (
              <span className="font-serif-devotional text-xs text-[#B38728] font-bold">
                {product.teluguName}
              </span>
            )}
          </div>

          {/* Product Name */}
          <h3 
            className="font-serif-devotional font-bold text-base sm:text-lg text-[#0D472B] group-hover:text-[#991B1B] transition-colors cursor-pointer"
            onClick={() => onOpenDetails && onOpenDetails(product)}
          >
            {product.name}
          </h3>

          {/* Traditional Preparation Details */}
          <p className="text-xs text-gray-600 mt-2 leading-relaxed line-clamp-3">
            {product.traditionalPreparation}
          </p>
        </div>

        {/* WhatsApp Inquiry Button */}
        <div className="pt-4 mt-3 border-t border-gray-100 flex items-center justify-between gap-2">
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5B] text-white font-serif-devotional text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
            title={`Enquire on WhatsApp about ${product.name}`}
          >
            <MessageCircle className="w-4 h-4 flex-shrink-0" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>

      </div>

    </div>
  );
};
