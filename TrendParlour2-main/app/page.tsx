import type { Metadata } from 'next';
import Hero from './components/Hero';

export const metadata: Metadata = {
  title: 'TrendParlour | Playful Curiosity Experiences',
  description: 'Discover TrendParlour’s playful web experiences, from surprise me and curiosity ladder to laughs, weird facts, and shareable dilemmas.',
  keywords: ['TrendParlour', 'curiosity', 'playful web experiences', 'mini games', 'surprise me', 'would you rather'],
  alternates: {
    canonical: 'https://trendparlour.com/',
  },
  openGraph: {
    title: 'TrendParlour | Playful Curiosity Experiences',
    description: 'Explore TrendParlour’s collection of playful surprises, quick games, and curious discoveries designed to delight.',
    url: 'https://trendparlour.com/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrendParlour | Playful Curiosity Experiences',
    description: 'Explore TrendParlour’s collection of playful surprises, quick games, and curious discoveries designed to delight.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return <Hero />;
}