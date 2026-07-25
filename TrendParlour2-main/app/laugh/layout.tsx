import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Make Me Laugh',
  description: 'Enjoy a steady stream of clean, family-friendly jokes from TrendParlour.',
};

export default function LaughLayout({ children }: { children: React.ReactNode }) {
  return children;
}
