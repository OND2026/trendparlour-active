"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";
import PageTitle from "../components/PageTitle";

const routes = ["/laugh", "/play", "/challenge", "/weird"];
const experienceNames = ["Decision Wheel", "Coin Flip", "Random Compliment", "Weird Facts"];

export default function SurprisePage() {
  const router = useRouter();
  const [displayName, setDisplayName] = useState("Surprise Me");
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    if (!isSpinning) return undefined;

    let index = 0;
    const intervalId = window.setInterval(() => {
      index = (index + 1) % experienceNames.length;
      setDisplayName(experienceNames[index]);
    }, 100);

    const timeoutId = window.setTimeout(() => {
      window.clearInterval(intervalId);
      const nextRoute = routes[Math.floor(Math.random() * routes.length)];
      router.push(nextRoute);
    }, 2000);

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
    };
  }, [isSpinning, router]);

  const handleSurprise = () => {
    setDisplayName("Spinning...");
    setIsSpinning(true);
  };

  return (
    <PageLayout>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
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
          <PageTitle title="Surprise Me" subtitle="You never know what you'll discover." />

          <div
            style={{
              marginTop: "1.25rem",
              minHeight: "3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "#4C1D95",
            }}
          >
            {displayName}
          </div>

          <button
            onClick={handleSurprise}
            disabled={isSpinning}
            style={{
              padding: "16px 32px",
              background: "#38BDF8",
              color: "white",
              border: "none",
              borderRadius: "16px",
              fontSize: "1.1rem",
              fontWeight: 700,
              cursor: isSpinning ? "wait" : "pointer",
              boxShadow: "0 12px 24px rgba(56, 189, 248, 0.25)",
              marginTop: "1.25rem",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.22s ease, boxShadow 0.22s ease",
            }}
          >
            ✨ Surprise Me
          </button>
        </div>
      </motion.div>
    </PageLayout>
  );
}