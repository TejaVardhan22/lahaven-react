import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import type { BreadcrumbItem } from '@/types';

interface PageHeroProps {
  breadcrumbs: BreadcrumbItem[];
  kicker: string;
  title: ReactNode;
  description?: ReactNode;
  meta?: string[];
  actions?: ReactNode;
  aside?: ReactNode;
  align?: 'left' | 'center';
  /** Banner background photo for the page. */
  image?: string;
  imageAlt?: string;
  /** Optional second photo (unused when full background image is active). */
  imageSecondary?: string;
}

/**
 * Shared inner-page banner with full-bleed background image across all pages.
 */
export function PageHero({
  breadcrumbs,
  kicker,
  title,
  description,
  meta,
  actions,
  aside,
  align = 'left',
  image = '/images/hero/belgian-truffle-desktop.jpg',
  imageAlt = 'LaHaven Cake Boutique',
}: PageHeroProps) {
  const centered = align === 'center';

  return (
    <section className="relative overflow-hidden bg-[#FEF0E5] pt-6 sm:pt-8">
      <div className="premium-container relative">
        <Breadcrumbs items={breadcrumbs} />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-2 overflow-hidden rounded-3xl border border-[#FAF0EA] bg-[#25161B] px-6 py-11 shadow-sm sm:px-10 sm:py-14 lg:px-14 lg:py-16"
        >
          {/* Full-Bleed Background Image */}
          <img
            src={image}
            alt={imageAlt}
            loading="eager"
            width={1600}
            height={700}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* Clean Legibility Scrim Over Background Image */}
          <div className="pointer-events-none absolute inset-0 bg-black/55" />

          <div
            className={
              centered && !aside
                ? 'relative z-10 mx-auto max-w-3xl text-center'
                : aside
                  ? 'relative z-10 grid items-center gap-8 lg:grid-cols-12 lg:gap-12'
                  : 'relative z-10 max-w-3xl'
            }
          >
            <div className={aside ? 'lg:col-span-7' : ''}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FEF0E5]/25 bg-[#FEF0E5]/15 px-3.5 py-1.5 font-sans text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#E5BB67] backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E5BB67]" />
                {kicker}
              </span>

              <h1 className="mt-4 text-balance font-serif text-[clamp(2.15rem,1.55rem+2.5vw,3.45rem)] font-bold leading-[1.06] tracking-[-0.02em] text-[#FEF0E5] [&_.italic]:!text-[#E5BB67]">
                {title}
              </h1>

              {description && (
                <p
                  className={`mt-3.5 max-w-2xl font-sans text-sm font-normal leading-relaxed text-[#FEF0E5]/90 sm:text-[15px] ${
                    centered && !aside ? 'mx-auto' : ''
                  }`}
                >
                  {description}
                </p>
              )}

              {meta && meta.length > 0 && (
                <ul
                  className={`mt-5 flex flex-wrap gap-2 ${
                    centered && !aside ? 'justify-center' : ''
                  }`}
                >
                  {meta.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-[#FEF0E5]/25 bg-[#FEF0E5]/15 px-3.5 py-1.5 font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#FEF0E5] backdrop-blur-md"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {actions && (
                <div
                  className={`mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center ${
                    centered && !aside ? 'justify-center' : ''
                  }`}
                >
                  {actions}
                </div>
              )}
            </div>

            {aside && (
              <motion.div
                className="lg:col-span-5"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
              >
                {aside}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default PageHero;
