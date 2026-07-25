import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blow My Mind',
  description: 'Discover a collection of surprising, accurate, and family-friendly facts from TrendParlour.',
};

export default function WeirdLayout({ children }: { children: React.ReactNode }) {
  return children;
}
