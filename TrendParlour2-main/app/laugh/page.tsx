"use client";

import Link from "next/link";
import PageLayout from "../components/PageLayout";
import PageTitle from "../components/PageTitle";
import LaughExperience from "../components/LaughExperience";

export default function LaughPage() {
  return (
    <PageLayout>
      <div style={{ width: "100%", maxWidth: "760px", textAlign: "center" }}>
        <div style={{ textAlign: "left", marginBottom: "1rem" }}>
          <Link href="/" style={{ color: "#4B5563", textDecoration: "none", fontWeight: 600 }}>
            ? Back to TrendParlour
          </Link>
        </div>

        <PageTitle title="Make Me Laugh" subtitle="A tidy little joke machine for your next smile." />
        <LaughExperience />
      </div>
    </PageLayout>
  );
}
