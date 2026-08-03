"use client";

import { motion, useReducedMotion } from "framer-motion";
import CuriosityButton from "./CuriosityButton";
import homeButtons from "../data/homeButtons";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#F8F7F2",
        padding: "2rem 1.5rem 1.25rem",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          padding: "clamp(1rem, 4vw, 2rem) 0",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          style={{
            maxWidth: "760px",
            width: "100%",
            marginBottom: "clamp(2rem, 4.5vw, 3rem)",
          }}
        >
          <motion.h1
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.45, ease: "easeOut" }}
            style={{
              fontSize: "clamp(2.75rem, 6.5vw, 4.75rem)",
              marginBottom: "0.85rem",
              lineHeight: 1.08,
              color: "#1F2937",
              letterSpacing: "-0.03em",
            }}
          >
            TrendParlour
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.45, delay: 0.08, ease: "easeOut" }}
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
              color: "#6B7280",
              marginBottom: "0.75rem",
              lineHeight: 1.6,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Tiny surprises. Big curiosity.
          </motion.p>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.45, delay: 0.12, ease: "easeOut" }}
            style={{
              margin: "0 auto",
              maxWidth: "620px",
              color: "#4B5563",
              fontSize: "clamp(0.95rem, 1.6vw, 1.05rem)",
              lineHeight: 1.7,
            }}
          >
            A playful corner of the internet filled with unexpected discoveries, quick games, weird facts, and delightful distractions.
          </motion.p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.45, delay: 0.16, ease: "easeOut" }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.85rem",
            width: "min(100%, 320px)",
            marginTop: "0.25rem",
          }}
        >
          {homeButtons.map((button, index) => (
            <motion.div
              key={button.href}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.28, delay: 0.18 + index * 0.1, ease: "easeOut" }}
            >
              <CuriosityButton
                href={button.href}
                color={button.color}
                textColor={button.textColor}
                emoji={button.emoji}
                text={button.text}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <footer
        style={{
          marginTop: "2rem",
          textAlign: "center",
          color: "#7A7A72",
          fontSize: "0.95rem",
          lineHeight: 1.6,
          letterSpacing: "0.02em",
          paddingBottom: "0.5rem",
        }}
      >
        <div>Stay Curious. Stay Playful.</div>
        <div>© 2026 TrendParlour</div>
      </footer>
    </section>
  );
}