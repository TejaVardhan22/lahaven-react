import React from 'react';

interface Stat {
  value: string;
  label: string;
  note: string;
}

const STATS: Stat[] = [
  {
    value: '5',
    label: 'Bengaluru Boutiques',
    note: 'Frazer Town to Yelahanka New Town',
  },
  {
    value: '35',
    label: 'Artisan Creations',
    note: 'Baked in small batches every morning',
  },
  {
    value: '8',
    label: 'Celebrations',
    note: 'Birthdays, weddings & intimate wins',
  },
  {
    value: '4.9★',
    label: 'Guest Rating',
    note: 'From over 1,200+ local reviews',
  },
];

export function StatsBand() {
  return (
    <section className="relative bg-[#FFF9F0] pb-4 pt-6 sm:pt-8" aria-label="LaHaven at a glance">
      <div className="premium-container">
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-[#FAF5EC] border border-[#E0D6C9] shadow-[0_4px_20px_rgba(68,48,38,0.04)] px-5 py-5 sm:px-6 sm:py-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F5C04A] hover:shadow-[0_12px_32px_rgba(68,48,38,0.10)]"
            >
              <p className="font-serif text-3xl sm:text-4xl font-bold leading-none tracking-tight text-[#443026]">
                {stat.value}
              </p>
              <p className="mt-2.5 font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-[#C35D51]">
                {stat.label}
              </p>
              <p className="mt-1 font-sans text-xs font-normal leading-snug text-[#766256]">
                {stat.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsBand;
