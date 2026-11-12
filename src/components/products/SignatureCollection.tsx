import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { products } from '@/data/products';

type CategoryKey =
  | 'Celebration Cakes'
  | 'Artisan Breads'
  | 'Pastries'
  | 'Cookies'
  | 'Cupcakes'
  | 'Seasonal Specials';

const CATEGORIES: CategoryKey[] = [
  'Celebration Cakes',
  'Artisan Breads',
  'Pastries',
  'Cookies',
  'Cupcakes',
  'Seasonal Specials',
];

export const SignatureCollection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('Celebration Cakes');

  const filteredProducts = useMemo(() => {
    switch (selectedCategory) {
      case 'Celebration Cakes':
        return products.filter((p) => p.category === 'celebration-cakes').slice(0, 8);
      case 'Artisan Breads':
        return products.filter((p) => p.category === 'desserts' || p.subcategory?.includes('Cheesecake')).slice(0, 8);
      case 'Pastries':
        return products.filter((p) => (p.subcategory && (p.subcategory.includes('Pastries') || p.subcategory.includes('Gateau'))) || p.id.includes('pastry')).slice(0, 8);
      case 'Cookies':
        return products.filter((p) => (p.subcategory && (p.subcategory.includes('Sweet Bites') || p.subcategory.includes('French'))) || p.id.includes('cookie') || p.id.includes('brownie')).slice(0, 8);
      case 'Cupcakes':
        return products.filter((p) => (p.subcategory && (p.subcategory.includes('Cupcakes') || p.subcategory.includes('Sweet Bites'))) || p.id.includes('cupcake')).slice(0, 8);
      case 'Seasonal Specials':
        return products.filter((p) => p.category === 'bento-cakes' || p.category === 'designer-cakes').slice(0, 8);
      default:
        return products.slice(0, 8);
    }
  }, [selectedCategory]);

  return (
    <section className="bg-[#FFF9F0] py-14 sm:py-20" aria-label="Signature Collection">
      <div className="section-rail">
        {/* ── Section Header ── */}
        <div className="flex flex-col gap-4 pb-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow inline-flex items-center gap-2 rounded-full bg-[#443026] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#FFF9F0] shadow-2xs">
              <Sparkles className="h-3 w-3 text-[#F5C04A]" />
              <span>Signature Collection</span>
            </span>
            <h2 className="mt-2.5 font-serif text-3xl font-bold tracking-tight text-[#443026] sm:text-4xl">
              Baked Fresh. Every Morning.
            </h2>
            <p className="mt-1 font-sans text-xs font-normal text-[#766256] sm:text-sm">
              Explore our handcrafted celebration cakes, artisanal pastries, and daily oven bakes.
            </p>
          </div>

          <Link
            to="/cakes"
            className="inline-flex items-center gap-1.5 font-sans text-xs font-bold uppercase tracking-wider text-[#C35D51] transition-colors hover:text-[#443026]"
          >
            <span>View All Bakes</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* ── Category Filter Tabs ── */}
        <div className="no-scrollbar mt-6 flex items-center gap-2 overflow-x-auto pb-2">
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap rounded-full px-4 py-2 font-sans text-xs font-bold tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'bg-[#C35D51] text-[#FFF9F0] shadow-sm'
                    : 'border border-[#E0D6C9] bg-[#FAF5EC] text-[#443026] hover:border-[#443026]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* ── Responsive Product Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
          >
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} priority={index < 4} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SignatureCollection;
