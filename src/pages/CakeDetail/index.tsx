import React, { useState, useMemo, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronRight,
  Heart,
  Leaf,
  Minus,
  Plus,
  ShoppingBag,
  Sparkles,
  Truck,
  MapPin,
  Check,
} from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { getProductBySlug } from '@/data/products';
import { SITE_URL } from '@/utils/constants';
import { generateProductSchema } from '@/utils/seo';
import { WhatsAppIcon } from '@/components/shared/Icons';
import { EgglessSymbol, EggSymbol } from '@/components/products/ProductCard';
import {
  useStorefront,
  calculateWeightPrice,
  checkBengaluruPincode,
} from '@/context/StorefrontContext';

export const CakeDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  const { addToCart, openDrawer, isWishlisted, toggleWishlist, startDirectWhatsAppOrder } =
    useStorefront();

  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<string>(product?.sizes?.[0] || '0.5 kg');
  const [selectedFlavor, setSelectedFlavor] = useState<string>(
    product?.flavors?.[0] || 'Signature Recipe'
  );
  const [isEggless, setIsEggless] = useState<boolean>(
    product ? (product.isEggless ?? product.tags.includes('eggless')) : true
  );
  const [messageOnCake, setMessageOnCake] = useState<string>('');
  const [pincode, setPincode] = useState<string>('560005');
  const [quantity, setQuantity] = useState<number>(1);
  const [addedConfirmation, setAddedConfirmation] = useState<boolean>(false);

  useEffect(() => {
    if (product) {
      setActiveImageIdx(0);
      setSelectedSize(product.sizes?.[0] || '0.5 kg');
      setSelectedFlavor(product.flavors?.[0] || 'Signature Recipe');
      setIsEggless(product.isEggless ?? product.tags.includes('eggless'));
      setQuantity(1);
      setAddedConfirmation(false);
    }
  }, [product]);

  if (!product) {
    return (
      <section className="product-detail section-rail">
        <SEOHead
          title="Treat not found | LaHaven Cake Boutique"
          description="This treat is no longer available. Find your next favourite in our shop."
          canonicalUrl={`${SITE_URL}/cakes`}
          ogTitle="Treat not found — LaHaven Cake Boutique"
          ogDescription="This treat is no longer available. Find your next favourite in our shop."
          ogImage={`${SITE_URL}/og/cakes.jpg`}
          twitterCard="summary_large_image"
        />
        <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
          <span className="eyebrow">A little lost in the bakery</span>
          <h1 className="mt-4 font-serif text-3xl font-bold text-[#2D221E] sm:text-4xl">
            No crumbs this way.
          </h1>
          <p className="mt-3 max-w-md font-sans text-xs leading-relaxed text-[#6A564B]">
            We couldn’t find that treat. There are still plenty of fresh bakes waiting for you.
          </p>
          <Link to="/cakes" className="button button-dark mt-6">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to the bakery</span>
          </Link>
        </div>
      </section>
    );
  }

  const basePrice = product.startingPrice?.amount || product.price?.amount || 799;
  const unitPrice = calculateWeightPrice(basePrice, selectedSize);
  const totalDisplayPrice = unitPrice * quantity;

  const pincodeStatus = useMemo(() => checkBengaluruPincode(pincode), [pincode]);
  const liked = isWishlisted(product.id);

  const images = product.images && product.images.length > 0
    ? product.images
    : [{ src: '/images/hero/belgian-truffle-desktop.jpg', alt: product.name }];

  const currentImage = images[activeImageIdx] || images[0];

  const handleAddToBag = () => {
    addToCart({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      image: images[0]?.src || '/images/hero/belgian-truffle-desktop.jpg',
      size: selectedSize,
      flavor: selectedFlavor,
      isEggless,
      messageOnCake,
      addons: [],
      unitPrice,
      quantity,
    });
    setAddedConfirmation(true);
    setTimeout(() => setAddedConfirmation(false), 3500);
  };

  const handleDirectWhatsAppOrder = () => {
    startDirectWhatsAppOrder({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      image: images[0]?.src || '/images/hero/belgian-truffle-desktop.jpg',
      size: selectedSize,
      flavor: selectedFlavor,
      isEggless,
      messageOnCake,
      addons: [],
      unitPrice,
      quantity,
      pincode,
    });
  };

  return (
    <div className="min-h-screen bg-[#FFF9F0] py-8 sm:py-12">
      <div className="premium-container">
        <SEOHead
          title={`${product.name} | LaHaven Cake Boutique`}
          description={product.description}
          canonicalUrl={`${SITE_URL}/cakes/${product.slug}`}
          ogTitle={`${product.name} — Handcrafted Artisan Cake`}
          ogDescription={product.shortDescription || product.description}
          ogImage={images[0]?.src || `${SITE_URL}/og/cakes.jpg`}
          twitterCard="summary_large_image"
          structuredData={generateProductSchema(product)}
        />

        {/* ── Minimalist Breadcrumb ── */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-sans text-xs text-[#766256]">
          <Link to="/" className="hover:text-[#443026] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/cakes" className="hover:text-[#443026] transition-colors">
            Cakes
          </Link>
          <span>/</span>
          <span className="font-semibold text-[#443026] truncate max-w-[200px] sm:max-w-none">
            {product.name}
          </span>
        </nav>

        {/* ── Minimalist 2-Column Product Detail Layout ── */}
        <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column (5/12): Gallery Card */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-3xl border border-[#E0D6C9] bg-[#FFFFFF] p-2.5 shadow-[0_8px_30px_rgba(68,48,38,0.06)]">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#FAF5EC]">
                <img
                  src={currentImage.src}
                  alt={currentImage.alt || product.name}
                  width={1000}
                  height={1000}
                  fetchPriority="high"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />

                {/* Dietary Badge */}
                <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 rounded-full border border-[#E0D6C9] bg-[#FFFFFF]/90 px-3 py-1 font-sans text-[11px] font-bold text-[#443026] shadow-sm backdrop-blur-md">
                  {isEggless ? <EgglessSymbol className="h-3.5 w-3.5" /> : <EggSymbol className="h-3.5 w-3.5" />}
                  <span>{isEggless ? '100% Eggless' : 'Contains Egg'}</span>
                </div>
              </div>

              {/* Thumbnails Row */}
              {images.length > 1 && (
                <div className="mt-3 flex gap-2.5 px-1 pb-1 overflow-x-auto">
                  {images.map((img, idx) => {
                    const active = activeImageIdx === idx;
                    return (
                      <button
                        key={img.src + idx}
                        type="button"
                        onClick={() => setActiveImageIdx(idx)}
                        aria-label={`View ${product.name} photo ${idx + 1}`}
                        aria-pressed={active}
                        className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-xl transition-all ${
                          active
                            ? 'border-2 border-[#443026] shadow-sm'
                            : 'border border-[#E0D6C9] opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={img.src} alt="" className="h-full w-full object-cover" />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Right Column (7/12): Minimalist Buy & Options Column */}
          <div className="space-y-6 lg:col-span-6">
            {/* Header / Eyebrow */}
            <div>
              <span className="eyebrow text-[#C35D51]">
                Boutique Patisserie • {product.subcategory || 'Signature Gateau'}
              </span>
              <h1 className="mt-2 font-serif text-2xl font-bold text-[#443026] sm:text-4xl lg:text-[42px] leading-tight">
                {product.name}
              </h1>

              {/* Price & Weight Portion Note */}
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span className="font-sans text-2xl sm:text-3xl font-bold text-[#443026]">
                  ₹{totalDisplayPrice.toLocaleString('en-IN')}
                </span>
                {product.sizes && product.sizes.length > 1 && (
                  <span className="font-sans text-xs font-semibold text-[#766256]">
                    ({selectedSize} portion)
                  </span>
                )}
                <span className="rounded-full bg-[#E8F5E9] px-2.5 py-0.5 font-sans text-[11px] font-bold text-[#2e7d32]">
                  Fresh morning bake
                </span>
              </div>

              {/* Editorial Description */}
              <p className="mt-3 font-sans text-xs sm:text-sm leading-relaxed text-[#766256]">
                {product.description}
              </p>
            </div>

            {/* Quick Value Props Strip */}
            <div className="grid grid-cols-3 gap-2 border-y border-[#E0D6C9] py-3 font-sans text-center text-[11px] sm:text-xs font-bold text-[#443026]">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1">
                <Sparkles size={14} className="text-[#C35D51] shrink-0" />
                <span>Baked fresh daily</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1 border-x border-[#E0D6C9] px-1">
                <Leaf size={14} className="text-[#2e7d32] shrink-0" />
                <span>{isEggless ? '100% Eggless' : 'Pure patisserie'}</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1">
                <Truck size={14} className="text-[#C35D51] shrink-0" />
                <span>5 Boutiques</span>
              </div>
            </div>

            {/* ── Minimalist Interactive Selectors ── */}

            {/* 1. Size / Weight Selector (Mobile Grid) */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between font-sans text-xs">
                  <span className="font-bold uppercase tracking-wider text-[#443026]">
                    Choose Weight
                  </span>
                  <span className="text-[#766256]">
                    {selectedSize === '0.5 kg'
                      ? 'Serves 4–6'
                      : selectedSize === '1.0 kg'
                      ? 'Serves 8–10'
                      : 'Serves 12–16'}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {product.sizes.map((size) => {
                    const sizePrice = calculateWeightPrice(basePrice, size);
                    const active = selectedSize === size;
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`flex flex-col items-center justify-center rounded-2xl py-2.5 px-1.5 text-center transition-all ${
                          active
                            ? 'bg-[#443026] text-[#FFF9F0] shadow-sm'
                            : 'border border-[#E0D6C9] bg-[#FFFFFF] text-[#443026] shadow-2xs hover:border-[#443026]'
                        }`}
                      >
                        <span className="font-sans text-xs font-bold">{size}</span>
                        <span
                          className={`mt-0.5 font-sans text-[11px] ${
                            active ? 'text-[#FFF9F0]/80' : 'text-[#766256]'
                          }`}
                        >
                          ₹{sizePrice.toLocaleString('en-IN')}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 2. Dietary Preference Pills */}
            <div className="space-y-2">
              <span className="block font-sans text-xs font-bold uppercase tracking-wider text-[#443026]">
                Recipe Preference
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setIsEggless(true)}
                  className={`flex items-center justify-center gap-2 rounded-xl py-2.5 px-3 font-sans text-xs font-bold transition-all ${
                    isEggless
                      ? 'border-2 border-[#2e7d32] bg-[#E8F5E9] text-[#2e7d32] shadow-2xs'
                      : 'border border-[#E0D6C9] bg-[#FFFFFF] text-[#443026] shadow-2xs hover:border-[#443026]'
                  }`}
                >
                  <EgglessSymbol className="h-3.5 w-3.5 shrink-0" />
                  <span>100% Eggless (Veg)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsEggless(false)}
                  className={`flex items-center justify-center gap-2 rounded-xl py-2.5 px-3 font-sans text-xs font-bold transition-all ${
                    !isEggless
                      ? 'border-2 border-[#443026] bg-[#443026] text-[#FFF9F0] shadow-2xs'
                      : 'border border-[#E0D6C9] bg-[#FFFFFF] text-[#443026] shadow-2xs hover:border-[#443026]'
                  }`}
                >
                  <EggSymbol className="h-3.5 w-3.5 shrink-0" />
                  <span>Contains Egg</span>
                </button>
              </div>
            </div>

            {/* 3. Flavour Variation (if applicable) */}
            {product.flavors && product.flavors.length > 1 && (
              <div className="space-y-2">
                <span className="block font-sans text-xs font-bold uppercase tracking-wider text-[#443026]">
                  Flavour Variation
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.flavors.map((fl) => {
                    const active = selectedFlavor === fl;
                    return (
                      <button
                        key={fl}
                        type="button"
                        onClick={() => setSelectedFlavor(fl)}
                        className={`rounded-full px-4 py-2 font-sans text-xs font-bold transition-all ${
                          active
                            ? 'bg-[#443026] text-[#FFF9F0] shadow-sm'
                            : 'border border-[#E0D6C9] bg-[#FFFFFF] text-[#443026] shadow-2xs hover:border-[#443026]'
                        }`}
                      >
                        {fl}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 4. Piped Celebration Plaque Message */}
            <div className="space-y-1.5">
              <label className="block font-sans text-xs font-bold uppercase tracking-wider text-[#443026]">
                Message on Cake Plaque{' '}
                <span className="font-normal lowercase text-[#766256]">(optional)</span>
              </label>
              <input
                type="text"
                maxLength={40}
                value={messageOnCake}
                onChange={(e) => setMessageOnCake(e.target.value)}
                placeholder="e.g. Happy Birthday Aanya!"
                className="w-full rounded-xl border border-[#D8C7B8] bg-[#FFFFFF] px-3.5 py-2.5 font-sans text-xs font-medium text-[#443026] placeholder-[#766256]/50 shadow-2xs outline-none focus:border-[#C35D51] focus:ring-1 focus:ring-[#C35D51]"
              />
            </div>

            {/* 5. Minimalist Pincode Checker */}
            <div className="rounded-2xl border border-[#E0D6C9] bg-[#FFFFFF] p-3.5 shadow-2xs">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 font-sans text-xs font-bold text-[#443026]">
                  <MapPin className="h-4 w-4 text-[#C35D51] shrink-0" />
                  <span>Bengaluru Delivery Check</span>
                </div>
                <input
                  type="text"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="560005"
                  className="w-20 rounded-lg border border-[#D8C7B8] bg-[#FAF5EC] px-2 py-1 text-center font-sans text-xs font-bold text-[#443026] outline-none focus:border-[#C35D51]"
                />
              </div>
              {pincodeStatus.valid && (
                <p
                  className={`mt-2 font-sans text-[11px] font-semibold ${
                    pincodeStatus.serviceable ? 'text-[#2e7d32]' : 'text-[#C64C3D]'
                  }`}
                >
                  {pincodeStatus.serviceable ? (
                    <>
                      ✓ {pincodeStatus.area}: {pincodeStatus.eta} (
                      {pincodeStatus.charge === 0 ? 'Free delivery' : `Delivery ₹${pincodeStatus.charge}`})
                    </>
                  ) : (
                    pincodeStatus.eta
                  )}
                </p>
              )}
            </div>

            {/* 6. Uncrowded Buy Action Buttons (Stacked on Mobile) */}
            <div className="space-y-2.5 pt-1">
              {/* Primary: Full-Width WhatsApp Order */}
              <button
                type="button"
                onClick={handleDirectWhatsAppOrder}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#443026] px-5 font-sans text-xs font-bold uppercase tracking-wider text-[#FFF9F0] shadow-sm transition-all hover:bg-[#2D1F18] active:scale-[0.99]"
              >
                <WhatsAppIcon className="h-4 w-4 fill-[#FFF9F0] shrink-0" />
                <span>
                  Order via WhatsApp • ₹{totalDisplayPrice.toLocaleString('en-IN')}
                </span>
              </button>

              {/* Secondary Row: Stepper + Add to Bag + Wishlist */}
              <div className="flex items-center gap-2">
                {/* Quantity Stepper */}
                <div className="inline-flex h-11 items-center rounded-full border border-[#E0D6C9] bg-[#FFFFFF] px-1.5 shadow-2xs">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    disabled={quantity === 1}
                    aria-label="Decrease quantity"
                    className="flex h-8 w-8 items-center justify-center rounded-full text-[#443026] transition-colors hover:bg-[#FAF5EC] disabled:opacity-30"
                  >
                    <Minus size={13} />
                  </button>
                  <span className="w-6 text-center font-sans text-xs font-bold text-[#443026]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                    disabled={quantity === 99}
                    aria-label="Increase quantity"
                    className="flex h-8 w-8 items-center justify-center rounded-full text-[#443026] transition-colors hover:bg-[#FAF5EC] disabled:opacity-30"
                  >
                    <Plus size={13} />
                  </button>
                </div>

                {/* Add to Bag */}
                <button
                  type="button"
                  onClick={handleAddToBag}
                  className="flex h-11 flex-1 items-center justify-center gap-1.5 rounded-full border-2 border-[#C35D51] bg-[#FFFFFF] font-sans text-xs font-bold uppercase tracking-wider text-[#C35D51] shadow-2xs transition-all hover:bg-[#C35D51] hover:text-[#FFF9F0] active:scale-[0.99]"
                >
                  <ShoppingBag size={14} className="shrink-0" />
                  <span>Add to Bag</span>
                </button>

                {/* Wishlist Button */}
                <button
                  type="button"
                  onClick={() => toggleWishlist(product.id)}
                  aria-label={liked ? 'Remove from wishlist' : 'Save to wishlist'}
                  aria-pressed={liked}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E0D6C9] bg-[#FFFFFF] text-[#443026] shadow-2xs transition-transform hover:scale-105 hover:border-[#C35D51] hover:text-[#C35D51] active:scale-95"
                >
                  <Heart
                    size={17}
                    className={liked ? 'fill-[#C35D51] text-[#C35D51]' : ''}
                  />
                </button>
              </div>
            </div>

            {/* Bag Confirmation Feedback */}
            {addedConfirmation && (
              <div
                className="flex items-center justify-between rounded-2xl border border-[#2e7d32]/30 bg-[#E8F5E9] px-4 py-3 font-sans text-xs font-bold text-[#2e7d32]"
                role="status"
              >
                <span>✓ {product.name} added to your celebration bag!</span>
                <button
                  type="button"
                  onClick={() => openDrawer('cart')}
                  className="inline-flex items-center gap-1 underline hover:text-[#1b5e20]"
                >
                  <span>View bag</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            )}

            {/* Chilled Van & Boutique Pickup Note */}
            <div className="flex items-center gap-3 rounded-2xl border border-[#E0D6C9] bg-[#FFFFFF] p-3.5 shadow-2xs">
              <Truck size={18} className="shrink-0 text-[#C35D51]" />
              <div className="font-sans text-xs text-[#766256]">
                <span className="font-bold text-[#443026]">
                  Bengaluru Express &amp; Pickup:{' '}
                </span>
                <span>
                  Chilled van transit to your door or complimentary pickup across 5 boutiques.
                </span>
              </div>
            </div>

            {/* ── Minimalist Collapsible Accordions ── */}
            <div className="space-y-0 divide-y divide-[#E0D6C9] border-t border-[#E0D6C9] pt-2">
              <details className="group py-4" open>
                <summary className="flex cursor-pointer items-center justify-between font-sans text-xs font-bold uppercase tracking-wider text-[#443026]">
                  <span>Ingredients &amp; Craftsmanship</span>
                  <span className="text-base font-normal text-[#766256] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="mt-3 space-y-2 font-sans text-xs leading-relaxed text-[#766256]">
                  <p>
                    Crafted fresh each morning using premium European cocoa, pure dairy butter,
                    Madagascar bourbon vanilla, and natural whole fruit coulis. Never frozen, no
                    artificial colouring or chemical preservatives.
                  </p>
                  <p>
                    Read our full ingredient statement on your boutique cake box upon delivery.
                  </p>
                </div>
              </details>

              <details className="group py-4">
                <summary className="flex cursor-pointer items-center justify-between font-sans text-xs font-bold uppercase tracking-wider text-[#443026]">
                  <span>Boutique Collection &amp; Delivery</span>
                  <span className="text-base font-normal text-[#766256] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="mt-3 space-y-2 font-sans text-xs leading-relaxed text-[#766256]">
                  <p>
                    Hand-delivered across Bengaluru in temperature-controlled boxes or ready for
                    complimentary pickup at our Frazer Town, Malleshwaram, Sahakarnagar,
                    Sanjayanagar, and Yelahanka boutiques.
                  </p>
                  <p>Orders placed before 2:00 PM are eligible for same-day delivery.</p>
                </div>
              </details>

              <details className="group py-4">
                <summary className="flex cursor-pointer items-center justify-between font-sans text-xs font-bold uppercase tracking-wider text-[#443026]">
                  <span>Storage &amp; Serving Guide</span>
                  <span className="text-base font-normal text-[#766256] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="mt-3 space-y-2 font-sans text-xs leading-relaxed text-[#766256]">
                  <p>
                    Store in refrigeration between 4°C–8°C. For the most indulgent creaminess and
                    rich aroma, allow your cake to sit at room temperature for 15–20 minutes before
                    slicing with a warm knife.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* ── Back to Collection Navigation Bar ── */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#E0D6C9] pt-8 sm:flex-row">
          <Link
            to="/cakes"
            className="inline-flex items-center gap-2 font-sans text-xs font-bold text-[#443026] transition-colors hover:text-[#C35D51]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to all artisan cakes</span>
          </Link>
          <span className="font-sans text-xs text-[#766256]">
            Prices shown in INR. Delivery and boutique pickup confirmed at order checkout.
          </span>
        </div>
      </div>
    </div>
  );
};

export default CakeDetail;
