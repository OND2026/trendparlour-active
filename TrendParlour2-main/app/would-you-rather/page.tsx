"use client";

import Link from "next/link";
import PageLayout from "../components/PageLayout";
import PageTitle from "../components/PageTitle";
import WouldYouRatherExperience from "../components/WouldYouRatherExperience";

export default function WouldYouRatherPage() {
  return (
    <PageLayout>
      <div style={{ width: "100%", maxWidth: "760px", textAlign: "center" }}>
        <div style={{ textAlign: "left", marginBottom: "1rem" }}>
          <Link href="/" style={{ color: "#4B5563", textDecoration: "none", fontWeight: 600 }}>
            ← Back to TrendParlour
          </Link>
        </div>

        <PageTitle title="Would You Rather" subtitle="A tidy little dilemma machine for your next opinionated moment." />
        <WouldYouRatherExperience />
      </div>
    </PageLayout>
  );
}
