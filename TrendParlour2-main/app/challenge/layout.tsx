import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Challenge',
  description: 'Test your reflexes with TrendParlour’s reaction time challenge.',
};

export default function ChallengeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
