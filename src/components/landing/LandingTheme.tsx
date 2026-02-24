"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";

interface Theme {
  background: string | null; // null = no background image
  logoColor: string;
  textColor: string; // for nav text, tagline, etc.
}

const THEMES: Theme[] = [
  { background: "/images/landing/bg-crying.png", logoColor: "#ECECEC", textColor: "white" },
  { background: "/images/landing/bg-crying.png", logoColor: "#EEFF00", textColor: "white" },
  { background: "/images/landing/bg-scream.png", logoColor: "#ECECEC", textColor: "white" },
  { background: "/images/landing/bg-scream.png", logoColor: "#EEFF00", textColor: "white" },
  { background: "/images/landing/bg-spiral.png", logoColor: "#ECECEC", textColor: "white" },
  { background: "/images/landing/bg-spiral.png", logoColor: "#EEFF00", textColor: "white" },
  { background: "/images/landing/bg-texture.jpg", logoColor: "#ECECEC", textColor: "white" },
  { background: "/images/landing/bg-texture.jpg", logoColor: "#EEFF00", textColor: "white" },
  { background: null, logoColor: "#111111", textColor: "white" },
];

const ThemeContext = createContext<Theme>(THEMES[0]);

const STORAGE_KEY = "narcotic-last-theme";

export function LandingThemeProvider({ children }: { children: ReactNode }) {
  const theme = useMemo(() => {
    const lastIndex = (() => {
      try {
        return parseInt(sessionStorage.getItem(STORAGE_KEY) ?? "", 10);
      } catch {
        return NaN;
      }
    })();

    let index: number;
    if (THEMES.length <= 1) {
      index = 0;
    } else {
      do {
        index = Math.floor(Math.random() * THEMES.length);
      } while (index === lastIndex);
    }

    try {
      sessionStorage.setItem(STORAGE_KEY, String(index));
    } catch {
      // sessionStorage unavailable (SSR, private browsing limits)
    }

    return THEMES[index];
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useLandingTheme() {
  return useContext(ThemeContext);
}
