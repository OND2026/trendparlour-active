"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import CuriosityButton from "./CuriosityButton";
import DailyDiscovery from "./DailyDiscovery";
import SupportTrendParlour from "./SupportTrendParlour";
import WelcomeBubble from "./WelcomeBubble";
import homeButtons from "../data/homeButtons";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [focusedButton, setFocusedButton] = useState<number | null>(null);
  const heroButtons = [
    homeButtons[0],
    { ...homeButtons[1], emoji: "🧠", text: "Curiosity Ladder" },
    ...homeButtons.slice(2),
  ];

  return (
    <section
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        background: "#F8F7F2",
        padding: "1rem 1rem 1.25rem",
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
          padding: "clamp(0.4rem, 2vw, 1rem) 0 0",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          style={{
            maxWidth: "760px",
            width: "100%",
            marginBottom: "clamp(1.2rem, 3vw, 1.8rem)",
          }}
        >
          <motion.h1
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.45, ease: "easeOut" }}
            style={{
              fontSize: "clamp(2.45rem, 6vw, 4.2rem)",
              marginBottom: "0.6rem",
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
              fontSize: "clamp(0.86rem, 1.55vw, 1rem)",
              color: "#6B7280",
              marginBottom: "0.55rem",
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
              fontSize: "clamp(0.92rem, 1.55vw, 1rem)",
              lineHeight: 1.65,
            }}
          >
            A playful corner of the internet filled with unexpected discoveries, quick games, weird facts, and delightful distractions.
          </motion.p>
        </motion.div>

        <WelcomeBubble />

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.45, delay: 0.16, ease: "easeOut" }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.7rem",
            width: "min(100%, 340px)",
            marginTop: "0.2rem",
          }}
        >
          {heroButtons.map((button, index) => (
            <motion.div
              key={button.href}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.28, delay: 0.18 + index * 0.1, ease: "easeOut" }}
              whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.01, boxShadow: "0 12px 24px rgba(0,0,0,0.12)" }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.985, y: 0 }}
              onFocusCapture={() => setFocusedButton(index)}
              onBlurCapture={() => setFocusedButton((current) => (current === index ? null : current))}
              style={{
                width: "100%",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: focusedButton === index ? "0 0 0 3px rgba(31, 41, 55, 0.16), 0 10px 24px rgba(0,0,0,0.12)" : "0 7px 14px rgba(0,0,0,0.08)",
                transition: "box-shadow 0.24s ease, transform 0.24s ease",
              }}
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

        <SupportTrendParlour />
        <DailyDiscovery />
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