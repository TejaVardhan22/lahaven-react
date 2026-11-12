import React from 'react';
import { Instagram, ArrowUpRight, Sparkles } from 'lucide-react';
import { galleryImages } from '@/data/gallery';
import { INSTAGRAM_URL } from '@/utils/constants';

export const CakeGallery: React.FC = () => {
  // Select 6 premium gallery images with varied aspect ratios
  const displayImages = galleryImages.slice(0, 6);

  return (
    <section aria-label="Editorial Instagram Gallery" className="bg-[#FEF0E5] py-16 sm:py-24">
      <div className="section-rail">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow inline-flex items-center gap-2 rounded-full bg-[#F5C7AF] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#C35D51]">
            <Sparkles className="h-3 w-3 text-[#E5BB67]" />
            <span>Daily from the Boutique</span>
          </span>

          <h2 className="mt-3 font-serif text-[clamp(2.2rem,4vw,3.2rem)] font-normal leading-tight text-[#2D221E]">
            Follow Our Sweet Journey
          </h2>

          <p className="mt-2 font-sans text-xs font-normal text-[#6A564B] sm:text-sm">
            A peek inside our Bengaluru atelier — hand-piped tiers, fresh mirror glazes, and celebration slices.
          </p>
        </div>

        {/* ── 6-Image Editorial Gallery with Varied Aspect Ratios ── */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {displayImages.map((item, index) => {
            // Give subtle aspect ratio variance
            const aspectClass = index % 3 === 0 ? 'aspect-[3/4]' : index % 2 === 0 ? 'aspect-square' : 'aspect-[4/5]';
            return (
              <a
                key={item.id}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-2xl border border-[#FAF0EA] bg-[#FAF0EA]/30 transition-all duration-300 hover:-translate-y-1 hover:border-[#C35D51]/50 hover:shadow-sm ${aspectClass}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  width={item.width || 600}
                  height={item.height || 600}
                />

                {/* Subtle hover overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#2D221E]/80 via-transparent to-transparent p-3.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-[#F5C7AF]">
                    @laheavencakes_
                  </span>
                  <p className="line-clamp-2 font-serif text-xs text-[#FEF0E5]">
                    {item.alt}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* ── Instagram Call to Action ── */}
        <div className="mt-10 text-center sm:mt-12">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C35D51] bg-transparent px-8 py-3.5 font-sans text-xs font-semibold uppercase tracking-wider text-[#C35D51] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C35D51] hover:text-[#FEF0E5]"
          >
            <Instagram className="h-4 w-4" />
            <span>Follow @laheavencakes_ on Instagram</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CakeGallery;

