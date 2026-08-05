import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reflex Challenge | TrendParlour',
  description: 'Test your reflexes with TrendParlour’s reaction challenge and see how sharp your instincts really are.',
  keywords: ['reflex challenge', 'reaction game', 'TrendParlour', 'quick challenge', 'reflexes'],
  alternates: {
    canonical: 'https://trendparlour.com/challenge',
  },
  openGraph: {
    title: 'Reflex Challenge | TrendParlour',
    description: 'Test your reflexes with TrendParlour’s reaction challenge and see how sharp your instincts really are.',
    url: 'https://trendparlour.com/challenge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reflex Challenge | TrendParlour',
    description: 'Test your reflexes with TrendParlour’s reaction challenge and see how sharp your instincts really are.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ChallengeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
