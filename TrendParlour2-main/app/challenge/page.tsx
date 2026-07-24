'use client';

import { useEffect, useRef, useState } from 'react';
import PageLayout from '../components/PageLayout';
import PageTitle from '../components/PageTitle';

type GameState = 'idle' | 'waiting' | 'ready' | 'result';

export default function ChallengePage() {
  const [gameState, setGameState] = useState<GameState>('idle');
  const [cardText, setCardText] = useState('Press start when you are ready.');
  const [cardColor, setCardColor] = useState('#FFFFFF');
  const [startTime, setStartTime] = useState<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const clearTimer = () => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const resetGame = () => {
    clearTimer();
    setGameState('idle');
    setCardText('Press start when you are ready.');
    setCardColor('#FFFFFF');
    setStartTime(null);
  };

  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, []);

  const startRound = () => {
    clearTimer();
    setGameState('waiting');
    setCardText('Wait...');
    setCardColor('#DC2626');
    setStartTime(null);

    const delay = Math.floor(Math.random() * 3001) + 2000;

    timeoutRef.current = window.setTimeout(() => {
      timeoutRef.current = null;
      setGameState('ready');
      setCardText('CLICK!');
      setCardColor('#16A34A');
      setStartTime(Date.now());
    }, delay);
  };

  const handleCardClick = () => {
    if (gameState === 'waiting') {
      clearTimer();
      setGameState('result');
      setCardText('Too early! Try again.');
      setCardColor('#FFFFFF');
      setStartTime(null);
      return;
    }

    if (gameState === 'ready' && startTime !== null) {
      const elapsed = Date.now() - startTime;
      clearTimer();
      setGameState('result');
      setCardText(`Your reaction time: ${elapsed} ms`);
      setCardColor('#FFFFFF');
      setStartTime(null);
    }
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
          title='Reaction Time'
          subtitle='How fast are your reflexes?'
          titleStyle={{ fontSize: '2.4rem', margin: '0 0 8px', color: '#1F2937' }}
          subtitleStyle={{ fontSize: '1.05rem', color: '#6B7280' }}
        />

        {gameState === 'idle' && (
          <button
            onClick={startRound}
            style={{
              width: '100%',
              padding: '16px 24px',
              border: 'none',
              borderRadius: '16px',
              background: '#FACC15',
              color: '#222',
              fontSize: '1rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 10px 20px rgba(0,0,0,0.12)',
              marginBottom: '20px',
            }}
          >
            Start
          </button>
        )}

        {gameState === 'result' && (
          <button
            onClick={resetGame}
            style={{
              width: '100%',
              padding: '16px 24px',
              border: 'none',
              borderRadius: '16px',
              background: '#38BDF8',
              color: '#FFFFFF',
              fontSize: '1rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 10px 20px rgba(0,0,0,0.12)',
              marginBottom: '20px',
            }}
          >
            Try Again
          </button>
        )}

        <button
          type='button'
          onClick={gameState === 'waiting' || gameState === 'ready' ? handleCardClick : undefined}
          style={{
            width: '100%',
            background: cardColor,
            borderRadius: '20px',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.08)',
            padding: '28px',
            minHeight: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: gameState === 'ready' ? '#FFFFFF' : '#374151',
            fontSize: '1.15rem',
            fontWeight: 600,
            border: 'none',
            cursor: gameState === 'waiting' || gameState === 'ready' ? 'pointer' : 'default',
          }}
        >
          {cardText}
        </button>
      </div>
    </PageLayout>
  );
}
