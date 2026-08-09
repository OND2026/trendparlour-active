import Link from "next/link";

export type JournalPlaygroundLink = {
  label: string;
  href: string;
};

type JournalPlaygroundLinksProps = {
  links: JournalPlaygroundLink[];
  title?: string;
  intro?: string;
};

export default function JournalPlaygroundLinks({
  links,
  title = "Curious where this leads?",
  intro = "Read enough. Now go poke the idea.",
}: JournalPlaygroundLinksProps) {
  if (!links.length) {
    return null;
  }

  return (
    <section
      style={{
        borderRadius: "20px",
        background: "#F7F1E8",
        border: "1px solid #E8DDCC",
        padding: "1rem",
        marginBottom: "1rem",
      }}
      aria-label={title}
    >
      <h2 style={{ margin: "0 0 0.4rem", fontSize: "1rem", color: "#1F2937" }}>{title}</h2>
      <p style={{ margin: "0 0 0.8rem", color: "#4B5563", lineHeight: 1.6 }}>{intro}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              color: "#1F2937",
              textDecoration: "none",
              fontWeight: 700,
              padding: "0.55rem 0.8rem",
              borderRadius: "999px",
              background: "#FFFDF8",
              border: "1px solid #E7DDCF",
            }}
          >
            {link.label} →
          </Link>
        ))}
      </div>
    </section>
  );
}
