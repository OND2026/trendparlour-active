export type WouldYouRatherQuestion = {
  id: number;
  category: string;
  prompt: string;
  optionA: string;
  optionB: string;
};

const wouldYouRatherQuestions: WouldYouRatherQuestion[] = [
  {
    id: 1,
    category: "Chaos",
    prompt: "Would you rather every chair in the room clap when you stand up, or every door say your name?",
    optionA: "Every chair clap when I stand up",
    optionB: "Every door say my name",
  },
  {
    id: 2,
    category: "Animals",
    prompt: "Would you rather have a goose as your lawyer, or a squirrel as your accountant?",
    optionA: "A goose as my lawyer",
    optionB: "A squirrel as my accountant",
  },
  {
    id: 3,
    category: "Food",
    prompt: "Would you rather eat soup that whispers your secrets, or toast that knows your deepest insecurity?",
    optionA: "Whispering soup",
    optionB: "Judgmental toast",
  },
  {
    id: 4,
    category: "Internet",
    prompt: "Would you rather have your browser history read aloud in public, or your search bar auto-complete your worst thoughts?",
    optionA: "Browser history read aloud",
    optionB: "Search bar confessing my thoughts",
  },
  {
    id: 5,
    category: "Workplace",
    prompt: "Would you rather have a coworker who says “just one more thing” every five minutes, or one who says “quick question” and then vanishes?",
    optionA: "The endless one-more-thing coworker",
    optionB: "The vanishing quick-question coworker",
  },
  {
    id: 6,
    category: "Impossible Choices",
    prompt: "Would you rather be the most interesting person in a room full of strangers, or the most comfortable person in a room full of your exes?",
    optionA: "Most interesting in a room of strangers",
    optionB: "Most comfortable in a room of exes",
  },
  {
    id: 7,
    category: "Social",
    prompt: "Would you rather accidentally become the group chat’s emotional support mascot, or the person who always sends the wrong meme?",
    optionA: "Emotional support mascot",
    optionB: "The wrong meme person",
  },
  {
    id: 8,
    category: "Embarrassment",
    prompt: "Would you rather have every awkward pause in your life be narrated by a British narrator, or every compliment be delivered by a suspiciously dramatic AI?",
    optionA: "British narration for awkward pauses",
    optionB: "Dramatic AI compliments",
  },
  {
    id: 9,
    category: "Food",
    prompt: "Would you rather have a sandwich that only appears when you are stressed, or a smoothie that gives life advice?",
    optionA: "Stress sandwich",
    optionB: "Life-advice smoothie",
  },
  {
    id: 10,
    category: "Animals",
    prompt: "Would you rather have a cat that can predict your bad decisions, or a dog that can’t stop narrating your day?",
    optionA: "Cat predicting my bad decisions",
    optionB: "Dog narrating my day",
  },
  {
    id: 11,
    category: "Chaos",
    prompt: "Would you rather have one tiny sparkly portal in your apartment, or one very judgmental houseplant?",
    optionA: "Tiny sparkly portal",
    optionB: "Judgmental houseplant",
  },
  {
    id: 12,
    category: "Wholesome Chaos",
    prompt: "Would you rather have your phone autocorrect every sincere text into a poem, or every joke into a legal disclaimer?",
    optionA: "Sincere texts become poems",
    optionB: "Jokes become legal disclaimers",
  },
  {
    id: 13,
    category: "Internet",
    prompt: "Would you rather be followed by seven algorithmic pigeons, or one extremely confident chatbot?",
    optionA: "Seven algorithmic pigeons",
    optionB: "One extremely confident chatbot",
  },
  {
    id: 14,
    category: "Sleep",
    prompt: "Would you rather dream in a different accent every night, or wake up with a completely different opinion about bread?",
    optionA: "Dream in a new accent nightly",
    optionB: "Wake up hating or loving bread",
  },
  {
    id: 15,
    category: "Social",
    prompt: "Would you rather be the person everyone asks for advice, or the person everyone asks for a snack?",
    optionA: "The advice person",
    optionB: "The snack person",
  },
  {
    id: 16,
    category: "Impossible Choices",
    prompt: "Would you rather have a tiny invisible orchestra follow you everywhere, or a very obvious cloud of dramatic fog?",
    optionA: "Invisible orchestra everywhere",
    optionB: "Dramatic fog cloud",
  },
  {
    id: 17,
    category: "Food",
    prompt: "Would you rather have pancakes that can read your mood, or noodles that always know the truth?",
    optionA: "Mood-reading pancakes",
    optionB: "Truth-knowing noodles",
  },
  {
    id: 18,
    category: "Chaos",
    prompt: "Would you rather have one suspiciously wise candle, or a lamp that gives terrible life advice?",
    optionA: "Suspiciously wise candle",
    optionB: "Lamp giving terrible life advice",
  },
  {
    id: 19,
    category: "Workplace",
    prompt: "Would you rather have a boss who says “we should keep this simple” before making everything complicated, or one who says “let’s circle back” and never circles back?",
    optionA: "Complicated simple boss",
    optionB: "Never-circles-back boss",
  },
  {
    id: 20,
    category: "Wholesome Chaos",
    prompt: "Would you rather accidentally become the local legend of a tiny town, or the mysterious person in a very specific group chat?",
    optionA: "Local legend of a tiny town",
    optionB: "Mysterious group chat person",
  },
];

export default wouldYouRatherQuestions;
