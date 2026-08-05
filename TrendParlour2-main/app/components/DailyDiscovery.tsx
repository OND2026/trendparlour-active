"use client";

import { useEffect, useMemo, useState } from "react";
import dailyDiscoveries, { type DailyDiscoveryItem } from "../data/dailyDiscoveries";

function getDaysSinceEpoch(date: Date) {
  const start = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const epoch = new Date(Date.UTC(1970, 0, 1));
  return Math.floor((start.getTime() - epoch.getTime()) / 86400000);
}

function getDiscoveryForDate(date: Date) {
  const index = getDaysSinceEpoch(date) % dailyDiscoveries.length;
  return dailyDiscoveries[index];
}

function getTimeUntilLocalMidnight() {
  const now = new Date();
  const nextMidnight = new Date(now);
  nextMidnight.setHours(24, 0, 0, 0);
  return Math.max(0, nextMidnight.getTime() - now.getTime());
}

function formatTime(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

export default function DailyDiscovery() {
  const [discovery, setDiscovery] = useState<DailyDiscoveryItem | null>(null);
  const [timeLeft, setTimeLeft] = useState(() => getTimeUntilLocalMidnight());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const initialDiscovery = getDiscoveryForDate(new Date());
    setDiscovery(initialDiscovery);
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!discovery) {
      return;
    }

    const currentDayKey = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`;
    const timer = window.setInterval(() => {
      const now = new Date();
      const nextDayKey = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;

      if (currentDayKey !== nextDayKey) {
        setIsVisible(false);
        window.setTimeout(() => {
          setDiscovery(getDiscoveryForDate(now));
          setTimeLeft(getTimeUntilLocalMidnight());
          setIsVisible(true);
        }, 180);
      } else {
        setTimeLeft(getTimeUntilLocalMidnight());
      }
    }, 1000);

    return () => window.clearInterval(timer);
  }, [discovery]);

  const currentDiscovery = useMemo(() => discovery, [discovery]);

  if (!currentDiscovery) {
    return null;
  }

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
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.8rem",
          marginBottom: "1.05rem",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.45rem",
            padding: "0.38rem 0.75rem",
            borderRadius: "999px",
            background: "#F1E4C9",
            color: "#7A5D2E",
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <span aria-hidden="true">🌟</span>
          Daily Discovery
        </div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.45rem",
            padding: "0.38rem 0.75rem",
            borderRadius: "999px",
            background: "#FFFDF8",
            border: "1px solid #EDE3D8",
            color: "#6B7280",
            fontSize: "0.84rem",
            fontWeight: 600,
          }}
        >
          <span aria-hidden="true">⏰</span>
          <span>Next discovery in {formatTime(timeLeft)}</span>
        </div>
      </div>

      <div
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "0.85rem",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.6rem" }}>
          <div style={{ fontSize: "clamp(2.1rem, 4vw, 2.8rem)" }} aria-hidden="true">
            {currentDiscovery.emoji}
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              padding: "0.32rem 0.7rem",
              borderRadius: "999px",
              background: "#FFFDF8",
              border: "1px solid #EDE3D8",
              color: "#6B7280",
              fontSize: "0.78rem",
              fontWeight: 600,
            }}
          >
            <span aria-hidden="true">{currentDiscovery.emoji}</span>
            {currentDiscovery.category}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem", width: "100%" }}>
          <h3
            style={{
              margin: 0,
              fontSize: "clamp(1.2rem, 2.2vw, 1.5rem)",
              lineHeight: 1.2,
              color: "#1F2937",
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            {currentDiscovery.title}
          </h3>

          <p
            style={{
              margin: 0,
              color: "#4B5563",
              lineHeight: 1.7,
              fontSize: "0.95rem",
              maxWidth: "620px",
            }}
          >
            {currentDiscovery.description}
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: "1.05rem",
          fontSize: "0.9rem",
          color: "#7A7A72",
          letterSpacing: "0.01em",
        }}
      >
        Come back tomorrow for another discovery.
      </div>
    </section>
  );
}
