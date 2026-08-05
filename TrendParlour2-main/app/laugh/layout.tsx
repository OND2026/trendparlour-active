import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Make Me Laugh | TrendParlour',
  description: 'Enjoy TrendParlour’s clean, family-friendly jokes and lighthearted humor for a quick mood lift.',
  keywords: ['make me laugh', 'TrendParlour', 'jokes', 'humor', 'family friendly'],
  alternates: {
    canonical: 'https://trendparlour.com/laugh',
  },
  openGraph: {
    title: 'Make Me Laugh | TrendParlour',
    description: 'Enjoy TrendParlour’s clean, family-friendly jokes and lighthearted humor for a quick mood lift.',
    url: 'https://trendparlour.com/laugh',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Make Me Laugh | TrendParlour',
    description: 'Enjoy TrendParlour’s clean, family-friendly jokes and lighthearted humor for a quick mood lift.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LaughLayout({ children }: { children: React.ReactNode }) {
  return children;
}
