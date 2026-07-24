"use client";

import { motion } from "framer-motion";
import CuriosityButton from "./CuriosityButton";
import homeButtons from "../data/homeButtons";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#F8F7F2",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        style={{
          fontSize: "4rem",
          marginBottom: "1rem",
        }}
      >
        TrendParlour
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
        style={{
          fontSize: "1.5rem",
          color: "#555",
          marginBottom: "2rem",
        }}
      >
        What are you curious about today?
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.16, ease: "easeOut" }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "320px",
          marginTop: "2rem",
        }}
      >
        {homeButtons.map((button, index) => (
          <motion.div
            key={button.href}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, delay: 0.18 + index * 0.1, ease: "easeOut" }}
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
    </section>
  );
}