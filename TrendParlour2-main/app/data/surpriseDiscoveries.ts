export type SurpriseDiscovery = {
  id: number;
  title: string;
  content: string;
  link?: string;
};

export type SurpriseCategory = {
  id: string;
  name: string;
  emoji: string;
  description: string;
  discoveries: SurpriseDiscovery[];
};

export const surpriseCategories: SurpriseCategory[] = [
  {
    id: "facts",
    name: "Facts",
    emoji: "✨",
    description: "Tiny truths with a strange glow.",
    discoveries: [
      {
        id: 1,
        title: "Honey is ancient medicine.",
        content:
          "Archaeologists have found jars of honey thousands of years old that were still edible.",
      },
      {
        id: 2,
        title: "The brain loves a pattern.",
        content:
          "Even when nothing is truly there, the mind often fills the gaps with a convincing story.",
      },
      {
        id: 3,
        title: "Some plants can hear.",
        content:
          "Plants respond to vibration and environmental cues in ways scientists are still unpacking.",
      },
    ],
  },
  {
    id: "websites",
    name: "Websites",
    emoji: "🌐",
    description: "Little corners of the internet with character.",
    discoveries: [
      {
        id: 4,
        title: "The old web had personality.",
        content:
          "Before polished apps, the internet felt more like a scrapbook of handmade experiments.",
      },
      {
        id: 5,
        title: "An early homepage can still feel magical.",
        content:
          "Simple personal sites once felt like tiny rooms built from curiosity and confidence.",
      },
      {
        id: 6,
        title: "The web was once delightfully messy.",
        content:
          "That roughness is part of what made it feel alive and human.",
      },
    ],
  },
  {
    id: "games",
    name: "Games",
    emoji: "🎲",
    description: "Quick play that slips into your day.",
    discoveries: [
      {
        id: 7,
        title: "A tiny game can become a ritual.",
        content:
          "Sometimes the simplest little challenge is the one that makes a day feel a bit brighter.",
      },
      {
        id: 8,
        title: "A good puzzle rewards patience.",
        content:
          "The best small games often feel like a private conversation between your brain and the screen.",
      },
      {
        id: 9,
        title: "Play can be a reset button.",
        content:
          "Even a brief interaction can change the mood of a moment.",
      },
    ],
  },
  {
    id: "animals",
    name: "Animals",
    emoji: "🐾",
    description: "The animal kingdom is endlessly strange.",
    discoveries: [
      {
        id: 10,
        title: "Octopuses seem to dream.",
        content:
          "Their brains show activity during sleep that looks surprisingly rich and complex.",
      },
      {
        id: 11,
        title: "Bats use sound like a flashlight.",
        content:
          "Echolocation lets them navigate in the dark with extraordinary precision.",
      },
      {
        id: 12,
        title: "Butterflies taste with their feet.",
        content:
          "Their feet are tiny chemical detectors that help them choose the right plant to land on.",
      },
    ],
  },
  {
    id: "space",
    name: "Space",
    emoji: "🚀",
    description: "Quiet truths from the edges of the sky.",
    discoveries: [
      {
        id: 13,
        title: "Venus has a very strange day.",
        content:
          "A day on Venus lasts longer than a full year there, which sounds impossible until you see the numbers.",
      },
      {
        id: 14,
        title: "The Moon can fool your eyes.",
        content:
          "It looks larger near the horizon because the brain is comparing it with nearby objects.",
      },
      {
        id: 15,
        title: "Neptune was predicted before it was seen.",
        content:
          "Astronomers worked out where it should be with math long before telescopes confirmed it.",
      },
    ],
  },
  {
    id: "history",
    name: "History",
    emoji: "🏛️",
    description: "Old stories still surprise us.",
    discoveries: [
      {
        id: 16,
        title: "The Romans loved public baths.",
        content:
          "Bathhouses were social spaces where people exercised, chatted, and relaxed together.",
      },
      {
        id: 17,
        title: "The Library of Alexandria was extraordinary.",
        content:
          "It gathered knowledge from across the ancient world before its destruction.",
      },
      {
        id: 18,
        title: "Ancient maps could be delightfully wrong.",
        content:
          "Early cartographers mixed myth, travel stories, and geography into one bold picture.",
      },
    ],
  },
  {
    id: "art",
    name: "Art",
    emoji: "🎨",
    description: "A small visual surprise can change the whole mood.",
    discoveries: [
      {
        id: 19,
        title: "A simple image can feel like a memory.",
        content:
          "Some artworks work because they suggest a story without ever explaining it.",
      },
      {
        id: 20,
        title: "Art often works through implication.",
        content:
          "A subtle gesture can carry more emotional weight than a loud statement.",
      },
      {
        id: 21,
        title: "Colour can shape the atmosphere.",
        content:
          "A muted palette can make a piece feel calm, haunted, or intimate in an instant.",
      },
    ],
  },
  {
    id: "technology",
    name: "Technology",
    emoji: "💡",
    description: "Small inventions with big afterlives.",
    discoveries: [
      {
        id: 22,
        title: "The floppy disk stayed longer than expected.",
        content:
          "It was once the simplest way to carry a file, and it lingered far longer than anyone predicted.",
      },
      {
        id: 23,
        title: "The mouse was once called a pointing device.",
        content:
          "The shorter name simply felt more natural to people, so it stuck.",
      },
      {
        id: 24,
        title: "A tiny invention can change a whole day.",
        content:
          "The familiar tools we use every day were once strange, experimental ideas.",
      },
    ],
  },
];

export default surpriseCategories;
