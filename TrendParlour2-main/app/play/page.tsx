"use client";

import { useState } from "react";

export default function PlayPage() {
  const [secretNumber, setSecretNumber] = useState(
    Math.floor(Math.random() * 10) + 1
  );

  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState(
    "I'm thinking of a number between 1 and 10."
  );

  function checkGuess() {
    const number = Number(guess);

    if (number === secretNumber) {
      setMessage("🎉 Correct! You guessed it!");
    } else if (number < secretNumber) {
      setMessage("⬆️ Too low! Try again.");
    } else {
      setMessage("⬇️ Too high! Try again.");
    }
  }

  function newGame() {
    setSecretNumber(Math.floor(Math.random() * 10) + 1);
    setGuess("");
    setMessage("I'm thinking of a number between 1 and 10.");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#FAF9F6",
        fontFamily: "Arial",
      }}
    >
      <a
        href="/"
        style={{
          marginBottom: "2rem",
          textDecoration: "none",
          color: "#555",
        }}
      >
        ← Home
      </a>

      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        🎮 Guess My Number
      </h1>

      <p
        style={{
          fontSize: "1.3rem",
          marginBottom: "2rem",
        }}
      >
        {message}
      </p>

      <input
        type="number"
        min="1"
        max="10"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        style={{
          padding: "12px",
          fontSize: "1.2rem",
          width: "120px",
          textAlign: "center",
          borderRadius: "10px",
          marginBottom: "1rem",
        }}
      />

      <button
        onClick={checkGuess}
        style={{
          padding: "14px 30px",
          border: "none",
          borderRadius: "16px",
          background: "#8B5CF6",
          color: "white",
          fontSize: "1rem",
          cursor: "pointer",
          marginBottom: "1rem",
        }}
      >
        Guess
      </button>

      <button
        onClick={newGame}
        style={{
          padding: "12px 24px",
          border: "none",
          borderRadius: "16px",
          background: "#38BDF8",
          color: "white",
          cursor: "pointer",
        }}
      >
        New Game
      </button>
    </main>
  );
}