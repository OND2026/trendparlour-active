import Link from "next/link";
import { Metadata } from "next";
import { getJournalEntriesByCategory, journalCategories, journalEntries } from "../data/journalEntries";

export const metadata: Metadata = {
  title: "Curiosity Journal | TrendParlour",
  description: "A playful journal of curious ideas, internet oddities, and small discoveries that connect back to TrendParlour’s playground experiences.",
  alternates: {
    canonical: "https://trendparlour.com/journal",
  },
  openGraph: {
    title: "Curiosity Journal | TrendParlour",
    description: "Explore thoughtful, playful articles that invite curiosity and connect readers to TrendParlour’s interactive experiences.",
    url: "https://trendparlour.com/journal",
    type: "website",
  },
};

export default function JournalPage() {
  const categoryCounts = journalCategories.map((category) => ({
    ...category,
    count: getJournalEntriesByCategory(category.slug).length,
  }));

  return (
    <main style={{ minHeight: "100vh", background: "#F8F7F2", color: "#1F2937" }}>
      <div style={{ maxWidth: "980px", margin: "0 auto", padding: "clamp(1rem, 3vw, 2rem)" }}>
        <nav style={{ marginBottom: "1rem" }}>
          <Link href="/" style={{ color: "#7A5D2E", textDecoration: "none", fontWeight: 700 }}>
            ← Back to TrendParlour
          </Link>
        </nav>

        <header style={{ marginBottom: "1.5rem" }}>
          <p style={{ margin: "0 0 0.45rem", color: "#7A5D2E", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Curiosity Journal
          </p>
          <h1 style={{ margin: "0 0 0.8rem", fontSize: "clamp(2rem, 4vw, 2.8rem)", lineHeight: 1.14, letterSpacing: "-0.025em" }}>
            Small discoveries, shared with a little delight.
          </h1>
          <p style={{ margin: 0, maxWidth: "720px", color: "#4B5563", fontSize: "clamp(0.95rem, 1.6vw, 1.05rem)", lineHeight: 1.7 }}>
            This journal is a growing archive of curious ideas, strange facts, and thoughtful observations that point readers toward playable experiences across TrendParlour.
          </p>
        </header>

        <section style={{ marginBottom: "1.4rem" }} aria-labelledby="journal-categories">
          <h2 id="journal-categories" style={{ margin: "0 0 0.7rem", fontSize: "1rem", color: "#1F2937" }}>
            Browse by category
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "0.75rem" }}>
            <Link
              href="/journal"
              style={{
                textDecoration: "none",
                color: "#1F2937",
                padding: "0.9rem",
                borderRadius: "18px",
                background: "#F1E4C9",
                border: "1px solid #E8D8BF",
                fontWeight: 700,
              }}
            >
              <div style={{ fontSize: "0.8rem", color: "#7A5D2E", marginBottom: "0.35rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                All entries
              </div>
              <div>Browse everything in the journal</div>
            </Link>
            {categoryCounts.map((category) => (
              <Link
                key={category.slug}
                href={`/journal/category/${category.slug}`}
                style={{
                  textDecoration: "none",
                  color: "#1F2937",
                  padding: "0.9rem",
                  borderRadius: "18px",
                  background: "#FFFDF8",
                  border: "1px solid #E7DDCF",
                }}
              >
                <div style={{ fontSize: "0.8rem", color: "#7A5D2E", marginBottom: "0.35rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {category.count} entries
                </div>
                <div style={{ fontWeight: 700, marginBottom: "0.3rem" }}>{category.label}</div>
                <div style={{ color: "#4B5563", lineHeight: 1.55, fontSize: "0.95rem" }}>{category.description}</div>
              </Link>
            ))}
          </div>
        </section>

        <section aria-labelledby="latest-journal-entries">
          <h2 id="latest-journal-entries" style={{ margin: "0 0 0.9rem", fontSize: "1.05rem", color: "#1F2937" }}>
            Latest entries
          </h2>
          <div style={{ display: "grid", gap: "0.8rem" }}>
            {journalEntries.map((entry) => (
              <article key={entry.slug} style={{ borderRadius: "20px", background: "#FFFDF8", border: "1px solid #E8DDCC", padding: "1rem" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem", alignItems: "center", marginBottom: "0.5rem" }}>
                  <Link href={`/journal/category/${entry.categorySlug}`} style={{ padding: "0.3rem 0.6rem", borderRadius: "999px", background: "#F7F1E8", color: "#7A5D2E", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}>
                    {entry.category}
                  </Link>
                  <span style={{ color: "#6B7280", fontSize: "0.83rem" }}>{entry.publishedAt}</span>
                  <span style={{ color: "#6B7280", fontSize: "0.83rem" }}>{entry.readingTime}</span>
                </div>
                <h3 style={{ margin: "0 0 0.4rem", fontSize: "1.1rem", lineHeight: 1.3 }}>
                  <Link href={`/journal/${entry.slug}`} style={{ color: "#1F2937", textDecoration: "none" }}>
                    {entry.title}
                  </Link>
                </h3>
                <p style={{ margin: "0 0 0.7rem", color: "#4B5563", lineHeight: 1.65 }}>{entry.excerpt}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  <Link href={`/journal/${entry.slug}`} style={{ textDecoration: "none", color: "#1F2937", fontWeight: 700 }}>
                    Read article →
                  </Link>
                  <Link href={entry.relatedExperience} style={{ textDecoration: "none", color: "#7A5D2E", fontWeight: 600 }}>
                    {entry.relatedExperienceLabel}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
