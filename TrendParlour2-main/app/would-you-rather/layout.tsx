import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Would You Rather | TrendParlour',
  description: 'Dive into shareable Would You Rather dilemmas from TrendParlour, crafted to spark conversation, debate, and delight.',
  keywords: ['would you rather', 'TrendParlour', 'conversation starters', 'debate questions', 'shareable dilemmas'],
  alternates: {
    canonical: 'https://trendparlour.com/would-you-rather',
  },
  openGraph: {
    title: 'Would You Rather | TrendParlour',
    description: 'Dive into shareable Would You Rather dilemmas from TrendParlour, crafted to spark conversation, debate, and delight.',
    url: 'https://trendparlour.com/would-you-rather',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Would You Rather | TrendParlour',
    description: 'Dive into shareable Would You Rather dilemmas from TrendParlour, crafted to spark conversation, debate, and delight.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WouldYouRatherLayout({ children }: { children: React.ReactNode }) {
  return children;
}
