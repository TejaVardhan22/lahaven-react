import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Plus, Check, ArrowUpRight } from 'lucide-react';
import type { Product } from '@/types';
import { useStorefront } from '@/context/StorefrontContext';
import { WhatsAppIcon } from '@/components/shared/Icons';

interface ProductCardProps {
  product: Product;
  index?: number;
  priority?: boolean;
}

/**
 * Official Indian FSSAI Vegetarian / 100% Eggless Symbol
 */
export const EgglessSymbol: React.FC<{ className?: string }> = ({ className = 'h-3.5 w-3.5' }) => (
  <svg
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 ${className}`}
    aria-hidden="true"
  >
    <rect
      x="1"
      y="1"
      width="16"
      height="16"
      rx="2"
      fill="white"
      stroke="#15803D"
      strokeWidth="1.5"
    />
    <circle cx="9" cy="9" r="4.2" fill="#15803D" />
  </svg>
);

/**
 * Official Indian FSSAI Contains-Egg Symbol
 */
export const EggSymbol: React.FC<{ className?: string }> = ({ className = 'h-3.5 w-3.5' }) => (
  <svg
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 ${className}`}
    aria-hidden="true"
  >
    <rect
      x="1"
      y="1"
      width="16"
      height="16"
      rx="2"
      fill="white"
      stroke="#9A3412"
      strokeWidth="1.5"
    />
    <path d="M9 4.2L13.6 12.8H4.4L9 4.2Z" fill="#9A3412" />
  </svg>
);

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  index = 0,
  priority = false,
}) => {
  const { isWishlisted, toggleWishlist, quickAddToCart, quickDirectWhatsAppOrder } =
    useStorefront();
  const liked = isWishlisted(product.id);
  const [justAdded, setJustAdded] = useState(false);

  // Read dietary status directly from products.ts
  const isEggless = product.isEggless ?? product.tags.includes('eggless');
  const defaultSize = product.sizes?.[0] || '0.5 kg';
  const basePrice = product.startingPrice?.amount || product.price?.amount || 799;

  const currentImg = (product.images && product.images[0]) || {
    src: '/images/hero/belgian-truffle-desktop.jpg',
    alt: product.name,
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    quickAddToCart(product, defaultSize, isEggless);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  const handleDirectWhatsAppOrder = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    quickDirectWhatsAppOrder(product, defaultSize, isEggless);
  };

  // Category label for Oat & Honey header
  const categoryLabel =
    product.subcategory ||
    (product.category === 'celebration-cakes'
      ? 'Celebration cakes'
      : product.category.replace('-', ' '));

  return (
    <article className={`product-card tone-${(index ?? 0) % 4}`}>
      {/* ── Oat & Honey Aspect Ratio 1:1 Image with Hover Zoom & Corner Pill Tag ── */}
      <Link
        to={`/cakes/${product.slug}`}
        className="product-image-link"
        aria-label={product.name}
      >
        <img
          src={currentImg.src}
          alt={currentImg.alt || product.name}
          width={600}
          height={600}
          loading={priority ? 'eager' : 'lazy'}
        />

        {/* Top-Left Organic Tag like Oat & Honey */}
        <span className="product-tag">
          {isEggless ? <EgglessSymbol className="h-3 w-3" /> : <EggSymbol className="h-3 w-3" />}
          <span>{isEggless ? '100% Eggless' : 'Contains Egg'}</span>
        </span>

        {/* Bottom-Right View Arrow Pill like Oat & Honey */}
        <span className="product-view" aria-hidden="true">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </Link>

      {/* ── Oat & Honey Product Card Info ── */}
      <div className="product-card-info">
        <div className="min-w-0 pr-2">
          <p className="product-category">{categoryLabel}</p>
          <h3>
            <Link to={`/cakes/${product.slug}`}>{product.name}</Link>
          </h3>
        </div>
        <span className="product-price">₹{basePrice}</span>
      </div>

      {/* ── Minimal Ordering & Wishlist Actions Strip ── */}
      <div className="mt-3 flex items-center gap-2 pt-1">
        <button
          type="button"
          onClick={handleDirectWhatsAppOrder}
          className="flex-1 inline-flex h-8 items-center justify-center gap-1.5 rounded-full bg-[#C35D51] px-3 font-sans text-xs font-bold text-[#FFF9F0] shadow-2xs transition-all duration-200 hover:bg-[#AD5B4D] hover:-translate-y-0.5 active:translate-y-0"
          title="Direct WhatsApp Order"
        >
          <WhatsAppIcon className="h-3.5 w-3.5 fill-[#FFF9F0]" />
          <span>Order Now</span>
        </button>

        <button
          type="button"
          onClick={handleAddToCart}
          className={`inline-flex h-8 items-center justify-center gap-1 rounded-full border px-3 font-sans text-xs font-bold transition-all duration-200 ${
            justAdded
              ? 'border-[#C35D51] bg-[#C35D51]/15 text-[#C35D51]'
              : 'border-[#E0D6C9] bg-[#FAF5EC] text-[#443026] hover:border-[#443026] hover:bg-[#443026] hover:text-[#FFF9F0]'
          }`}
          title="Add to shopping bag"
        >
          {justAdded ? (
            <>
              <Check className="h-3.5 w-3.5" />
              <span>In Bag</span>
            </>
          ) : (
            <>
              <Plus className="h-3.5 w-3.5" />
              <span>Bag</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          aria-label={liked ? 'Remove from wishlist' : 'Save to wishlist'}
          aria-pressed={liked}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E0D6C9] bg-[#FAF5EC] text-[#443026] transition-transform hover:scale-110 hover:border-[#C35D51] hover:text-[#C35D51] active:scale-95"
        >
          <Heart
            className={`h-4 w-4 transition-colors ${
              liked ? 'fill-[#C35D51] text-[#C35D51]' : 'text-[#443026]'
            }`}
          />
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
