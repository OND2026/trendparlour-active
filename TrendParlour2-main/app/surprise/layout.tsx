import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Surprise Me',
  description: 'Let TrendParlour surprise you with a random experience.',
};

export default function SurpriseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
