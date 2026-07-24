'use client';

import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import PageTitle from '../components/PageTitle';

export default function ChallengePage() {
  const [result, setResult] = useState<string | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleFlip = () => {
    setIsFlipping(true);
    setResult(null);

    window.setTimeout(() => {
      const outcome = Math.random() < 0.5 ? 'Heads' : 'Tails';
      setResult(outcome);
      setIsFlipping(false);
    }, 700);
  };

  return (
    <PageLayout>
      <div
        style={{
          width: '100%',
          maxWidth: '560px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <a
          href="/"
          style={{
            alignSelf: 'flex-start',
            color: '#2563EB',
            textDecoration: 'none',
            fontWeight: 600,
            marginBottom: '24px',
          }}
        >
          ← Home
        </a>

        <PageTitle
          title='Coin Flip'
          subtitle='Heads or Tails?'
          titleStyle={{ fontSize: '2.4rem', margin: '0 0 8px', color: '#1F2937' }}
          subtitleStyle={{ fontSize: '1.05rem', color: '#6B7280' }}
        />

        <button
          onClick={handleFlip}
          disabled={isFlipping}
          style={{
            width: '100%',
            padding: '16px 24px',
            border: 'none',
            borderRadius: '16px',
            background: '#FACC15',
            color: '#222',
            fontSize: '1rem',
            fontWeight: 700,
            cursor: isFlipping ? 'wait' : 'pointer',
            boxShadow: '0 10px 20px rgba(0,0,0,0.12)',
            marginBottom: '20px',
          }}
        >
          {isFlipping ? 'Flipping...' : 'Flip Coin'}
        </button>

        <div
          style={{
            width: '100%',
            background: '#FFFFFF',
            borderRadius: '20px',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.08)',
            padding: '28px',
            minHeight: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#374151',
            fontSize: '1.15rem',
            fontWeight: 600,
          }}
        >
          {isFlipping ? 'Spinning the coin...' : result ? `Result: ${result}` : 'Your result will appear here.'}
        </div>
      </div>
    </PageLayout>
  );
}
