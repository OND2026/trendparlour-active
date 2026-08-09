import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getJournalEntryBySlug, getRelatedEntries, journalEntries } from "../../data/journalEntries";
import JournalPlaygroundLinks from "../../components/JournalPlaygroundLinks";

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
  const nextJournalHref = relatedEntries[0] ? `/journal/${relatedEntries[0].slug}` : "/journal";

  return (
    <main style={{ minHeight: "100vh", background: "#F8F7F2", color: "#1F2937" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "clamp(1rem, 3vw, 2rem)" }}>
        <nav style={{ marginBottom: "1rem", display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
          <Link href="/" style={{ color: "#4B5563", textDecoration: "none", fontWeight: 600 }}>
            ← Back to TrendParlour
          </Link>
          <Link href="/journal" style={{ color: "#7A5D2E", textDecoration: "none", fontWeight: 700 }}>
            Back to Curiosity Journal
          </Link>
        </nav>

        <article>
          <header style={{ marginBottom: "1.1rem" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem", alignItems: "center", marginBottom: "0.55rem" }}>
              <Link
                href={`/journal/category/${entry.categorySlug}`}
                style={{ color: "#7A5D2E", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none" }}
              >
                {entry.category}
              </Link>
              <span style={{ color: "#6B7280", fontSize: "0.85rem" }}>{entry.readingTime}</span>
            </div>
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

          <JournalPlaygroundLinks
            links={entry.relatedPlaygrounds ?? [{ label: entry.relatedExperienceLabel, href: entry.relatedExperience }]}
            title="Curious where this leads?"
            intro="Read enough. Now go poke the idea."
          />

          {relatedEntries.length > 0 ? (
            <section style={{ borderRadius: "20px", background: "#FFFDF8", border: "1px solid #E8DDCC", padding: "1rem" }}>
              <h2 style={{ margin: "0 0 0.7rem", fontSize: "1rem" }}>More from the journal</h2>
              <div style={{ display: "grid", gap: "0.85rem" }}>
                {relatedEntries.map((relatedEntry) => (
                  <article key={relatedEntry.slug} style={{ borderTop: "1px solid #F1E4D2", paddingTop: "0.8rem" }}>
                    <Link href={`/journal/${relatedEntry.slug}`} style={{ color: "#1F2937", textDecoration: "none", fontWeight: 700, display: "block", marginBottom: "0.25rem" }}>
                      {relatedEntry.title}
                    </Link>
                    <p style={{ margin: 0, color: "#4B5563", lineHeight: 1.6 }}>
                      {relatedEntry.excerpt}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          <section style={{ marginTop: "1rem", padding: "0.95rem", borderRadius: "16px", border: "1px solid #E8DDCC", background: "#FFFDF8" }}>
            <h2 style={{ margin: "0 0 0.5rem", fontSize: "1rem" }}>Keep the curiosity going</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <Link href={nextJournalHref} style={{ textDecoration: "none", color: "#1F2937", fontWeight: 700 }}>
                Explore another curiosity →
              </Link>
              <Link href="/journal" style={{ textDecoration: "none", color: "#7A5D2E", fontWeight: 700 }}>
                Back to Curiosity Journal →
              </Link>
              <Link href="/" style={{ textDecoration: "none", color: "#4B5563", fontWeight: 600 }}>
                Return to TrendParlour →
              </Link>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
