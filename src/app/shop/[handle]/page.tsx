import { getProductBySlug, getProducts, getImageUrl } from "@/lib/sanity";
import ProductPageClient from "./ProductPageClient";

// Mock product data fallback
const mockProducts: Record<
  string,
  {
    name: string;
    sku: string;
    description: string;
    heroImage: string;
    productImage: string;
    galleryImages: string[];
    tag: string;
    overview: string;
    origin: string;
    process: string;
    varietal: string;
    masl: string;
    notes: string;
    collabNo: string;
    batch: string;
    price: number;
  }
> = {
  "ethiopian-natural": {
    name: "Ethiopian Natural",
    sku: "SKU: 00251",
    description: "High Level Description",
    heroImage: "/images/abstract-paint.jpg",
    productImage: "/images/coffee-beans.jpg",
    galleryImages: ["/images/abstract-smoke-1.jpg", "/images/abstract-ink.jpg"],
    tag: "Coffee",
    overview:
      "Lorem ipsum dolor sit amet consectetur. Senectus a vestibulum aliquet a commodo gravida sed. Facilisis interdum in nibh in tortor condimentum aliquet quam. Mauris dipin on non leo fermi. Urna ana tellus sed non malesuada odio orci condimentum arger. A senod. Milis quia anim turpis elementum duis.",
    origin: "Ethiopia",
    process: "Natural",
    varietal: "Geisha",
    masl: "1850m",
    notes: "Stone Fruit",
    collabNo: "00251",
    batch: "20",
    price: 24.0,
  },
  "silver-bag": {
    name: "Silver Bag Blend",
    sku: "SKU: 00252",
    description: "Premium House Blend",
    heroImage: "/images/abstract-ink.jpg",
    productImage: "/images/coffee-glass.jpg",
    galleryImages: [
      "/images/abstract-paint.jpg",
      "/images/abstract-smoke-1.jpg",
    ],
    tag: "Coffee",
    overview:
      "A carefully crafted blend featuring beans from multiple origins. Balanced, smooth, and perfect for everyday drinking.",
    origin: "Multi-Origin",
    process: "Washed",
    varietal: "Mixed",
    masl: "1600m",
    notes: "Chocolate, Caramel",
    collabNo: "00252",
    batch: "15",
    price: 22.0,
  },
};

interface PageProps {
  params: Promise<{ handle: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { handle } = await params;

  // Try to fetch from Sanity
  const sanityProduct = await getProductBySlug(handle);

  // Transform Sanity data or use mock fallback
  const product = sanityProduct
    ? {
        name: sanityProduct.name,
        sku: `SKU: ${sanityProduct.sku || sanityProduct._id.slice(-5)}`,
        description: sanityProduct.description || "",
        heroImage: getImageUrl(sanityProduct.heroImage, 1200),
        productImage: getImageUrl(sanityProduct.productImage),
        galleryImages: sanityProduct.galleryImages?.map((img) =>
          getImageUrl(img)
        ) || [],
        tag: sanityProduct.tag || "Coffee",
        overview: sanityProduct.overview || "",
        origin: sanityProduct.origin || "",
        process: sanityProduct.process || "",
        varietal: sanityProduct.varietal || "",
        masl: sanityProduct.masl || "",
        notes: sanityProduct.notes || "",
        collabNo: sanityProduct.collabNo || "",
        batch: sanityProduct.batch || "",
        price: sanityProduct.price,
      }
    : mockProducts[handle] || mockProducts["ethiopian-natural"];

  return <ProductPageClient product={product} />;
}

// Generate static params for known products
export async function generateStaticParams() {
  const products = await getProducts();

  if (products.length > 0) {
    return products.map((product) => ({
      handle: product.slug?.current || product._id,
    }));
  }

  // Fallback to mock product handles
  return Object.keys(mockProducts).map((handle) => ({ handle }));
}
