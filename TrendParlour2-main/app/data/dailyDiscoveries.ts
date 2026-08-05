export type DailyDiscoveryItem = {
  id: number;
  emoji: string;
  category: string;
  title: string;
  description: string;
};

const dailyDiscoveries: DailyDiscoveryItem[] = [
  {
    id: 1,
    emoji: "🐙",
    category: "Animals",
    title: "Octopuses dream.",
    description:
      "While sleeping, octopuses rapidly change colour, suggesting complex brain activity.",
  },
  {
    id: 2,
    emoji: "🌌",
    category: "Space",
    title: "The Moon once had a magma ocean.",
    description:
      "Scientists believe the Moon formed with a molten surface that later cooled into the crust we know today.",
  },
  {
    id: 3,
    emoji: "🧠",
    category: "Psychology",
    title: "Your brain loves patterns.",
    description:
      "The mind is wired to spot familiar shapes quickly, even when the pattern is only imagined.",
  },
  {
    id: 4,
    emoji: "🧪",
    category: "Science",
    title: "Honey never spoils.",
    description:
      "Archaeologists have found pots of honey thousands of years old that were still edible.",
  },
  {
    id: 5,
    emoji: "📜",
    category: "Ancient History",
    title: "The Romans loved public baths.",
    description:
      "Bathhouses were social centres in Roman life, where people exercised, chatted, and relaxed.",
  },
  {
    id: 6,
    emoji: "🌐",
    category: "Internet History",
    title: "The first website is still online.",
    description:
      "The original CERN website from 1991 still exists as a historical record of the early web.",
  },
  {
    id: 7,
    emoji: "🦜",
    category: "Animals",
    title: "Parrots can learn human sounds.",
    description:
      "Some parrots can mimic voices with startling accuracy and even use them in social contexts.",
  },
  {
    id: 8,
    emoji: "🧬",
    category: "Technology",
    title: "DNA is a biological language.",
    description:
      "Cells read DNA with a chemical code that is surprisingly similar to how computers store instructions.",
  },
  {
    id: 9,
    emoji: "🗣️",
    category: "Language",
    title: "The word 'robot' is much older than you think.",
    description:
      "It came from Czech and was popularised by Karel Čapek long before modern machines existed.",
  },
  {
    id: 10,
    emoji: "🦔",
    category: "Animals",
    title: "Hedgehogs can be surprisingly fast.",
    description:
      "Despite their round shape, they can run with impressive speed when startled.",
  },
  {
    id: 11,
    emoji: "🪐",
    category: "Space",
    title: "A day on Venus is longer than its year.",
    description:
      "Venus rotates so slowly that one full day lasts longer than a full trip around the Sun.",
  },
  {
    id: 12,
    emoji: "☕",
    category: "Human Behaviour",
    title: "The smell of coffee can prime your mood.",
    description:
      "Even the scent alone can shift how alert or relaxed people feel before the first sip.",
  },
  {
    id: 13,
    emoji: "🦠",
    category: "Science",
    title: "Bacteria can survive in space.",
    description:
      "Some microorganisms have shown remarkable resilience when exposed to the vacuum of space.",
  },
  {
    id: 14,
    emoji: "🕰️",
    category: "Ancient History",
    title: "The sundial predates modern clocks by millennia.",
    description:
      "Ancient civilisations used shadows and sunlight to measure the passing of time.",
  },
  {
    id: 15,
    emoji: "💾",
    category: "Technology",
    title: "The floppy disk once ruled the office.",
    description:
      "Before cloud storage, these plastic squares were the default way to carry files around.",
  },
  {
    id: 16,
    emoji: "🧩",
    category: "Psychology",
    title: "The brain fills in gaps automatically.",
    description:
      "When information is incomplete, the mind often creates a plausible version of reality.",
  },
  {
    id: 17,
    emoji: "🖥️",
    category: "Internet History",
    title: "The first viral meme was not a meme.",
    description:
      "Early internet culture spread images and jokes through simple message boards long before social apps existed.",
  },
  {
    id: 18,
    emoji: "🦇",
    category: "Animals",
    title: "Bats use echolocation like a built-in sonar.",
    description:
      "They emit clicks and listen for echoes to navigate the dark with remarkable precision.",
  },
  {
    id: 19,
    emoji: "🌍",
    category: "Human Behaviour",
    title: "People often copy the behaviour of strangers.",
    description:
      "Social mimicry can quietly influence how we stand, speak, and respond in shared spaces.",
  },
  {
    id: 20,
    emoji: "🗺️",
    category: "Ancient History",
    title: "Some ancient maps were surprisingly imaginative.",
    description:
      "Early cartographers often blended mythology, travel stories, and geography into one map.",
  },
  {
    id: 21,
    emoji: "🌊",
    category: "Science",
    title: "The ocean stores enormous heat.",
    description:
      "Oceans absorb and release energy slowly, which helps regulate the planet's climate.",
  },
  {
    id: 22,
    emoji: "📡",
    category: "Technology",
    title: "Satellites can see city lights at night.",
    description:
      "From space, human settlements glow like constellations, revealing how cities spread.",
  },
  {
    id: 23,
    emoji: "🪐",
    category: "Space",
    title: "Neptune was discovered by mathematics.",
    description:
      "Astronomers predicted its existence before they ever saw it through a telescope.",
  },
  {
    id: 24,
    emoji: "🧵",
    category: "Language",
    title: "Many languages use the same sound patterns.",
    description:
      "Humans across the world often share structural tendencies when building words and sentences.",
  },
  {
    id: 25,
    emoji: "🦥",
    category: "Animals",
    title: "Sloths are slow for a reason.",
    description:
      "Their energy-saving lifestyle helps them survive on low-nutrient diets.",
  },
  {
    id: 26,
    emoji: "👀",
    category: "Psychology",
    title: "People remember unusual moments more vividly.",
    description:
      "The brain tends to store surprising events with more detail than ordinary ones.",
  },
  {
    id: 27,
    emoji: "💡",
    category: "Technology",
    title: "The humble light bulb changed time itself.",
    description:
      "Electric lighting extended productive evenings and reshaped modern routines.",
  },
  {
    id: 28,
    emoji: "🧠",
    category: "Human Behaviour",
    title: "People often overestimate how much they notice.",
    description:
      "Attention is selective, and the mind can miss more than it realises.",
  },
  {
    id: 29,
    emoji: "📚",
    category: "Internet History",
    title: "The early web was full of personal homepages.",
    description:
      "Before social platforms, people curated their own little corners of the internet.",
  },
  {
    id: 30,
    emoji: "🦘",
    category: "Animals",
    title: "Kangaroos can hop efficiently over long distances.",
    description:
      "Their movement stores energy in tendons and helps them travel with less effort.",
  },
  {
    id: 31,
    emoji: "🪐",
    category: "Space",
    title: "The Sun is not a solid object.",
    description:
      "It is a glowing ball of plasma that slowly changes over time.",
  },
  {
    id: 32,
    emoji: "🗣️",
    category: "Language",
    title: "Some languages have no word for blue.",
    description:
      "Colour vocabulary can differ dramatically depending on cultural history and environment.",
  },
  {
    id: 33,
    emoji: "🏛️",
    category: "Ancient History",
    title: "The Library of Alexandria was a beacon of learning.",
    description:
      "It gathered knowledge from across the ancient world before its destruction.",
  },
  {
    id: 34,
    emoji: "🧪",
    category: "Science",
    title: "Some metals can 'remember' their shape.",
    description:
      "Shape-memory alloys can return to a previous form when heated.",
  },
  {
    id: 35,
    emoji: "🖱️",
    category: "Technology",
    title: "The mouse was originally called a pointing device.",
    description:
      "The modern name stuck because it felt more natural to people.",
  },
  {
    id: 36,
    emoji: "🦋",
    category: "Animals",
    title: "Butterflies taste with their feet.",
    description:
      "Their feet can detect chemical cues that help them choose where to land.",
  },
  {
    id: 37,
    emoji: "🧠",
    category: "Psychology",
    title: "Tiny choices can reshape a day.",
    description:
      "Small decisions often accumulate into surprisingly large shifts in mood and behaviour.",
  },
  {
    id: 38,
    emoji: "🪼",
    category: "Science",
    title: "Jellyfish have been drifting for hundreds of millions of years.",
    description:
      "Their simple body plan has proved astonishingly durable across deep time.",
  },
  {
    id: 39,
    emoji: "🌐",
    category: "Internet History",
    title: "The first online communities changed the internet.",
    description:
      "Early chat rooms and forums created a culture of shared curiosity before mainstream social media.",
  },
  {
    id: 40,
    emoji: "💬",
    category: "Human Behaviour",
    title: "Humans are better at noticing gaps than details.",
    description:
      "The mind often picks up missing pieces faster than it notices what is fully present.",
  },
  {
    id: 41,
    emoji: "🏺",
    category: "Ancient History",
    title: "The ancient Greeks loved puzzles.",
    description:
      "Many early mathematical ideas were shaped by riddles, geometry, and playful conjecture.",
  },
  {
    id: 42,
    emoji: "📡",
    category: "Technology",
    title: "Wi-Fi signals travel through walls.",
    description:
      "They do not need a direct line of sight to reach devices in nearby rooms.",
  },
  {
    id: 43,
    emoji: "🪐",
    category: "Space",
    title: "A solar eclipse can make the day feel strangely dim.",
    description:
      "Even a partial eclipse can alter the light and mood of an outdoor scene.",
  },
  {
    id: 44,
    emoji: "🗣️",
    category: "Language",
    title: "Some words travel across languages with little change.",
    description:
      "Trade, conquest, and migration have long carried vocabulary between distant cultures.",
  },
  {
    id: 45,
    emoji: "🦢",
    category: "Animals",
    title: "Swans often form strong pair bonds.",
    description:
      "Many swan species are highly social and show long-term loyalty to a mate.",
  },
  {
    id: 46,
    emoji: "🧠",
    category: "Psychology",
    title: "The mind can be fooled by a familiar face.",
    description:
      "Recognition is fast, but it can also be biased by expectation and memory.",
  },
  {
    id: 47,
    emoji: "📺",
    category: "Internet History",
    title: "Early internet culture was deeply experimental.",
    description:
      "People used simple tools to build strange and inventive communities online.",
  },
  {
    id: 48,
    emoji: "🌙",
    category: "Space",
    title: "The Moon can look larger near the horizon.",
    description:
      "This is an illusion caused by how the brain compares it with nearby objects.",
  },
  {
    id: 49,
    emoji: "🗿",
    category: "Ancient History",
    title: "Stone tools appeared long before writing.",
    description:
      "Human innovation began with practical objects that shaped daily survival.",
  },
  {
    id: 50,
    emoji: "🧬",
    category: "Science",
    title: "Some plants can communicate underground.",
    description:
      "Roots and fungi can connect plants in ways that help them share resources.",
  },
  {
    id: 51,
    emoji: "🦊",
    category: "Animals",
    title: "Foxes use sound and silence in clever ways.",
    description:
      "Their behaviour can shift quickly depending on danger, food, and environment.",
  },
  {
    id: 52,
    emoji: "🧵",
    category: "Language",
    title: "The way we speak can shape how we think.",
    description:
      "Language does not just describe experience; it can influence what we notice.",
  },
  {
    id: 53,
    emoji: "🌐",
    category: "Internet History",
    title: "The web was once a much stranger place.",
    description:
      "Before polished apps, the internet felt more like a living scrapbook of experiments.",
  },
  {
    id: 54,
    emoji: "🖼️",
    category: "Human Behaviour",
    title: "People tend to trust familiar visuals.",
    description:
      "Repeated shapes and layouts can make information feel more credible than it really is.",
  },
  {
    id: 55,
    emoji: "🪨",
    category: "Ancient History",
    title: "Ancient engineers understood water pressure well.",
    description:
      "Early hydraulic systems were surprisingly sophisticated and practical.",
  },
  {
    id: 56,
    emoji: "🤖",
    category: "Technology",
    title: "Some simple machines still shape modern life.",
    description:
      "Levers, gears, and pulleys remain the hidden logic behind many everyday tools.",
  },
  {
    id: 57,
    emoji: "🛰️",
    category: "Space",
    title: "Astronauts can experience a strange sense of time.",
    description:
      "Orbit changes routine and light so dramatically that days can feel strangely elastic.",
  },
  {
    id: 58,
    emoji: "🦉",
    category: "Animals",
    title: "Owls can turn their heads with impressive flexibility.",
    description:
      "Their neck structure allows them to rotate far beyond what most animals can manage.",
  },
  {
    id: 59,
    emoji: "🧠",
    category: "Psychology",
    title: "The brain is deeply affected by context.",
    description:
      "A single experience can feel very different when the surroundings change.",
  },
  {
    id: 60,
    emoji: "🪴",
    category: "Science",
    title: "Plants can respond to sound.",
    description:
      "Some studies suggest that plants react to vibration and environmental cues in measurable ways.",
  },
];

export default dailyDiscoveries;
