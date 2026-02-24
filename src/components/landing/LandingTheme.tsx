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

export function LandingThemeProvider({ children }: { children: ReactNode }) {
  const theme = useMemo(
    () => THEMES[Math.floor(Math.random() * THEMES.length)],
    [],
  );

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useLandingTheme() {
  return useContext(ThemeContext);
}
