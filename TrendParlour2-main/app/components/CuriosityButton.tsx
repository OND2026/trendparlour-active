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
      style={{ textDecoration: "none", display: "block", width: "100%" }}
    >
      <motion.span
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "14px 24px",
          borderRadius: "16px",
          border: "none",
          background: color,
          color: textColor,
          fontSize: "1rem",
          fontWeight: 600,
          cursor: "pointer",
          width: "100%",
          boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
        }}
        whileHover={{ scale: 1.02, boxShadow: "0 12px 24px rgba(0,0,0,0.14)" }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <span style={{ marginRight: "0.6rem", fontSize: "1.05rem" }}>{emoji}</span>
        <span>{text}</span>
      </motion.span>
    </motion.a>
  );
}