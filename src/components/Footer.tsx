import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Award, Leaf, Heart, Sparkles } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_INFO } from '../data/products';

export const Footer: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Namaste! I would like to enquire about Yashoda’s Divine Kitchen products."
  )}`;

  return (
    <footer className="bg-[#0D472B] text-white pt-14 pb-20 lg:pb-12 border-t-4 border-[#D4AF37] relative overflow-hidden">
      
      {/* Decorative Traditional Leaf Pattern Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-radial-dots opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Presentation Column */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-block">
              <BrandLogo size="lg" textColor="text-white" />
            </Link>
            
            <p className="text-sm font-serif-devotional text-[#E5C158] font-semibold tracking-wider">
              {BUSINESS_INFO.tagline}
            </p>

            <p className="text-xs text-white/80 max-w-sm leading-relaxed">
              "{BUSINESS_INFO.supportingText}"
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 bg-[#14532D] px-3.5 py-1.5 rounded-lg border border-[#D4AF37]/50 text-xs font-serif-devotional text-[#E5C158]">
                <Leaf className="w-3.5 h-3.5" />
                <span>{BUSINESS_INFO.suitableForText}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-devotional font-bold text-sm tracking-widest text-[#E5C158] uppercase">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-serif-devotional">
              <li>
                <Link to="/" className="text-white/80 hover:text-[#E5C158] transition-colors">
                  Home Page
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-[#E5C158] transition-colors">
                  About Us (Flavors of Tradition)
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/80 hover:text-[#E5C158] transition-colors">
                  Our Products (Pickles & Powders)
                </Link>
              </li>
              <li>
                <a href="/#why-choose-us" className="text-white/80 hover:text-[#E5C158] transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-[#E5C158] transition-colors">
                  Contact Kitchen
                </Link>
              </li>
              <li>
                <a href="/#find-us" className="text-white/80 hover:text-[#E5C158] transition-colors">
                  Find Us (Google Maps)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & FSSAI Information */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif-devotional font-bold text-sm tracking-widest text-[#E5C158] uppercase">
              Contact & Certification
            </h4>
            
            <div className="space-y-2.5 text-xs text-white/85">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E5C158] flex-shrink-0" />
                <span>Phone: </span>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="font-mono font-bold text-white hover:text-[#E5C158]">
                  +91 {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <span>WhatsApp: </span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono font-bold text-white hover:text-[#25D366]"
                >
                  +91 {BUSINESS_INFO.whatsappNumber}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Award className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-white/60 uppercase font-mono block">Licensed Food Operator:</span>
                  <span className="font-mono font-bold text-[#E5C158]">
                    FSSAI LIC. NO. {BUSINESS_INFO.fssaiLicense}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick action buttons in footer */}
            <div className="pt-2 flex gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-serif-devotional font-bold uppercase tracking-wider transition-colors"
              >
                Call
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#1EBE5B] text-white text-xs font-serif-devotional font-bold uppercase tracking-wider transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-[#991B1B] hover:bg-[#7F1D1D] text-white text-xs font-serif-devotional font-bold uppercase tracking-wider transition-colors"
              >
                Directions
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Attribution & Leaf Motifs */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/70 font-serif-devotional gap-2 text-center sm:text-left">
          <div className="flex items-center gap-1.5">
            <Leaf className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>© {new Date().getFullYear()} {BUSINESS_INFO.name}. All traditional rights reserved.</span>
          </div>
          <div className="text-[11px] text-white/60">
            Official Business Profile for Google Maps • FSSAI LIC. NO. {BUSINESS_INFO.fssaiLicense}
          </div>
        </div>

      </div>
    </footer>
  );
};
