import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getJournalCategoryBySlug, getJournalEntriesByCategory, journalCategories } from "../../../data/journalEntries";

type JournalCategoryPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return journalCategories.map((category) => ({ slug: category.slug }));
}

export function generateMetadata({ params }: JournalCategoryPageProps): Metadata {
  const category = getJournalCategoryBySlug(params.slug);

  if (!category) {
    return {
      title: "Journal Category | TrendParlour",
      description: "Browse curiosity journal entries by category.",
    };
  }

  return {
    title: `${category.label} | TrendParlour Journal`,
    description: category.description,
    alternates: {
      canonical: `https://trendparlour.com/journal/category/${category.slug}`,
    },
    openGraph: {
      title: `${category.label} | TrendParlour Journal`,
      description: category.description,
      url: `https://trendparlour.com/journal/category/${category.slug}`,
      type: "website",
    },
  };
}

export default function JournalCategoryPage({ params }: JournalCategoryPageProps) {
  const category = getJournalCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  const entries = getJournalEntriesByCategory(category.slug);

  return (
    <main style={{ minHeight: "100vh", background: "#F8F7F2", color: "#1F2937" }}>
      <div style={{ maxWidth: "980px", margin: "0 auto", padding: "clamp(1rem, 3vw, 2rem)" }}>
        <nav style={{ marginBottom: "1rem", display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
          <Link
            href="/"
            style={{
              color: "#7A5D2E",
              textDecoration: "none",
              fontWeight: 700,
              border: "1px solid #E8DDCC",
              background: "#FFFDF8",
              borderRadius: "999px",
              padding: "0.42rem 0.72rem",
              display: "inline-flex",
            }}
          >
            ← Back to TrendParlour
          </Link>
          <Link href="/journal" style={{ color: "#7A5D2E", textDecoration: "none", fontWeight: 700 }}>
            Back to Curiosity Journal
          </Link>
        </nav>

        <header style={{ marginBottom: "1.2rem" }}>
          <p style={{ margin: "0 0 0.4rem", color: "#7A5D2E", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Category
          </p>
          <h1 style={{ margin: "0 0 0.7rem", fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", lineHeight: 1.16, letterSpacing: "-0.025em" }}>
            {category.label}
          </h1>
          <p style={{ margin: 0, maxWidth: "720px", color: "#4B5563", lineHeight: 1.7 }}>{category.description}</p>
        </header>

        <section style={{ marginBottom: "1.1rem" }} aria-label="Other categories">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem" }}>
            {journalCategories.map((item) => (
              <Link
                key={item.slug}
                href={`/journal/category/${item.slug}`}
                style={{
                  textDecoration: "none",
                  color: item.slug === category.slug ? "#1F2937" : "#4B5563",
                  padding: "0.45rem 0.7rem",
                  borderRadius: "999px",
                  background: item.slug === category.slug ? "#F1E4C9" : "#FFFDF8",
                  border: "1px solid #E7DDCF",
                  fontSize: "0.9rem",
                  fontWeight: item.slug === category.slug ? 700 : 500,
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>

        <div style={{ display: "grid", gap: "0.8rem" }}>
          {entries.map((entry) => (
            <article key={entry.slug} style={{ borderRadius: "20px", background: "#FFFDF8", border: "1px solid #E8DDCC", padding: "1rem" }}>
              <h2 style={{ margin: "0 0 0.35rem", fontSize: "1.05rem" }}>
                <Link href={`/journal/${entry.slug}`} style={{ color: "#1F2937", textDecoration: "none" }}>
                  {entry.listingTitle ?? entry.title}
                </Link>
              </h2>
              <p style={{ margin: "0 0 0.55rem", color: "#4B5563", lineHeight: 1.6 }}>{entry.excerpt}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem" }}>
                <Link href={`/journal/${entry.slug}`} style={{ color: "#7A5D2E", textDecoration: "none", fontWeight: 700 }}>
                  Read article →
                </Link>
                <Link href={entry.relatedExperience} style={{ color: "#1F2937", textDecoration: "none", fontWeight: 600 }}>
                  {entry.relatedExperienceLabel} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
