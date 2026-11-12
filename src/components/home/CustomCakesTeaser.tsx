import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart, Crown, Cake, PartyPopper } from 'lucide-react';

export const CustomCakesTeaser: React.FC = () => {
  const OCCASIONS = [
    { label: 'Wedding Cakes', desc: 'Elegant tiered florals & textured ganache', icon: Crown },
    { label: 'Birthday Cakes', desc: 'Whimsical themes, smash bombs & toppers', icon: PartyPopper },
    { label: 'Anniversary Cakes', desc: 'Heart-shaped, vintage piped & fresh berries', icon: Heart },
    { label: 'Custom Designs', desc: 'Bespoke sculpted fondant & buttercream art', icon: Cake },
  ];

  return (
    <section aria-label="Bespoke Celebration Cakes" className="bg-[#F5C7AF]/40 py-16 sm:py-24">
      <div className="section-rail">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* ── Left Column: Editorial Copy & 4 Categories ── */}
          <div className="lg:col-span-6">
            <span className="eyebrow inline-flex items-center gap-2 rounded-full bg-[#F5C7AF] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#C35D51]">
              <Sparkles className="h-3 w-3 text-[#E5BB67]" />
              <span>Bespoke Celebration Studio</span>
            </span>

            <h2 className="mt-4 font-serif text-[clamp(2.3rem,4.5vw,3.6rem)] font-normal leading-[1.12] text-[#2D221E]">
              Make Every Celebration Sweeter
            </h2>

            <p className="mt-4 font-sans text-sm font-normal leading-relaxed text-[#6A564B] sm:text-base">
              From grand multi-tiered wedding centerpieces to intimate hand-piped birthday creations, our pastry chefs consult directly with you to craft the cake of your dreams.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {OCCASIONS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 rounded-xl border border-[#FAF0EA] bg-[#FEF0E5] p-3.5 transition-all hover:border-[#C35D51]"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F5C7AF] text-[#C35D51]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-[#2D221E]">
                        {item.label}
                      </h4>
                      <p className="text-[11px] font-sans text-[#6A564B]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/custom-cakes"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C35D51] px-8 py-3.5 font-sans text-xs font-semibold uppercase tracking-wider text-[#FEF0E5] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#AD5B4D] hover:shadow-md"
              >
                <span>Create Your Custom Cake</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/bento-cakes"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C35D51] bg-transparent px-7 py-3.5 font-sans text-xs font-semibold uppercase tracking-wider text-[#C35D51] transition-all hover:bg-[#F5C7AF]/30"
              >
                <span>Discover Bento Cakes</span>
              </Link>
            </div>
          </div>

          {/* ── Right Column: Beautiful Cake Photograph ── */}
          <div className="relative lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#FAF0EA] bg-[#FEF0E5] shadow-sm">
              <img
                src="/images/hero/strawberry-heart-desktop.jpg"
                alt="Custom celebration cake crafted at LaHaven boutique"
                loading="lazy"
                width={900}
                height={675}
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Organic Floating Accent Badge */}
            <div className="absolute -bottom-5 -left-5 flex h-28 w-28 -rotate-12 flex-col items-center justify-center rounded-full border border-[#2D221E] bg-[#FEF0E5] text-center font-serif text-lg font-bold leading-tight text-[#2D221E] shadow-sm sm:-bottom-6 sm:-left-6 sm:h-32 sm:w-32 sm:text-xl">
              <span>Bespoke</span>
              <span className="text-[#C35D51] italic">Tiers</span>
              <Sparkles className="mt-0.5 h-3.5 w-3.5 text-[#E5BB67]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomCakesTeaser;

