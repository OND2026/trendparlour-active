import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Play',
  description: 'Spin the decision wheel and let it choose your next adventure.',
};

export default function PlayLayout({ children }: { children: React.ReactNode }) {
  return children;
}
