"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";

const routes = ["/laugh", "/play", "/challenge", "/weird"];

export default function SurprisePage() {
  const router = useRouter();

  const handleSurprise = () => {
    const nextRoute = routes[Math.floor(Math.random() * routes.length)];
    router.push(nextRoute);
  };

  return (
    <PageLayout>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        style={{
          width: "100%",
          maxWidth: "560px",
          textAlign: "center",
        }}
      >
        <div style={{ textAlign: "left", marginBottom: "1.25rem" }}>
          <Link href="/" style={{ color: "#2563eb", textDecoration: "none" }}>
            ← Home
          </Link>
        </div>

        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "2.5rem",
            boxShadow: "0 16px 40px rgba(0,0,0,0.08)",
          }}
        >
          <p style={{ fontSize: "1rem", color: "#7c8ca3", marginBottom: "0.75rem" }}>
            ✨ Surprise Me
          </p>

          <h1 style={{ fontSize: "2.75rem", margin: "0 0 0.75rem", color: "#111827" }}>
            Surprise Me
          </h1>

          <p style={{ fontSize: "1.05rem", color: "#4b5563", marginBottom: "2rem" }}>
            Ready? We&apos;ll choose something fun.
          </p>

          <button
            onClick={handleSurprise}
            style={{
              padding: "16px 32px",
              background: "#38BDF8",
              color: "white",
              border: "none",
              borderRadius: "16px",
              fontSize: "1.1rem",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 12px 24px rgba(56, 189, 248, 0.25)",
            }}
          >
            🎲 Surprise Me
          </button>
        </div>
      </motion.div>
    </PageLayout>
  );
}