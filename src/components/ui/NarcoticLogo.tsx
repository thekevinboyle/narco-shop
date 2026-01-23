"use client";

import { motion } from "framer-motion";

interface NarcoticLogoProps {
  className?: string;
  variant?: "black" | "white" | "gray";
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  animate?: boolean;
}

export default function NarcoticLogo({
  className = "",
  variant = "black",
  size = "md",
  animate = false,
}: NarcoticLogoProps) {
  const colors = {
    black: "#000000",
    white: "#FFFFFF",
    gray: "#CCCCCC",
  };

  const sizes = {
    sm: { width: 120, height: 32 },
    md: { width: 200, height: 54 },
    lg: { width: 320, height: 86 },
    xl: { width: 480, height: 130 },
    hero: { width: 640, height: 172 },
  };

  const { width, height } = sizes[size];
  const fill = colors[variant];

  const LogoSVG = (
    <svg
      width={width}
      height={height}
      viewBox="0 0 640 172"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* NARCOTIC custom blackletter logo */}
      {/* N */}
      <path
        d="M0 16 L0 156 L8 172 L24 172 L24 60 L48 156 L56 172 L72 172 L72 16 L64 0 L48 0 L48 112 L24 16 L16 0 L0 0 L0 16Z"
        fill={fill}
      />
      {/* Decorative spikes on N */}
      <path d="M12 0 L12 -12 L20 0Z" fill={fill} />
      <path d="M52 0 L52 -12 L60 0Z" fill={fill} />
      <path d="M12 172 L12 184 L20 172Z" fill={fill} />
      <path d="M52 172 L52 184 L60 172Z" fill={fill} />

      {/* A */}
      <g transform="translate(80, 0)">
        <path
          d="M0 156 L0 172 L16 172 L16 100 L48 100 L48 172 L64 172 L64 156 L64 16 L56 0 L8 0 L0 16 L0 156Z M16 32 L16 72 L48 72 L48 32 L16 32Z"
          fill={fill}
        />
        <path d="M12 0 L12 -12 L20 0Z" fill={fill} />
        <path d="M44 0 L44 -12 L52 0Z" fill={fill} />
        <path d="M12 172 L12 184 L20 172Z" fill={fill} />
        <path d="M44 172 L44 184 L52 172Z" fill={fill} />
      </g>

      {/* R */}
      <g transform="translate(152, 0)">
        <path
          d="M0 16 L0 156 L8 172 L24 172 L24 100 L40 100 L56 156 L64 172 L80 172 L64 100 L72 88 L72 16 L64 0 L8 0 L0 16Z M24 32 L24 72 L48 72 L48 32 L24 32Z"
          fill={fill}
        />
        <path d="M12 0 L12 -12 L20 0Z" fill={fill} />
        <path d="M52 0 L52 -12 L60 0Z" fill={fill} />
        <path d="M12 172 L12 184 L20 172Z" fill={fill} />
        <path d="M68 172 L68 184 L76 172Z" fill={fill} />
      </g>

      {/* C */}
      <g transform="translate(240, 0)">
        <path
          d="M8 0 L0 16 L0 156 L8 172 L56 172 L64 156 L64 120 L48 120 L48 140 L24 140 L24 32 L48 32 L48 52 L64 52 L64 16 L56 0 L8 0Z"
          fill={fill}
        />
        <path d="M12 0 L12 -12 L20 0Z" fill={fill} />
        <path d="M44 0 L44 -12 L52 0Z" fill={fill} />
        <path d="M12 172 L12 184 L20 172Z" fill={fill} />
        <path d="M44 172 L44 184 L52 172Z" fill={fill} />
      </g>

      {/* O */}
      <g transform="translate(312, 0)">
        <path
          d="M8 0 L0 16 L0 156 L8 172 L56 172 L64 156 L64 16 L56 0 L8 0Z M24 32 L24 140 L40 140 L40 32 L24 32Z"
          fill={fill}
        />
        <path d="M12 0 L12 -12 L20 0Z" fill={fill} />
        <path d="M44 0 L44 -12 L52 0Z" fill={fill} />
        <path d="M12 172 L12 184 L20 172Z" fill={fill} />
        <path d="M44 172 L44 184 L52 172Z" fill={fill} />
      </g>

      {/* T */}
      <g transform="translate(384, 0)">
        <path
          d="M0 0 L0 32 L20 32 L20 156 L28 172 L44 172 L52 156 L52 32 L72 32 L72 0 L0 0Z"
          fill={fill}
        />
        <path d="M4 0 L4 -12 L12 0Z" fill={fill} />
        <path d="M32 0 L32 -12 L40 0Z" fill={fill} />
        <path d="M60 0 L60 -12 L68 0Z" fill={fill} />
        <path d="M32 172 L32 184 L40 172Z" fill={fill} />
      </g>

      {/* I */}
      <g transform="translate(464, 0)">
        <path
          d="M0 0 L0 32 L8 32 L8 140 L0 140 L0 172 L40 172 L40 140 L32 140 L32 32 L40 32 L40 0 L0 0Z"
          fill={fill}
        />
        <path d="M8 0 L8 -12 L16 0Z" fill={fill} />
        <path d="M24 0 L24 -12 L32 0Z" fill={fill} />
        <path d="M8 172 L8 184 L16 172Z" fill={fill} />
        <path d="M24 172 L24 184 L32 172Z" fill={fill} />
      </g>

      {/* C */}
      <g transform="translate(512, 0)">
        <path
          d="M8 0 L0 16 L0 156 L8 172 L56 172 L64 156 L64 120 L48 120 L48 140 L24 140 L24 32 L48 32 L48 52 L64 52 L64 16 L56 0 L8 0Z"
          fill={fill}
        />
        <path d="M12 0 L12 -12 L20 0Z" fill={fill} />
        <path d="M44 0 L44 -12 L52 0Z" fill={fill} />
        <path d="M12 172 L12 184 L20 172Z" fill={fill} />
        <path d="M44 172 L44 184 L52 172Z" fill={fill} />
      </g>
    </svg>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {LogoSVG}
      </motion.div>
    );
  }

  return LogoSVG;
}
