"use client";

import { useState } from "react";
import Link from "next/link";

const jokes = [
  "Why don't skeletons fight each other? They don't have the guts.",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "Why can't bicycles stand on their own? They are two tired.",
  "Why did the computer go to therapy? It had too many bytes from the past.",
  "What do you call fake spaghetti? An impasta.",
  "Why did the coffee file a police report? It got mugged.",
  "Why was the math book sad? It had too many problems.",
];

export default function LaughPage() {
  const randomJoke = () => jokes[Math.floor(Math.random() * jokes.length)];

  const [joke, setJoke] = useState(randomJoke());

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f8f9fa",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "700px",
          padding: "2rem",
        }}
      >
        <Link href="/">← Home</Link>

        <h1 style={{ fontSize: "3rem", marginTop: "1rem" }}>
          😂 Make Me Laugh
        </h1>

        <div
          style={{
            background: "white",
            padding: "2rem",
            borderRadius: "16px",
            marginTop: "2rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            fontSize: "1.4rem",
            lineHeight: "1.7",
          }}
        >
          {joke}
        </div>

        <button
          onClick={() => setJoke(randomJoke())}
          style={{
            marginTop: "2rem",
            padding: "14px 28px",
            background: "#7ED957",
            color: "white",
            border: "none",
            borderRadius: "14px",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          😂 Another Joke
        </button>
      </div>
    </main>
  );
}