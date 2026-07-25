import type { Metadata } from 'next';
import Hero from './components/Hero';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Explore playful experiences, mini games, and curious surprises at TrendParlour.',
};

export default function Home() {
  return <Hero />;
}