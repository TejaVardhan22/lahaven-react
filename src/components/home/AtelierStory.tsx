import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Sparkles, CheckCircle2, Leaf } from 'lucide-react';

export const AtelierStory: React.FC = () => {
  return (
    <section aria-label="About LaHaven Bakery" className="story-section bg-[#FEF0E5]">
      {/* ── Left: Large Bakery Image with Organic Sticker & Sage Accent ── */}
      <div className="story-image relative overflow-hidden rounded-3xl border border-[#FAF0EA] bg-[#FAF0EA]/40">
        <img
          src="/images/hero/lychee-gateau-desktop.jpg"
          alt="Artisan cake decorator preparing fresh gateau at LaHaven"
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover"
        />
        <span className="image-sticker border border-[#2D221E] bg-[#FEF0E5] text-[#2D221E]">
          Made with<br />
          a little love
          <Heart className="h-4 w-4 fill-[#C35D51] text-[#C35D51]" />
        </span>
      </div>

      {/* ── Right: Oat & Honey Editorial Story Copy ── */}
      <div className="story-copy flex flex-col justify-center px-4 sm:px-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#F5C7AF] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#C35D51] w-fit">
          <Leaf className="h-3 w-3 text-[#C35D51]" />
          <span>Our Craftsmanship &amp; Heritage</span>
        </div>

        <h2 className="mt-4 font-serif text-[clamp(2.2rem,4vw,3.2rem)] font-normal leading-[1.12] text-[#2D221E]">
          Rooted in Tradition.<br />
          <span className="text-[#C35D51] italic">Made for Today.</span>
        </h2>

        <p className="mt-4 font-sans text-sm font-normal leading-relaxed text-[#6A564B] sm:text-base">
          Born in Bengaluru, LaHaven was founded on a simple belief: celebration cakes should taste every bit as extraordinary as they look. Every morning across our 5 physical boutiques — Frazer Town, Malleshwaram, Sahakarnagar, Sanjayanagar, and Yelahanka — our pastry chefs temper 54% Belgian couverture, fold slow-simmered whole fruit compotes, and whip fresh dairy cream to order.
        </p>

        <div className="mt-6 space-y-3 font-sans text-xs text-[#2D221E] sm:text-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F5C7AF] text-[#C35D51]">
              <CheckCircle2 className="h-3.5 w-3.5" />
            </span>
            <span><strong>100% Eggless Mastery:</strong> Delicate, airy crumb perfected for vegetarian celebrations.</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F5C7AF] text-[#C35D51]">
              <CheckCircle2 className="h-3.5 w-3.5" />
            </span>
            <span><strong>Zero Premixes, Ever:</strong> Scratch-baked using Madagascar vanilla &amp; unbleached flour.</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F5C7AF] text-[#C35D51]">
              <CheckCircle2 className="h-3.5 w-3.5" />
            </span>
            <span><strong>Real Belgian Couverture:</strong> Authentic cocoa butter ganache without compound chocolate.</span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            to="/our-story"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C35D51] px-7 py-3.5 font-sans text-xs font-semibold uppercase tracking-wider text-[#FEF0E5] transition-all hover:bg-[#AD5B4D]"
          >
            <span>Explore Our Story</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/outlets"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C35D51] bg-transparent px-6 py-3.5 font-sans text-xs font-semibold uppercase tracking-wider text-[#C35D51] transition-all hover:bg-[#F5C7AF]/20"
          >
            <span>Visit 5 Boutiques</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AtelierStory;
