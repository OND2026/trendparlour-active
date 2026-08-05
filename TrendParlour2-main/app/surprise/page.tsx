"use client";

import Link from "next/link";
import PageLayout from "../components/PageLayout";
import PageTitle from "../components/PageTitle";
import SurpriseExperience from "../components/SurpriseExperience";

export default function SurprisePage() {
  return (
    <PageLayout>
      <div
        style={{
          width: "100%",
          maxWidth: "760px",
          textAlign: "center",
        }}
      >
        <div style={{ textAlign: "left", marginBottom: "1rem" }}>
          <Link href="/" style={{ color: "#4B5563", textDecoration: "none", fontWeight: 600 }}>
            ? Home
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
          <PageTitle title="Surprise Me" subtitle="A little spark of delight, on demand." />
          <div style={{ marginTop: "1.25rem" }}>
            <SurpriseExperience />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
