import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, ArrowUpRight, Truck } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { ProductCard } from '@/components/products/ProductCard';
import { products } from '@/data/products';
import { pageSEO } from '@/data/seo';

const CATEGORY_TABS = [
  { key: 'all', label: 'All treats' },
  { key: 'celebration-cakes', label: 'Celebration Cakes' },
  { key: 'bento-cakes', label: 'Korean Bento' },
  { key: 'cheesecakes', label: 'Cheesecakes' },
  { key: 'desserts', label: 'Artisan Desserts' },
  { key: 'eggless', label: '100% Eggless' },
];

export const Cakes: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState<string>(
    searchParams.get('category') || 'all'
  );
  const [searchQuery, setSearchQuery] = useState<string>(
    searchParams.get('q') || ''
  );
  const [sortBy, setSortBy] = useState<string>(
    searchParams.get('sort') || 'recommended'
  );
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Sync from URL params
  useEffect(() => {
    const cat = searchParams.get('category') || 'all';
    const q = searchParams.get('q') || '';
    const s = searchParams.get('sort') || 'recommended';
    setSelectedCategory(cat);
    setSearchQuery(q);
    setSortBy(s);
    setVisibleCount(12);
  }, [searchParams]);

  const handleCategorySelect = (key: string) => {
    setSelectedCategory(key);
    setVisibleCount(12);
    const next = new URLSearchParams(searchParams);
    if (key === 'all') {
      next.delete('category');
    } else {
      next.set('category', key);
    }
    setSearchParams(next, { replace: true });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = new URLSearchParams(searchParams);
    if (!searchQuery.trim()) {
      next.delete('q');
    } else {
      next.set('q', searchQuery.trim());
    }
    setSearchParams(next, { replace: true });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setSortBy(val);
    const next = new URLSearchParams(searchParams);
    if (val === 'recommended') {
      next.delete('sort');
    } else {
      next.set('sort', val);
    }
    setSearchParams(next, { replace: true });
  };

  // Filter & sort products
  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    const list = products.filter((p) => {
      // Category filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'celebration-cakes') {
          if (p.category !== 'celebration-cakes' && p.category !== 'designer-cakes') return false;
        } else if (selectedCategory === 'bento-cakes') {
          if (p.category !== 'bento-cakes') return false;
        } else if (selectedCategory === 'desserts') {
          if (p.category !== 'desserts') return false;
        } else if (selectedCategory === 'cheesecakes') {
          if (p.flavorProfile !== 'cheesecake' && !p.name.toLowerCase().includes('cheesecake')) {
            return false;
          }
        } else if (selectedCategory === 'eggless') {
          const isEggless = p.isEggless ?? p.tags.includes('eggless');
          if (!isEggless) return false;
        }
      }

      // Search query filter
      if (q) {
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesDesc = (p.shortDescription || p.description || '').toLowerCase().includes(q);
        const matchesTags = p.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesName && !matchesDesc && !matchesTags) return false;
      }

      return true;
    });

    if (sortBy === 'price-asc') {
      return [...list].sort(
        (a, b) => (a.startingPrice?.amount || a.price?.amount || 0) - (b.startingPrice?.amount || b.price?.amount || 0)
      );
    }
    if (sortBy === 'price-desc') {
      return [...list].sort(
        (a, b) => (b.startingPrice?.amount || b.price?.amount || 0) - (a.startingPrice?.amount || a.price?.amount || 0)
      );
    }
    if (sortBy === 'name') {
      return [...list].sort((a, b) => a.name.localeCompare(b.name));
    }
    // Default: recommended / featured first
    return [...list].sort((a, b) => Number(b.isFeatured) - Number(a.isFeatured));
  }, [selectedCategory, searchQuery, sortBy]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  // Infinite scroll observer: load next batch as user scrolls
  useEffect(() => {
    if (visibleCount >= filteredProducts.length) return;

    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + 8, filteredProducts.length));
        }
      },
      { rootMargin: '350px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [visibleCount, filteredProducts.length]);

  return (
    <main className="min-h-screen bg-[#FFF9F0]">
      <SEOHead
        title={pageSEO.cakes.title}
        description={pageSEO.cakes.description}
        canonicalUrl={pageSEO.cakes.canonicalUrl}
        ogTitle={pageSEO.cakes.ogTitle}
        ogDescription={pageSEO.cakes.ogDescription}
        ogImage={pageSEO.cakes.ogImage}
        twitterCard={pageSEO.cakes.twitterCard}
      />

      {/* ── 1. Oat & Honey Page Intro ── */}
      <div className="page-intro">
        <span className="eyebrow">Fresh morning bakes &amp; celebrations</span>
        <h1>Shop our Treats.</h1>
        <p>
          Handcrafted in Bengaluru with 54% Belgian couverture, pure dairy butter,
          and natural fruit compotes. Made fresh each morning for your sweetest moments.
        </p>
      </div>

      {/* ── 2. Oat & Honey Catalog Toolbar & Grid ── */}
      <section className="catalog section-rail">
        {/* Toolbar: Category Tabs on Left + Underline Search on Right */}
        <div className="catalog-toolbar">
          <nav className="category-tabs" aria-label="Treat categories">
            {CATEGORY_TABS.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => handleCategorySelect(tab.key)}
                className={selectedCategory === tab.key ? 'selected' : ''}
                aria-current={selectedCategory === tab.key ? 'page' : undefined}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <form onSubmit={handleSearchSubmit} className="catalog-search" role="search">
            <input
              id="shop-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Find your favourite treat…"
              aria-label="Search treats"
            />
            <button type="submit" aria-label="Submit search">
              <Search size={18} />
            </button>
          </form>
        </div>

        {/* Catalog Count & Sort Controls */}
        <div className="catalog-count">
          <p>
            {filteredProducts.length} happy little {filteredProducts.length === 1 ? 'treat' : 'treats'}
            {searchQuery ? ` for “${searchQuery}”` : ''}
          </p>

          <div className="sort-form">
            <SlidersHorizontal size={14} className="text-[#766256]" />
            <label htmlFor="shop-sort" className="sr-only">
              Sort treats
            </label>
            <select
              id="shop-sort"
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="recommended">Featured</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
              <option value="name">Name: A–Z</option>
            </select>
          </div>
        </div>

        {/* Product Grid / Empty State */}
        {displayedProducts.length > 0 ? (
          <>
            <div className="product-grid">
              {displayedProducts.map((product, idx) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={idx}
                  priority={idx < 4}
                />
              ))}
            </div>

            {/* Infinite Scroll Sentinel: Automatically loads more products on scroll */}
            {visibleCount < filteredProducts.length && (
              <div
                ref={sentinelRef}
                className="mt-14 flex flex-col items-center justify-center py-6 text-center"
                aria-live="polite"
              >
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#C35D51] border-t-transparent" />
                <span className="mt-2.5 font-sans text-xs text-[#766256]">
                  Loading more fresh bakes...
                </span>
              </div>
            )}
          </>
        ) : (
          <div className="empty-state py-16 text-center">
            <h2 className="font-serif text-3xl font-bold text-[#443026]">No crumbs here.</h2>
            <p className="mx-auto mt-2 max-w-md font-sans text-xs text-[#766256]">
              We couldn’t find a treat matching your selection. Try another search or reset to see
              the full counter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setSearchParams({}, { replace: true });
              }}
              className="button button-dark mt-6"
            >
              <span>See all treats</span>
              <ArrowUpRight size={17} />
            </button>
          </div>
        )}

        {/* Delivery / Boutique Pickup Note */}
        <div className="shop-delivery">
          <Truck size={22} className="mx-auto text-[#C35D51]" />
          <h3 className="mt-2 font-serif text-2xl font-bold text-[#443026]">
            From our Bengaluru ovens to your door.
          </h3>
          <p>
            Handcrafted fresh each morning. Available for same-day chilled doorstep delivery or
            express pickup across our 5 boutique locations.
          </p>
          <Link to="/outlets" className="text-link mt-2 font-semibold">
            <span>Find your closest boutique</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Cakes;
