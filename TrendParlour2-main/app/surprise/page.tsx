"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import PageLayout from "../components/PageLayout";
import PageTitle from "../components/PageTitle";

const routes = ["/laugh", "/play", "/challenge", "/weird"];
const surpriseLabels: Record<string, string> = {
  "/laugh": "Make Me Laugh",
  "/play": "Decision Wheel",
  "/challenge": "Reaction Time",
  "/weird": "Blow My Mind",
};
const anticipationMessages = [
  "Searching the universe...",
  "Consulting the curiosity engine...",
  "Shaking the mystery box...",
  "Rolling cosmic dice...",
];

type SurprisePhase = "idle" | "anticipating" | "revealed";

export default function SurprisePage() {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const [displayName, setDisplayName] = useState("Surprise Me");
  const [phase, setPhase] = useState<SurprisePhase>("idle");
  const [isGenerating, setIsGenerating] = useState(false);
  const [lastRoute, setLastRoute] = useState<string | null>(null);
  const revealTimeoutRef = useRef<number | null>(null);
  const navigateTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (revealTimeoutRef.current !== null) {
        window.clearTimeout(revealTimeoutRef.current);
      }
      if (navigateTimeoutRef.current !== null) {
        window.clearTimeout(navigateTimeoutRef.current);
      }
    };
  }, []);

  const getNextRoute = (currentLastRoute: string | null) => {
    let nextRoute = routes[Math.floor(Math.random() * routes.length)];
    let attempts = 0;

    while (nextRoute === currentLastRoute && attempts < routes.length) {
      nextRoute = routes[Math.floor(Math.random() * routes.length)];
      attempts += 1;
    }

    return nextRoute;
  };

  const startSurprise = (nextRoute: string, shouldNavigate: boolean) => {
    if (revealTimeoutRef.current !== null) {
      window.clearTimeout(revealTimeoutRef.current);
    }
    if (navigateTimeoutRef.current !== null) {
      window.clearTimeout(navigateTimeoutRef.current);
    }

    const anticipation = anticipationMessages[Math.floor(Math.random() * anticipationMessages.length)];
    const revealDelay = shouldReduceMotion ? 250 : 900;

    setDisplayName(anticipation);
    setPhase("anticipating");
    setIsGenerating(true);

    revealTimeoutRef.current = window.setTimeout(() => {
      const revealedLabel = surpriseLabels[nextRoute] ?? "A new delight";
      setDisplayName(revealedLabel);
      setPhase("revealed");
      setIsGenerating(false);
      setLastRoute(nextRoute);

      if (shouldNavigate) {
        navigateTimeoutRef.current = window.setTimeout(() => {
          router.push(nextRoute);
        }, shouldReduceMotion ? 250 : 400);
      }
    }, revealDelay);
  };

  const handleSurprise = () => {
    const nextRoute = getNextRoute(lastRoute);
    startSurprise(nextRoute, true);
  };

  const handleTryAnother = () => {
    const nextRoute = getNextRoute(lastRoute);
    startSurprise(nextRoute, false);
  };

  return (
    <PageLayout>
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: "easeOut" }}
        style={{
          width: "100%",
          maxWidth: "680px",
          textAlign: "center",
        }}
      >
        <div style={{ textAlign: "left", marginBottom: "1rem" }}>
          <Link href="/" style={{ color: "#4B5563", textDecoration: "none", fontWeight: 600 }}>
            ← Home
          </Link>
        </div>

        <div
          style={{
            background: "#FFFDF8",
            borderRadius: "24px",
            padding: "clamp(1.25rem, 3vw, 2rem)",
            boxShadow: "0 14px 36px rgba(0, 0, 0, 0.07)",
          }}
        >
          <PageTitle title="Surprise Me" subtitle="A little spark of delight, on demand." />

          {phase === "idle" ? (
            <div style={{ marginTop: "1.75rem" }}>
              <button
                onClick={handleSurprise}
                style={{
                  padding: "15px 24px",
                  background: "#38BDF8",
                  color: "white",
                  border: "none",
                  borderRadius: "16px",
                  fontSize: "1rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.22s ease, boxShadow 0.22s ease",
                }}
              >
                ✨ Surprise Me
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem", marginTop: "1.4rem" }}>
              <motion.div
                key={displayName + phase}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: "easeOut" }}
                style={{
                  minHeight: "4.25rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1.2rem 1.25rem",
                  borderRadius: "20px",
                  background: "rgba(56, 189, 248, 0.08)",
                  color: "#4C1D95",
                  fontSize: "clamp(1rem, 2vw, 1.15rem)",
                  fontWeight: 700,
                  lineHeight: 1.5,
                  boxShadow: "0 10px 24px rgba(15, 23, 42, 0.06)",
                }}
              >
                {phase === "anticipating" ? (
                  <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                    <div style={{ display: "flex", gap: "0.3rem" }} aria-hidden="true">
                      {[0, 1, 2].map((dot) => (
                        <motion.span
                          key={dot}
                          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: [0.35, 1, 0.35], y: [0, -2, 0] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: dot * 0.12, ease: "easeInOut" }}
                          style={{
                            width: "0.5rem",
                            height: "0.5rem",
                            borderRadius: "999px",
                            background: "#38BDF8",
                            display: "inline-block",
                          }}
                        />
                      ))}
                    </div>
                    <span>{displayName}</span>
                  </div>
                ) : (
                  <div style={{ width: "100%", textAlign: "left" }}>
                    <div style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.18em", color: "#7C3AED", marginBottom: "0.45rem" }}>
                      💡 Did you know?
                    </div>
                    <div style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)", lineHeight: 1.65, color: "#111827" }}>
                      {displayName}
                    </div>
                  </div>
                )}
              </motion.div>

              {phase === "revealed" && (
                <button
                  onClick={handleTryAnother}
                  style={{
                    padding: "13px 20px",
                    background: "transparent",
                    color: "#4B5563",
                    border: "1px solid rgba(75, 85, 99, 0.2)",
                    borderRadius: "16px",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "transform 0.22s ease, boxShadow 0.22s ease",
                  }}
                >
                  Try Another
                </button>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </PageLayout>
  );
}