import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Would You Rather | TrendParlour",
  description: "Pick a side in playful, local-first dilemmas that turn small choices into tiny moments of delight.",
  keywords: ["would you rather", "TrendParlour", "playful dilemmas", "choice game"],
  alternates: {
    canonical: "https://trendparlour.com/would-you-rather",
  },
  openGraph: {
    title: "Would You Rather | TrendParlour",
    description: "Pick a side in playful, local-first dilemmas that turn small choices into tiny moments of delight.",
    url: "https://trendparlour.com/would-you-rather",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Would You Rather | TrendParlour",
    description: "Pick a side in playful, local-first dilemmas that turn small choices into tiny moments of delight.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WouldYouRatherLayout({ children }: { children: React.ReactNode }) {
  return children;
}
