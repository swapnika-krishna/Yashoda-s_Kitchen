import React, { useState } from 'react';
import { Sparkles, MessageCircle } from 'lucide-react';
import { PRODUCTS, BUSINESS_INFO } from '../data/products';
import { ProductCard } from './ProductCard';
import { ProductDetailModal } from './ProductDetailModal';
import { Product } from '../types';

interface ProductGridProps {
  initialCategory?: 'all' | 'pickles' | 'powders';
  limit?: number;
  showCategoryTabs?: boolean;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  initialCategory = 'all',
  limit,
  showCategoryTabs = true
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'pickles' | 'powders'>(initialCategory);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const pickles = PRODUCTS.filter(p => p.category === 'pickles');
  const powders = PRODUCTS.filter(p => p.category === 'powders');

  const displayedProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  const finalProducts = limit ? displayedProducts.slice(0, limit) : displayedProducts;

  return (
    <div className="space-y-10">
      
      {/* Category Tabs */}
      {showCategoryTabs && (
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 pb-2">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-full font-serif-devotional text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
              activeCategory === 'all'
                ? 'bg-[#0D472B] text-white shadow-md ring-2 ring-[#D4AF37]/50'
                : 'bg-white text-gray-700 border border-[#D4AF37]/40 hover:bg-[#FAF6EE]'
            }`}
          >
            All Sattvic Offerings ({PRODUCTS.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory('pickles')}
            className={`px-5 py-2.5 rounded-full font-serif-devotional text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
              activeCategory === 'pickles'
                ? 'bg-[#0D472B] text-white shadow-md ring-2 ring-[#D4AF37]/50'
                : 'bg-white text-gray-700 border border-[#D4AF37]/40 hover:bg-[#FAF6EE]'
            }`}
          >
            1. Sattvic Pickles ({pickles.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory('powders')}
            className={`px-5 py-2.5 rounded-full font-serif-devotional text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
              activeCategory === 'powders'
                ? 'bg-[#0D472B] text-white shadow-md ring-2 ring-[#D4AF37]/50'
                : 'bg-white text-gray-700 border border-[#D4AF37]/40 hover:bg-[#FAF6EE]'
            }`}
          >
            2. Powders & Podis ({powders.length})
          </button>
        </div>
      )}

      {/* When viewing All or Pickles */}
      {(activeCategory === 'all' || activeCategory === 'pickles') && !limit && (
        <div className="space-y-6 pt-2">
          <div className="border-b-2 border-[#D4AF37]/40 pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <span className="text-xs font-serif-devotional font-bold uppercase tracking-widest text-[#991B1B]">
                Section 1 • Sun-Cured Heritage
              </span>
              <h3 className="text-2xl font-serif-devotional font-bold text-[#0D472B]">
                Sattvic Pickles (Pachallu)
              </h3>
            </div>
            <span className="text-xs text-[#0D472B] font-medium italic">
              7 Traditional Recipes from the Poster
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {pickles.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={p => setSelectedProduct(p)}
              />
            ))}
          </div>
        </div>
      )}

      {/* When viewing All or Powders */}
      {(activeCategory === 'all' || activeCategory === 'powders') && !limit && (
        <div className="space-y-6 pt-8">
          <div className="border-b-2 border-[#D4AF37]/40 pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <span className="text-xs font-serif-devotional font-bold uppercase tracking-widest text-[#B38728]">
                Section 2 • Slow Roasted & Stone Ground
              </span>
              <h3 className="text-2xl font-serif-devotional font-bold text-[#0D472B]">
                Powders, Podis & Masalas
              </h3>
            </div>
            <span className="text-xs text-[#0D472B] font-medium italic">
              12 Authentic Spices, Rice Podis & Ekadasi Specials
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {powders.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={p => setSelectedProduct(p)}
              />
            ))}
          </div>
        </div>
      )}

      {/* When a limit is provided (e.g. Featured on Home) */}
      {limit && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {finalProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetails={p => setSelectedProduct(p)}
            />
          ))}
        </div>
      )}

      {/* Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

    </div>
  );
};
