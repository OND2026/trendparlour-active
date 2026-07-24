'use client';

import { useState } from 'react';
import PageLayout from '../components/PageLayout';

const facts = [
  'Octopuses have three hearts.',
  'Bananas are berries.',
  'Flamingos are born grey.',
  'Honey never spoils.',
  "A shrimp's heart is in its head.",
  'The Eiffel Tower grows in summer.',
  'Sloths can hold their breath longer than dolphins.',
  'Wombats poop cubes.',
  'Hot water can freeze faster than cold water.',
  'There are more stars than grains of sand on Earth.',
  'A day on Venus is longer than a year on Venus.',
  'Butterflies taste with their feet.',
];

export default function WeirdPage() {
  const [fact, setFact] = useState(facts[0]);

  const pickRandomFact = () => {
    const nextFact = facts[Math.floor(Math.random() * facts.length)];
    setFact(nextFact);
  };

  return (
    <PageLayout>
      <div
        style={{
          width: '100%',
          maxWidth: '720px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
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

        <h1 style={{ fontSize: '2.5rem', margin: '0 0 24px', color: '#1F2937' }}>
          🌍 Show Me Something Weird
        </h1>

        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.08)',
            padding: '32px 28px',
            marginBottom: '20px',
            width: '100%',
            minHeight: '160px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            color: '#374151',
            lineHeight: 1.6,
          }}
        >
          {fact}
        </div>

        <button
          onClick={pickRandomFact}
          style={{
            background: '#2563EB',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '999px',
            padding: '14px 24px',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 8px 20px rgba(37, 99, 235, 0.2)',
          }}
        >
          🔄 Another Fact
        </button>
      </div>
    </PageLayout>
  );
}
