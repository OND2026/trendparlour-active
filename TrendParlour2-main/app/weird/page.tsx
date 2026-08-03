'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import PageTitle from '../components/PageTitle';

const facts = [
  'Bananas are berries, but strawberries are not, which makes the fruit world a little more confusing than it seems.',
  'Octopuses have three hearts, and two of them stop beating when they swim, which is a dramatic way to stay alive.',
  'Honey never spoils, and jars of honey over 3,000 years old have still been found edible.',
  'Wombats produce cube-shaped poop, which helps it stay put and mark territory more effectively.',
  'Sharks existed before trees, so the ancient ocean had predators long before forests took over the land.',
  'A day on Venus is longer than a year on Venus, because Venus spins so slowly around its axis.',
  'Butterflies taste with their feet, using tiny sensors to detect sugars and other compounds.',
  'Some turtles can breathe through their buttocks, an unusual adaptation that helps them survive underwater.',
  'There are more stars in the universe than grains of sand on Earth, a number so huge it is almost impossible to picture.',
  'The Eiffel Tower grows a few centimeters in summer because the metal expands in the heat.',
  'A group of flamingos is called a flamboyance, and they often gather in dazzling pink clusters.',
  'Polar bears have black skin and transparent fur, which helps them absorb heat and stay camouflaged.',
  'Dolphins have names for each other, and they use signature whistles to identify one another.',
  'A shrimp’s heart is in its head, which is one of the stranger facts about the animal kingdom.',
  'Pineapples grow on the ground, not on trees, and they are actually a cluster of berries fused together.',
  'The human body has enough iron to make a small nail, which is a surprising little fact about everyday biology.',
  'A cloud can weigh over a million pounds, even though it looks light and fluffy.',
  'Bees can recognize human faces, which is impressive for an insect with a brain the size of a sesame seed.',
  'Tardigrades can survive in space, extreme heat, and freezing cold, making them nearly indestructible.',
  'A baby octopus is called a paralarva, and it begins life as a tiny, translucent swimmer.',
  'The Moon has moonquakes, and some of them are caused by tidal forces from Earth.',
  'Cows have best friends, and they often show strong social bonds with specific companions.',
  'Some jellyfish are biologically immortal, meaning they can potentially live indefinitely under the right conditions.',
  'A teaspoon of neutron star matter would weigh billions of tons on Earth, which is a stunning reminder of how dense stars can be.',
  'The shortest war in history lasted just 38 to 45 minutes, between Britain and Zanzibar in 1896.',
  'There are more possible chess games than atoms in the observable universe, which is an almost absurdly large number.',
  'Bats are the only mammals capable of true flight, unlike gliding mammals such as flying squirrels.',
  'A day on Mercury lasts about 176 Earth days, because Mercury spins very slowly relative to its orbit.',
  'The world’s oldest known living tree is over 4,000 years old, and it still stands in eastern California.',
  'An octopus has blue blood because its blood uses copper-based hemocyanin instead of iron-based hemoglobin.',
  'The Atlantic Ocean is getting wider by a few centimeters each year because tectonic plates are slowly drifting apart.',
  'A hummingbird’s heart can beat over 1,200 times per minute, which is one of the fastest rates in the animal kingdom.',
  'A day on Jupiter is less than 10 hours long, because the giant planet spins incredibly fast.',
  'Mammoths went extinct relatively recently, and some populations survived until about 4,000 years ago.',
  'Sea otters hold hands while they sleep so they do not drift apart in the water.',
  'There are more trees on Earth than stars in the Milky Way, which sounds impossible until you think about it.',
  'A group of crows is called a murder, which sounds dramatic for such clever birds.',
  'The human brain uses about 20% of the body’s energy while only accounting for about 2% of body weight.',
  'A single lightning bolt can heat the air around it to temperatures hotter than the surface of the Sun.',
  'The fastest recorded animal movement is the trap-jaw ant, which can snap its jaws at astonishing speed.',
  'A blue whale’s heart is so large that a human could swim through its arteries.',
  'The smell of rain is caused by a compound called geosmin, released by soil-dwelling bacteria.',
  'A giraffe has the same number of neck vertebrae as a human, just much larger ones.',
  'The deepest known part of the ocean is Challenger Deep, which is deeper than Mount Everest is tall.',
  'Some plants can communicate with each other through underground fungal networks, almost like a hidden internet.',
  'The longest living vertebrate is the Greenland shark, which can live for hundreds of years.',
  'A single teaspoon of soil can contain more microorganisms than there are people on Earth.',
  'The average person has about 30 trillion cells in the body, a number that is hard to grasp.',
  'The Moon is slowly drifting away from Earth by about 3.8 centimeters per year.',
  'The Sun is so large that more than one million Earths could fit inside it.',
  'A cat’s purr vibrates at a frequency that may help healing and reduce stress.',
  'The fingerprints of koalas are so similar to humans that they can confuse forensic investigators.',
  'An ostrich’s eye is bigger than its brain, which seems unusual but is true.',
  'The world’s largest desert is Antarctica, because it gets very little precipitation despite being icy.',
  'The first living things on Earth were microscopic organisms that appeared billions of years ago.',
  'A ruby-throated hummingbird can fly backward, an unusual skill among birds.',
  'The planet Saturn would float in water because it is less dense than water.',
  'A jellyfish can be 95% water, making it one of the simplest and most delicate creatures in the sea.',
  'There are more than 100,000 miles of blood vessels in the human body.',
  'The Earth’s core is hotter than the surface of the Sun, which is astonishingly hard to imagine.',
  'A single atom is mostly empty space, yet matter still feels solid to us.',
  'The shortest day of the year is not always the same, because Earth’s rotation varies slightly over time.',
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
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{
          width: '100%',
          maxWidth: '680px',
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
            color: '#4B5563',
            textDecoration: 'none',
            fontWeight: 600,
            marginBottom: '1rem',
          }}
        >
          ← Home
        </a>

        <PageTitle title='Blow My Mind' subtitle='A few facts that feel almost impossible.' />

        <div
          style={{
            background: '#FFFDF8',
            borderRadius: '24px',
            boxShadow: '0 14px 36px rgba(0, 0, 0, 0.07)',
            padding: 'clamp(1.25rem, 3vw, 2rem)',
            marginBottom: '1rem',
            width: '100%',
            minHeight: '180px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
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
            borderRadius: '16px',
            padding: '15px 24px',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.22s ease, boxShadow 0.22s ease',
          }}
        >
          🤯 Blow My Mind Again
        </button>
      </motion.div>
    </PageLayout>
  );
}
