import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Leaf,
  Sparkles,
  ArrowUpRight,
  Store,
} from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { pageSEO } from '@/data/seo';

const STATS = [
  { value: '2016', label: 'Founded in Bengaluru' },
  { value: '05', label: 'Neighbourhood Boutiques' },
  { value: '38+', label: 'Signature Creations' },
  { value: '50k+', label: 'Happy Celebrations' },
];

export const About: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#FFF9F0] pb-24">
      <SEOHead
        title={pageSEO.about.title}
        description={pageSEO.about.description}
        canonicalUrl={pageSEO.about.canonicalUrl}
        ogTitle={pageSEO.about.ogTitle}
        ogDescription={pageSEO.about.ogDescription}
        ogImage={pageSEO.about.ogImage}
        twitterCard={pageSEO.about.twitterCard}
      />

      {/* ── 1. Editorial Page Intro ── */}
      <div className="page-intro">
        <span className="eyebrow">A kinder kind of baking</span>
        <h1>
          Nothing missing.
          <br />
          Just more to love.
        </h1>
        <p>
          Thoughtful treats, proper flavour and a whole lot of Bengaluru heart.
          <br />
          This is our celebration story.
        </p>
      </div>

      {/* ── 2. Story Section 01: Our kind of baking ── */}
      <section className="about-story section-rail">
        <div className="about-story-photo">
          <img
            src="/images/hero/belgian-truffle-desktop.jpg"
            alt="Carefully layering artisan Belgian chocolate cakes at LaHaven bakery"
            width={1024}
            height={1024}
            fetchPriority="high"
          />
          <span className="image-sticker">
            Good things
            <br />
            take heart.
            <Heart size={18} className="mt-1 fill-current" />
          </span>
        </div>

        <div>
          <span className="eyebrow">
            <span className="section-index">01</span>
            <span>Our kind of baking</span>
          </span>
          <h2>
            A seat at the table.
            <br />
            A treat on every plate.
          </h2>
          <p>
            We believe the best baking brings people together. And that nobody should ever have
            to settle for a dry, second-rate alternative while everyone else reaches for another slice.
          </p>
          <p>
            So we craft treats that are a joy in their own right. Velvety chocolate gateaux layered
            with 54% Belgian couverture ganache. Fruit entremets with simmered Ratnagiri Alphonso mango
            and fresh lychee. Petite Korean bento boxes that make an ordinary afternoon feel like a party.
          </p>
          <p>
            Our creations are baked fresh daily across our 5 Bengaluru boutiques. With 100% pure eggless
            options prepared on dedicated stations, pure dairy cream, and zero commercial premixes.
          </p>
          <Link to="/cakes" className="text-link mt-2 inline-flex items-center gap-1.5 font-semibold text-[#C35D51]">
            <span>Meet the good stuff</span>
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* ── 3. Ingredients & Craftsmanship Section 02 ── */}
      <section id="ingredients" className="ingredients-section">
        <div className="section-rail">
          <span className="eyebrow">
            <span className="section-index">02</span>
            <span>Thoughtfully made, honestly explained</span>
          </span>
          <h2>
            All the good.
            <br />
            A little less guesswork.
          </h2>

          <div className="ingredient-rows">
            {/* Row 1: Belgian Chocolate & Pure Ingredients */}
            <article>
              <Sparkles size={28} strokeWidth={1.5} className="text-[#C35D51]" />
              <div>
                <h3>54% Belgian couverture &amp; real ingredients.</h3>
                <p>
                  Every morning begins with unbleached flour, pure dairy butter, Madagascar bourbon
                  vanilla, and real fruit compotes. We temper genuine single-origin Belgian chocolate
                  instead of industrial vegetable fat compound coatings.
                </p>
              </div>
            </article>

            {/* Row 2: 100% Eggless without compromise */}
            <article>
              <Leaf size={28} strokeWidth={1.5} className="text-[#C35D51]" />
              <div>
                <h3>100% Eggless baking without compromise.</h3>
                <p>
                  Over 70% of our patrons in Bengaluru celebrate eggless. Our master pastry chefs
                  formulated scratch recipes that achieve the exact same tender crumb, airy lift, and
                  melt-in-the-mouth indulgence as traditional European gateaux.
                </p>
              </div>
            </article>

            {/* Row 3: Five Neighbourhood Counters */}
            <article>
              <Store size={28} strokeWidth={1.5} className="text-[#C35D51]" />
              <div>
                <h3>Five neighbourhood counters in Bengaluru.</h3>
                <p>
                  From Frazer Town and Malleshwaram to Sahakarnagar, Sanjayanagar, and Yelahanka New Town.
                  Each boutique finishes and custom-letters your cake fresh on the day of your event,
                  ribboned in our signature temperature-insulated keepsake box.
                </p>
                <Link
                  to="/custom-cakes"
                  className="text-link mt-3 inline-flex items-center gap-1 font-semibold text-[#C35D51]"
                >
                  <span>Design a bespoke celebration cake</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── 4. Minimal Stats & Boutique Locator Band ── */}
      <section className="section-rail pt-16">
        <div className="grid grid-cols-2 gap-4 rounded-3xl border border-[#E0D6C9] bg-[#FFFFFF] p-6 shadow-[0_8px_30px_rgba(68,48,38,0.06)] sm:grid-cols-4 sm:p-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="font-serif text-2xl font-bold text-[#C35D51] sm:text-3xl">
                {stat.value}
              </span>
              <p className="mt-1 font-sans text-xs font-bold text-[#443026]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-[#E0D6C9] bg-[#FFFFFF] p-8 text-center shadow-[0_8px_30px_rgba(68,48,38,0.06)] sm:flex-row sm:text-left">
          <div>
            <span className="eyebrow text-[#C35D51]">Visit our counters</span>
            <h2 className="mt-1 font-serif text-2xl font-bold text-[#443026]">
              Fresh morning bakes waiting for you.
            </h2>
            <p className="mt-1 font-sans text-xs text-[#766256]">
              Open daily 10:00 AM – 10:30 PM across 5 Bengaluru locations.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <Link to="/outlets" className="button button-dark shadow-sm">
              <span>Find a boutique</span>
              <ArrowUpRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#C35D51] bg-[#FFFFFF] px-5 py-3 font-sans text-xs font-bold uppercase tracking-wider text-[#C35D51] shadow-2xs transition-all hover:bg-[#C35D51] hover:text-[#FFF9F0]"
            >
              <span>Say hello</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
