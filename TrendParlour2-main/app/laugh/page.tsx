"use client";

import { useState } from "react";
import Link from "next/link";
import PageLayout from "../components/PageLayout";
import PageTitle from "../components/PageTitle";

const compliments = [
  "You have excellent taste.",
  "You’re more capable than you realize.",
  "Someone is grateful you exist.",
  "Your curiosity is one of your strengths.",
  "You bring warmth to the people around you.",
  "You make ordinary moments feel special.",
  "Your kindness stands out more than you think.",
  "You have a wonderfully thoughtful way of seeing things.",
  "You inspire calm and confidence in others.",
  "Your presence makes a room feel lighter.",
  "You are genuinely thoughtful and memorable.",
  "You have a beautiful way of being yourself.",
  "Your ideas are more interesting than you give them credit for.",
  "You deserve to feel proud of yourself today.",
  "Your energy has a quiet magic to it.",
  "You bring a little extra light wherever you go.",
  "You are wonderfully genuine.",
  "Your effort and heart are noticed.",
  "You have a rare and lovely sense of character.",
  "You are doing better than you think.",
  "You make the world feel a bit brighter.",
];

export default function LaughPage() {
  const [compliment, setCompliment] = useState(compliments[0]);

  const pickCompliment = () => {
    const nextIndex = Math.floor(Math.random() * compliments.length);
    setCompliment((current) => {
      if (compliments[nextIndex] === current) {
        return compliments[(nextIndex + 1) % compliments.length];
      }
      return compliments[nextIndex];
    });
  };

  return (
    <PageLayout>
      <div
        style={{
          textAlign: "center",
          maxWidth: "700px",
          padding: "2rem",
        }}
      >
        <Link href="/">← Home</Link>

        <PageTitle
          title="Random Compliment"
          subtitle="A tiny confidence boost."
          titleStyle={{ fontSize: "3rem", marginTop: "1rem" }}
          subtitleStyle={{ fontSize: "1.05rem", color: "#6B7280" }}
        />

        <div
          style={{
            background: "white",
            padding: "2rem",
            borderRadius: "16px",
            marginTop: "2rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            fontSize: "1.4rem",
            lineHeight: "1.7",
            color: "#374151",
          }}
        >
          {compliment}
        </div>

        <button
          onClick={pickCompliment}
          style={{
            marginTop: "2rem",
            padding: "14px 28px",
            background: "#7ED957",
            color: "white",
            border: "none",
            borderRadius: "14px",
            fontSize: "1rem",
            cursor: "pointer",
            fontWeight: 700,
          }}
        >
          Give Me Another
        </button>
      </div>
    </PageLayout>
  );
}