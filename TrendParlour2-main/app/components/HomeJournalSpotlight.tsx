import Link from "next/link";
import { JournalEntry } from "../data/journalEntries";

type HomeJournalSpotlightProps = {
  entries: JournalEntry[];
};

export default function HomeJournalSpotlight({ entries }: HomeJournalSpotlightProps) {
  if (!entries.length) {
    return null;
  }

  return (
    <section
      className="journal-spotlight"
      aria-labelledby="home-curiosity-journal"
      style={{
        background: "#F8F7F2",
        padding: "0 1rem 1.65rem",
      }}
    >
      <div
        style={{
          maxWidth: "980px",
          margin: "0 auto",
          borderRadius: "24px",
          border: "1px solid #E8DDCC",
          background: "#F7F1E8",
          padding: "clamp(1rem, 3vw, 1.5rem)",
        }}
      >
        <header style={{ marginBottom: "0.95rem" }}>
          <p
            style={{
              margin: "0 0 0.3rem",
              color: "#7A5D2E",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Curiosity Journal
          </p>
          <h2
            id="home-curiosity-journal"
            style={{ margin: "0 0 0.4rem", fontSize: "clamp(1.4rem, 3.2vw, 1.9rem)", lineHeight: 1.2 }}
          >
            Tiny questions. Surprisingly interesting answers.
          </h2>
          <p style={{ margin: 0, color: "#4B5563", lineHeight: 1.65, maxWidth: "720px" }}>
            Start with three curious reads, then jump back into everything else TrendParlour offers.
          </p>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "0.75rem" }}>
          {entries.map((entry) => (
            <article
              key={entry.slug}
              style={{
                borderRadius: "18px",
                border: "1px solid #E7DDCF",
                background: "#FFFFFF",
                padding: "0.9rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <div>
                <span
                  style={{
                    display: "inline-block",
                    borderRadius: "999px",
                    background: "#F7F1E8",
                    color: "#7A5D2E",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "0.28rem 0.55rem",
                  }}
                >
                  {entry.category}
                </span>
              </div>
              <h3 style={{ margin: 0, fontSize: "1.03rem", lineHeight: 1.35 }}>
                <Link
                  className="journal-spotlight-link"
                  href={`/journal/${entry.slug}`}
                  style={{ color: "#1F2937", textDecoration: "none" }}
                  aria-label={`Read article: ${entry.title}`}
                >
                  {entry.title}
                </Link>
              </h3>
              <p style={{ margin: 0, color: "#4B5563", lineHeight: 1.6, flex: 1 }}>{entry.excerpt}</p>
              <Link
                className="journal-spotlight-link"
                href={`/journal/${entry.slug}`}
                style={{
                  textDecoration: "none",
                  color: "#7A5D2E",
                  fontWeight: 700,
                  alignSelf: "flex-start",
                }}
                aria-label={`Explore article: ${entry.title}`}
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>

        <div style={{ marginTop: "1rem" }}>
          <Link
            className="journal-spotlight-link"
            href="/journal"
            style={{
              textDecoration: "none",
              color: "#1F2937",
              fontWeight: 700,
              border: "1px solid #E7DDCF",
              borderRadius: "999px",
              padding: "0.6rem 0.9rem",
              display: "inline-flex",
              background: "#F7F1E8",
            }}
          >
            Explore the Curiosity Journal →
          </Link>
        </div>
      </div>
    </section>
  );
}