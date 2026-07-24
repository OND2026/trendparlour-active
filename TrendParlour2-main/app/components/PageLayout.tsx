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
        padding: "24px",
        boxSizing: "border-box",
      }}
    >
      {children}
    </main>
  );
}
