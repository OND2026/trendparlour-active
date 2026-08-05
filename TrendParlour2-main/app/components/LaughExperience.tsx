"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import laughJokes from "../data/laughJokes";

const loadingMessages = [
  "Tickling the internet...",
  "Consulting professional dads...",
  "Borrowing a joke from a penguin...",
  "Asking the office plant...",
  "Warming up the punchline...",
];

type LaughPhase = "idle" | "loading" | "revealed";

function getStoredCount() {
  if (typeof window === "undefined") {
    return 0;
  }

  const stored = window.localStorage.getItem("trendparlour-laugh-count");
  const parsed = Number(stored);
  return Number.isFinite(parsed) ? parsed : 0;
}

function getNextJoke(previousJokeId: number | null) {
  const available = laughJokes.filter((joke) => joke.id !== previousJokeId);
  const next = available[Math.floor(Math.random() * available.length)] ?? laughJokes[0];
  return next;
}

export default function LaughExperience() {
  const shouldReduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<LaughPhase>("idle");
  const [currentJoke, setCurrentJoke] = useState(laughJokes[0]);
  const [loadingMessage, setLoadingMessage] = useState(loadingMessages[0]);
  const [previousJokeId, setPreviousJokeId] = useState<number | null>(null);
  const [laughCount, setLaughCount] = useState(0);
  const [celebration, setCelebration] = useState<string | null>(null);
  const revealTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    setLaughCount(getStoredCount());
  }, []);

  useEffect(() => {
    if (phase !== "loading") {
      return;
    }

    const interval = window.setInterval(() => {
      setLoadingMessage((current) => {
        const nextIndex = loadingMessages.indexOf(current) + 1;
        return loadingMessages[nextIndex] ?? loadingMessages[0];
      });
    }, 650);

    return () => window.clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    return () => {
      if (revealTimeoutRef.current !== null) {
        window.clearTimeout(revealTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (laughCount === 0) {
      return;
    }

    const milestones = [10, 25, 50, 100, 200];
    if (milestones.includes(laughCount)) {
      setCelebration("✨ Laugh milestone unlocked!");
    }
  }, [laughCount]);

  const revealJoke = () => {
    if (revealTimeoutRef.current !== null) {
      window.clearTimeout(revealTimeoutRef.current);
    }

    const nextJoke = getNextJoke(previousJokeId);

    setPhase("loading");
    setLoadingMessage(loadingMessages[Math.floor(Math.random() * loadingMessages.length)]);
    setCelebration(null);

    revealTimeoutRef.current = window.setTimeout(() => {
      setCurrentJoke(nextJoke);
      setPreviousJokeId(nextJoke.id);
      setLaughCount((current) => {
        const next = current + 1;
        window.localStorage.setItem("trendparlour-laugh-count", String(next));
        return next;
      });
      setPhase("revealed");
    }, 700);
  };

  useEffect(() => {
    revealJoke();
  }, []);

  return (
    <section
      style={{
        width: "min(100%, 760px)",
        margin: "1.4rem auto 0",
        padding: "clamp(1rem, 2.4vw, 1.35rem)",
        borderRadius: "24px",
        background: "#F7F1E8",
        border: "1px solid #E8DDCC",
        boxShadow: "0 10px 24px rgba(31, 41, 55, 0.05)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "0.95rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", width: "fit-content", padding: "0.35rem 0.7rem", borderRadius: "999px", background: "#F1E4C9", color: "#7A5D2E", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <span aria-hidden="true">😂</span>
            Laugh Track
          </div>
          <h3 style={{ margin: 0, fontSize: "clamp(1.25rem, 2.2vw, 1.45rem)", lineHeight: 1.2, color: "#1F2937", letterSpacing: "-0.02em", fontWeight: 700 }}>
            One playful joke at a time.
          </h3>
          <p style={{ margin: 0, color: "#4B5563", lineHeight: 1.65, fontSize: "0.95rem", maxWidth: "620px" }}>
            A calm, clean little laugh machine built for quick smiles and repeat visits.
          </p>
        </div>

        <motion.div
          key={currentJoke.id}
          initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: "easeOut" }}
          style={{
            borderRadius: "20px",
            background: "#FFFDF8",
            border: "1px solid #EDE3D8",
            padding: "clamp(1rem, 2vw, 1.2rem)",
            minHeight: "220px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {phase === "loading" ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.7rem" }}>
              <div style={{ fontSize: "1.25rem" }} aria-hidden="true">
                ✨
              </div>
              <div style={{ fontSize: "0.95rem", color: "#6B7280", fontWeight: 600 }}>
                {loadingMessage}
              </div>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              <div style={{ fontSize: "1.02rem", lineHeight: 1.75, color: "#374151", fontWeight: 600 }}>
                {currentJoke.text}
              </div>
            </div>
          )}
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
          {celebration ? (
            <div style={{ fontSize: "0.9rem", color: "#7A5D2E", fontWeight: 600 }}>
              {celebration}
            </div>
          ) : null}
          <div style={{ fontSize: "0.9rem", color: "#6B7280" }}>
            You&apos;ve laughed at {laughCount} jokes.
          </div>
          <button
            type="button"
            onClick={revealJoke}
            style={{
              alignSelf: "flex-start",
              border: "1px solid #E4D8C5",
              borderRadius: "999px",
              background: "#F7F1E8",
              color: "#1F2937",
              padding: "0.72rem 1rem",
              fontSize: "0.92rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            Tell Me Another 😂
          </button>
        </div>
      </div>
    </section>
  );
}
