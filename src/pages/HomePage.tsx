import React from 'react';
import { Hero } from '../components/Hero';
import { QualityFeatures } from '../components/QualityFeatures';
import { ProductGrid } from '../components/ProductGrid';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { AboutSection } from '../components/AboutSection';
import { GoogleMap } from '../components/GoogleMap';
import { ContactSection } from '../components/ContactSection';
import { Sparkles, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../data/products';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      
      {/* 1. Hero Section from Poster */}
      <Hero />

      {/* 2. Quality Section (NO ADDED COLORS, NO ARTIFICIAL PRESERVATIVES, NATURAL PRESERVATIVES, FSSAI) */}
      <QualityFeatures />

      {/* 3. Products Showcase */}
      <section className="py-16 bg-[#FAF6EE] border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#D4AF37] shadow-2xs mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B38728]" />
              <span className="text-[11px] font-serif-devotional font-bold uppercase tracking-widest text-[#0D472B]">
                Pantry Offerings
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0D472B]">
              Our Sattvic Products
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 font-serif-devotional">
              Authentic pickles and hand-pounded powders prepared strictly without onion or garlic.
            </p>
          </div>

          <ProductGrid showCategoryTabs={true} />

          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0D472B] hover:bg-[#14532D] text-white font-serif-devotional text-xs font-bold uppercase tracking-widest transition-all shadow-sm"
            >
              <span>View Full Product Catalog</span>
              <ArrowRight className="w-4 h-4 text-[#E5C158]" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. Why Choose Us (5 Pillars from Poster) */}
      <WhyChooseUs />

      {/* 5. About Us (Flavors of Tradition) */}
      <AboutSection />

      {/* 6. Find Us (Google Maps Embed & Directions) */}
      <GoogleMap />

      {/* 7. Contact Section (Phone, WhatsApp, Directions, Direct Enquiry) */}
      <ContactSection />

    </div>
  );
};
