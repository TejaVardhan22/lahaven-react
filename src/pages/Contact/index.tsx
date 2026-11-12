import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Clock,
  Heart,
  Check,
  ArrowUpRight,
  Sparkles,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { pageSEO } from '@/data/seo';
import { outlets } from '@/data/outlets';
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
  EMAIL_MAILTO,
  getWhatsAppUrl,
} from '@/utils/constants';
import { WhatsAppIcon } from '@/components/shared/Icons';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  kind: string;
  outlet: string;
  message: string;
  consent: boolean;
}

const INITIAL_FORM: ContactForm = {
  name: '',
  email: '',
  phone: '',
  kind: 'General',
  outlet: 'Any Nearest Boutique',
  message: '',
  consent: true,
};

export const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactForm>(INITIAL_FORM);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setErrorMsg('Please fill in your name, phone number, and message.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    // Format WhatsApp message as backup direct concierge routing
    const formattedWhatsApp = [
      '✨ *NEW HELLO — LAHAVEN CAKE BOUTIQUE*',
      '━━━━━━━━━━━━━━━━━━━━━',
      `✦ *Name:* ${form.name.trim()}`,
      `☎ *Phone:* ${form.phone.trim()}`,
      form.email ? `✉️ *Email:* ${form.email.trim()}` : '',
      `🏷️ *Topic:* ${form.kind}`,
      `📍 *Preferred Boutique:* ${form.outlet}`,
      '',
      `💬 *Message:*`,
      form.message.trim(),
      '━━━━━━━━━━━━━━━━━━━━━',
    ]
      .filter(Boolean)
      .join('\n');

    // Simulate clean dispatch and provide direct WhatsApp link in success
    setTimeout(() => {
      setStatus('success');
      // Also open WhatsApp in new tab if user is on mobile
      if (typeof window !== 'undefined' && window.innerWidth < 768) {
        window.open(getWhatsAppUrl(formattedWhatsApp), '_blank', 'noopener,noreferrer');
      }
    }, 600);
  };

  const whatsappDirectUrl = getWhatsAppUrl(
    'Hi LaHaven! I would like to get in touch with your team.'
  );

  return (
    <main className="min-h-screen bg-[#FFF9F0]">
      <SEOHead
        title={pageSEO.contact.title}
        description={pageSEO.contact.description}
        canonicalUrl={pageSEO.contact.canonicalUrl}
        ogTitle={pageSEO.contact.ogTitle}
        ogDescription={pageSEO.contact.ogDescription}
        ogImage={pageSEO.contact.ogImage}
        twitterCard={pageSEO.contact.twitterCard}
      />

      {/* ── 1. Oat & Honey Page Intro ── */}
      <div className="page-intro">
        <span className="eyebrow">Good conversations start small</span>
        <h1>Say a little hello.</h1>
        <p>
          Questions, big ideas and happy occasions.
          <br />
          We’d love to hear what you’ve got in mind.
        </p>
      </div>

      {/* ── 2. Editorial Two-Column Contact Layout ── */}
      <section className="contact-layout section-rail">
        {/* Left Column: Direct Info & Addresses */}
        <aside>
          <span className="eyebrow">The kettle’s on</span>
          <h2>We’re all ears.</h2>
          <p>
            Have an ingredient question? Planning a celebration? Wondering where your treats
            are? You’re in the right place.
          </p>

          {/* Boutique Locations */}
          <div className="contact-detail">
            <MapPin size={21} />
            <div>
              <h3>Bengaluru, India</h3>
              <p>
                5 boutique patisseries across Frazer Town, Malleshwaram, Sahakarnagar,
                Sanjayanagar, and Yelahanka New Town.
              </p>
              <Link to="/outlets" className="text-link">
                <span>Explore boutique locations</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* WhatsApp & Concierge */}
          <div className="contact-detail">
            <MessageCircle size={21} />
            <div>
              <h3>WhatsApp &amp; Phone</h3>
              <p>
                Need an immediate answer or same-day cake availability? Our pastry concierge is
                available daily.
              </p>
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                <span>Chat directly on WhatsApp</span>
                <ArrowUpRight size={14} />
              </a>
              <span className="block mt-1 font-sans text-xs text-[#6A564B]">
                Call: <a href={PHONE_TEL} className="underline hover:text-[#C35D51]">{PHONE_DISPLAY}</a>
              </span>
            </div>
          </div>

          {/* Boutique Hours */}
          <div className="contact-detail">
            <Clock size={21} />
            <div>
              <h3>Boutique Hours</h3>
              <p>Open daily from 10:00 AM – 10:30 PM for fresh pickup and doorstep chilled delivery.</p>
              <span className="block mt-1 font-sans text-xs text-[#6A564B]">
                Email: <a href={EMAIL_MAILTO} className="underline hover:text-[#C35D51]">{EMAIL}</a>
              </span>
            </div>
          </div>

          {/* Custom Cake Studio Teaser */}
          <div className="contact-detail">
            <Sparkles size={21} />
            <div>
              <h3>Looking for Bespoke Cakes?</h3>
              <p>Planning a wedding or themed birthday? Design your custom creation step-by-step.</p>
              <Link to="/custom-cakes" className="text-link">
                <span>Open Custom Cake Studio</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* Dietary & Allergen Note */}
          <div className="contact-allergen">
            <h3>A note on dietary &amp; allergen requests</h3>
            <p>
              Please let us know which ingredients you need to avoid. All our signature flavours
              are available 100% pure eggless (vegetarian), prepared on dedicated stations in our
              Bengaluru kitchens.
            </p>
          </div>
        </aside>

        {/* Right Column: Oat & Honey Enquiry Form or Success State */}
        <div>
          {status === 'success' ? (
            <div className="enquiry-success" role="status">
              <span>
                <Check size={32} />
              </span>
              <h2>Your hello made it here.</h2>
              <p>
                Thanks for getting in touch, {form.name} ! Your message has been received and our
                boutique team will get back to you shortly.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Link to="/cakes" className="button button-dark">
                  <span>Explore our treats</span>
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
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <form className="enquiry-form" onSubmit={handleSubmit}>
              <div className="form-heading">
                <Heart size={22} strokeWidth={1.5} />
                <h2>Tell us what’s on your mind.</h2>
                <p>Questions, celebrations or just a friendly hello.</p>
              </div>

              {errorMsg && (
                <div className="mb-5 rounded-lg bg-[#F9CFCA] p-3 text-xs font-semibold text-[#943E34]">
                  {errorMsg}
                </div>
              )}

              <div className="form-grid">
                {/* Your Name */}
                <label>
                  <span>Your name *</span>
                  <input
                    type="text"
                    required
                    placeholder="Your lovely name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </label>

                {/* Email Address */}
                <label>
                  <span>Email address *</span>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </label>

                {/* Phone Number */}
                <label>
                  <span>Phone number *</span>
                  <input
                    type="tel"
                    required
                    placeholder="+91 90000 00000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </label>

                {/* Subject / Topic */}
                <label>
                  <span>What’s your hello about?</span>
                  <select
                    value={form.kind}
                    onChange={(e) => setForm({ ...form, kind: e.target.value })}
                  >
                    <option value="General">A general hello</option>
                    <option value="Celebrations">Custom cakes &amp; celebrations</option>
                    <option value="Allergens">Ingredients &amp; 100% eggless</option>
                    <option value="Orders">Same-day order &amp; delivery</option>
                    <option value="Franchise">Franchise partnership</option>
                  </select>
                </label>

                {/* Preferred Outlet */}
                <label className="full-width">
                  <span>Preferred Bengaluru Boutique (optional)</span>
                  <select
                    value={form.outlet}
                    onChange={(e) => setForm({ ...form, outlet: e.target.value })}
                  >
                    <option value="Any Nearest Boutique">Any Nearest Boutique</option>
                    {outlets.map((o) => (
                      <option key={o.id} value={o.name}>
                        {o.name} ({o.area})
                      </option>
                    ))}
                  </select>
                </label>

                {/* Message */}
                <label className="full-width">
                  <span>Your message *</span>
                  <textarea
                    required
                    placeholder="Tell us about your celebration date, flavour preference, or question..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </label>
              </div>

              {/* Consent */}
              <div className="form-consent">
                <input
                  type="checkbox"
                  id="consent-check"
                  checked={form.consent}
                  onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                />
                <label htmlFor="consent-check">
                  I am happy for LaHaven Cake Boutique to reply to my celebration enquiry via
                  WhatsApp or email.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="button button-dark"
              >
                <span>{status === 'loading' ? 'Sending hello...' : 'Send your hello'}</span>
                <ArrowUpRight size={17} />
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default Contact;
