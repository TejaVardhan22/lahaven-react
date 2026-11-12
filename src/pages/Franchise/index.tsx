import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  ArrowDown,
  ArrowUpRight,
  Check,
  Heart,
  TrendingUp,
  Package,
  Award,
  Sparkles,
} from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { pageSEO } from '@/data/seo';
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
  EMAIL_MAILTO,
  getWhatsAppUrl,
} from '@/utils/constants';

interface FranchiseForm {
  fullName: string;
  phone: string;
  email: string;
  cityLocality: string;
  investmentRange: string;
  experience: string;
  message: string;
  consent: boolean;
}

const INITIAL_FORM: FranchiseForm = {
  fullName: '',
  phone: '',
  email: '',
  cityLocality: '',
  investmentRange: '₹25L – ₹35L (Signature Boutique)',
  experience: 'Entrepreneur / First-time F&B',
  message: '',
  consent: true,
};

const BENEFITS = [
  {
    icon: Building2,
    title: 'Central commissary & chilled daily supply',
    text: 'Scratch-baked sponges, Belgian chocolate ganaches, and fruit entremets dispatched fresh each morning. Zero master pastry chef needed at your boutique.',
  },
  {
    icon: TrendingUp,
    title: 'High-margin celebration category',
    text: '55% to 65% gross margins on celebration cakes, Korean bento surprise boxes, and artisan desserts with year-round repeat neighborhood gifting.',
  },
  {
    icon: Package,
    title: 'Turnkey 30–45 day launch',
    text: 'Complete architectural layout, signature curved glass display chillers, cloud POS, packaging inventory, and staff cake-finishing certification included.',
  },
];

const UNIT_STATS = [
  { value: '55–65%', label: 'Gross Product Margin' },
  { value: '₹15L–35L', label: 'Turnkey Starting Capex' },
  { value: '30–45d', label: 'Average Store Launch' },
  { value: '05', label: 'Operating Bengaluru Outlets' },
];

export const Franchise: React.FC = () => {
  const [form, setForm] = useState<FranchiseForm>(INITIAL_FORM);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.phone.trim() || !form.cityLocality.trim()) {
      setErrorMsg('Please provide your name, phone number, and target city or locality.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    const formattedWhatsApp = [
      '🤝 *NEW FRANCHISE ENQUIRY — LAHAVEN*',
      '━━━━━━━━━━━━━━━━━━━━━',
      `✦ *Name:* ${form.fullName.trim()}`,
      `☎ *Phone:* ${form.phone.trim()}`,
      form.email ? `✉️ *Email:* ${form.email.trim()}` : '',
      `📍 *Target Location:* ${form.cityLocality.trim()}`,
      `💰 *Budget Range:* ${form.investmentRange}`,
      `💼 *Background:* ${form.experience}`,
      form.message ? `💬 *Notes:* ${form.message.trim()}` : '',
      '━━━━━━━━━━━━━━━━━━━━━',
    ]
      .filter(Boolean)
      .join('\n');

    setTimeout(() => {
      setStatus('success');
      if (typeof window !== 'undefined' && window.innerWidth < 768) {
        window.open(getWhatsAppUrl(formattedWhatsApp), '_blank', 'noopener,noreferrer');
      }
    }, 600);
  };

  return (
    <main className="min-h-screen bg-[#FFF9F0]">
      <SEOHead
        title={pageSEO.franchise.title}
        description={pageSEO.franchise.description}
        canonicalUrl={pageSEO.franchise.canonicalUrl}
        ogTitle={pageSEO.franchise.ogTitle}
        ogDescription={pageSEO.franchise.ogDescription}
        ogImage={pageSEO.franchise.ogImage}
        twitterCard={pageSEO.franchise.twitterCard}
      />

      {/* ── 1. Editorial Wholesale Hero ── */}
      <section className="wholesale-hero section-rail">
        <div>
          <span className="eyebrow">
            <Building2 size={16} />
            <span>Boutique Franchise Partnership</span>
          </span>
          <h1>
            Great celebrations deserve a <span>great boutique partner.</span>
          </h1>
          <p>
            Join Bengaluru’s premier artisan cake brand. Backed by 5 high-performing boutiques, a
            proven commissary supply model, and beloved recipes, let’s grow together.
          </p>
          <a href="#franchise-enquiry" className="button button-dark">
            <span>Enquire about a franchise</span>
            <ArrowDown size={17} />
          </a>
          <span className="small-note">
            Curated prime locations • Turnkey patisserie model • Proven unit economics
          </span>
        </div>

        <div className="wholesale-hero-image">
          <img
            src="/images/hero/belgian-truffle-desktop.jpg"
            alt="LaHaven Cake Boutique signature creations and artisan bakery display"
            width={1024}
            height={1024}
            fetchPriority="high"
          />
          <span className="wholesale-sticker">
            Better
            <br />
            together.
          </span>
        </div>
      </section>

      {/* ── 2. Benefits & Model Breakdown ── */}
      <section className="wholesale-benefits section-rail">
        <span className="eyebrow">A sweet partnership</span>
        <h2>
          Good for your counter.
          <br />
          Lovely for your customers.
        </h2>

        <div className="benefit-list">
          {BENEFITS.map((item, idx) => (
            <article key={item.title}>
              <span className="big-index">0{idx + 1}</span>
              <item.icon size={27} strokeWidth={1.4} className="text-[#C35D51]" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        {/* High-Contrast Unit Stats Card */}
        <div className="mt-14 grid grid-cols-2 gap-4 rounded-2xl border border-[#E0D6C9] bg-[#FFFFFF] p-6 shadow-[0_8px_30px_rgba(68,48,38,0.06)] sm:grid-cols-4 sm:p-8">
          {UNIT_STATS.map((stat) => (
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
      </section>

      {/* ── 3. Enquiry Section with Step-by-Step Aside & Clean Form ── */}
      <section id="franchise-enquiry" className="wholesale-enquiry section-rail">
        <aside>
          <span className="eyebrow">From hello to opening day</span>
          <h2>
            Let’s start
            <br />
            something sweet.
          </h2>
          <p>
            No complicated bureaucracy. Tell us a little about your target location and business
            background, and our founding team will discuss availability.
          </p>

          <ol>
            <li>
              <span>01</span>
              <div>
                <h3>Say a little hello</h3>
                <p>Share your background, target neighborhood, and estimated investment budget.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Location feasibility &amp; unit economics</h3>
                <p>
                  We’ll review catchment footfall, projected ROI, commissary delivery, and format options.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Turnkey fit-out &amp; launch</h3>
                <p>
                  From display chillers and cloud POS to staff training and pre-opening marketing.
                </p>
              </div>
            </li>
          </ol>

          <div className="rounded-xl border border-[#E0D6C9] bg-[#FFFFFF] p-4 shadow-2xs">
            <p className="font-sans text-xs text-[#5A453A]">
              Prefer a direct conversation? Call our expansion desk at{' '}
              <a href={PHONE_TEL} className="font-bold text-[#C35D51] underline">
                {PHONE_DISPLAY}
              </a>{' '}
              or email{' '}
              <a href={EMAIL_MAILTO} className="font-bold text-[#C35D51] underline">
                {EMAIL}
              </a>
              .
            </p>
          </div>
        </aside>

        {/* Right Form or Success View */}
        <div>
          {status === 'success' ? (
            <div className="enquiry-success" role="status">
              <span>
                <Check size={32} />
              </span>
              <h2>A happy partnership starts here.</h2>
              <p>
                Thank you, {form.fullName}! Your franchise enquiry has been received. Our leadership
                team will review your target location and reach out within 24–48 hours.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Link to="/cakes" className="button button-dark">
                  <span>Explore our cakes</span>
                  <ArrowUpRight size={17} />
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setForm(INITIAL_FORM);
                    setStatus('idle');
                  }}
                  className="text-link"
                >
                  Submit another location enquiry
                </button>
              </div>
            </div>
          ) : (
            <form className="enquiry-form" onSubmit={handleSubmit}>
              <div className="form-heading">
                <Heart size={22} strokeWidth={1.5} />
                <h2>Tell us about your venture.</h2>
                <p>A few details, and we can discuss boutique feasibility.</p>
              </div>

              {errorMsg && (
                <div className="mb-5 rounded-lg bg-[#F9CFCA] p-3 text-xs font-semibold text-[#943E34]">
                  {errorMsg}
                </div>
              )}

              <div className="form-grid">
                {/* Full Name */}
                <label>
                  <span>Your full name *</span>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  />
                </label>

                {/* Phone */}
                <label>
                  <span>Mobile phone number *</span>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98000 00000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </label>

                {/* Email */}
                <label>
                  <span>Email address *</span>
                  <input
                    type="email"
                    required
                    placeholder="you@domain.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </label>

                {/* Target City/Area */}
                <label>
                  <span>Target city or neighborhood *</span>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Indiranagar, Whitefield, Mysuru"
                    value={form.cityLocality}
                    onChange={(e) => setForm({ ...form, cityLocality: e.target.value })}
                  />
                </label>

                {/* Investment Range */}
                <label>
                  <span>Planned investment budget</span>
                  <select
                    value={form.investmentRange}
                    onChange={(e) => setForm({ ...form, investmentRange: e.target.value })}
                  >
                    <option value="₹15L – ₹25L (Kiosk / Quick Counter)">
                      ₹15L – ₹25L (Kiosk / Quick Counter)
                    </option>
                    <option value="₹25L – ₹35L (Signature Boutique)">
                      ₹25L – ₹35L (Signature Boutique)
                    </option>
                    <option value="₹35L – ₹50L (Flagship Café & Patisserie)">
                      ₹35L – ₹50L (Flagship Café & Patisserie)
                    </option>
                  </select>
                </label>

                {/* Background Experience */}
                <label>
                  <span>Business background</span>
                  <select
                    value={form.experience}
                    onChange={(e) => setForm({ ...form, experience: e.target.value })}
                  >
                    <option value="Entrepreneur / First-time F&B">
                      Entrepreneur / First-time F&B
                    </option>
                    <option value="Existing Retail or Restaurant Owner">
                      Existing Retail or Restaurant Owner
                    </option>
                    <option value="Property Owner / Space Available">
                      Property Owner with Prime Commercial Space
                    </option>
                    <option value="Investor Seeking Managed FOCO Model">
                      Investor Seeking Managed Partner Model
                    </option>
                  </select>
                </label>

                {/* Message */}
                <label className="full-width">
                  <span>Additional details or property specifications (optional)</span>
                  <textarea
                    placeholder="Tell us about the property (carpet area, frontage) or your target timeline..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </label>
              </div>

              {/* Consent */}
              <div className="form-consent">
                <input
                  type="checkbox"
                  id="franchise-consent"
                  checked={form.consent}
                  onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                />
                <label htmlFor="franchise-consent">
                  I agree to receive confidential franchise deck information via WhatsApp and
                  email from LaHaven Cake Boutique.
                </label>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="button button-dark"
              >
                <span>
                  {status === 'loading'
                    ? 'Submitting enquiry...'
                    : 'Submit Franchise Enquiry'}
                </span>
                <ArrowUpRight size={17} />
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default Franchise;
