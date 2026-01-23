import { groq } from "next-sanity";

// Get all products
export const productsQuery = groq`
  *[_type == "product"] | order(_createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    sku,
    description,
    productImage,
    price,
    status,
    tag
  }
`;

// Get single product by slug
export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    sku,
    description,
    heroImage,
    productImage,
    galleryImages,
    tag,
    overview,
    origin,
    process,
    varietal,
    masl,
    notes,
    collabNo,
    batch,
    price,
    status,
    shopifyProductId
  }
`;

// Get all categories
export const categoriesQuery = groq`
  *[_type == "category"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    image,
    description
  }
`;

// Get site settings
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    title,
    description,
    heroTagline,
    aboutText
  }
`;

// Get featured products for homepage
export const featuredProductsQuery = groq`
  *[_type == "product" && featured == true] | order(_createdAt desc)[0...4] {
    _id,
    name,
    "slug": slug.current,
    productImage,
    price,
    status,
    tag
  }
`;
