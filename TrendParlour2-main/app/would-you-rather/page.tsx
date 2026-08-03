"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import PageLayout from "../components/PageLayout";
import PageTitle from "../components/PageTitle";
import wouldYouRatherData from "../data/wouldYouRather";

type SelectedOption = "A" | "B" | null;

function getNextDilemma(history: number[]) {
  const recentIds = new Set(history.slice(-6));
  const pool = wouldYouRatherData.filter((dilemma) => !recentIds.has(dilemma.id));

  if (!pool.length) {
    return wouldYouRatherData[Math.floor(Math.random() * wouldYouRatherData.length)];
  }

  return pool[Math.floor(Math.random() * pool.length)];
}

const INITIAL_DILEMMA = wouldYouRatherData[0];

export default function WouldYouRatherPage() {
  const shouldReduceMotion = useReducedMotion();
  const [history, setHistory] = useState<number[]>([]);
  const [currentDilemma, setCurrentDilemma] = useState(INITIAL_DILEMMA);
  const [selectedOption, setSelectedOption] = useState<SelectedOption>(null);

  const handlePick = (option: "A" | "B") => {
    setSelectedOption(option);
  };

  useEffect(() => {
    setCurrentDilemma(getNextDilemma([]));
  }, []);

  const handleNext = () => {
    const nextHistory = [...history, currentDilemma.id].slice(-6);
    const nextDilemma = getNextDilemma(nextHistory);

    setHistory(nextHistory);
    setCurrentDilemma(nextDilemma);
    setSelectedOption(null);
  };

  const revealPercentage = currentDilemma.rareMoment ? 50 : selectedOption === "A" ? currentDilemma.percentageA : selectedOption === "B" ? currentDilemma.percentageB : null;
  const revealPercentageOther = currentDilemma.rareMoment ? 50 : selectedOption === "A" ? currentDilemma.percentageB : selectedOption === "B" ? currentDilemma.percentageA : null;

  return (
    <PageLayout>
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: "easeOut" }}
        style={{ width: "100%", maxWidth: "760px" }}
      >
        <div style={{ textAlign: "left", marginBottom: "1rem" }}>
          <Link href="/" style={{ color: "#4B5563", textDecoration: "none", fontWeight: 600 }}>
            ← Home
          </Link>
        </div>

        <div
          style={{
            background: "#FFFDF8",
            borderRadius: "28px",
            padding: "clamp(1.3rem, 3vw, 2rem)",
            boxShadow: "0 18px 42px rgba(15, 23, 42, 0.08)",
            border: "1px solid rgba(15, 23, 42, 0.05)",
          }}
        >
          <PageTitle
            title="Would You Rather"
            subtitle="A dilemma worth talking about after the screen goes dark."
          />

          <div style={{ display: "grid", gap: "1rem" }}>
            <motion.div
              key={currentDilemma.id}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: "easeOut" }}
              style={{
                padding: "clamp(1rem, 2.2vw, 1.25rem)",
                borderRadius: "22px",
                background: "rgba(255,255,255,0.92)",
                border: "1px solid rgba(15, 23, 42, 0.06)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem", gap: "0.75rem", flexWrap: "wrap" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    borderRadius: "999px",
                    padding: "0.4rem 0.7rem",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#7C3AED",
                    background: "rgba(124, 58, 237, 0.08)",
                  }}
                >
                  {currentDilemma.category}
                </span>
                <span style={{ color: "#6B7280", fontSize: "0.9rem" }}>
                  {currentDilemma.rareMoment ? "✨ Rare Moment" : "Choose one and see what the room thinks"}
                </span>
              </div>

              <h2 style={{ fontSize: "clamp(1.2rem, 2.2vw, 1.45rem)", lineHeight: 1.5, color: "#111827", margin: "0 0 1rem" }}>
                {currentDilemma.prompt}
              </h2>

              <div style={{ display: "grid", gap: "0.8rem" }}>
                <button
                  type="button"
                  onClick={() => handlePick("A")}
                  aria-pressed={selectedOption === "A"}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    borderRadius: "18px",
                    border: selectedOption === "A" ? "1px solid #1F2937" : "1px solid rgba(15, 23, 42, 0.1)",
                    background: selectedOption === "A" ? "#1F2937" : "#F9FAFB",
                    color: selectedOption === "A" ? "#FFF" : "#111827",
                    padding: "0.95rem 1rem",
                    fontSize: "1rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease",
                    boxShadow: selectedOption === "A" ? "0 10px 24px rgba(31, 41, 55, 0.16)" : "none",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <span style={{ fontSize: "1rem", fontWeight: 800 }}>A</span>
                    <span style={{ lineHeight: 1.45 }}>{currentDilemma.optionA}</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handlePick("B")}
                  aria-pressed={selectedOption === "B"}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    borderRadius: "18px",
                    border: selectedOption === "B" ? "1px solid #1F2937" : "1px solid rgba(15, 23, 42, 0.1)",
                    background: selectedOption === "B" ? "#1F2937" : "#F9FAFB",
                    color: selectedOption === "B" ? "#FFF" : "#111827",
                    padding: "0.95rem 1rem",
                    fontSize: "1rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease",
                    boxShadow: selectedOption === "B" ? "0 10px 24px rgba(31, 41, 55, 0.16)" : "none",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <span style={{ fontSize: "1rem", fontWeight: 800 }}>B</span>
                    <span style={{ lineHeight: 1.45 }}>{currentDilemma.optionB}</span>
                  </div>
                </button>
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              {selectedOption ? (
                <motion.div
                  key={`${currentDilemma.id}-${selectedOption}`}
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: "easeOut" }}
                  style={{
                    padding: "1rem 1.05rem",
                    borderRadius: "20px",
                    background: "rgba(124, 58, 237, 0.06)",
                    border: "1px solid rgba(124, 58, 237, 0.12)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.8rem", color: "#6D28D9", fontWeight: 700 }}>
                    {currentDilemma.rareMoment ? "✨ Rare Moment" : "💬 The room says"}
                  </div>

                  {currentDilemma.rareMoment ? (
                    <>
                      <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>
                        There is no popular answer.
                      </div>
                      <div style={{ fontSize: "0.95rem", color: "#4B5563", marginBottom: "0.8rem" }}>
                        50% / 50%
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={{ display: "grid", gap: "0.55rem", marginBottom: "0.9rem" }}>
                        <div>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem", color: "#374151", fontSize: "0.95rem", fontWeight: 600 }}>
                            <span>{currentDilemma.optionA}</span>
                            <span>{revealPercentage}%</span>
                          </div>
                          <div style={{ height: "0.6rem", borderRadius: "999px", background: "rgba(17, 24, 39, 0.08)", overflow: "hidden" }}>
                            <div style={{ width: `${revealPercentage}%`, height: "100%", borderRadius: "999px", background: "linear-gradient(90deg, #38BDF8 0%, #7C3AED 100%)" }} />
                          </div>
                        </div>
                        <div>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem", color: "#374151", fontSize: "0.95rem", fontWeight: 600 }}>
                            <span>{currentDilemma.optionB}</span>
                            <span>{revealPercentageOther}%</span>
                          </div>
                          <div style={{ height: "0.6rem", borderRadius: "999px", background: "rgba(17, 24, 39, 0.08)", overflow: "hidden" }}>
                            <div style={{ width: `${revealPercentageOther}%`, height: "100%", borderRadius: "999px", background: "linear-gradient(90deg, #F59E0B 0%, #EC4899 100%)" }} />
                          </div>
                        </div>
                      </div>

                      <div style={{ color: "#111827", fontSize: "0.95rem", lineHeight: 1.7 }}>
                        {currentDilemma.insight}
                      </div>
                    </>
                  )}
                </motion.div>
              ) : null}
            </AnimatePresence>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                type="button"
                onClick={handleNext}
                disabled={!selectedOption}
                style={{
                  border: "none",
                  borderRadius: "999px",
                  padding: "0.85rem 1.2rem",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  cursor: selectedOption ? "pointer" : "not-allowed",
                  background: selectedOption ? "#111827" : "rgba(17, 24, 39, 0.16)",
                  color: selectedOption ? "#FFF" : "#4B5563",
                  transition: "transform 0.18s ease, background 0.18s ease",
                }}
              >
                Next Dilemma
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </PageLayout>
  );
}
