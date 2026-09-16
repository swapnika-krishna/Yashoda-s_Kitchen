import React from 'react';
import { Leaf, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      title: 'Traditional Flavors',
      desc: 'Authentic Andhra homestyle recipes preserved through generations with distinct regional taste.'
    },
    {
      title: 'Sattvic Choices',
      desc: 'Prepared without any onion, garlic, or non-vegetarian contamination. Strictly Vaishnava compliant.'
    },
    {
      title: 'Carefully Prepared',
      desc: 'Made in small devotional batches using cold-pressed gingelly oil, rock salt, and sun-incubation.'
    },
    {
      title: 'No Added Colors',
      desc: 'Zero artificial food dyes. Radiant color originates naturally from whole sun-dried spices.'
    },
    {
      title: 'Traditional Product Range',
      desc: 'Complete pantry collection of 7 heritage pickles, stone-ground daily spice powders, and Ekadasi fasting podis.'
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 bg-white border-b border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF6EE] border border-[#D4AF37] shadow-2xs mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B38728]" />
            <span className="text-[11px] font-serif-devotional font-bold uppercase tracking-widest text-[#0D472B]">
              Our Timeless Standard
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#0D472B]">
            Why Choose Yashoda’s Divine Kitchen
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-2 font-serif-devotional">
            {BUSINESS_INFO.suitableForText}
          </p>
        </div>

        {/* 5 Distinct Traditional Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => (
            <div 
              key={idx}
              className={`p-6 rounded-2xl bg-[#FAF6EE] border border-[#D4AF37]/40 shadow-2xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-full bg-white border border-[#D4AF37] flex items-center justify-center text-[#0D472B] flex-shrink-0">
                    <Leaf className="w-4 h-4 text-[#0D472B]" />
                  </div>
                  <h3 className="font-serif-devotional font-bold text-base sm:text-lg text-[#0D472B]">
                    {pt.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {pt.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#D4AF37]/20 flex items-center gap-1.5 text-[11px] font-medium text-[#0D472B]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                <span>Verified Sattvic Discipline</span>
              </div>
            </div>
          ))}

          {/* Devotional Poster Stamp Box */}
          <div className="p-6 rounded-2xl bg-[#0D472B] text-white border-2 border-[#D4AF37] shadow-md flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono tracking-widest text-[#E5C158] uppercase block mb-1">
                FSSAI LIC. NO. {BUSINESS_INFO.fssaiLicense}
              </span>
              <h3 className="font-serif-devotional font-bold text-lg text-white mb-2">
                "Pure • Traditional • Divine"
              </h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Every batch is prepared with sacred reverence, using pure ingredients without onion, garlic, or chemical shortcuts.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/20 text-[11px] text-[#E5C158] font-serif-devotional font-semibold">
              Phone: +91 {BUSINESS_INFO.phone}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
