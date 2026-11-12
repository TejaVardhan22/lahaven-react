import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Leaf,
  Wheat,
  Truck,
  MapPin,
} from 'lucide-react';

interface QuickCategoryItem {
  id: string;
  label: string;
  href: string;
  image: string;
  badge?: string;
}

const QUICK_CATEGORIES: QuickCategoryItem[] = [
  {
    id: 'bestsellers',
    label: 'Bestsellers',
    href: '/cakes?category=All+Cakes&sort=popular',
    image: '/images/hero/belgian-truffle-mobile.jpg',
    badge: 'Hot',
  },
  {
    id: 'chocolate',
    label: 'Chocolate',
    href: '/cakes?flavour=chocolate',
    image: '/images/products/chocolate-fantasy-cake.jpg',
  },
  {
    id: 'fruit',
    label: 'Fruit & Berry',
    href: '/cakes?flavour=fruit-berry',
    image: '/images/hero/mango-raspberry-mobile.jpg',
  },
  {
    id: 'red-velvet',
    label: 'Red Velvet',
    href: '/cakes?flavour=cream-vanilla',
    image: '/images/products/red-velvet-cream-cheese.jpg',
  },
  {
    id: 'bento',
    label: 'Bento Cakes',
    href: '/bento-cakes',
    image: '/images/hero/strawberry-heart-mobile.jpg',
    badge: 'Trending',
  },
  {
    id: 'cheesecakes',
    label: 'Cheesecakes',
    href: '/cakes?category=cheesecakes',
    image: '/images/products/blueberry-cheesecake.jpg',
  },
  {
    id: 'designer',
    label: 'Designer',
    href: '/cakes?category=designer-cakes',
    image: '/images/hero/lychee-gateau-mobile.jpg',
  },
  {
    id: 'birthday',
    label: 'Birthday',
    href: '/cakes?occasion=birthday',
    image: '/images/products/butterscotch-crunch-cake.jpg',
  },
  {
    id: 'anniversary',
    label: 'Anniversary',
    href: '/cakes?occasion=anniversary',
    image: '/images/products/royal-opera-cake.jpg',
  },
  {
    id: 'desserts',
    label: 'Desserts',
    href: '/desserts',
    image: '/images/products/chocochips-brownie.jpg',
  },
];

interface HeroBannerSlide {
  id: string;
  alt: string;
  ctaHref: string;
  desktopImage: string;
  mobileImage: string;
}

const HERO_SLIDES: HeroBannerSlide[] = [
  {
    id: 'belgian-truffle',
    alt: 'LaHaven 54% Belgian Dark Chocolate Truffle Cake',
    ctaHref: '/cakes/chocolate-truffle-cake',
    desktopImage: '/images/hero/belgian-truffle-desktop.jpg',
    mobileImage: '/images/hero/belgian-truffle-mobile.jpg',
  },
  {
    id: 'mango-raspberry',
    alt: 'LaHaven Alphonso Mango & Raspberry Mirror Glaze Cake',
    ctaHref: '/cakes/mango-raspberry-cake',
    desktopImage: '/images/hero/mango-raspberry-desktop.jpg',
    mobileImage: '/images/hero/mango-raspberry-mobile.jpg',
  },
  {
    id: 'strawberry-heart',
    alt: 'LaHaven Heart-Shaped Strawberry Glaze Celebration Cake',
    ctaHref: '/cakes/heart-shaped-strawberry',
    desktopImage: '/images/hero/strawberry-heart-desktop.jpg',
    mobileImage: '/images/hero/strawberry-heart-mobile.jpg',
  },
  {
    id: 'lychee-gateau',
    alt: 'LaHaven Fresh Lychee & Rosewater Gateau',
    ctaHref: '/cakes/lychee-gateau',
    desktopImage: '/images/hero/lychee-gateau-desktop.jpg',
    mobileImage: '/images/hero/lychee-gateau-mobile.jpg',
  },
  {
    id: 'blueberry',
    alt: 'LaHaven Wild Blueberry Compote Gateau',
    ctaHref: '/cakes/blueberry-cake',
    desktopImage: '/images/hero/blueberry-desktop.jpg',
    mobileImage: '/images/hero/blueberry-mobile.jpg',
  },
];

export const Hero: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (reduceMotion || isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [reduceMotion, isPaused]);

  return (
    <section aria-label="LaHaven Hero & Bakery Story" className="home-hero bg-[#FFF9F0] pt-6 sm:pt-10">
      {/* ── 1. Oat & Honey Inspired Editorial Hero Copy ── */}
      <div className="hero-copy max-w-4xl mx-auto text-center px-4">
        <h1 className="mt-2 font-serif text-[clamp(2.5rem,5.5vw,4.5rem)] font-normal leading-[1.08] tracking-tight text-[#443026]">
          Made with Love.<br />
          <span className="text-[#C35D51] italic">Baked to Perfection.</span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl font-sans text-sm font-normal leading-relaxed text-[#766256] sm:text-base">
          Thoughtfully crafted bakes, made fresh with beautiful ingredients and a little everyday magic.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/cakes"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C35D51] px-8 py-3.5 font-sans text-sm font-semibold uppercase tracking-wider text-[#FFF9F0] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#AD5B4D] hover:shadow-md"
          >
            <span>Explore Our Menu</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/cakes"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C35D51] bg-transparent px-8 py-3.5 font-sans text-sm font-semibold uppercase tracking-wider text-[#C35D51] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F5C7AF]/30"
          >
            <span>Order Fresh Bakes</span>
          </Link>
        </div>
      </div>

      {/* ── 2. Photographic Carousel with Organic Shape & Rotating Seal ── */}
      <div className="section-rail relative mt-10 sm:mt-12">
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="hero-photo group relative overflow-hidden rounded-3xl border border-[#FAF5EC] bg-[#FAF5EC]/40 shadow-[0_16px_48px_rgba(53,41,31,0.08)]"
        >
          {/* Floating Organic Circular Seal */}
          <div className="hero-seal border border-[#443026]/80 bg-[#FFF9F0]/95 text-[#443026]">
            <Leaf className="h-4 w-4 text-[#C35D51]" />
            <span className="font-serif text-lg font-bold">100% Eggless</span>
            <span className="seal-small text-[11px] font-sans text-[#766256]">Fresh Daily</span>
          </div>

          <div
            className="flex h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
            style={{ transform: `translate3d(-${activeSlide * 100}%, 0, 0)` }}
          >
            {HERO_SLIDES.map((slide, index) => (
              <Link
                key={slide.id}
                to={slide.ctaHref}
                aria-hidden={index !== activeSlide}
                tabIndex={index === activeSlide ? 0 : -1}
                className="block h-full w-full shrink-0"
              >
                <picture className="block h-full w-full">
                  <source media="(max-width: 639px)" srcSet={slide.mobileImage} />
                  <img
                    src={slide.desktopImage}
                    alt={slide.alt}
                    width={1920}
                    height={1080}
                    loading="eager"
                    {...(index === 0 ? { fetchpriority: 'high' } : {})}
                    className="h-full w-full object-cover object-center max-h-[640px]"
                  />
                </picture>
              </Link>
            ))}
          </div>

          {/* Bottom Center Floating Slide Dots */}
          <div
            className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full border border-[#FAF5EC] bg-[#FFF9F0]/90 px-3.5 py-1.5 shadow-sm backdrop-blur-sm"
            role="tablist"
            aria-label="Hero Image Carousel Slides"
          >
            {HERO_SLIDES.map((slide, index) => {
              const isActive = index === activeSlide;
              return (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Slide ${index + 1}: ${slide.alt}`}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    isActive
                      ? 'w-7 bg-[#C35D51]'
                      : 'w-2 bg-[#FAF5EC] hover:bg-[#766256]'
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* ── 3. Quick Category Discovery Strip ── */}
      <div className="section-rail mt-8 pb-2">
        <div className="rounded-2xl border border-[#FAF5EC] bg-[#FAF5EC]/40 px-3 py-3 shadow-xs sm:px-5 sm:py-3.5">
          <div className="no-scrollbar -mx-1 flex items-start gap-3.5 overflow-x-auto px-1 py-1 sm:mx-0 sm:justify-between sm:gap-4 sm:overflow-visible">
            {QUICK_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={cat.href}
                className="group flex w-[68px] shrink-0 flex-col items-center text-center sm:w-[84px]"
              >
                <div className="relative h-16 w-16 shrink-0 aspect-square rounded-full border border-[#FAF5EC] bg-[#FFF9F0] p-[2px] transition-transform duration-300 group-hover:-translate-y-1 group-hover:border-[#C35D51] group-hover:shadow-md sm:h-[72px] sm:w-[72px]">
                  <div className="h-full w-full overflow-hidden rounded-full aspect-square border-2 border-[#FFF9F0] bg-[#FFF9F0]">
                    <img
                      src={cat.image}
                      alt={cat.label}
                      width={76}
                      height={76}
                      loading="eager"
                      className="h-full w-full aspect-square rounded-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  {cat.badge && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#E5BB67] px-1.5 py-0.5 font-sans text-[8.5px] font-semibold uppercase tracking-wider text-white shadow-2xs">
                      {cat.badge}
                    </span>
                  )}
                </div>
                <span className="mt-2 flex h-7 items-center justify-center text-center font-sans text-[11px] font-medium leading-tight text-[#443026] transition-colors group-hover:text-[#C35D51] sm:text-xs">
                  {cat.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── 4. Values Strip ── */}
      <div className="values-strip mt-6 border-y border-[#FAF5EC] bg-[#FAF5EC]/30 py-4">
        <div className="flex items-center gap-2 text-xs font-medium text-[#443026]">
          <Leaf className="h-4 w-4 text-[#C35D51]" />
          <span>100% Plant-Based &amp; Eggless</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-[#443026]">
          <Wheat className="h-4 w-4 text-[#C35D51]" />
          <span>Scratch-Baked Fresh Daily</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-[#443026]">
          <Truck className="h-4 w-4 text-[#E5BB67]" />
          <span>Same-Day Chilled Delivery</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-[#443026]">
          <MapPin className="h-4 w-4 text-[#C35D51]" />
          <span>5 Bengaluru Boutiques</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
