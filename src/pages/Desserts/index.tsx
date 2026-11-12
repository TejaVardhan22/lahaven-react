import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Snowflake, Wheat } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { PageHero } from '@/components/shared/PageHero';
import { ProductCard } from '@/components/products/ProductCard';
import { getProductsByCategory } from '@/data/products';
import { pageSEO } from '@/data/seo';
import { getWhatsAppUrl } from '@/utils/constants';
import { WhatsAppIcon } from '@/components/shared/Icons';

const QUALITY_NOTES = [
  {
    icon: Wheat,
    title: 'Real butter, real flour',
    copy: 'No pre-mix powders, no industrial stabilisers. Just pastry as it should be made.',
  },
  {
    icon: Snowflake,
    title: 'Chilled slowly, never rushed',
    copy: 'Cheesecakes set overnight; tiramisu rests a full day so the layers settle.',
  },
  {
    icon: Leaf,
    title: 'Baked in small batches',
    copy: 'Each tray is made the morning it is sold across our five Bengaluru counters.',
  },
];

export const Desserts: React.FC = () => {
  const desserts = getProductsByCategory('desserts');

  return (
    <div className="min-h-screen bg-[#FFF9F0] pb-20">
      <SEOHead
        title={pageSEO.desserts.title}
        description={pageSEO.desserts.description}
        canonicalUrl={pageSEO.desserts.canonicalUrl}
        ogTitle={pageSEO.desserts.ogTitle}
        ogDescription={pageSEO.desserts.ogDescription}
        ogImage={pageSEO.desserts.ogImage}
        twitterCard={pageSEO.desserts.twitterCard}
      />

      <PageHero
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Desserts', href: '/desserts' },
        ]}
        kicker="The Pastry Counter"
        image="/images/products/classic-tiramisu.jpg"
        imageAlt="Classic tiramisu from the LaHaven pastry counter"
        title={
          <>
            Artisan Desserts <span className="italic text-[#C35D51]">&amp; Pastries</span>
          </>
        }
        description="Beyond our celebration cakes sits a curated pastry counter — basque cheesecakes with a caramelised top, tiramisu layered overnight, and brownie stacks cut thick. Made fresh every morning across our 5 Bengaluru boutiques."
        meta={['Counter Classics', 'Baked Fresh Daily', '100% Eggless Options', 'Sliced Fresh Every Morning']}
      />

      <section className="premium-section bg-[#FFF9F0] pt-10 sm:pt-12">
        <div className="premium-container">
          <div className="flex flex-col gap-3 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-kicker">Today&rsquo;s Selection</span>
              <h2 className="mt-3 font-serif text-[1.9rem] font-bold leading-tight tracking-[-0.015em] text-[#443026] sm:text-[2.3rem]">
                Small-Batch, Made This Morning
              </h2>
            </div>
            <p className="font-sans text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#766256]">
              {desserts.length} Patisserie Classics
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {desserts.map((dessert) => (
              <ProductCard
                key={dessert.id}
                product={dessert}
              />
            ))}
          </div>

          {/* Light Luxury Quality Band */}
          <div className="relative mt-16 overflow-hidden rounded-3xl border border-[#E0D6C9] bg-[#FFFFFF] px-6 py-10 shadow-[0_8px_30px_rgba(68,48,38,0.06)] sm:px-10 lg:px-12">
            <div className="relative grid gap-9 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <span className="section-kicker">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E5BB67]" />
                  <span>Pure Ingredients</span>
                </span>
                <h2 className="mt-4 font-serif text-[1.9rem] font-bold leading-[1.1] tracking-[-0.015em] text-[#443026] sm:text-[2.4rem]">
                  Made Fresh Daily in{' '}
                  <span className="italic font-normal text-[#C35D51]">Bengaluru</span>
                </h2>
                <p className="mt-3 max-w-md font-sans text-sm leading-relaxed text-[#766256]">
                  We never use artificial food compounds or shelf stabilisers. Real cream, pure
                  butter, and authentic Belgian couverture chocolate only.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link to="/cakes" className="btn-primary">
                    <span>Add a Cake to Your Order</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={getWhatsAppUrl(
                      'Hi LaHaven! I would like to order fresh pastries and desserts from the counter.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>Order Counter Box</span>
                  </a>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
                {QUALITY_NOTES.map((note) => (
                  <div
                    key={note.title}
                    className="rounded-2xl border border-[#E0D6C9] bg-[#FFFFFF] p-5 shadow-2xs"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#E0D6C9] bg-[#FAF5EC] text-[#C35D51]">
                      <note.icon className="h-4 w-4" />
                    </span>
                    <h3 className="mt-3 font-serif text-lg font-bold leading-snug text-[#443026]">
                      {note.title}
                    </h3>
                    <p className="mt-1 font-sans text-xs leading-relaxed text-[#766256]">
                      {note.copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Desserts;
