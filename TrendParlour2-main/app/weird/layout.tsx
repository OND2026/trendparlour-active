import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blow My Mind | TrendParlour',
  description: 'Discover surprising, accurate, and family-friendly facts from TrendParlour that make everyday life feel wonderfully strange.',
  keywords: ['blow my mind', 'TrendParlour', 'weird facts', 'surprising facts', 'curiosity'],
  alternates: {
    canonical: 'https://trendparlour.com/weird',
  },
  openGraph: {
    title: 'Blow My Mind | TrendParlour',
    description: 'Discover surprising, accurate, and family-friendly facts from TrendParlour that make everyday life feel wonderfully strange.',
    url: 'https://trendparlour.com/weird',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blow My Mind | TrendParlour',
    description: 'Discover surprising, accurate, and family-friendly facts from TrendParlour that make everyday life feel wonderfully strange.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WeirdLayout({ children }: { children: React.ReactNode }) {
  return children;
}
