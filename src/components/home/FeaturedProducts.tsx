import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { useStorefront } from '@/context/StorefrontContext';
import { products } from '@/data/products';
import { EgglessSymbol } from '@/components/products/ProductCard';

export const FeaturedProducts: React.FC = () => {
  const { openDrawer, quickAddToCart, toggleWishlist, isWishlisted } = useStorefront();

  const mainCake = products.find((p) => p.id === 'chocolate-truffle-cake') || products[0];
  const sideItems = [
    products.find((p) => p.id === 'mango-raspberry-cake') || products[1],
    products.find((p) => p.id === 'heart-shaped-strawberry-bento') || products[2],
    products.find((p) => p.id === 'classic-cheesecake') || products[3],
  ];

  return (
    <section aria-label="Featured Bestsellers" className="bg-[#FEF0E5] py-14 sm:py-20">
      <div className="section-rail">
        <div className="flex flex-col gap-4 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow inline-flex items-center gap-2 rounded-full bg-[#F5C7AF] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#C35D51]">
              <span>Customer Favourites</span>
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-[#2D221E] sm:text-4xl">
              Featured Best-Sellers
            </h2>
            <p className="mt-1 font-sans text-xs font-normal text-[#6A564B] sm:text-sm">
              Our most-requested celebrations, baked fresh with Belgian couverture and pure love.
            </p>
          </div>

          <Link
            to="/cakes"
            className="inline-flex items-center gap-1.5 font-sans text-xs font-bold uppercase tracking-wider text-[#C35D51] transition-colors hover:text-[#2D221E]"
          >
            <span>Explore All Cakes</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* ── Asymmetric Layout: Large Featured Cake + 3 Supporting Cards ── */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Column: Hero Bestseller Card (Span 7) */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#FAF0EA] bg-[#FAF0EA]/25 p-6 transition-all duration-300 hover:border-[#C35D51]/50 hover:shadow-md lg:col-span-7">
            <div>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#FAF0EA]/40">
                <Link to={`/cakes/${mainCake.slug}`} className="block h-full w-full">
                  <img
                    src={mainCake.images[0]?.src || '/images/hero/belgian-truffle-desktop.jpg'}
                    alt={mainCake.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    width={900}
                    height={560}
                  />
                </Link>
                <div className="absolute left-3 top-3">
                  <EgglessSymbol className="h-5 w-5 drop-shadow-sm" />
                </div>
                <span className="absolute right-3 top-3 rounded-full bg-[#E5BB67] px-3 py-1 font-sans text-xs font-bold uppercase tracking-wider text-white shadow-xs">
                  No. 1 Bestseller
                </span>
              </div>

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#C35D51]">
                    {mainCake.subcategory || 'Signature Cake'}
                  </span>
                  <h3 className="mt-1 font-serif text-2xl font-bold text-[#2D221E] transition-colors group-hover:text-[#C35D51] sm:text-3xl">
                    <Link to={`/cakes/${mainCake.slug}`}>
                      {mainCake.name}
                    </Link>
                  </h3>
                </div>

                <div className="text-right shrink-0">
                  <span className="block font-sans text-2xl font-bold text-[#2D221E]">
                    ₹{mainCake.startingPrice?.amount || 899}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 border-t border-[#FAF0EA] pt-4">
              <Link
                to={`/cakes/${mainCake.slug}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C35D51] px-6 py-2.5 font-sans text-xs font-semibold uppercase tracking-wider text-[#FEF0E5] transition-all hover:bg-[#AD5B4D]"
              >
                <span>View Product</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={() => quickAddToCart(mainCake, '0.5 kg', true)}
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#C35D51] bg-transparent px-5 py-2.5 font-sans text-xs font-semibold uppercase tracking-wider text-[#C35D51] transition-all hover:bg-[#F5C7AF]/20"
              >
                <ShoppingBag className="h-3.5 w-3.5" />
                <span>Add to Bag</span>
              </button>
            </div>
          </div>

          {/* Right Column: 3 Supporting Cards (Span 5) */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            {sideItems.map((item) => (
              <div
                key={item.id}
                className="group flex gap-4 rounded-2xl border border-[#FAF0EA] bg-[#FAF0EA]/25 p-4 transition-all duration-300 hover:border-[#C35D51]/50 hover:shadow-xs"
              >
                <Link
                  to={`/cakes/${item.slug}`}
                  className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-[#FAF0EA]/40 sm:h-28 sm:w-28"
                >
                  <img
                    src={item.images[0]?.src || '/images/hero/belgian-truffle-mobile.jpg'}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={200}
                    height={200}
                  />
                  <div className="absolute left-2 top-2">
                    <EgglessSymbol className="h-4 w-4" />
                  </div>
                </Link>

                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-[#C35D51]">
                      {item.subcategory || 'Boutique Creation'}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#2D221E] transition-colors group-hover:text-[#C35D51]">
                      <Link to={`/cakes/${item.slug}`}>{item.name}</Link>
                    </h4>
                  </div>

                  <div className="mt-2 flex items-center justify-between border-t border-[#FAF0EA]/70 pt-2">
                    <span className="font-sans text-sm font-bold text-[#2D221E]">
                      ₹{item.startingPrice?.amount || item.price?.amount || 799}
                    </span>
                    <Link
                      to={`/cakes/${item.slug}`}
                      className="font-sans text-xs font-semibold text-[#C35D51] transition-colors hover:text-[#2D221E]"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

