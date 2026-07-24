'use client';

import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import PageTitle from '../components/PageTitle';

const facts = [
  'Bananas are berries, but strawberries are not.',
  'Octopuses have three hearts.',
  'Honey never spoils.',
  'Wombats produce cube-shaped droppings.',
  'Sharks existed before trees.',
  'A day on Venus is longer than a year on Venus.',
  'Butterflies taste with their feet.',
  'Some turtles can breathe through their buttocks.',
  'There are more stars in the universe than grains of sand on Earth.',
  'The Eiffel Tower grows in summer.',
  'A group of flamingos is called a flamboyance.',
  'Polar bears have black skin and transparent fur.',
  'Dolphins have names for each other.',
  'A shrimp’s heart is in its head.',
  'Pineapples grow on the ground, not on trees.',
  'The human body has enough iron to make a small nail.',
  'A cloud can weigh over a million pounds.',
  'Bees can recognize human faces.',
  'Tardigrades can survive in space.',
  'A baby octopus is called a paralarva.',
  'The moon has moonquakes.',
  'Cows have best friends.',
  'Some jellyfish are biologically immortal.',
  'A teaspoon of neutron star matter would weigh billions of tons on Earth.',
  'The shortest war in history lasted 38 to 45 minutes.',
  'There are more possible chess games than atoms in the observable universe.',
  'Bats are the only mammals capable of true flight.',
  'A day on Mercury lasts about 176 Earth days.',
  'The world’s oldest known living tree is over 4,000 years old.',
  'An octopus has blue blood.',
  'The Atlantic Ocean is getting wider by a few centimeters each year.',
  'A hummingbird’s heart can beat over 1,200 times per minute.',
];

export default function WeirdPage() {
  const [fact, setFact] = useState(facts[0]);

  const pickRandomFact = () => {
    const nextIndex = Math.floor(Math.random() * facts.length);
    setFact((current) => {
      if (facts[nextIndex] === current) {
        return facts[(nextIndex + 1) % facts.length];
      }
      return facts[nextIndex];
    });
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

        <PageTitle
          title='Weird Facts'
          subtitle='Reality is stranger than fiction.'
          titleStyle={{ fontSize: '2.5rem', margin: '0 0 8px', color: '#1F2937' }}
          subtitleStyle={{ fontSize: '1.05rem', color: '#6B7280' }}
        />

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
          Tell Me Something Else
        </button>
      </div>
    </PageLayout>
  );
}
