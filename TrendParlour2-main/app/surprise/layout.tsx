import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Surprise Me | TrendParlour',
  description: 'Let TrendParlour surprise you with a fresh, playful experience packed with laughter, curiosity, and unexpected discoveries.',
  keywords: ['surprise me', 'TrendParlour', 'playful experiences', 'curiosity', 'surprise'],
  alternates: {
    canonical: 'https://trendparlour.com/surprise',
  },
  openGraph: {
    title: 'Surprise Me | TrendParlour',
    description: 'Let TrendParlour surprise you with a fresh, playful experience packed with laughter, curiosity, and unexpected discoveries.',
    url: 'https://trendparlour.com/surprise',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Surprise Me | TrendParlour',
    description: 'Let TrendParlour surprise you with a fresh, playful experience packed with laughter, curiosity, and unexpected discoveries.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SurpriseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
