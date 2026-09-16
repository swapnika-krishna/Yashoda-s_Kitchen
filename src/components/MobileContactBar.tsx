import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export const MobileContactBar: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Namaste! I found Yashoda’s Divine Kitchen on Google Maps and would like to inquire about your traditional pickles and powders."
  )}`;

  return (
    <aside aria-label="Mobile Quick Contact Bar" className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF6EE]/95 backdrop-blur-md border-t-2 border-[#D4AF37] shadow-lg px-3 py-2">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        
        {/* CALL */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#0D472B] text-white font-serif-devotional text-[11px] font-bold uppercase tracking-wider transition-transform active:scale-95 shadow-xs"
        >
          <Phone className="w-4 h-4 mb-0.5 text-[#E5C158]" />
          <span>CALL</span>
        </a>

        {/* WHATSAPP */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366] text-white font-serif-devotional text-[11px] font-bold uppercase tracking-wider transition-transform active:scale-95 shadow-xs"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span>WHATSAPP</span>
        </a>

        {/* DIRECTIONS */}
        <a
          href={BUSINESS_INFO.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#991B1B] text-white font-serif-devotional text-[11px] font-bold uppercase tracking-wider transition-transform active:scale-95 shadow-xs"
        >
          <MapPin className="w-4 h-4 mb-0.5 text-[#E5C158]" />
          <span>DIRECTIONS</span>
        </a>

      </div>
    </aside>
  );
};
