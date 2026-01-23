import { createClient, type SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImage } from "./types";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

// Only create client if projectId is configured and valid
let client: SanityClient | null = null;

try {
  if (projectId && projectId.length > 0 && projectId !== "your_project_id") {
    client = createClient({
      projectId,
      dataset,
      apiVersion: "2024-01-01",
      useCdn: process.env.NODE_ENV === "production",
    });
  }
} catch (error) {
  console.error("Failed to create Sanity client:", error);
  client = null;
}

export { client };

const builder = client ? imageUrlBuilder(client) : null;

export function urlFor(source: SanityImage) {
  if (!builder) {
    throw new Error("Sanity client not configured");
  }
  return builder.image(source);
}

export function isSanityConfigured(): boolean {
  return !!client;
}
