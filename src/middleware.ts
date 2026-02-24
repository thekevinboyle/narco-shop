import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow the landing page, static assets, and API routes through
  if (
    pathname === "/" ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.png" ||
    pathname === "/robots.txt"
  ) {
    return NextResponse.next();
  }

  // Redirect everything else to the landing page
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: "/((?!_next/static|_next/image).*)",
};
