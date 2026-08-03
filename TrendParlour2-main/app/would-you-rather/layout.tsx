import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Would You Rather",
  description: "A shareable collection of dilemmas designed to spark conversation.",
};

export default function WouldYouRatherLayout({ children }: { children: React.ReactNode }) {
  return children;
}
