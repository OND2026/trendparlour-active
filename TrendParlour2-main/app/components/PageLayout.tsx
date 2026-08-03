import type { ReactNode } from "react";

type PageLayoutProps = {
  children: ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#F8F7F2",
        padding: "clamp(1rem, 3vw, 1.5rem)",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "760px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
        <footer
          style={{
            marginTop: "2rem",
            paddingBottom: "0.5rem",
            textAlign: "center",
            color: "#7A7A72",
            fontSize: "0.95rem",
            lineHeight: 1.6,
            letterSpacing: "0.02em",
          }}
        >
          <div>Stay Curious. Stay Playful.</div>
          <div>© 2026 TrendParlour</div>
        </footer>
      </div>
    </main>
  );
}
