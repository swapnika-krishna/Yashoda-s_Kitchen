import React from 'react';
import { X, MessageCircle, Phone, Sparkles, ShieldCheck, Leaf } from 'lucide-react';
import { Product } from '../types';
import { BUSINESS_INFO } from '../data/products';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const whatsappInquiryUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Namaste! I am interested in inquiring about "${product.name}" (${product.teluguName || ''}) from Yashoda’s Divine Kitchen.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#FAF6EE] rounded-3xl border-2 border-[#D4AF37] max-w-2xl w-full shadow-2xl overflow-hidden text-left"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-gray-900 border border-gray-200 shadow-xs transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Visual */}
        <div className="relative aspect-16/9 bg-[#F3EAD8] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#E5C158]">
                {product.category === 'pickles' ? 'Sattvic Pickle' : product.subCategory || 'Powder & Podi'}
              </span>
              {product.teluguName && (
                <span className="text-xs font-serif-devotional text-amber-200">
                  • {product.teluguName}
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif-devotional font-bold drop-shadow-sm">
              {product.name}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[60vh] overflow-y-auto">
          
          {/* Traditional Preparation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D472B] font-serif-devotional mb-1">
              Traditional Preparation:
            </h4>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed bg-white p-3.5 rounded-xl border border-[#D4AF37]/30">
              {product.traditionalPreparation}
            </p>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D472B] font-serif-devotional mb-1">
              About This Recipe:
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Ingredients */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D472B] font-serif-devotional mb-2">
              Authentic Ingredients:
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {product.ingredients.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-white border border-[#D4AF37]/40 text-xs text-gray-700 font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Storage & Devotional Standard */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-white rounded-xl border border-gray-200 text-xs">
              <span className="font-bold text-[#0D472B] block mb-1">Storage:</span>
              <p className="text-gray-600">{product.storageInstructions}</p>
            </div>
            <div className="p-3 bg-[#FFFBEB] rounded-xl border border-[#FDE68A] text-xs">
              <span className="font-bold text-[#92400E] block mb-1">Devotional Standard:</span>
              <p className="text-[#78350F]">{BUSINESS_INFO.suitableForText}</p>
            </div>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="p-4 sm:p-6 bg-white border-t border-[#D4AF37]/30 flex flex-col sm:flex-row items-center gap-3">
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5B] text-white font-serif-devotional text-xs font-bold uppercase tracking-wider transition-all shadow-xs flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enquire on WhatsApp</span>
          </a>

          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="w-full sm:w-auto py-3 px-5 rounded-xl border-2 border-[#0D472B] text-[#0D472B] hover:bg-[#0D472B] hover:text-white font-serif-devotional text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call Kitchen</span>
          </a>
        </div>

      </div>
    </div>
  );
};
