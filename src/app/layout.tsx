import type { Metadata } from "next";
import {
  Inter,
  Bricolage_Grotesque,
  UnifrakturMaguntia,
} from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";
import PageLoader from "@/components/layout/PageLoader";

// Body font - Inter
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Heading font - Bricolage Grotesque
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

// Display font - blackletter for logo
const unifraktur = UnifrakturMaguntia({
  variable: "--font-unifraktur",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NARCOTIC | Self Destructing Specialty Coffee",
  description:
    "Roasted By Nameless Folk. Consumed By Many. Featuring Seasonal Offerings And One-Off Collabs.",
  keywords: ["coffee", "specialty coffee", "roasters", "seasonal", "collab"],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "NARCOTIC | Self Destructing Specialty Coffee",
    description: "Roasted By Nameless Folk. Consumed By Many.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bricolage.variable} ${unifraktur.variable} antialiased`}
      >
        <CartProvider>
          <PageLoader />
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
