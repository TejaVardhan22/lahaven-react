import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="section-rail py-14 sm:py-20">
      <section aria-label="Bakery Newsletter" className="newsletter rounded-3xl border border-[#FAF0EA] bg-[#FAF0EA]/30 p-8 shadow-xs sm:p-12">
        <div>
          <span className="eyebrow inline-flex items-center gap-2 rounded-full bg-[#F5C7AF] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#C35D51]">
            <Sparkles className="h-3.5 w-3.5 text-[#E5BB67]" />
            <span>Fresh From The Kitchen</span>
          </span>

          <h2 className="mt-3 font-serif text-3xl font-bold text-[#2D221E] sm:text-4xl">
            A little sweetness<br />
            in your inbox.
          </h2>

          <p className="mt-2 font-sans text-xs font-normal text-[#6A564B] sm:text-sm">
            Secret seasonal bakes, privileged preview codes, and celebration inspiration from our Bengaluru kitchens.
          </p>
        </div>

        <div>
          {submitted ? (
            <div className="flex items-center gap-3 rounded-2xl border border-[#FAF0EA] bg-[#FEF0E5] p-5 text-[#2D221E] shadow-sm">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C35D51] text-[#FEF0E5]">
                <Check className="h-5 w-5" />
              </span>
              <div>
                <p className="font-sans text-xs font-bold uppercase tracking-wider text-[#C35D51]">
                  Welcome to the LaHaven Club!
                </p>
                <p className="font-sans text-xs text-[#6A564B]">
                  Check your inbox for a special celebration welcome treat.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="newsletter-form mt-4 sm:mt-0">
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-1 rounded-full border border-[#FAF0EA] bg-[#FEF0E5] px-5 py-3.5 font-sans text-xs text-[#2D221E] shadow-xs outline-none placeholder:text-[#6A564B] focus:border-[#C35D51]"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C35D51] text-[#FEF0E5] transition-all hover:bg-[#AD5B4D] hover:scale-105"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-2 text-center sm:text-left font-sans text-[11px] text-[#6A564B]">
                Just delicious updates. No spam, sweet promise.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default NewsletterSection;

