import GlitchLogo from "@/components/landing/GlitchLogo";
import GlitchText from "@/components/landing/GlitchText";
import RandomBackground from "@/components/landing/RandomBackground";
import { LandingThemeProvider } from "@/components/landing/LandingTheme";

const disabledNav = "text-xs md:text-sm tracking-[0.3em] uppercase text-neutral-700 cursor-default";
const disabledFooter = "text-xs tracking-[0.3em] uppercase text-neutral-700 cursor-default";
const fontBody = { fontFamily: "var(--font-body)" } as const;

export default function Home() {
  return (
    <LandingThemeProvider>
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background — random per visit */}
      <div className="absolute inset-0 z-0">
        <RandomBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Nav */}
        <nav className="flex items-center justify-between px-6 md:px-12 py-6">
          <span
            className="text-xs md:text-sm tracking-[0.3em] uppercase font-body"
            style={fontBody}
          >
            Narcotic
          </span>
          <GlitchText text="About" className={disabledNav} style={fontBody} />
          <GlitchText text="Book" className={disabledNav} style={fontBody} />
        </nav>

        {/* Hero */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <GlitchLogo />

          {/* Tagline */}
          <p
            className="text-sm md:text-base leading-relaxed max-w-md text-neutral-300"
            style={fontBody}
          >
            Self Destructing Specialty Coffee. Roasted By Nameless Folk.
            <br />
            Consumed By Many. Featuring Seasonal Offerings
            <br />
            And One-Off Collabs.
          </p>

          {/* Year */}
          <p
            className="mt-8 md:mt-10 text-sm md:text-base tracking-widest text-neutral-400"
            style={fontBody}
          >
            2026
          </p>

          {/* Instagram */}
          <a
            href="https://instagram.com/narcoticresearch"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 text-neutral-500 hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>

        {/* Bottom section */}
        <footer className="px-6 md:px-12 pb-8 pt-16">
          {/* Link row */}
          <div className="flex items-center justify-between mb-10">
            <GlitchText text="Shop" className={disabledFooter} style={fontBody} />
            <GlitchText text="About" className={disabledFooter} style={fontBody} />
            <GlitchText text="Book" className={disabledFooter} style={fontBody} />
          </div>

        </footer>
      </div>
    </main>
    </LandingThemeProvider>
  );
}
