"use client";

import { useState } from "react";
import Link from "next/link";
import facts from "../data/facts";

export default function RandomFact() {
  const randomIndex = () => Math.floor(Math.random() * facts.length);

  const [index, setIndex] = useState(randomIndex());

const fact = facts[index];

  function newFact() {
  setIndex(randomIndex());
}

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "2rem",
      }}
    ><Link
  href="/"
  style={{
    position: "absolute",
    top: "30px",
    left: "30px",
    textDecoration: "none",
    fontSize: "1rem",
  }}
>
  ← Home
</Link>
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "2rem",
        }}
      >
        ✨ Surprise Me
      </h1>

      <div
        style={{
          maxWidth: "650px",
          padding: "2rem",
          border: "1px solid #ddd",
          borderRadius: "18px",
          textAlign: "center",
          fontSize: "1.4rem",
          marginBottom: "2rem",
          background: "white",
        }}
      >
        {fact}
      </div>

      <button
        onClick={newFact}
        style={{
          padding: "14px 26px",
          fontSize: "1rem",
          borderRadius: "12px",
          cursor: "pointer",
        }}
      >
        🎲 Another One
      </button>
    </main>
  );
}