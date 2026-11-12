import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Heart } from 'lucide-react';
import {
  BUSINESS_NAME,
  WHATSAPP_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
  EMAIL_MAILTO,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  YOUTUBE_URL,
  TWITTER_URL,
  DEVELOPER_NAME,
  DEVELOPER_WHATSAPP_NUMBER,
  DEVELOPER_WHATSAPP_DISPLAY,
  getWhatsAppUrl,
} from '@/utils/constants';
import {
  WhatsAppIcon,
  InstagramIcon,
  FacebookIcon,
  YouTubeIcon,
  TwitterXIcon,
} from '@/components/shared/Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E0D6C9] bg-[#FFF9F0] text-[#443026]" role="contentinfo">
      {/* ── High-Contrast Editorial Footer on Warm Light Canvas ── */}
      <div className="section-rail py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 pb-10">
          
          {/* Column 1: Wordmark & Tagline (Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link
              to="/"
              className="inline-block transition-opacity hover:opacity-90"
              aria-label="LaHaven Cake Boutique — Home"
            >
              <img
                src="/images/logo-transparent.png?v=3"
                alt="LaHaven Cake Boutique"
                width={632}
                height={321}
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="my-4 font-serif text-[24px] font-normal leading-[1.25] text-[#443026]">
              Made with love.<br />
              <span className="font-medium italic text-[#C35D51]">Baked to perfection.</span>
            </p>

            {/* Dark & Bright Contrast Eyebrow Chip */}
            <span className="inline-flex items-center gap-2 rounded-full bg-[#443026] px-3.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#FFF9F0] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F5C04A]" aria-hidden="true" />
              <span>Handcrafted in Bengaluru</span>
            </span>

            {/* Bright & Dark Contrast Social Buttons */}
            <div className="mt-5 flex items-center gap-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-[#443026] text-[#FFF9F0] transition-all hover:bg-[#C35D51] hover:scale-110 shadow-2xs"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-[#443026] text-[#FFF9F0] transition-all hover:bg-[#C35D51] hover:scale-110 shadow-2xs"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-[#443026] text-[#FFF9F0] transition-all hover:bg-[#C35D51] hover:scale-110 shadow-2xs"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-[#443026] text-[#FFF9F0] transition-all hover:bg-[#C35D51] hover:scale-110 shadow-2xs"
                aria-label="YouTube"
              >
                <YouTubeIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href={TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-[#443026] text-[#FFF9F0] transition-all hover:bg-[#C35D51] hover:scale-110 shadow-2xs"
                aria-label="X"
              >
                <TwitterXIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: The good stuff (Span 3) */}
          <div className="lg:col-span-3 flex flex-col items-start gap-2.5 text-xs">
            <h3 className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.14em] text-[#443026]">
              The good stuff
            </h3>
            <Link to="/cakes" className="font-medium text-[#443026]/85 transition-colors hover:text-[#C35D51] hover:underline">
              Shop all cakes
            </Link>
            <Link to="/cakes?category=celebration-cakes" className="font-medium text-[#443026]/85 transition-colors hover:text-[#C35D51] hover:underline">
              Celebration cakes
            </Link>
            <Link to="/bento-cakes" className="font-medium text-[#443026]/85 transition-colors hover:text-[#C35D51] hover:underline">
              Korean bento cakes
            </Link>
            <Link to="/desserts" className="font-medium text-[#443026]/85 transition-colors hover:text-[#C35D51] hover:underline">
              Cheesecakes &amp; brownies
            </Link>
            <Link to="/custom-cakes" className="font-medium text-[#443026]/85 transition-colors hover:text-[#C35D51] hover:underline">
              Bespoke cake studio
            </Link>
          </div>

          {/* Column 3: The Boutique (Span 2) */}
          <div className="lg:col-span-2 flex flex-col items-start gap-2.5 text-xs">
            <h3 className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.14em] text-[#443026]">
              The boutique
            </h3>
            <Link to="/our-story" className="font-medium text-[#443026]/85 transition-colors hover:text-[#C35D51] hover:underline">
              Our story
            </Link>
            <Link to="/outlets" className="font-medium text-[#443026]/85 transition-colors hover:text-[#C35D51] hover:underline">
              5 physical boutiques
            </Link>
            <Link to="/franchise" className="font-medium text-[#443026]/85 transition-colors hover:text-[#C35D51] hover:underline">
              Franchise partners
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-1 font-medium text-[#443026]/85 transition-colors hover:text-[#C35D51] hover:underline">
              <span>Contact us</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <a href={EMAIL_MAILTO} className="font-medium text-[#443026]/85 transition-colors hover:text-[#C35D51] hover:underline">
              {EMAIL}
            </a>
          </div>

          {/* Column 4: Come say hello (Span 3) */}
          <div className="lg:col-span-3 flex flex-col items-start gap-3 text-xs">
            <h3 className="mb-1 font-sans text-xs font-bold uppercase tracking-[0.14em] text-[#443026]">
              Come say hello
            </h3>

            {/* Bright Terracotta CTA Button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#C35D51] px-4 py-2 font-sans text-xs font-bold uppercase tracking-wider text-[#FFF9F0] shadow-sm transition-all hover:bg-[#AD5B4D] hover:-translate-y-0.5 active:translate-y-0"
            >
              <WhatsAppIcon className="h-3.5 w-3.5 fill-[#FFF9F0]" />
              <span>Let’s talk treats</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            
            <p className="text-[11px] leading-[1.8] text-[#5A453A]">
              Frazer Town • Malleshwaram • Sahakarnagar<br />
              Sanjayanagar • Yelahanka New Town<br />
              <a href={PHONE_TEL} className="font-semibold text-[#443026] hover:text-[#C35D51] hover:underline">Call {PHONE_DISPLAY}</a> • Open daily 9:00 AM – 10:30 PM
            </p>

            {/* Bright & Dark Contrast Badges */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="rounded-full bg-[#443026] px-2.5 py-0.5 text-[9px] font-bold text-[#FFF9F0] shadow-2xs">
                100% Eggless
              </span>
              <span className="rounded-full border border-[#F5C04A] bg-[#F5C04A]/25 px-2.5 py-0.5 text-[9px] font-bold text-[#443026]">
                Pure Couverture
              </span>
              <span className="rounded-full border border-[#9ADBC3] bg-[#9ADBC3]/35 px-2.5 py-0.5 text-[9px] font-bold text-[#443026]">
                Chilled Delivery
              </span>
            </div>
          </div>
        </div>

        {/* ── Footer Bottom ── */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#E0D6C9] pt-6 text-[10px] text-[#5A453A] sm:flex-row">
          <span className="font-medium">
            &copy; {currentYear} {BUSINESS_NAME}. Made for happy moments.
          </span>

          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <span className="inline-flex items-center gap-1.5 font-serif text-xs italic font-medium text-[#443026]">
              A kinder kind of baking
              <Heart className="h-3.5 w-3.5 fill-[#C35D51] text-[#C35D51]" />
            </span>
            <span className="text-[#E0D6C9]">•</span>
            <span>
              Designed by <strong className="font-semibold text-[#443026]">{DEVELOPER_NAME}</strong>
            </span>
            <a
              href={getWhatsAppUrl(
                `Hi ${DEVELOPER_NAME}! I saw the LaHaven website and would like to discuss a project.`,
                DEVELOPER_WHATSAPP_NUMBER
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#C35D51] transition-colors hover:underline"
            >
              {DEVELOPER_WHATSAPP_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
