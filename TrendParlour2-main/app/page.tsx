import type { Metadata } from 'next';
import Hero from './components/Hero';
import HomeJournalSpotlight from './components/HomeJournalSpotlight';
import DailyDiscovery from './components/DailyDiscovery';
import SupportTrendParlour from './components/SupportTrendParlour';
import { journalEntries } from './data/journalEntries';

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
  const preferredTitles = [
    'Why does your brain notice your name in a noisy room?',
    'Why do bananas curve?',
    'Why did the internet invent the 404 error?',
  ];

  const preferredEntries = preferredTitles
    .map((title) => journalEntries.find((entry) => entry.title === title))
    .filter((entry): entry is (typeof journalEntries)[number] => Boolean(entry));

  const fallbackEntries = journalEntries.filter(
    (entry) => !preferredEntries.some((preferred) => preferred.slug === entry.slug)
  );

  const featuredEntries = [...preferredEntries, ...fallbackEntries].slice(0, 3);

  return (
    <>
      <Hero />
      <HomeJournalSpotlight entries={featuredEntries} />
      <section style={{ background: '#F8F7F2', padding: '0 1rem 1.25rem' }}>
        <DailyDiscovery />
        <SupportTrendParlour />

        <footer
          style={{
            marginTop: '2rem',
            textAlign: 'center',
            color: '#7A7A72',
            fontSize: '0.95rem',
            lineHeight: 1.6,
            letterSpacing: '0.02em',
            paddingBottom: '0.5rem',
          }}
        >
          <div>Stay Curious. Stay Playful.</div>
          <div>© 2026 TrendParlour</div>
        </footer>
      </section>
    </>
  );
}