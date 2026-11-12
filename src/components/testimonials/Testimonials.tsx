import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Sparkles } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export const Testimonials: React.FC = () => {
  return (
    <section aria-label="Customer Testimonials" className="bg-[#FEF0E5] py-16 sm:py-24">
      <div className="section-rail">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow inline-flex items-center gap-2 rounded-full bg-[#F5C7AF] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#C35D51]">
            <Sparkles className="h-3 w-3 text-[#E5BB67]" />
            <span>Love Notes &amp; Reviews</span>
          </span>

          <h2 className="mt-3 font-serif text-[clamp(2.2rem,4vw,3.2rem)] font-normal leading-tight text-[#2D221E]">
            Sweet Words from Kind Patrons
          </h2>

          <p className="mt-3 font-sans text-xs font-normal text-[#6A564B] sm:text-sm">
            Hear from families and celebration hosts who trust our Bengaluru patisserie to sweeten their most cherished moments.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col justify-between rounded-2xl border border-[#FAF0EA] bg-[#FAF0EA]/30 p-7 transition-all duration-300 hover:border-[#C35D51]/40 hover:bg-[#FAF0EA]/50 hover:shadow-xs"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-[#E5BB67] text-[#E5BB67]" />
                    ))}
                  </div>
                  <Quote className="h-5 w-5 text-[#C35D51]/40" />
                </div>

                {/* Review Text */}
                <p className="font-serif text-base italic leading-relaxed text-[#2D221E] font-normal sm:text-lg">
                  "{item.review}"
                </p>
              </div>

              {/* Customer Info */}
              <div className="mt-6 flex items-center justify-between border-t border-[#FAF0EA] pt-4">
                <div>
                  <h4 className="font-sans text-sm font-semibold text-[#2D221E]">
                    {item.customerName}
                  </h4>
                  <p className="font-sans text-[11px] text-[#6A564B]">
                    Bengaluru Patron
                  </p>
                </div>

                {item.cakeOrdered && (
                  <span className="rounded-full bg-[#F5C7AF] px-2.5 py-1 font-sans text-[10px] font-semibold text-[#C35D51]">
                    {item.cakeOrdered}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

