"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LogoProps {
  className?: string;
  animate?: boolean;
  variant?: "black" | "white";
  size?: "sm" | "md" | "lg" | "xl" | "hero";
}

const sizeMap = {
  sm: { width: 120, height: 25 },
  md: { width: 200, height: 42 },
  lg: { width: 320, height: 67 },
  xl: { width: 480, height: 100 },
  hero: { width: 800, height: 167 },
};

export default function Logo({
  className = "",
  animate = true,
  variant = "black",
  size = "md",
}: LogoProps) {
  const { width, height } = sizeMap[size];
  const logoSrc =
    variant === "white"
      ? "/images/logo-white.svg"
      : "/images/logo-black.svg";

  const LogoImage = (
    <Image
      src={logoSrc}
      alt="NARCOTIC"
      width={width}
      height={height}
      className={`object-contain ${className}`}
      priority
    />
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {LogoImage}
      </motion.div>
    );
  }

  return LogoImage;
}
