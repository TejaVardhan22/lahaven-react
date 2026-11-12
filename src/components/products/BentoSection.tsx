import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../shared/SectionHeading';
import { getProductsByCategory } from '@/data/products';

export const BentoSection: React.FC = () => {
  const bentoCakes = getProductsByCategory('bento-cakes');

  return (
    <section className="premium-section relative overflow-hidden bg-[#FEF0E5]">
      {/* Background organic shape */}
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-beige/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 left-10 h-80 w-80 rounded-full bg-champagne/15 blur-2xl" />

      <div className="premium-container relative z-10">
        <div className="mb-12 text-center lg:mb-14">
          <div className="section-kicker mb-4">
            <Heart className="h-3 w-3 fill-champagne text-champagne" />
            <span>Tiny delights</span>
          </div>
          <SectionHeading
            title="Little Cakes. Big Love."
            description="Small in size, full of sweetness. Discover our adorable 4-inch bento cakes, perfect for intimate celebrations, thoughtful surprises, and personal milestones."
            alignment="center"
          />
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
          
          {/* Item 1: Large Featured Minimal Bento (Span 7 cols, 2 rows) */}
          <div className="rounded-2xl bg-[#FAF0EA] border border-[#EEDCD0] shadow-[0_4px_20px_rgba(56,37,42,0.04)] hover:-translate-y-1 hover:border-[#E5BB67]/50 hover:shadow-[0_12px_32px_rgba(56,37,42,0.08)] transition-all duration-300 group flex flex-col justify-between p-6 sm:p-8 md:col-span-7">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-[11px] uppercase tracking-wider font-semibold text-[#C35D51] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#E5BB67]" /> Most Loved
              </span>
              <span className="px-3 py-1 bg-[#FEF0E5] text-[#C35D51] border border-[#EEDCD0] text-xs rounded-full font-medium tracking-wide">
                Single Portion 4"
              </span>
            </div>

            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-[#FEF0E5] mb-6">
              <img
                src="/images/products/heart-shaped-chocolate.jpg"
                alt="Heart Shaped Chocolate Truffle Bento Cake by LaHaven"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width={1000}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D221E]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-[#FEF0E5] text-xs font-sans">Handcrafted heart silhouette & custom message lettering</p>
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D221E]">
                  Minimalist Bento Cake
                </h3>
                <span className="text-[#C35D51] text-sm font-semibold">Starting from ₹399</span>
              </div>
              <p className="font-sans text-sm text-[#6A564B] mt-2 font-normal leading-relaxed">
                Korean-inspired aesthetic with delicate pastel lettering, smooth buttercream piping, and your personalized sweet note.
              </p>
            </div>
          </div>

          {/* Item 2: Birthday Bento (Span 5 cols) */}
          <div className="rounded-2xl bg-[#FAF0EA] border border-[#EEDCD0] shadow-[0_4px_20px_rgba(56,37,42,0.04)] hover:-translate-y-1 hover:border-[#E5BB67]/50 hover:shadow-[0_12px_32px_rgba(56,37,42,0.08)] transition-all duration-300 group flex flex-col justify-between p-6 md:col-span-5">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#FEF0E5] mb-4">
              <img
                src="/images/products/heart-shaped-red-velvet.jpg"
                alt="Heart-Shaped Red Velvet Celebration Bento Cake"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width={800}
                height={600}
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#FEF0E5]/95 border border-[#EEDCD0] rounded-full text-[11px] font-sans font-medium text-[#2D221E] shadow-xs">
                Red Velvet Special
              </span>
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2D221E]">
                Heart-Shaped Red Velvet Bento
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#6A564B] mt-1 font-normal">
                Tangy cream cheese frosting, candle included, and sweet mini birthday messaging.
              </p>
              <div className="mt-3 flex items-center justify-between text-xs font-medium">
                <span className="text-[#6A564B]">Custom Name Included</span>
                <span className="text-[#C35D51] font-semibold">From ₹579</span>
              </div>
            </div>
          </div>

          {/* Item 3: Couple / Anniversary Bento (Span 4 cols) */}
          <div className="rounded-2xl bg-[#FAF0EA] border border-[#EEDCD0] shadow-[0_4px_20px_rgba(56,37,42,0.04)] hover:-translate-y-1 hover:border-[#E5BB67]/50 hover:shadow-[0_12px_32px_rgba(56,37,42,0.08)] transition-all duration-300 group p-6 md:col-span-4">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#FEF0E5] mb-4">
              <img
                src="/images/products/heart-shaped-strawberry.jpg"
                alt="Heart-Shaped Strawberry Romance Bento Cake"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#2D221E]">
              Heart-Shaped Strawberry Bento
            </h3>
            <p className="font-sans text-xs text-[#6A564B] mt-1 font-normal">
              Pastel pink, delicate beaded borders, and love notes for anniversaries and dates.
            </p>
          </div>

          {/* Item 4: Blueberry Bento (Span 4 cols) */}
          <div className="rounded-2xl bg-[#FAF0EA] border border-[#EEDCD0] shadow-[0_4px_20px_rgba(56,37,42,0.04)] hover:-translate-y-1 hover:border-[#E5BB67]/50 hover:shadow-[0_12px_32px_rgba(56,37,42,0.08)] transition-all duration-300 group p-6 md:col-span-4">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#FEF0E5] mb-4">
              <img
                src="/images/products/blueberry-cake.jpg"
                alt="Wild Blueberry Petite Bento Cake"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#2D221E]">
              Wild Blueberry Petite Bento
            </h3>
            <p className="font-sans text-xs text-[#6A564B] mt-1 font-normal">
              Tangy wild blueberry reduction with minimalist Korean piping in an eco clamshell box.
            </p>
          </div>

          {/* Item 5: Bento Box Packaging Spotlight (Span 4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group flex flex-col justify-between rounded-2xl border border-[#EEDCD0] bg-[#2D221E] p-6 text-[#FEF0E5] shadow-md md:col-span-4"
          >
            <div>
              <span className="font-script text-[#E5BB67] text-xl">Signature Packaging</span>
              <h3 className="font-serif text-2xl font-normal mt-1 mb-2 text-[#FEF0E5]">
                Eco Bento Box & Ribbon
              </h3>
              <p className="font-sans text-xs text-[#FEF0E5]/80 font-light leading-relaxed">
                Every bento cake arrives in our branded biodegradable clamshell box, tied with our silk ribbon and accompanied by a wooden spork and celebratory candle.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#FEF0E5]/15 flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-[#E5BB67] font-medium">Ready For Gifting</span>
              <Heart className="w-4 h-4 text-[#E5BB67] fill-[#E5BB67]" />
            </div>
          </motion.div>

        </div>

        {/* Section Action */}
        <div className="mt-12 text-center lg:mt-14">
          <Link to="/bento-cakes" className="btn-primary group">
            <span>Explore all bento cakes</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BentoSection;
