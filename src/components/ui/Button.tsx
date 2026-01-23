"use client";

import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "inactive";

interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  disabled,
  onClick,
  type = "button",
}: ButtonProps) {
  const isInactive = variant === "inactive" || disabled;

  return (
    <motion.button
      type={type}
      whileHover={isInactive ? {} : { scale: 1.02 }}
      whileTap={isInactive ? {} : { scale: 0.98 }}
      className={`btn btn-${isInactive ? "inactive" : variant} ${className}`}
      disabled={isInactive}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
