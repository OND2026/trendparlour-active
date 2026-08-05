"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import surpriseCategories, { type SurpriseCategory, type SurpriseDiscovery } from "../data/surpriseDiscoveries";

type SurprisePhase = "idle" | "loading" | "revealed";

const loadingMessages = [
  "Searching...",
  "Opening tiny door...",
  "Consulting the curiosity goblin...",
  "Shuffling the universe...",
  "Polishing a tiny surprise...",
];

function pickCategory(previousCategoryId: string | null, previousDiscoveryId: number | null) {
  const availableCategories = surpriseCategories.filter((category) => category.id !== previousCategoryId);
  const category = availableCategories[Math.floor(Math.random() * availableCategories.length)] ?? surpriseCategories[0];
  const categoryDiscoveries = category.discoveries.filter((discovery) => discovery.id !== previousDiscoveryId);

  if (categoryDiscoveries.length === 0) {
    return { category, discovery: category.discoveries[0] };
  }

  const discovery = categoryDiscoveries[Math.floor(Math.random() * categoryDiscoveries.length)];
  return { category, discovery };
}

function getStoredCount() {
  if (typeof window === "undefined") {
    return 0;
  }

  const stored = window.localStorage.getItem("trendparlour-surprise-count");
  const parsed = Number(stored);
  return Number.isFinite(parsed) ? parsed : 0;
}

export default function SurpriseExperience() {
  const [phase, setPhase] = useState<SurprisePhase>("idle");
  const [currentCategory, setCurrentCategory] = useState<SurpriseCategory | null>(null);
  const [currentDiscovery, setCurrentDiscovery] = useState<SurpriseDiscovery | null>(null);
  const [loadingMessage, setLoadingMessage] = useState(loadingMessages[0]);
  const [previousCategoryId, setPreviousCategoryId] = useState<string | null>(null);
  const [previousDiscoveryId, setPreviousDiscoveryId] = useState<number | null>(null);
  const [surpriseCount, setSurpriseCount] = useState(0);
  const [celebration, setCelebration] = useState<string | null>(null);
  const revealTimeoutRef = useRef<number | null>(null);

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

  const revealSurprise = () => {
    if (revealTimeoutRef.current !== null) {
      window.clearTimeout(revealTimeoutRef.current);
    }

    const picked = pickCategory(previousCategoryId, previousDiscoveryId);

    setPhase("loading");
    setLoadingMessage(loadingMessages[Math.floor(Math.random() * loadingMessages.length)]);
    setCurrentCategory(picked.category);
    setCurrentDiscovery(picked.discovery);
    setCelebration(null);

    revealTimeoutRef.current = window.setTimeout(() => {
      setPreviousCategoryId(picked.category.id);
      setPreviousDiscoveryId(picked.discovery.id);
      setSurpriseCount((current) => {
        const next = current + 1;
        window.localStorage.setItem("trendparlour-surprise-count", String(next));
        return next;
      });
      setPhase("revealed");
    }, 700);
  };

  useEffect(() => {
    setSurpriseCount(getStoredCount());
  }, []);

  useEffect(() => {
    revealSurprise();
  }, []);

  useEffect(() => {
    if (surpriseCount === 0) {
      return;
    }

    const milestones = [10, 25, 50, 100];
    if (milestones.includes(surpriseCount)) {
      setCelebration("✨ Curiosity Level Up!");
    }
  }, [surpriseCount]);

  const content = useMemo(() => ({
    category: currentCategory,
    discovery: currentDiscovery,
  }), [currentCategory, currentDiscovery]);

  const revealVisible = phase === "revealed" && Boolean(content.category && content.discovery);

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
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              width: "fit-content",
              padding: "0.35rem 0.7rem",
              borderRadius: "999px",
              background: "#F1E4C9",
              color: "#7A5D2E",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <span aria-hidden="true">🎁</span>
            Surprise Me
          </div>
          <h3
            style={{
              margin: 0,
              fontSize: "clamp(1.25rem, 2.2vw, 1.45rem)",
              lineHeight: 1.2,
              color: "#1F2937",
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            Open a fresh mystery every time.
          </h3>
          <p
            style={{
              margin: 0,
              color: "#4B5563",
              lineHeight: 1.65,
              fontSize: "0.95rem",
              maxWidth: "620px",
            }}
          >
            A calm, local-first reveal of tiny wonders chosen from a growing library of curiosity.
          </p>
        </div>

        <div
          style={{
            borderRadius: "20px",
            background: "#FFFDF8",
            border: "1px solid #EDE3D8",
            padding: "clamp(1rem, 2vw, 1.2rem)",
            minHeight: "220px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "0.7rem",
          }}
        >
          {phase === "loading" ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              <div style={{ fontSize: "1.25rem" }} aria-hidden="true">
                ✨
              </div>
              <div style={{ fontSize: "0.95rem", color: "#6B7280", fontWeight: 600 }}>
                {loadingMessage}
              </div>
            </div>
          ) : content.category && content.discovery ? (
            <div
              key={`${content.category.id}-${content.discovery.id}`}
              style={{
                opacity: revealVisible ? 1 : 0,
                transform: revealVisible ? "scale(1)" : "scale(0.98)",
                transition: "opacity 0.24s ease, transform 0.24s ease",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.6rem" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.32rem 0.7rem",
                    borderRadius: "999px",
                    background: "#F1E4C9",
                    color: "#7A5D2E",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                  }}
                >
                  <span aria-hidden="true">{content.category.emoji}</span>
                  {content.category.name}
                </div>
                <div style={{ fontSize: "0.85rem", color: "#6B7280" }}>
                  {content.category.description}
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <h4
                  style={{
                    margin: 0,
                    fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)",
                    lineHeight: 1.25,
                    color: "#1F2937",
                    fontWeight: 700,
                  }}
                >
                  {content.discovery.title}
                </h4>
                <p
                  style={{
                    margin: 0,
                    color: "#4B5563",
                    lineHeight: 1.7,
                    fontSize: "0.95rem",
                  }}
                >
                  {content.discovery.content}
                </p>
              </div>

              {content.discovery.link ? (
                <a
                  href={content.discovery.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#6B7280",
                    textDecoration: "underline",
                    textUnderlineOffset: "0.2rem",
                    fontSize: "0.9rem",
                    width: "fit-content",
                  }}
                >
                  Open link
                </a>
              ) : null}
            </div>
          ) : null}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
          {celebration ? (
            <div style={{ fontSize: "0.9rem", color: "#7A5D2E", fontWeight: 600 }}>
              {celebration}
            </div>
          ) : null}
          <div style={{ fontSize: "0.9rem", color: "#6B7280" }}>
            You&apos;ve discovered {surpriseCount} surprises.
          </div>
          <button
            type="button"
            onClick={revealSurprise}
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
            Surprise Me Again
          </button>
        </div>
      </div>
    </section>
  );
}
