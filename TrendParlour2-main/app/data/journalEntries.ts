export type JournalCategorySlug =
  | "animals"
  | "everyday-science"
  | "history"
  | "internet-culture"
  | "language"
  | "psychology"
  | "technology"
  | "weird-facts";

export type JournalPlaygroundLink = {
  label: string;
  href: string;
};

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
  relatedPlaygrounds?: JournalPlaygroundLink[];
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
    slug: "technology",
    label: "Technology",
    description: "Small inventions and interface habits with bigger stories behind them.",
  },
  {
    slug: "psychology",
    label: "Psychology",
    description: "The attention tricks and mind habits that make ordinary moments feel strange.",
  },
  {
    slug: "animals",
    label: "Animals",
    description: "Tiny behaviors from the animal world that turn out to be wonderfully specific.",
  },
  {
    slug: "language",
    label: "Language",
    description: "Words, abbreviations, and phrases with backstories that refuse to stay simple.",
  },
  {
    slug: "history",
    label: "History",
    description: "Old habits, outdated ideas, and the strange reasons they stuck around.",
  },
  {
    slug: "everyday-science",
    label: "Everyday Science",
    description: "Familiar things with the kind of physics and biology that reward a second look.",
  },
  {
    slug: "internet-culture",
    label: "Internet Culture",
    description: "Shared web rituals, old codes, and digital habits the internet made famous.",
  },
  {
    slug: "weird-facts",
    label: "Weird Facts",
    description: "Curious truths that feel a little too strange to be ordinary.",
  },
];

export const journalEntries: JournalEntry[] = [
  {
    slug: "why-is-a-computer-mouse-called-a-mouse",
    title: "Why is a computer mouse called a mouse?",
    excerpt:
      "A pointing device got a mammal name because the shape, cord, and feel were easier to remember than its circuitry.",
    category: "Technology",
    categorySlug: "technology",
    publishedAt: "2026-08-01",
    updatedAt: "2026-08-05",
    readingTime: "4 min read",
    content: [
      "The original mouse was a small, hand-sized pointing device built in the 1960s, and one of its early prototypes had a cable trailing out the back like a tail.",
      "That gave people an easy visual hook. Instead of a dry technical label, they got a word that felt familiar, compact, and slightly mischievous.",
      "The name stuck because it described the thing you could see at a glance: a little object that sat on the desk and scurried the cursor around the screen.",
    ],
    relatedExperience: "/challenge",
    relatedExperienceLabel: "Test your reflexes",
    relatedPlaygrounds: [
      { label: "Test your reflexes", href: "/challenge" },
      { label: "Play a mini game", href: "/play" },
    ],
    tags: ["technology", "design", "history"],
    relatedSlugs: ["why-did-the-internet-invent-the-404-error", "why-is-ok-such-a-strange-word"],
  },
  {
    slug: "why-does-your-brain-notice-your-name-in-a-noisy-room",
    title: "Why does your brain notice your name in a noisy room?",
    excerpt:
      "Your attention is not a single spotlight. It is a filter that keeps checking for personally important signals.",
    category: "Psychology",
    categorySlug: "psychology",
    publishedAt: "2026-08-02",
    updatedAt: "2026-08-06",
    readingTime: "5 min read",
    content: [
      "The effect is often called the cocktail party effect. Even when a room is loud, your brain keeps a background watch for cues that matter to you.",
      "Your own name is one of those cues. It is familiar, meaningful, and linked to you so strongly that it can break through the noise.",
      "That does not mean your brain is listening to everything equally. It means some information gets priority before the rest of the room reaches full awareness.",
    ],
    relatedExperience: "/challenge",
    relatedExperienceLabel: "Test your reflexes",
    relatedPlaygrounds: [
      { label: "Test your reflexes", href: "/challenge" },
      { label: "Play a mini game", href: "/play" },
    ],
    tags: ["psychology", "attention", "perception"],
    relatedSlugs: ["why-is-ok-such-a-strange-word", "why-did-the-internet-invent-the-404-error"],
  },
  {
    slug: "why-do-cats-purr",
    title: "Why do cats purr?",
    excerpt:
      "A purr is a tiny engine of vibration: comforting, communicative, and still a little mysterious.",
    category: "Animals",
    categorySlug: "animals",
    publishedAt: "2026-08-03",
    updatedAt: "2026-08-06",
    readingTime: "3 min read",
    content: [
      "Cats purr while resting, but also in other situations, so the sound is not just a single mood in audio form.",
      "The vibration appears to come from muscles around the larynx and airflow through the voice box, though researchers still debate every detail of the mechanism.",
      "What is clear is that purring can be part of comfort, communication, and perhaps self-soothing. A cat is doing more than making a cute noise.",
    ],
    relatedExperience: "/surprise",
    relatedExperienceLabel: "Open a surprise discovery",
    relatedPlaygrounds: [
      { label: "Open a surprise discovery", href: "/surprise" },
      { label: "See something weird", href: "/weird" },
    ],
    tags: ["animals", "behavior", "sound"],
    relatedSlugs: ["why-does-ice-float-in-water", "why-do-bananas-curve"],
  },
  {
    slug: "why-is-ok-such-a-strange-word",
    title: "Why is OK such a strange word?",
    excerpt:
      "Two letters became one of the most useful words in the language, and its history is delightfully messy.",
    category: "Language",
    categorySlug: "language",
    publishedAt: "2026-08-04",
    updatedAt: "2026-08-06",
    readingTime: "4 min read",
    content: [
      "OK took off in 19th-century American newspaper humor, where playful abbreviations and deliberate misspellings were common currency.",
      "It later got a push from political campaigning, which helped turn a joke into a durable everyday word.",
      "The result is a tiny linguistic oddity that works as an answer, a pause, a reassurance, and sometimes a shrug.",
    ],
    relatedExperience: "/would-you-rather",
    relatedExperienceLabel: "Try a would-you-rather dilemma",
    relatedPlaygrounds: [
      { label: "Try a would-you-rather dilemma", href: "/would-you-rather" },
      { label: "Make me laugh", href: "/laugh" },
    ],
    tags: ["language", "etymology", "internet"],
    relatedSlugs: ["why-is-a-computer-mouse-called-a-mouse", "why-did-the-internet-invent-the-404-error"],
  },
  {
    slug: "why-did-people-use-leeches-in-medicine",
    title: "Why did people use leeches in medicine?",
    excerpt:
      "Leeches were not a random medical quirk. They made sense inside an older theory of how the body stayed balanced.",
    category: "History",
    categorySlug: "history",
    publishedAt: "2026-08-05",
    updatedAt: "2026-08-06",
    readingTime: "4 min read",
    content: [
      "For centuries, many doctors worked with the idea that illness came from imbalanced humors. Within that framework, bloodletting seemed reasonable rather than bizarre.",
      "Leeches were useful because they could remove blood in a controlled way, and their saliva contains compounds that prevent clotting. That made them practical long before modern medicine had better options.",
      "Today, leeches still have a small place in some reconstructive procedures. That makes them one of history’s strangest medical tools to survive into the present.",
    ],
    relatedExperience: "/weird",
    relatedExperienceLabel: "See something weird",
    relatedPlaygrounds: [
      { label: "See something weird", href: "/weird" },
      { label: "Open a surprise discovery", href: "/surprise" },
    ],
    tags: ["history", "medicine", "science"],
    relatedSlugs: ["why-is-ok-such-a-strange-word", "why-did-the-internet-invent-the-404-error"],
  },
  {
    slug: "why-does-ice-float-in-water",
    title: "Why does ice float in water?",
    excerpt:
      "Water breaks a common rule when it freezes, and that odd behavior helps shape life on Earth.",
    category: "Everyday Science",
    categorySlug: "everyday-science",
    publishedAt: "2026-08-06",
    updatedAt: "2026-08-07",
    readingTime: "4 min read",
    content: [
      "Most liquids become denser as they cool, but water is unusual. When it freezes, hydrogen bonds arrange the molecules into an open crystal structure.",
      "That open structure makes ice less dense than liquid water, which is why it floats instead of sinking.",
      "Floating ice insulates the water below it, helping ponds and lakes stay livable for fish and other creatures during winter.",
    ],
    relatedExperience: "/surprise",
    relatedExperienceLabel: "Open a surprise discovery",
    relatedPlaygrounds: [
      { label: "Open a surprise discovery", href: "/surprise" },
      { label: "See something weird", href: "/weird" },
    ],
    tags: ["science", "water", "physics"],
    relatedSlugs: ["why-do-bananas-curve", "why-do-cats-purr"],
  },
  {
    slug: "why-did-the-internet-invent-the-404-error",
    title: "Why did the internet invent the 404 error?",
    excerpt:
      "A missing page needed a small, universal way to say so, and 404 became the web’s polite shrug.",
    category: "Internet Culture",
    categorySlug: "internet-culture",
    publishedAt: "2026-08-07",
    updatedAt: "2026-08-08",
    readingTime: "4 min read",
    content: [
      "404 is an HTTP status code for a page that could not be found. The server is there, but the requested address is not.",
      "The exact origin story is less mythic than people sometimes expect, but the code became part of the web’s shared vocabulary because it was short, consistent, and easy to standardize.",
      "That is the internet in miniature: a tiny signal that quietly tells millions of people the same thing at the same time.",
    ],
    relatedExperience: "/play",
    relatedExperienceLabel: "Play a mini game",
    relatedPlaygrounds: [
      { label: "Play a mini game", href: "/play" },
      { label: "Try a would-you-rather dilemma", href: "/would-you-rather" },
    ],
    tags: ["internet", "web", "design"],
    relatedSlugs: ["why-is-a-computer-mouse-called-a-mouse", "why-is-ok-such-a-strange-word"],
  },
  {
    slug: "why-do-bananas-curve",
    title: "Why do bananas curve?",
    excerpt:
      "The banana’s shape comes from growth, gravity, and a plant’s quiet attempt to keep reaching upward.",
    category: "Weird Facts",
    categorySlug: "weird-facts",
    publishedAt: "2026-08-08",
    updatedAt: "2026-08-09",
    readingTime: "4 min read",
    content: [
      "Bananas do not begin life as a finished crescent. As the fruit develops, it hangs downward from the bunch while also growing toward light.",
      "That changing orientation creates a gentle tug-of-war between gravity and growth, which helps shape the final curve.",
      "The result looks almost designed, but it is really the product of a plant following a very ordinary set of rules in an unusual combination.",
    ],
    relatedExperience: "/weird",
    relatedExperienceLabel: "See something weird",
    relatedPlaygrounds: [
      { label: "See something weird", href: "/weird" },
      { label: "Open a surprise discovery", href: "/surprise" },
    ],
    tags: ["weird facts", "plants", "science"],
    relatedSlugs: ["why-does-ice-float-in-water", "why-do-cats-purr"],
  },
];

export function getJournalCategoryBySlug(slug: string) {
  return journalCategories.find((category) => category.slug === slug);
}

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
