import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Heart, Package, Sparkles } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { PageHero } from '@/components/shared/PageHero';
import { ProductCard } from '@/components/products/ProductCard';
import { getProductsByCategory } from '@/data/products';
import { pageSEO } from '@/data/seo';
import { getWhatsAppUrl } from '@/utils/constants';
import { WhatsAppIcon } from '@/components/shared/Icons';

const BOX_DETAILS = [
  {
    icon: Package,
    title: 'Eco sugarcane clamshell',
    copy: '100% biodegradable, heat-insulated and sturdy enough to travel across the city.',
  },
  {
    icon: Sparkles,
    title: 'Candle & spork included',
    copy: 'Everything needed for an instant surprise cutting — no last-minute shop run.',
  },
  {
    icon: Heart,
    title: 'Hand-piped inscription',
    copy: 'Add a name, initials or a short message at no extra cost. Piped the morning of pickup.',
  },
  {
    icon: ArrowRight,
    title: 'Burgundy & gold satin ribbon',
    copy: 'Tied by hand in our signature packaging style, with a gold LaHaven seal.',
  },
];

export const BentoCakes: React.FC = () => {
  const bentoProducts = getProductsByCategory('bento-cakes');

  return (
    <div className="min-h-screen bg-[#FFF9F0] pb-20">
      <SEOHead
        title={pageSEO['bento-cakes'].title}
        description={pageSEO['bento-cakes'].description}
        canonicalUrl={pageSEO['bento-cakes'].canonicalUrl}
        ogTitle={pageSEO['bento-cakes'].ogTitle}
        ogDescription={pageSEO['bento-cakes'].ogDescription}
        ogImage={pageSEO['bento-cakes'].ogImage}
        twitterCard={pageSEO['bento-cakes'].twitterCard}
      />

      <PageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Bento Cakes', href: '/bento-cakes' },
        ]}
        kicker="Korean Mini Cakes"
        image="/images/products/heart-shaped-strawberry.jpg"
        imageAlt="Heart-shaped strawberry bento cake"
        title={
          <>
            Little Cakes. <span className="italic text-[#C35D51]">Big Love.</span>
          </>
        }
        description="Our 4-inch Korean-inspired bento cakes are pastel-piped, packed in an eco clamshell gift box, and finished with a satin ribbon. Small enough to surprise someone at their desk — complete enough to make the whole room smile."
        meta={['4-Inch Bento', 'Eco Gift Packaging', 'Ready in 4 Hours', '100% Eggless Options']}
      />

      <section className="premium-section bg-[#FFF9F0] pt-10 sm:pt-12">
        <div className="premium-container">
          <div className="flex flex-col gap-3 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-kicker">The Bento Counter</span>
              <h2 className="mt-3 font-serif text-[1.9rem] font-bold leading-tight tracking-[-0.015em] text-[#443026] sm:text-[2.3rem]">
                Pick a Little Gift Box
              </h2>
            </div>
            <p className="font-sans text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#766256]">
              {bentoProducts.length} Designs · Baked to Order
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bentoProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          {/* Packaging spotlight */}
          <div className="mt-16 overflow-hidden rounded-3xl border border-[#E0D6C9] bg-[#FFFFFF] shadow-[0_8px_30px_rgba(68,48,38,0.06)]">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="relative order-2 min-h-[280px] p-4 lg:order-1 lg:col-span-5 lg:p-6">
                <img
                  src="/images/products/heart-shaped-chocolate.jpg"
                  alt="LaHaven bento cake packaging with ribbon and candle"
                  className="h-full w-full rounded-2xl border border-[#E0D6C9] bg-[#FAF5EC] object-cover shadow-xs"
                  loading="lazy"
                  width={900}
                  height={900}
                />
                <span className="absolute left-8 top-8 rounded-full border border-[#E0D6C9] bg-[#FFFFFF]/95 px-3.5 py-1.5 font-sans text-[9.5px] font-bold uppercase tracking-[0.16em] text-[#C35D51] shadow-2xs backdrop-blur-md">
                  The Unboxing Experience
                </span>
              </div>

              <div className="order-1 p-6 sm:p-9 lg:order-2 lg:col-span-7 lg:p-11">
                <span className="section-kicker">Thoughtful Details</span>
                <h2 className="mt-4 max-w-lg font-serif text-[1.9rem] font-bold leading-[1.1] tracking-[-0.015em] text-[#443026] sm:text-[2.4rem]">
                  What Comes Inside Every{' '}
                  <span className="italic font-normal text-[#C35D51]">Bento Box</span>
                </h2>
                <p className="mt-3 max-w-xl font-sans text-sm font-normal leading-relaxed text-[#766256]">
                  The cake is only half the gift. Every box leaves the counter ready to be handed
                  over — ribbon tied, golden candle tucked in, name piped on top.
                </p>

                <div className="mt-7 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                  {BOX_DETAILS.map((detail) => (
                    <div key={detail.title} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#E0D6C9] bg-[#FFFFFF] text-[#C35D51] shadow-2xs">
                        <detail.icon className="h-4 w-4" />
                      </span>
                      <div>
                        <h3 className="font-serif text-base font-bold leading-snug text-[#443026]">
                          {detail.title}
                        </h3>
                        <p className="mt-0.5 font-sans text-xs font-normal leading-relaxed text-[#766256]">
                          {detail.copy}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={getWhatsAppUrl(
                      'Hi LaHaven! I would like to order bento cakes — please share today’s flavours.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary whitespace-nowrap"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>Ask What&rsquo;s in the Box</span>
                  </a>
                  <Link to="/cakes" className="btn-secondary whitespace-nowrap">
                    See All Cakes
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Closing note */}
          <div className="mt-14 flex flex-col items-center gap-3 text-center">
            <span className="font-script text-2xl text-[#E5BB67]">small cake, whole heart</span>
            <p className="max-w-xl font-sans text-sm font-normal leading-relaxed text-[#766256]">
              Ordering for an office team or a celebration party? We tie bulk bento sets with
              individual name tags. Message us a day ahead and we&rsquo;ll have them ready together.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-[#C35D51] transition-colors hover:text-[#E5BB67]"
            >
              <span>Plan a Bulk Bento Order</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BentoCakes;
