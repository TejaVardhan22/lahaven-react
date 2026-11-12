import React from 'react';
import { Sparkles, Heart, Leaf, Award, PackageCheck } from 'lucide-react';

export const BrandIntroduction: React.FC = () => {
  const PILLARS = [
    {
      icon: Heart,
      title: 'Artisan Philosophy',
      description:
        'We believe in slow baking, time-honoured techniques, and patience. Every sponge is mixed and baked with care.',
    },
    {
      icon: Leaf,
      title: 'Fresh Ingredients',
      description:
        'Pure 54% Belgian couverture, whole simmered berries, and Madagascar vanilla beans. Zero artificial compromises.',
    },
    {
      icon: Award,
      title: 'Handmade Craft',
      description:
        'Hand-piped, layered, and finished with surgical precision by our resident pastry artists in Bengaluru.',
    },
    {
      icon: PackageCheck,
      title: 'Thoughtful Presentation',
      description:
        'Signature boutique packaging, temperature-managed delivery, and cake cards created for joyful unboxing.',
    },
  ];

  return (
    <section aria-label="Brand Introduction" className="bg-[#FEF0E5] py-16 sm:py-24">
      <div className="section-rail">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow inline-flex items-center gap-2 rounded-full bg-[#F5C7AF] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#C35D51]">
            <Sparkles className="h-3 w-3 text-[#E5BB67]" />
            <span>Our Bakery Statement</span>
          </span>

          <h2 className="mt-4 font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-normal leading-tight text-[#2D221E]">
            A Little More Than a Bakery
          </h2>

          <p className="mt-4 font-sans text-sm font-normal leading-relaxed text-[#6A564B] sm:text-base">
            LaHaven is a sanctuary of artisan craft in Bengaluru. We bake fresh from the heart, blending traditional European patisserie discipline with the warmth of everyday celebrations.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group rounded-2xl border border-[#FAF0EA] bg-[#FAF0EA]/30 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C35D51]/40 hover:bg-[#FAF0EA]/60 hover:shadow-xs"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F5C7AF] text-[#C35D51] transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-[#2D221E]">
                  {pillar.title}
                </h3>
                <p className="mt-2 font-sans text-xs font-normal leading-relaxed text-[#6A564B]">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BrandIntroduction;

