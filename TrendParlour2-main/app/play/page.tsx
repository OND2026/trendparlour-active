"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import PageLayout from "../components/PageLayout";
import PageTitle from "../components/PageTitle";

export default function PlayPage() {
  const [choices, setChoices] = useState("Pizza, Sushi, Burgers");
  const [result, setResult] = useState<string | null>(null);
  const [feedback, setFeedback] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);

  function spinWheel() {
    const options = choices
      .split(",")
      .map((option) => option.trim())
      .filter(Boolean);

    if (options.length < 2) {
      setResult(null);
      setFeedback("Please enter at least two choices so the wheel has something to pick from.");
      return;
    }

    setFeedback("");
    setResult(null);
    setIsSpinning(true);

    window.setTimeout(() => {
      const winner = options[Math.floor(Math.random() * options.length)];
      setResult(winner);
      setIsSpinning(false);
    }, 1000);
  }

  return (
    <PageLayout>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "680px",
          textAlign: "center",
        }}
      >
        <a
          href="/"
          style={{
            alignSelf: "flex-start",
            marginBottom: "1rem",
            textDecoration: "none",
            color: "#4B5563",
            fontWeight: 600,
          }}
        >
          ← Home
        </a>

        <PageTitle title="Decision Wheel" subtitle="Can't decide? Let the wheel choose." />

        <div
          style={{
            width: "100%",
            background: "#FFFDF8",
            borderRadius: "24px",
            padding: "clamp(1.25rem, 3vw, 2rem)",
            boxShadow: "0 14px 36px rgba(0, 0, 0, 0.07)",
          }}
        >
          <label
            htmlFor="choices"
            style={{
              display: "block",
              textAlign: "left",
              marginBottom: "0.75rem",
              fontWeight: 600,
              color: "#374151",
            }}
          >
            Enter your choices
          </label>

          <input
            id="choices"
            type="text"
            value={choices}
            onChange={(e) => setChoices(e.target.value)}
            placeholder="Pizza, Sushi, Burgers"
            style={{
              width: "100%",
              padding: "14px 16px",
              fontSize: "1rem",
              borderRadius: "12px",
              border: "1px solid #D1D5DB",
              marginBottom: "1rem",
              boxSizing: "border-box",
            }}
          />

          <button
            type="button"
            onClick={spinWheel}
            disabled={isSpinning}
            style={{
              width: "100%",
              padding: "15px 24px",
              border: "none",
              borderRadius: "16px",
              background: "#8B5CF6",
              color: "white",
              fontSize: "1rem",
              fontWeight: 700,
              cursor: isSpinning ? "wait" : "pointer",
              marginBottom: "1rem",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.22s ease, boxShadow 0.22s ease",
            }}
          >
            {isSpinning ? "Spinning..." : "Spin the Wheel"}
          </button>

          {feedback ? (
            <p style={{ marginBottom: "1rem", color: "#DC2626", fontWeight: 600 }}>
              {feedback}
            </p>
          ) : null}

          {result ? (
            <div
              style={{
                marginTop: "0.5rem",
                padding: "1rem",
                borderRadius: "16px",
                background: "#F5F3FF",
                color: "#4C1D95",
                fontWeight: 700,
              }}
            >
              <div style={{ marginBottom: "0.25rem" }}>🎉 The wheel chose:</div>
              <div style={{ fontSize: "1.2rem" }}>{result}</div>
            </div>
          ) : null}
        </div>
      </motion.div>
    </PageLayout>
  );
}