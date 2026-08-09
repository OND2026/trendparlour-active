export type JournalCategorySlug =
  | "weird-facts"
  | "psychology"
  | "technology"
  | "internet-culture"
  | "strange-history"
  | "curious-things";

export type JournalEntry = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: JournalCategorySlug;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  content: string[];
  relatedExperience: string;
  relatedExperienceLabel: string;
  tags: string[];
  relatedSlugs?: string[];
};

export type JournalCategory = {
  slug: JournalCategorySlug;
  label: string;
  description: string;
};

export const journalCategories: JournalCategory[] = [
  {
    slug: "weird-facts",
    label: "Weird Facts",
    description: "Curious truths that feel a little too strange to be ordinary.",
  },
  {
    slug: "psychology",
    label: "Psychology",
    description: "The odd little patterns that shape how we think and behave.",
  },
  {
    slug: "technology",
    label: "Technology",
    description: "Small inventions and digital habits with larger stories behind them.",
  },
  {
    slug: "internet-culture",
    label: "Internet Culture",
    description: "The web’s most memorable rituals, inside jokes, and strange rituals.",
  },
  {
    slug: "strange-history",
    label: "Strange History",
    description: "Moments from the past that still feel wonderfully out of place.",
  },
  {
    slug: "curious-things",
    label: "Curious Things",
    description: "Tiny discoveries worth keeping around for later.",
  },
];

export const journalEntries: JournalEntry[] = [
  {
    slug: "why-the-internet-loves-odd-details",
    title: "Why the internet loves odd details",
    excerpt:
      "The web is full of tiny observations that feel oddly important. That is part of the magic.",
    category: "Internet Culture",
    categorySlug: "internet-culture",
    publishedAt: "2026-08-01",
    updatedAt: "2026-08-05",
    readingTime: "4 min read",
    content: [
      "The internet is not only built from big ideas. It also runs on tiny fragments of unusual knowledge that feel just specific enough to be shared instantly.",
      "A strange fact, a weirdly memorable image, or a half-serious observation can travel faster than a polished argument because it feels personal. It gives people something to pass along with a little glow of recognition.",
      "That is why journaling the odd details matters. They are often the first thing that makes a curious person pause, click, and keep going.",
    ],
    relatedExperience: "/would-you-rather",
    relatedExperienceLabel: "Try a would-you-rather dilemma",
    tags: ["internet culture", "curiosity", "sharing"],
    relatedSlugs: ["how-the-brain-fills-gaps", "the-quiet-power-of-patterns"],
  },
  {
    slug: "how-the-brain-fills-gaps",
    title: "How the brain fills gaps",
    excerpt:
      "The mind often completes missing information before we even notice it is doing so.",
    category: "Psychology",
    categorySlug: "psychology",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-06",
    readingTime: "5 min read",
    content: [
      "People often assume memory works like a perfect recorder. In reality, the mind is a compiler. It gathers fragments, guesses at the rest, and presents a version of reality that feels coherent.",
      "That habit can be charming when it helps us make sense of a messy day. It can also be misleading when we are trying to remember something with precision.",
      "Curiosity works in a similar way. The mind reaches for patterns, and the story becomes more vivid than the evidence at first glance.",
    ],
    relatedExperience: "/challenge",
    relatedExperienceLabel: "Test your reflexes",
    tags: ["psychology", "memory", "attention"],
    relatedSlugs: ["why-the-internet-loves-odd-details"],
  },
  {
    slug: "the-quiet-power-of-patterns",
    title: "The quiet power of patterns",
    excerpt:
      "Patterns are everywhere, and they often shape what feels familiar, interesting, or worth noticing.",
    category: "Curious Things",
    categorySlug: "curious-things",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-06",
    readingTime: "3 min read",
    content: [
      "Patterns are rarely dramatic on their own. They arrive as repetition, rhythm, or a familiar sequence that makes the world feel a little more legible.",
      "That quiet steadiness is part of why they are so powerful. They help us notice what matters and what is merely noise.",
      "A small pattern can turn into a new idea, a playful habit, or a surprising connection between two things that seemed unrelated.",
    ],
    relatedExperience: "/surprise",
    relatedExperienceLabel: "Open a surprise discovery",
    tags: ["patterns", "observation", "discovery"],
    relatedSlugs: ["why-the-internet-loves-odd-details", "how-the-brain-fills-gaps"],
  },
  {
    slug: "the-small-rituals-that-make-tech-feel-human",
    title: "The small rituals that make tech feel human",
    excerpt:
      "Everyday digital habits often carry more personality than they first appear.",
    category: "Technology",
    categorySlug: "technology",
    publishedAt: "2026-08-04",
    updatedAt: "2026-08-06",
    readingTime: "4 min read",
    content: [
      "Technology becomes memorable not only when it is powerful, but when it feels thoughtfully shaped for human use.",
      "A tiny animation, a gentle nudge, or a well-timed pause can make a tool feel warm instead of mechanical. It becomes part of a small ritual.",
      "That is why playful interfaces still matter. They make curiosity feel easier to follow.",
    ],
    relatedExperience: "/play",
    relatedExperienceLabel: "Play a mini game",
    tags: ["technology", "interfaces", "design"],
    relatedSlugs: ["why-the-internet-loves-odd-details"],
  },
];

export function getJournalEntryBySlug(slug: string) {
  return journalEntries.find((entry) => entry.slug === slug);
}

export function getJournalEntriesByCategory(categorySlug?: string | null) {
  if (!categorySlug) {
    return journalEntries;
  }

  return journalEntries.filter((entry) => entry.categorySlug === categorySlug);
}

export function getRelatedEntries(slug: string) {
  const entry = getJournalEntryBySlug(slug);
  if (!entry) {
    return [];
  }

  const related = entry.relatedSlugs
    ? entry.relatedSlugs
        .map((relatedSlug) => getJournalEntryBySlug(relatedSlug))
        .filter((item): item is JournalEntry => Boolean(item))
    : [];

  return related.slice(0, 2);
}
