"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const GLITCH_CHARS = "!@#$%^&*()_+-=[]{}|;:,./<>?~`01";

interface GlitchTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

type CharState = "idle" | "scrambling" | "revealed";

interface CharData {
  original: string;
  current: string;
  state: CharState;
  nextScramble: number;
  scrambleEnd: number;
  revealEnd: number;
}

export default function GlitchText({ text, className, style }: GlitchTextProps) {
  const [display, setDisplay] = useState(text);
  const rafRef = useRef<number>(0);
  const charsRef = useRef<CharData[]>([]);

  const randomGlitch = () => GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];

  const initChars = useCallback(() => {
    const now = performance.now();
    // Start showing the real text, then scramble away
    charsRef.current = text.split("").map((ch) => ({
      original: ch,
      current: ch,
      state: "revealed" as CharState,
      nextScramble: 0,
      scrambleEnd: 0,
      // Show real text for 2-4s on load, staggered per char
      revealEnd: now + 2000 + Math.random() * 2000,
    }));
  }, [text]);

  useEffect(() => {
    initChars();

    const loop = (now: number) => {
      rafRef.current = requestAnimationFrame(loop);

      let changed = false;
      const chars = charsRef.current;

      for (let i = 0; i < chars.length; i++) {
        const ch = chars[i];
        if (ch.original === " ") continue;

        if (ch.state === "revealed") {
          if (now >= ch.revealEnd) {
            // Reveal done — scramble away to a random char, go idle
            ch.current = randomGlitch();
            ch.state = "idle";
            ch.nextScramble = now + 3000 + Math.random() * 7000;
            changed = true;
          }
          continue;
        }

        if (ch.state === "scrambling") {
          if (now >= ch.scrambleEnd) {
            // Scramble burst done — briefly reveal the real letter
            ch.current = ch.original;
            ch.state = "revealed";
            ch.revealEnd = now + 800 + Math.random() * 1500;
            changed = true;
          } else {
            if (Math.random() > 0.4) {
              ch.current = randomGlitch();
              changed = true;
            }
          }
          continue;
        }

        // Idle — sitting on a static scrambled character
        if (now >= ch.nextScramble) {
          ch.state = "scrambling";
          ch.scrambleEnd = now + 150 + Math.random() * 350;
          ch.current = randomGlitch();
          changed = true;
        }
      }

      if (changed) {
        setDisplay(chars.map((c) => c.current).join(""));
      }
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [initChars]);

  return (
    <span className={className} style={style} aria-label={text}>
      {display}
    </span>
  );
}
