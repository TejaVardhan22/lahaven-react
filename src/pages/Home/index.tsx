import React from 'react';
import { SEOHead } from '@/components/seo/SEOHead';
import { Hero } from '@/components/hero/Hero';
import { BrandIntroduction } from '@/components/home/BrandIntroduction';
import { SignatureCollection } from '@/components/products/SignatureCollection';
import { AtelierStory } from '@/components/home/AtelierStory';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { CustomCakesTeaser } from '@/components/home/CustomCakesTeaser';
import { CakeGallery } from '@/components/gallery/CakeGallery';
import { pageSEO } from '@/data/seo';
import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebsiteSchema,
} from '@/utils/seo';

export const Home: React.FC = () => {
  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      generateLocalBusinessSchema(),
      generateOrganizationSchema(),
      generateWebsiteSchema(),
    ],
  };

  return (
    <>
      <SEOHead
        title={pageSEO.home.title}
        description={pageSEO.home.description}
        canonicalUrl={pageSEO.home.canonicalUrl}
        ogTitle={pageSEO.home.ogTitle}
        ogDescription={pageSEO.home.ogDescription}
        ogImage={pageSEO.home.ogImage}
        twitterCard={pageSEO.home.twitterCard}
        structuredData={combinedSchema}
      />

      {/* ── 1. Hero: Made with Love. Baked to Perfection. ── */}
      <Hero />

      {/* ── 2. Brand Statement: A Little More Than a Bakery ── */}
      <BrandIntroduction />

      {/* ── 3. Signature Collection: Category Tabs & Responsive Grid ── */}
      <SignatureCollection />

      {/* ── 4. Bakery Story: Rooted in Tradition. Made for Today. ── */}
      <AtelierStory />

      {/* ── 5. Featured Best-Sellers: Asymmetric Product Grid ── */}
      <FeaturedProducts />

      {/* ── 6. Custom Cake Section: Make Every Celebration Sweeter (Sage Background) ── */}
      <CustomCakesTeaser />

      {/* ── 7. Instagram Gallery: Editorial Gallery with Instagram CTA ── */}
      <CakeGallery />
    </>
  );
};

export default Home;
