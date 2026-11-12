import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FlavourCard {
  id: string;
  label: string;
  description: string;
  image: string;
  href: string;
  count: string;
}

const FLAVOUR_CARDS: FlavourCard[] = [
  {
    id: 'chocolate',
    label: 'Belgian Chocolate',
    description: 'Dark truffle, ganache & hazelnut',
    image: '/images/products/belgian-chocolate-truffle.jpg',
    href: '/cakes?flavour=chocolate',
    count: '10 Cakes',
  },
  {
    id: 'fruit-berry',
    label: 'Fruit & Berry',
    description: 'Alphonso mango, lychee & blueberry',
    image: '/images/products/mango-raspberry-cake.jpg',
    href: '/cakes?flavour=fruit-berry',
    count: '7 Cakes',
  },
  {
    id: 'cream-vanilla',
    label: 'Red Velvet & Cream',
    description: 'Cream cheese & Madagascar vanilla',
    image: '/images/products/red-velvet-cream-cheese.jpg',
    href: '/cakes?flavour=cream-vanilla',
    count: '4 Cakes',
  },
  {
    id: 'nutty-caramel',
    label: 'Butterscotch & Nutty',
    description: 'Ferrero Rocher & roasted almond',
    image: '/images/products/ferrero-rocher-cake.jpg',
    href: '/cakes?flavour=nutty-caramel',
    count: '3 Cakes',
  },
  {
    id: 'cheesecake',
    label: 'Baked Cheesecakes',
    description: 'Lotus Biscoff & wild blueberry',
    image: '/images/products/lotus-biscoff-cheesecake.jpg',
    href: '/cakes?flavour=cheesecake',
    count: '2 Cakes',
  },
  {
    id: 'coffee-mocha',
    label: 'Coffee & Opera',
    description: 'French Opera & Italian Tiramisu',
    image: '/images/products/royal-opera-cake.jpg',
    href: '/cakes?flavour=coffee-mocha',
    count: '2 Cakes',
  },
];

export function ShopByFlavour() {
  return (
    <section className="bg-[#FEF0E5] py-12 sm:py-16">
      <div className="premium-container">
        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#C35D51]">
              Shop By Flavour
            </span>
            <h2 className="mt-1 font-serif text-2xl font-bold tracking-tight text-[#2D221E] sm:text-3xl">
              What&apos;s Your Craving Today?
            </h2>
          </div>
          <Link
            to="/cakes"
            className="inline-flex items-center gap-1.5 font-sans text-xs font-bold uppercase tracking-wider text-[#C35D51] transition-colors hover:text-[#2D221E]"
          >
            <span>Explore All Flavours</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* 6-Column Clean Bakingo-Style Flavour Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {FLAVOUR_CARDS.map((card) => (
            <Link
              key={card.id}
              to={card.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#EEDCD0] bg-[#FAF0EA] p-2.5 shadow-[0_4px_16px_rgba(56,37,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E5BB67] hover:shadow-[0_12px_28px_rgba(56,37,42,0.08)]"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#FEF0E5]">
                <img
                  src={card.image}
                  alt={card.label}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute right-2 top-2 rounded-full bg-[#FEF0E5]/95 px-2 py-0.5 font-sans text-[9.5px] font-bold text-[#C35D51] shadow-2xs">
                  {card.count}
                </span>
              </div>
              <div className="mt-3 px-1 pb-1">
                <h3 className="font-serif text-lg font-bold leading-snug text-[#2D221E] transition-colors group-hover:text-[#C35D51]">
                  {card.label}
                </h3>
                <p className="mt-0.5 line-clamp-1 font-sans text-[11px] text-[#6A564B]">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShopByFlavour;
