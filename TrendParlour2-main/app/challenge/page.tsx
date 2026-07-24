'use client';

import { useState } from 'react';

type Challenge = {
  question: string;
  optionA: string;
  optionB: string;
  correctAnswer: 'A' | 'B';
  explanation: string;
};

const challenges: Challenge[] = [
  {
    question: 'Which planet is known as the Red Planet?',
    optionA: 'Mars',
    optionB: 'Venus',
    correctAnswer: 'A',
    explanation: 'Mars is called the Red Planet because of the iron oxide dust that covers its surface.',
  },
  {
    question: 'Which animal sleeps upside down?',
    optionA: 'Bat',
    optionB: 'Rabbit',
    correctAnswer: 'A',
    explanation: 'Bats often sleep hanging upside down, which helps them take off quickly when they wake.',
  },
  {
    question: 'Which is the largest ocean on Earth?',
    optionA: 'Pacific Ocean',
    optionB: 'Atlantic Ocean',
    correctAnswer: 'A',
    explanation: 'The Pacific Ocean is the largest and deepest ocean on Earth.',
  },
  {
    question: 'Which month has 28 days?',
    optionA: 'All of them',
    optionB: 'February',
    correctAnswer: 'A',
    explanation: 'Every month has at least 28 days, but February is the only month with exactly 28 days in a common year.',
  },
  {
    question: 'What is the capital city of Japan?',
    optionA: 'Tokyo',
    optionB: 'Seoul',
    correctAnswer: 'A',
    explanation: 'Tokyo is the capital of Japan.',
  },
  {
    question: 'Which gas do plants use most for photosynthesis?',
    optionA: 'Carbon dioxide',
    optionB: 'Oxygen',
    correctAnswer: 'A',
    explanation: 'Plants absorb carbon dioxide from the air to make food through photosynthesis.',
  },
  {
    question: 'Which is the fastest land animal?',
    optionA: 'Cheetah',
    optionB: 'Horse',
    correctAnswer: 'A',
    explanation: 'The cheetah is the fastest land animal, reaching speeds over 60 miles per hour.',
  },
  {
    question: 'Which has more days in a year?',
    optionA: 'A leap year',
    optionB: 'A regular year',
    correctAnswer: 'A',
    explanation: 'A leap year has 366 days, while a regular year has 365 days.',
  },
];

export default function ChallengePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<'A' | 'B' | null>(null);
  const [answered, setAnswered] = useState(false);

  const challenge = challenges[currentIndex];

  const handleAnswer = (answer: 'A' | 'B') => {
    setSelectedAnswer(answer);
    setAnswered(true);
  };

  const handleNext = () => {
    const nextIndex = Math.floor(Math.random() * challenges.length);
    setCurrentIndex(nextIndex);
    setSelectedAnswer(null);
    setAnswered(false);
  };

  const isCorrect = selectedAnswer === challenge.correctAnswer;

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#FAF9F6',
        padding: '24px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '720px',
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

        <h1 style={{ fontSize: '2.4rem', margin: '0 0 16px', color: '#1F2937' }}>
          🧠 Challenge Me
        </h1>

        <div
          style={{
            width: '100%',
            background: '#FFFFFF',
            borderRadius: '20px',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.08)',
            padding: '28px',
            marginBottom: '20px',
          }}
        >
          <h2 style={{ fontSize: '1.3rem', margin: '0 0 24px', color: '#374151' }}>
            {challenge.question}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
              onClick={() => handleAnswer('A')}
              disabled={answered}
              style={{
                padding: '16px 20px',
                borderRadius: '16px',
                border: '1px solid #D1D5DB',
                background: answered ? '#F3F4F6' : '#F9FAFB',
                color: '#111827',
                fontSize: '1rem',
                cursor: answered ? 'not-allowed' : 'pointer',
                fontWeight: 600,
              }}
            >
              A. {challenge.optionA}
            </button>

            <button
              onClick={() => handleAnswer('B')}
              disabled={answered}
              style={{
                padding: '16px 20px',
                borderRadius: '16px',
                border: '1px solid #D1D5DB',
                background: answered ? '#F3F4F6' : '#F9FAFB',
                color: '#111827',
                fontSize: '1rem',
                cursor: answered ? 'not-allowed' : 'pointer',
                fontWeight: 600,
              }}
            >
              B. {challenge.optionB}
            </button>
          </div>

          {answered && (
            <div style={{ marginTop: '20px' }}>
              <div style={{ color: isCorrect ? '#16A34A' : '#DC2626', fontWeight: 700, marginBottom: '8px' }}>
                {isCorrect ? '✅ Correct!' : '❌ Not quite!'}
              </div>
              <div style={{ color: '#4B5563', lineHeight: 1.6 }}>{challenge.explanation}</div>
            </div>
          )}
        </div>

        {answered && (
          <button
            onClick={handleNext}
            style={{
              background: '#16A34A',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '999px',
              padding: '14px 24px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(22, 163, 74, 0.2)',
            }}
          >
            ➡️ Next Challenge
          </button>
        )}
      </div>
    </main>
  );
}
