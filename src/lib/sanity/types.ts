export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface Product {
  _id: string;
  _type: "product";
  name: string;
  slug: {
    current: string;
  };
  sku: string;
  description: string;
  heroImage: SanityImage;
  productImage: SanityImage;
  galleryImages: SanityImage[];
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
  status: "available" | "coming-soon" | "sold-out";
  shopifyProductId?: string;
}

export interface Category {
  _id: string;
  _type: "category";
  title: string;
  slug: {
    current: string;
  };
  image: SanityImage;
  description?: string;
}

export interface SiteSettings {
  _id: string;
  _type: "siteSettings";
  title: string;
  description: string;
  heroTagline: string[];
  aboutText: {
    headline: string;
    subheadline: string;
    email: string;
  };
}
