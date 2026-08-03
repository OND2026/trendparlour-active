"use client";

import { motion, useReducedMotion } from "framer-motion";

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
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      style={{
        textDecoration: "none",
        display: "block",
        width: "100%",
        borderRadius: "16px",
        outline: "none",
      }}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.01, y: -1, boxShadow: "0 14px 28px rgba(0,0,0,0.14)" }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
      whileFocus={shouldReduceMotion ? undefined : { scale: 1.01, boxShadow: "0 0 0 3px rgba(31, 41, 55, 0.16), 0 14px 28px rgba(0,0,0,0.14)" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
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
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
      >
        <span style={{ marginRight: "0.6rem", fontSize: "1.05rem" }}>{emoji}</span>
        <span>{text}</span>
      </motion.span>
    </motion.a>
  );
}