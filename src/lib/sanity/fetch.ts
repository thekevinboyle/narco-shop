import { client, urlFor, isSanityConfigured } from "./client";
import {
  productsQuery,
  productBySlugQuery,
  categoriesQuery,
  siteSettingsQuery,
} from "./queries";
import type { Product, Category, SiteSettings, SanityImage } from "./types";

// Helper to convert Sanity image to URL string
export function getImageUrl(
  image: SanityImage | undefined,
  width = 800
): string {
  if (!image || !isSanityConfigured()) return "/images/abstract-paint.jpg";
  try {
    return urlFor(image).width(width).url();
  } catch {
    return "/images/abstract-paint.jpg";
  }
}

// Fetch all products
export async function getProducts(): Promise<Product[]> {
  if (!client) {
    console.log("Sanity not configured, using mock data");
    return [];
  }
  try {
    const products = await client.fetch<Product[]>(productsQuery);
    return products || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

// Fetch single product by slug
export async function getProductBySlug(slug: string): Promise<Product | null> {
  if (!client) {
    console.log("Sanity not configured, using mock data");
    return null;
  }
  try {
    const product = await client.fetch<Product>(productBySlugQuery, { slug });
    return product || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

// Fetch all categories
export async function getCategories(): Promise<Category[]> {
  if (!client) {
    console.log("Sanity not configured, using mock data");
    return [];
  }
  try {
    const categories = await client.fetch<Category[]>(categoriesQuery);
    return categories || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

// Fetch site settings
export async function getSiteSettings(): Promise<SiteSettings | null> {
  if (!client) {
    console.log("Sanity not configured, using mock data");
    return null;
  }
  try {
    const settings = await client.fetch<SiteSettings>(siteSettingsQuery);
    return settings || null;
  } catch (error) {
    console.error("Error fetching site settings:", error);
    return null;
  }
}
