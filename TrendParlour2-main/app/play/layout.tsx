import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Curiosity Ladder | TrendParlour',
  description: 'Play TrendParlour’s Curiosity Ladder, a fast and rewarding micro-game designed to spark curiosity and keep the fun going.',
  keywords: ['curiosity ladder', 'TrendParlour', 'micro game', 'playful challenge', 'curiosity'],
  alternates: {
    canonical: 'https://trendparlour.com/play',
  },
  openGraph: {
    title: 'Curiosity Ladder | TrendParlour',
    description: 'Play TrendParlour’s Curiosity Ladder, a fast and rewarding micro-game designed to spark curiosity and keep the fun going.',
    url: 'https://trendparlour.com/play',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curiosity Ladder | TrendParlour',
    description: 'Play TrendParlour’s Curiosity Ladder, a fast and rewarding micro-game designed to spark curiosity and keep the fun going.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PlayLayout({ children }: { children: React.ReactNode }) {
  return children;
}
