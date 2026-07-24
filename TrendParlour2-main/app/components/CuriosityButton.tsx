"use client";

import { motion } from "framer-motion";

type CuriosityButtonProps = {
  href: string;
  color: string;
  textColor?: string;
  emoji: string;
  text: string;
};

export default function CuriosityButton({
  href,
  color,
  textColor = "white",
  emoji,
  text,
}: CuriosityButtonProps) {
  return (
    <motion.a
      href={href}
      style={{ textDecoration: "none", display: "block" }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
    >
      <button
        type="button"
        style={{
          padding: "14px 28px",
          borderRadius: "16px",
          border: "none",
          background: color,
          color: textColor,
          fontSize: "1rem",
          fontWeight: 600,
          cursor: "pointer",
          marginBottom: "12px",
          width: "260px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
        }}
      >
        {emoji} {text}
      </button>
    </motion.a>
  );
}