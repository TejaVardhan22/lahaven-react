import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import { outlets } from '@/data/outlets';
import { WhatsAppIcon } from '@/components/shared/Icons';

export const OutletPreview: React.FC = () => {
  return (
    <section className="premium-section relative overflow-hidden bg-[#FFF9F0] text-[#443026]">
      <div className="premium-container relative z-10">
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#443026] px-3.5 py-1.5 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFF9F0] shadow-2xs">
            <MapPin className="h-3.5 w-3.5 text-[#F5C04A]" />
            <span>Visit us in person</span>
          </span>
          <h2 className="mt-4 font-serif text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem] font-bold leading-tight tracking-tight text-[#443026]">
            Our Outlets Across Bengaluru
          </h2>
          <p className="mt-4 font-sans text-sm font-normal leading-relaxed text-[#766256] sm:text-base">
            Experience the aroma of freshly baked artisan cakes, choose your celebration design in-store, or pick up your pre-ordered delights at your nearest boutique.
          </p>
        </div>

        {/* 5 Bengaluru Outlets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {outlets.map((outlet, index) => (
            <motion.div
              key={outlet.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E0D6C9] bg-[#FFFFFF] shadow-[0_8px_30px_rgba(68,48,38,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D0C2B4] hover:shadow-[0_16px_40px_rgba(68,48,38,0.12)]"
            >
              <div>
                {/* Outlet Photo Frame */}
                {outlet.image && (
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF5EC]">
                    <img
                      src={outlet.image}
                      alt={`${outlet.name} storefront`}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      loading="lazy"
                      width={600}
                      height={375}
                    />
                    <span className="absolute bottom-2.5 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#443026] px-2.5 py-1 font-sans text-[9px] font-bold uppercase tracking-wider text-[#FFF9F0] shadow-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                      Open Today
                    </span>
                  </div>
                )}

                <div className="p-5">
                  <h3 className="font-serif text-xl sm:text-[22px] font-bold text-[#443026] mb-1 transition-colors group-hover:text-[#C35D51]">
                    {outlet.area}
                  </h3>
                  {outlet.tagline && (
                    <p className="font-sans text-[10.5px] uppercase tracking-wider text-[#C35D51] mb-2 font-bold">
                      {outlet.tagline}
                    </p>
                  )}
                  <p className="font-sans text-xs text-[#5A453A] font-normal leading-relaxed line-clamp-2">
                    {outlet.address}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-[#E0D6C9] space-y-2">
                <a
                  href={`tel:${outlet.phone}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#C35D51] hover:text-[#AD5B4D] transition-colors font-sans"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F5C04A]" />
                  <span>{outlet.phone}</span>
                </a>
                <div className="flex items-center justify-between pt-1">
                  <a
                    href={outlet.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] uppercase tracking-wider text-[#443026] hover:text-[#C35D51] transition-colors underline font-sans font-bold"
                  >
                    Directions
                  </a>
                  <a
                    href={`https://wa.me/${outlet.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] uppercase tracking-wider text-[#C35D51] hover:text-[#AD5B4D] transition-colors flex items-center gap-1.5 font-sans font-bold"
                    aria-label={`WhatsApp ${outlet.name}`}
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-[#C35D51]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Outlets Link */}
        <div className="mt-12 text-center lg:mt-14">
          <Link
            to="/outlets"
            className="btn-primary"
          >
            <span>View full outlet details &amp; timings</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OutletPreview;
