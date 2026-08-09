import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getJournalEntryBySlug, getRelatedEntries, journalEntries } from "../../data/journalEntries";

function buildJsonLd(entry: NonNullable<ReturnType<typeof getJournalEntryBySlug>>) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: entry.title,
    description: entry.excerpt,
    url: `https://trendparlour.com/journal/${entry.slug}`,
    datePublished: entry.publishedAt,
    dateModified: entry.updatedAt,
    author: {
      "@type": "Organization",
      name: "TrendParlour",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://trendparlour.com/journal/${entry.slug}`,
    },
  };
}

type JournalArticlePageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return journalEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: JournalArticlePageProps): Promise<Metadata> {
  const entry = getJournalEntryBySlug(params.slug);

  if (!entry) {
    return {
      title: "Journal Entry | TrendParlour",
      description: "A curious article from TrendParlour’s journal.",
    };
  }

  return {
    title: `${entry.title} | TrendParlour Journal`,
    description: entry.excerpt,
    alternates: {
      canonical: `https://trendparlour.com/journal/${entry.slug}`,
    },
    openGraph: {
      title: `${entry.title} | TrendParlour Journal`,
      description: entry.excerpt,
      url: `https://trendparlour.com/journal/${entry.slug}`,
      type: "article",
    },
  };
}

export default function JournalArticlePage({ params }: JournalArticlePageProps) {
  const entry = getJournalEntryBySlug(params.slug);

  if (!entry) {
    notFound();
  }

  const relatedEntries = getRelatedEntries(entry.slug);

  return (
    <main style={{ minHeight: "100vh", background: "#F8F7F2", color: "#1F2937" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "clamp(1rem, 3vw, 2rem)" }}>
        <nav style={{ marginBottom: "1rem" }}>
          <Link href="/journal" style={{ color: "#7A5D2E", textDecoration: "none", fontWeight: 700 }}>
            ← Back to the Journal
          </Link>
        </nav>

        <article>
          <header style={{ marginBottom: "1.1rem" }}>
            <p style={{ margin: "0 0 0.45rem", color: "#7A5D2E", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
              {entry.category}
            </p>
            <h1 style={{ margin: "0 0 0.7rem", fontSize: "clamp(1.9rem, 3.7vw, 2.6rem)", lineHeight: 1.16, letterSpacing: "-0.025em" }}>
              {entry.title}
            </h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem", color: "#6B7280", fontSize: "0.9rem" }}>
              <span>{entry.publishedAt}</span>
              <span>•</span>
              <span>{entry.readingTime}</span>
            </div>
          </header>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(entry)) }}
          />

          <div style={{ borderRadius: "24px", background: "#FFFDF8", border: "1px solid #E8DDCC", padding: "clamp(1rem, 2.2vw, 1.35rem)", marginBottom: "1rem" }}>
            {entry.content.map((paragraph) => (
              <p key={paragraph} style={{ margin: "0 0 0.85rem", color: "#4B5563", lineHeight: 1.8, fontSize: "1rem" }}>
                {paragraph}
              </p>
            ))}
          </div>

          <section style={{ marginBottom: "1rem", borderRadius: "20px", background: "#F7F1E8", border: "1px solid #E8DDCC", padding: "1rem" }}>
            <h2 style={{ margin: "0 0 0.55rem", fontSize: "1rem" }}>Related discovery</h2>
            <p style={{ margin: "0 0 0.7rem", color: "#4B5563", lineHeight: 1.6 }}>
              This article is meant to lead naturally toward a playful experience.
            </p>
            <Link href={entry.relatedExperience} style={{ color: "#1F2937", textDecoration: "none", fontWeight: 700 }}>
              {entry.relatedExperienceLabel} →
            </Link>
          </section>

          {relatedEntries.length > 0 ? (
            <section style={{ borderRadius: "20px", background: "#FFFDF8", border: "1px solid #E8DDCC", padding: "1rem" }}>
              <h2 style={{ margin: "0 0 0.7rem", fontSize: "1rem" }}>More from the journal</h2>
              <div style={{ display: "grid", gap: "0.6rem" }}>
                {relatedEntries.map((relatedEntry) => (
                  <Link key={relatedEntry.slug} href={`/journal/${relatedEntry.slug}`} style={{ color: "#1F2937", textDecoration: "none", fontWeight: 700 }}>
                    {relatedEntry.title}
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </article>
      </div>
    </main>
  );
}
