"use client";

import Image from "next/image";
import { useLandingTheme } from "./LandingTheme";

export default function RandomBackground() {
  const { background } = useLandingTheme();

  if (!background) return null;

  return (
    <Image
      src={background}
      alt=""
      fill
      className="object-cover opacity-30"
      priority
    />
  );
}
