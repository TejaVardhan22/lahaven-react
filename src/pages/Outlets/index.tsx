import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Clock,
  Phone,
  ArrowUpRight,
  Navigation,
  Search,
  Truck,
  Sparkles,
} from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { outlets } from '@/data/outlets';
import { pageSEO } from '@/data/seo';
import { generateOutletsSchema } from '@/utils/seo';
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  getWhatsAppUrl,
} from '@/utils/constants';
import { WhatsAppIcon } from '@/components/shared/Icons';

export const Outlets: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredOutlets = useMemo(() => {
    return outlets.filter((outlet) => {
      const matchesArea = selectedArea === 'ALL' || outlet.id === selectedArea;
      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesArea;
      const hay = `${outlet.name} ${outlet.area} ${outlet.address} ${outlet.landmark || ''}`.toLowerCase();
      return matchesArea && hay.includes(q);
    });
  }, [selectedArea, searchQuery]);

  return (
    <main className="min-h-screen bg-[#FEF0E5] pb-24">
      <SEOHead
        title={pageSEO.outlets.title}
        description={pageSEO.outlets.description}
        canonicalUrl={pageSEO.outlets.canonicalUrl}
        ogTitle={pageSEO.outlets.ogTitle}
        ogDescription={pageSEO.outlets.ogDescription}
        ogImage={pageSEO.outlets.ogImage}
        twitterCard={pageSEO.outlets.twitterCard}
        structuredData={generateOutletsSchema()}
      />

      {/* ── 1. Editorial Oat & Honey Page Intro ── */}
      <div className="page-intro">
        <span className="eyebrow">Come by for fresh bakes</span>
        <h1>Our Bengaluru Boutiques.</h1>
        <p>
          Five neighbourhood counters across the city.
          <br />
          Open daily for fresh morning treats, celebration cakes, and express chilled pickup.
        </p>
      </div>

      <div className="section-rail pt-10">
        {/* ── 2. Minimal Filter & Search Toolbar ── */}
        <div className="flex flex-col gap-4 border-b border-[#E0D6C9] pb-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSelectedArea('ALL')}
              className={`rounded-full px-4 py-2 font-sans text-xs font-bold transition-all ${
                selectedArea === 'ALL'
                  ? 'bg-[#443026] text-[#FFF9F0] shadow-2xs'
                  : 'border border-[#E0D6C9] bg-[#FFFFFF] text-[#443026] shadow-2xs hover:border-[#443026]'
              }`}
            >
              All 5 Boutiques
            </button>
            {outlets.map((outlet) => (
              <button
                key={outlet.id}
                type="button"
                onClick={() => setSelectedArea(outlet.id)}
                className={`rounded-full px-4 py-2 font-sans text-xs font-bold transition-all ${
                  selectedArea === outlet.id
                    ? 'bg-[#443026] text-[#FFF9F0] shadow-2xs'
                    : 'border border-[#E0D6C9] bg-[#FFFFFF] text-[#443026] shadow-2xs hover:border-[#443026]'
                }`}
              >
                {outlet.area}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#766256]" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search area or street..."
              aria-label="Search outlets"
              className="w-full rounded-full border border-[#E0D6C9] bg-[#FFFFFF] py-2 pl-9 pr-4 font-sans text-xs text-[#443026] placeholder-[#766256] outline-none shadow-2xs transition-colors focus:border-[#C35D51] focus:ring-1 focus:ring-[#C35D51]"
            />
          </div>
        </div>

        {/* ── 3. High-Contrast Editorial Boutiques Grid ── */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredOutlets.map((outlet, index) => (
            <article
              key={outlet.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E0D6C9] bg-[#FFFFFF] p-5 shadow-[0_8px_30px_rgba(68,48,38,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D0C2B4] hover:shadow-[0_16px_40px_rgba(68,48,38,0.12)]"
            >
              <div>
                {/* Storefront Image */}
                {outlet.image && (
                  <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#FAF5EC]">
                    <img
                      src={outlet.image}
                      alt={`${outlet.name} storefront in ${outlet.area}`}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      loading={index < 3 ? 'eager' : 'lazy'}
                      width={800}
                      height={500}
                    />
                    <div className="absolute left-3 top-3">
                      <span className="rounded-full bg-[#443026] px-2.5 py-1 font-sans text-[10px] font-bold text-[#FFF9F0] shadow-sm">
                        Boutique 0{index + 1}
                      </span>
                    </div>
                    <div className="absolute right-3 top-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C35D51] px-2.5 py-1 font-sans text-[10px] font-bold text-[#FFF9F0] shadow-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                        <span>Open 10 AM – 10:30 PM</span>
                      </span>
                    </div>
                  </div>
                )}

                {/* Boutique Header */}
                <div>
                  <h2 className="font-serif text-2xl font-bold text-[#443026]">
                    {outlet.area}
                  </h2>
                  {outlet.landmark && (
                    <p className="mt-1 font-sans text-xs font-semibold text-[#C35D51]">
                      Near {outlet.landmark}
                    </p>
                  )}

                  {/* Highlights */}
                  {outlet.highlights && outlet.highlights.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {outlet.highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded-full border border-[#E0D6C9] bg-[#FAF5EC] px-2.5 py-0.5 font-sans text-[10px] font-semibold text-[#443026]"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Address, Hours & Phone */}
                  <div className="mt-4 space-y-2.5 border-t border-[#E0D6C9] pt-4 font-sans text-xs text-[#5A453A]">
                    <p className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C35D51]" />
                      <span className="leading-relaxed font-medium text-[#443026]">{outlet.address}</span>
                    </p>

                    <p className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 shrink-0 text-[#C35D51]" />
                      <span>Mon – Sun: 10:00 AM – 10:30 PM</span>
                    </p>

                    <p className="flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 shrink-0 text-[#C35D51]" />
                      <a
                        href={`tel:${outlet.phone.replace(/[^0-9+]/g, '')}`}
                        className="font-bold text-[#443026] hover:text-[#C35D51] hover:underline"
                      >
                        {outlet.phone}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 grid grid-cols-2 gap-2 border-t border-[#E0D6C9] pt-4">
                <a
                  href={outlet.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#C35D51] px-3.5 py-2.5 font-sans text-xs font-bold text-[#FFF9F0] shadow-2xs transition-all hover:bg-[#AD5B4D] hover:-translate-y-0.5"
                >
                  <Navigation size={13} />
                  <span>Directions</span>
                  <ArrowUpRight size={13} />
                </a>

                <a
                  href={getWhatsAppUrl(
                    `Hi LaHaven ${outlet.area}! I would like to check cake availability for pickup.`,
                    outlet.whatsapp
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-[#443026] bg-[#FFFFFF] px-3.5 py-2.5 font-sans text-xs font-bold text-[#443026] shadow-2xs transition-all hover:bg-[#443026] hover:text-[#FFF9F0] hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* ── 4. Central Delivery Concierge Strip ── */}
        <div className="mt-16 rounded-2xl border border-[#E0D6C9] bg-[#FFFFFF] p-8 text-center shadow-[0_8px_30px_rgba(68,48,38,0.06)] sm:p-10">
          <span className="eyebrow">
            <Truck size={15} />
            <span>Bengaluru Chilled Delivery</span>
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#443026] sm:text-4xl">
            Not sure which counter is closest to you?
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-sans text-xs leading-relaxed text-[#766256] sm:text-sm">
            Share your delivery address or pincode with our central desk. We automatically route your
            cake to the nearest boutique kitchen for 2–4 hour chilled doorstep delivery across Bengaluru.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl(
                'Hi LaHaven! Could you help me find the closest boutique for delivery to my pincode?'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-dark"
            >
              <WhatsAppIcon className="h-4 w-4 fill-current" />
              <span>Ask Central Concierge</span>
            </a>

            <Link
              to="/cakes"
              className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#C35D51] bg-transparent px-6 py-3 font-sans text-xs font-bold uppercase tracking-wider text-[#C35D51] transition-all hover:bg-[#C35D51] hover:text-[#FFF9F0]"
            >
              <span>Explore All Cakes</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <span className="mt-4 block font-sans text-xs text-[#766256]">
            Or call our central hotline:{' '}
            <a href={PHONE_TEL} className="font-bold text-[#443026] underline hover:text-[#C35D51]">
              {PHONE_DISPLAY}
            </a>
          </span>
        </div>
      </div>
    </main>
  );
};

export default Outlets;
