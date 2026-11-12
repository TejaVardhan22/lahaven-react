import { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Search,
  User,
  Heart,
  ShoppingBag,
  MapPin,
} from 'lucide-react';
import { getWhatsAppUrl, PHONE_DISPLAY, PHONE_TEL } from '@/utils/constants';
import { WhatsAppIcon } from '@/components/shared/Icons';
import { useStorefront } from '@/context/StorefrontContext';

const ANNOUNCEMENT_MESSAGES = [
  'Crafted for your sweetest celebrations.',
  'Discover our signature cake collection.',
  'Thoughtfully made, beautifully delivered.',
];

const MOBILE_NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Cakes', href: '/cakes' },
  { label: 'Custom Cakes', href: '/custom-cakes' },
  { label: 'Korean Bento Cakes', href: '/bento-cakes' },
  { label: 'Cheesecakes & Desserts', href: '/desserts' },
  { label: 'Our Outlets (5 Boutiques)', href: '/outlets' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Franchise', href: '/franchise' },
  { label: 'Contact Us', href: '/contact' },
];

function Logo({ onClick }: { onClick?: () => void } = {}) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="group flex shrink-0 items-center transition-all duration-300 hover:scale-[1.03]"
      aria-label="La Haven Cake Boutique — Made with Love. Baked to Perfection. (Home)"
    >
      <img
        src="/images/logo-transparent.png?v=3"
        alt="La Haven Cake Boutique"
        width={632}
        height={321}
        loading="eager"
        className="h-10 w-auto object-contain transition-transform duration-300 group-hover:rotate-[-1deg] sm:h-11 lg:h-12"
      />
    </Link>
  );
}

export default function Header() {
  const [announcementIdx, setAnnouncementIdx] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const { cartCount, wishlistIds, openDrawer } = useStorefront();

  // Rotate announcement bar messages gently
  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIdx((prev) => (prev + 1) % ANNOUNCEMENT_MESSAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 16);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  const whatsappUrl = getWhatsAppUrl(
    "Hi LaHaven! I'd like to check cake availability and place an order."
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FFF9F0] backdrop-blur-md transition-shadow duration-300">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-[60] focus:rounded-full focus:bg-[#C35D51] focus:px-4 focus:py-1.5 focus:font-sans focus:text-xs focus:font-semibold focus:text-[#FFF9F0]"
      >
        Skip to content
      </a>

      {/* ── Section 1: Slim Rotating Announcement Bar ── */}
      <div className="border-b border-[#FAF0EA] bg-[#C35D51] px-4 py-1.5 text-[#FFF9F0]">
        <div className="premium-container flex items-center justify-between text-[11px] font-sans tracking-wide">
          <span className="hidden items-center gap-1.5 text-[#FFF9F0]/90 md:inline-flex">
            <MapPin className="h-3 w-3 text-[#F5C7AF]" />
            <span>5 Boutiques in Bengaluru • Same-Day Fresh Chilled Delivery</span>
          </span>

          <div className="mx-auto flex items-center gap-2 font-medium">
            <Sparkles className="h-3 w-3 shrink-0 text-[#F5C04A]" />
            <AnimatePresence mode="wait">
              <motion.span
                key={announcementIdx}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25 }}
                className="text-center"
              >
                {ANNOUNCEMENT_MESSAGES[announcementIdx]}
              </motion.span>
            </AnimatePresence>
          </div>

          <Link
            to="/outlets"
            className="hidden items-center gap-1 font-semibold text-[#F5C7AF] hover:underline md:inline-flex"
          >
            <span>Find a Boutique</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>

      {/* ── Main Coordinated Navigation Bar ── */}
      <div
        className={`border-b border-[#FAF0EA] bg-[#FFF9F0]/95 transition-all duration-300 ${
          isScrolled ? 'py-2.5 shadow-[0_4px_20px_rgba(53,41,31,0.06)]' : 'py-3.5'
        }`}
      >
        <div className="premium-container flex items-center justify-between gap-4">
          {/* Left: Brand Wordmark */}
          <Logo />

          {/* Center: Desktop Primary Navigation */}
          <nav
            className="hidden items-center gap-5 font-sans text-[13.5px] lg:flex xl:gap-7 xl:text-[14px]"
            aria-label="Main navigation"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive
                    ? 'font-semibold text-[#C35D51]'
                    : 'font-medium text-[#443026] hover:text-[#C35D51]'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/cakes"
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive
                    ? 'font-semibold text-[#C35D51]'
                    : 'font-medium text-[#443026] hover:text-[#C35D51]'
                }`
              }
            >
              Cakes
            </NavLink>

            <NavLink
              to="/custom-cakes"
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive
                    ? 'font-semibold text-[#C35D51]'
                    : 'font-medium text-[#443026] hover:text-[#C35D51]'
                }`
              }
            >
              Custom Cakes
            </NavLink>

            <NavLink
              to="/outlets"
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive
                    ? 'font-semibold text-[#C35D51]'
                    : 'font-medium text-[#443026] hover:text-[#C35D51]'
                }`
              }
            >
              Our Outlets
            </NavLink>

            <NavLink
              to="/our-story"
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive
                    ? 'font-semibold text-[#C35D51]'
                    : 'font-medium text-[#443026] hover:text-[#C35D51]'
                }`
              }
            >
              Our Story
            </NavLink>

            <NavLink
              to="/franchise"
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive
                    ? 'font-semibold text-[#C35D51]'
                    : 'font-medium text-[#443026] hover:text-[#C35D51]'
                }`
              }
            >
              Franchise
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive
                    ? 'font-semibold text-[#C35D51]'
                    : 'font-medium text-[#443026] hover:text-[#C35D51]'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Right: Search, Wishlist & Shopping Bag (Order Now removed) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Button */}
            <button
              type="button"
              onClick={() => openDrawer('search')}
              aria-label="Search cakes"
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#443026] transition-colors hover:bg-[#FAF0EA]/60 hover:text-[#C35D51]"
            >
              <Search className="h-[18px] w-[18px]" />
            </button>

            {/* Wishlist Button with Live Count */}
            <button
              type="button"
              onClick={() => openDrawer('wishlist')}
              aria-label={`Wishlist (${wishlistIds.length} items)`}
              className="relative flex h-9 w-9 items-center justify-center rounded-full text-[#443026] transition-colors hover:bg-[#FAF0EA]/60 hover:text-[#C35D51]"
            >
              <Heart className="h-[18px] w-[18px]" />
              {wishlistIds.length > 0 && (
                <span className="absolute right-0.5 top-0.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#F5C04A] px-1 font-sans text-[9.5px] font-bold text-white">
                  {wishlistIds.length}
                </span>
              )}
            </button>

            {/* Shopping Bag Button with Live Cart Count */}
            <button
              type="button"
              onClick={() => openDrawer('cart')}
              aria-label={`Shopping bag (${cartCount} items)`}
              className="relative flex h-9 w-9 items-center justify-center rounded-full text-[#443026] transition-colors hover:bg-[#FAF0EA]/60 hover:text-[#C35D51]"
            >
              <ShoppingBag className="h-[18px] w-[18px]" />
              {cartCount > 0 && (
                <span className="absolute right-0.5 top-0.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#C35D51] px-1 font-sans text-[9.5px] font-bold text-[#FFF9F0]">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#443026] hover:bg-[#FAF0EA]/60 lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Slide-Out Navigation Drawer Portaled to Document Body ── */}
      {typeof document !== 'undefined' &&
        createPortal(
          <div
            className={`fixed inset-0 z-[100] overflow-hidden transition-all duration-300 ${
              isMobileMenuOpen
                ? 'pointer-events-auto visible'
                : 'pointer-events-none invisible delay-200'
            }`}
            aria-hidden={!isMobileMenuOpen}
          >
            {/* Backdrop */}
            <div
              onClick={() => setIsMobileMenuOpen(false)}
              className={`fixed inset-0 bg-[#443026]/65 backdrop-blur-sm transition-opacity duration-300 ${
                isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden="true"
            />

            {/* Drawer Panel */}
            <aside
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className={`fixed inset-y-0 right-0 z-10 flex h-full w-full max-w-full flex-col bg-[#FFF9F0] shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] sm:max-w-md ${
                isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              {/* Top Bar with Brand Logo and Close Button */}
              <div className="flex shrink-0 items-center justify-between border-b border-[#FAF0EA] bg-[#FFF9F0] px-5 py-3.5 sm:px-6 sm:py-4">
                <Logo onClick={() => setIsMobileMenuOpen(false)} />
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#FAF0EA] bg-[#FAF0EA]/40 text-[#443026] transition-colors hover:border-[#C35D51] hover:text-[#C35D51]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Scrollable Navigation Area */}
              <div className="no-scrollbar flex-1 min-h-0 overflow-y-auto px-5 py-4 overscroll-contain sm:px-6">
                {/* Quick Search Trigger */}
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openDrawer('search');
                  }}
                  className="mb-3.5 flex w-full items-center gap-2.5 rounded-full border border-[#FAF0EA] bg-[#FAF0EA]/40 px-4 py-2.5 text-left font-sans text-xs text-[#6A564B] transition-colors hover:border-[#C35D51] hover:bg-[#FFF9F0]"
                >
                  <Search className="h-4 w-4 text-[#C35D51]" />
                  <span>Search Belgian truffle, bento, mango...</span>
                </button>

                {/* Navigation Links with exact active routing */}
                <nav aria-label="Mobile links">
                  <ul className="space-y-1">
                    {MOBILE_NAV_LINKS.map((item) => (
                      <li key={item.href + item.label}>
                        <NavLink
                          to={item.href}
                          end={item.href === '/'}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={({ isActive }) =>
                            `flex items-center justify-between rounded-xl px-4 py-2 font-serif text-base font-semibold transition-colors sm:py-2.5 sm:text-lg ${
                              isActive
                                ? 'bg-[#C35D51] text-[#FFF9F0] shadow-2xs'
                                : 'text-[#443026] hover:bg-[#FAF0EA]/50 hover:text-[#C35D51]'
                            }`
                          }
                        >
                          {({ isActive }) => (
                            <>
                              <span>{item.label}</span>
                              <ArrowRight
                                className={`h-4 w-4 ${
                                  isActive ? 'text-[#FFF9F0]' : 'text-[#F5C04A]'
                                }`}
                              />
                            </>
                          )}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Popular Flavours & Categories */}
                <div className="mt-5 border-t border-[#FAF0EA] pt-4">
                  <p className="mb-2.5 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[#6A564B]">
                    Popular Flavours &amp; Categories
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { label: 'Belgian Truffle', href: '/cakes?flavour=chocolate' },
                      { label: 'Fresh Fruit', href: '/cakes?flavour=fruit-berry' },
                      { label: 'Red Velvet', href: '/cakes?flavour=cream-vanilla' },
                      { label: 'Korean Bento', href: '/bento-cakes' },
                      { label: 'Cheesecakes', href: '/desserts' },
                      { label: 'Custom Cakes', href: '/custom-cakes' },
                    ].map((chip) => (
                      <Link
                        key={chip.label}
                        to={chip.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="rounded-full border border-[#FAF0EA] bg-[#FAF0EA]/40 px-3 py-1 font-sans text-xs font-medium text-[#443026] transition-colors hover:border-[#C35D51] hover:text-[#C35D51]"
                      >
                        {chip.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Quick Access to Account and Wishlist */}
                <div className="mt-5 grid grid-cols-2 gap-2 border-t border-[#FAF0EA] pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      openDrawer('account');
                    }}
                    className="flex items-center justify-center gap-2 rounded-xl border border-[#FAF0EA] bg-[#FAF0EA]/40 py-2.5 font-sans text-xs font-semibold text-[#443026] transition-colors hover:border-[#C35D51]"
                  >
                    <User className="h-4 w-4 text-[#C35D51]" />
                    <span>My Account</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      openDrawer('wishlist');
                    }}
                    className="flex items-center justify-center gap-2 rounded-xl border border-[#FAF0EA] bg-[#FAF0EA]/40 py-2.5 font-sans text-xs font-semibold text-[#443026] transition-colors hover:border-[#C35D51]"
                  >
                    <Heart className="h-4 w-4 text-[#C35D51]" />
                    <span>Wishlist ({wishlistIds.length})</span>
                  </button>
                </div>

                {/* Boutique Locator Pill */}
                <Link
                  to="/outlets"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 flex items-center justify-between rounded-xl border border-[#FAF0EA] bg-[#FAF0EA]/40 p-3 text-xs transition-colors hover:border-[#C35D51]"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 shrink-0 text-[#C35D51]" />
                    <div>
                      <p className="font-semibold text-[#443026]">5 Bengaluru Boutiques</p>
                      <p className="text-[11px] text-[#6A564B]">Frazer Town • Malleshwaram • Sahakarnagar...</p>
                    </div>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-[#F5C04A]" />
                </Link>
              </div>

              {/* Bottom Quick-Action Buttons */}
              <div className="shrink-0 space-y-2 border-t border-[#FAF0EA] bg-[#FFF9F0] px-5 py-3.5 pb-6 sm:px-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#C35D51] py-3.5 font-sans text-xs font-bold uppercase tracking-wider text-[#FFF9F0] shadow-sm transition-colors hover:bg-[#AD5B4D]"
                >
                  <WhatsAppIcon className="h-4 w-4 fill-[#FFF9F0]" />
                  <span>WhatsApp Concierge</span>
                </a>
                <a
                  href={PHONE_TEL}
                  className="flex items-center justify-center gap-2 rounded-full border border-[#FAF0EA] bg-[#FAF0EA]/40 py-3 font-sans text-xs font-semibold text-[#443026] transition-colors hover:border-[#C35D51]"
                >
                  <Phone className="h-3.5 w-3.5 text-[#C35D51]" />
                  <span>Call {PHONE_DISPLAY}</span>
                </a>
              </div>
            </aside>
              </div>,
          document.body
        )}
    </header>
  );
}
