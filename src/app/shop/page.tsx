import { getProducts, getCategories, getImageUrl } from "@/lib/sanity";
import ShopPageClient from "./ShopPageClient";

// Mock data fallback
const mockCategories = [
  {
    handle: "listen",
    title: "LISTEN",
    image: "/images/abstract-smoke-1.jpg",
  },
  {
    handle: "shop",
    title: "SHOP",
    image: "/images/coffee-glass.jpg",
  },
  {
    handle: "consume",
    title: "CONSUME",
    image: "/images/face-closeup.jpg",
  },
];

const mockProducts = [
  {
    handle: "ethiopian-natural",
    title: "ETHIOPIAN NATURAL",
    image: "/images/abstract-paint.jpg",
    price: 24.0,
    status: "available" as const,
    tag: "NEW",
  },
  {
    handle: "silver-bag",
    title: "SILVER BAG BLEND",
    image: "/images/abstract-ink.jpg",
    price: 22.0,
    status: "available" as const,
  },
  {
    handle: "cold-brew-kit",
    title: "COLD BREW KIT",
    image: "/images/abstract-smoke-1.jpg",
    price: 35.0,
    status: "available" as const,
  },
  {
    handle: "bigface-collab",
    title: "BIGFACE",
    image: "/images/abstract-paint.jpg",
    price: 28.0,
    status: "available" as const,
    tag: "COLLAB",
  },
  {
    handle: "coming-soon-1",
    title: "Mystery Drop",
    image: "/images/abstract-ink.jpg",
    status: "coming-soon" as const,
  },
  {
    handle: "coming-soon-2",
    title: "Mystery Drop",
    image: "/images/abstract-smoke-1.jpg",
    status: "coming-soon" as const,
  },
];

export default async function ShopPage() {
  // Fetch from Sanity
  const [sanityProducts, sanityCategories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  // Transform Sanity data or use mock fallback
  const products =
    sanityProducts.length > 0
      ? sanityProducts.map((p) => ({
          handle: p.slug?.current || p._id,
          title: p.name,
          image: getImageUrl(p.productImage),
          price: p.price,
          status: p.status || "available",
          tag: p.tag,
        }))
      : mockProducts;

  const categories =
    sanityCategories.length > 0
      ? sanityCategories.map((c) => ({
          handle: c.slug?.current || c._id,
          title: c.title,
          image: getImageUrl(c.image),
        }))
      : mockCategories;

  return <ShopPageClient products={products} categories={categories} />;
}
