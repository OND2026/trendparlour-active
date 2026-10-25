"use client";

import { useMemo } from "react";

type SupportCard = {
  icon: string;
  title: string;
  description: string;
  buttonLabel: string;
  href?: string;
  disabled?: boolean;
};

const supportCards: SupportCard[] = [
  {
    icon: "☕",
    title: "Buy us a coffee",
    description: "Love discovering strange corners of the internet? Help keep TrendParlour free.",
    buttonLabel: "Support Coming Soon",
    disabled: true,
  },
  {
    icon: "🎁",
    title: "Merch",
    description: "Tiny surprises you can wear.",
    buttonLabel: "Explore the Shop",
    href: "https://www.redbubble.com/people/TMMDI/shop",
  },
  {
    icon: "⭐",
    title: "Daily Discovery Sponsor",
    description: "Want your brand featured inside a Daily Discovery?",
    buttonLabel: "Partner With Us",
  },
];

export default function SupportTrendParlour() {
  const cards = useMemo(() => supportCards, []);

  return (
    <section
      style={{
        width: "min(100%, 760px)",
        margin: "1.1rem auto 0",
        padding: "1.1rem",
        borderRadius: "24px",
        background: "#F7F1E8",
        border: "1px solid #E8DDCC",
        boxShadow: "0 10px 24px rgba(31, 41, 55, 0.05)",
        overflow: "hidden",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "0.9rem" }}>
        <h2
          style={{
            margin: "0 0 0.35rem",
            fontSize: "clamp(1.08rem, 2vw, 1.28rem)",
            lineHeight: 1.2,
            color: "#1F2937",
            letterSpacing: "-0.02em",
          }}
        >
          Support TrendParlour
        </h2>
        <p
          style={{
            margin: 0,
            fontSize: "0.92rem",
            color: "#6B7280",
            lineHeight: 1.6,
          }}
        >
          Every click helps keep curiosity alive.
        </p>
      </div>

      <div
        className="support-grid"
        style={{
          display: "grid",
          gap: "0.8rem",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        }}
      >
        {cards.map((card) => (
          <article
            key={card.title}
            className="support-card"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "0.95rem",
              borderRadius: "18px",
              background: "#FFFDF8",
              border: "1px solid #EFE4D3",
              boxShadow: "0 6px 16px rgba(31, 41, 55, 0.04)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              minHeight: "180px",
              overflowWrap: "anywhere",
            }}
          >
            <div>
              <div style={{ fontSize: "1.2rem", marginBottom: "0.55rem" }} aria-hidden="true">
                {card.icon}
              </div>
              <h3
                style={{
                  margin: "0 0 0.4rem",
                  fontSize: "0.98rem",
                  color: "#1F2937",
                  lineHeight: 1.3,
                  overflowWrap: "anywhere",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.88rem",
                  color: "#4B5563",
                  lineHeight: 1.55,
                }}
              >
                {card.description}
              </p>
            </div>

            {card.href ? (
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  textDecoration: "none",
                  marginTop: "0.9rem",
                  borderRadius: "999px",
                  padding: "0.7rem 0.9rem",
                  fontSize: "0.86rem",
                  fontWeight: 600,
                  color: "#1F2937",
                  background: "#F4E6C9",
                  cursor: "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                {card.buttonLabel}
              </a>
            ) : (
              <button
                type="button"
                disabled={card.disabled}
                style={{
                  marginTop: "0.9rem",
                  border: "none",
                  borderRadius: "999px",
                  padding: "0.7rem 0.9rem",
                  fontSize: "0.86rem",
                  fontWeight: 600,
                  color: card.disabled ? "#7A7A72" : "#1F2937",
                  background: card.disabled ? "#F0E9DE" : "#F4E6C9",
                  cursor: card.disabled ? "not-allowed" : "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                {card.buttonLabel}
              </button>
            )}
          </article>
        ))}
      </div>
      <style jsx global>{`
        @media (max-width: 720px) {
          .support-grid {
            grid-template-columns: 1fr !important;
          }

          .support-card {
            min-height: auto;
          }
        }
      `}</style>
    </section>
  );
}
