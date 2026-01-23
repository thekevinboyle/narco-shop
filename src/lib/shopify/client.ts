const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

const endpoint = domain ? `https://${domain}/api/2024-01/graphql.json` : null;

export function isShopifyConfigured(): boolean {
  if (!domain || !storefrontAccessToken) return false;
  // Detect placeholder values
  if (domain.includes('your-store') || domain.includes('your_store')) return false;
  if (storefrontAccessToken.includes('your_token') || storefrontAccessToken === 'your_token') return false;
  return true;
}

export async function shopifyFetch<T>({
  query,
  variables,
}: {
  query: string;
  variables?: Record<string, unknown>;
}): Promise<T> {
  if (!endpoint || !storefrontAccessToken) {
    throw new Error("Shopify not configured");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await response.json();

  if (json.errors) {
    console.error("Shopify API errors:", json.errors);
    throw new Error(json.errors[0]?.message || "Shopify API error");
  }

  return json.data;
}
