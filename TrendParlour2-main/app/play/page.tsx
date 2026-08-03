"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import PageLayout from "../components/PageLayout";
import PageTitle from "../components/PageTitle";

type QuestionType =
  | "Which came first?"
  | "Which is true?"
  | "Which is larger?"
  | "Which lasts longer?"
  | "Which is faster?"
  | "Which is heavier?"
  | "Which is more common?"
  | "Which travels farther?"
  | "Which has more?"
  | "Which was invented first?"
  | "Which can survive longer?"
  | "Which contains more?";

type Question = {
  id: number;
  category: string;
  type: QuestionType;
  prompt: string;
  answerA: string;
  answerB: string;
  correctAnswer: "A" | "B";
  explanation: string;
};

type Phase = "question" | "revealed";

const questions: Question[] = [
  { id: 1, category: "Space", type: "Which came first?", prompt: "Which came first?", answerA: "The first moon landing", answerB: "The first artificial satellite", correctAnswer: "B", explanation: "Sputnik launched in 1957, while humans reached the moon in 1969." },
  { id: 2, category: "Animals", type: "Which is true?", prompt: "Which statement is true?", answerA: "Octopuses have three hearts", answerB: "Octopuses have two hearts", correctAnswer: "A", explanation: "They have three hearts: two pump blood to the gills and one pumps it around the body." },
  { id: 3, category: "Geography", type: "Which is larger?", prompt: "Which is larger?", answerA: "The Pacific Ocean", answerB: "All the continents combined", correctAnswer: "A", explanation: "The Pacific covers more area than all the landmasses on Earth combined." },
  { id: 4, category: "Nature", type: "Which lasts longer?", prompt: "Which lasts longer?", answerA: "A glacier", answerB: "A tree", correctAnswer: "A", explanation: "Some glaciers persist for thousands of years, far outliving most trees." },
  { id: 5, category: "History", type: "Which was invented first?", prompt: "Which was invented first?", answerA: "The printing press", answerB: "The internet", correctAnswer: "A", explanation: "The printing press arrived centuries before the internet reshaped communication." },
  { id: 6, category: "Food", type: "Which is more common?", prompt: "Which is more common?", answerA: "Bananas being berries", answerB: "Strawberries being berries", correctAnswer: "A", explanation: "Botanically, bananas fit the berry definition while strawberries do not." },
  { id: 7, category: "Space", type: "Which is faster?", prompt: "Which is faster?", answerA: "Light", answerB: "Sound", correctAnswer: "A", explanation: "Light travels far more quickly than sound in air, which is why lightning is seen before thunder is heard." },
  { id: 8, category: "Human body", type: "Which contains more?", prompt: "Which contains more?", answerA: "The average adult body’s water", answerB: "The average adult body’s fat", correctAnswer: "A", explanation: "Most adults are made up of roughly 50 to 60 percent water, which is more than their body fat in many cases." },
  { id: 9, category: "Animals", type: "Which can survive longer?", prompt: "Which can survive longer?", answerA: "A tardigrade without water", answerB: "A housefly without food", correctAnswer: "A", explanation: "Tardigrades can enter a near-death state and survive extreme drying for years." },
  { id: 10, category: "Technology", type: "Which was invented first?", prompt: "Which was invented first?", answerA: "The telephone", answerB: "The radio", correctAnswer: "B", explanation: "Radio developed before the telephone became a household tool." },
  { id: 11, category: "Geography", type: "Which is heavier?", prompt: "Which is heavier?", answerA: "A cubic meter of seawater", answerB: "A cubic meter of freshwater", correctAnswer: "A", explanation: "Salt makes seawater denser, so a given volume weighs a little more." },
  { id: 12, category: "Psychology", type: "Which is more common?", prompt: "Which is more common?", answerA: "Being right-handed", answerB: "Being left-handed", correctAnswer: "A", explanation: "Right-handedness is far more common across human populations." },
  { id: 13, category: "Nature", type: "Which travels farther?", prompt: "Which travels farther?", answerA: "A pollen grain on wind", answerB: "A pollen grain on a bee", correctAnswer: "A", explanation: "Wind can carry pollen across huge distances, while insects move it much more locally." },
  { id: 14, category: "History", type: "Which came first?", prompt: "Which came first?", answerA: "The first cities", answerB: "The first domesticated dogs", correctAnswer: "B", explanation: "Dogs were domesticated long before the first urban centers appeared." },
  { id: 15, category: "Weird facts", type: "Which is true?", prompt: "Which statement is true?", answerA: "Honey never spoils", answerB: "Honey spoils quickly", correctAnswer: "A", explanation: "Its low moisture and acidity make honey unusually stable over time." },
  { id: 16, category: "Science", type: "Which is larger?", prompt: "Which is larger?", answerA: "A blue whale’s heart", answerB: "A school bus", correctAnswer: "A", explanation: "A blue whale’s heart can be about the size of a small car." },
  { id: 17, category: "Animals", type: "Which lasts longer?", prompt: "Which lasts longer?", answerA: "A starfish", answerB: "A housefly", correctAnswer: "A", explanation: "Some starfish live for decades, while houseflies usually live only weeks." },
  { id: 18, category: "Technology", type: "Which came first?", prompt: "Which came first?", answerA: "The personal computer", answerB: "The smartphone", correctAnswer: "A", explanation: "Personal computers appeared before the rise of smartphones." },
  { id: 19, category: "Science", type: "Which is heavier?", prompt: "Which is heavier?", answerA: "A cubic meter of granite", answerB: "A cubic meter of wood", correctAnswer: "A", explanation: "Granite is much denser than most woods, so it weighs more for the same volume." },
  { id: 20, category: "Geography", type: "Which lasts longer?", prompt: "Which lasts longer?", answerA: "A mountain range", answerB: "A human lifetime", correctAnswer: "A", explanation: "Mountain ranges are shaped over millions of years, far beyond a single lifetime." },
  { id: 21, category: "History", type: "Which came first?", prompt: "Which came first?", answerA: "The compass", answerB: "Paper", correctAnswer: "B", explanation: "Paper appeared in China long before the compass became a navigational tool." },
  { id: 22, category: "Weird facts", type: "Which is true?", prompt: "Which statement is true?", answerA: "The Eiffel Tower grows taller in summer", answerB: "The Eiffel Tower grows taller in winter", correctAnswer: "A", explanation: "Heat expands the steel, so the tower rises slightly in warmer months." },
  { id: 23, category: "Space", type: "Which is larger?", prompt: "Which is larger?", answerA: "The distance from Earth to the moon", answerB: "The moon’s diameter", correctAnswer: "A", explanation: "The moon is much farther away than it is wide." },
  { id: 24, category: "Nature", type: "Which travels farther?", prompt: "Which travels farther?", answerA: "A lightning bolt", answerB: "A thunderclap", correctAnswer: "A", explanation: "The flash can be seen from far away, while the sound often fades faster over distance." },
  { id: 25, category: "Language", type: "Which is more common?", prompt: "Which is more common?", answerA: "The letter E in English", answerB: "The letter Q in English", correctAnswer: "A", explanation: "E appears far more often than Q in everyday English text." },
  { id: 26, category: "Animals", type: "Which can survive longer?", prompt: "Which can survive longer?", answerA: "A crocodile without food", answerB: "A rabbit without food", correctAnswer: "A", explanation: "Crocodiles can slow their metabolism dramatically and endure long periods without eating." },
  { id: 27, category: "Human body", type: "Which is true?", prompt: "Which statement is true?", answerA: "The human brain uses a lot of energy", answerB: "The human brain uses very little energy", correctAnswer: "A", explanation: "Although it is only about 2 percent of body weight, it consumes a large share of the body’s energy." },
  { id: 28, category: "Science", type: "Which contains more?", prompt: "Which contains more?", answerA: "A teaspoon of sugar in a cup of tea", answerB: "A teaspoon of sugar in a cup of coffee", correctAnswer: "A", explanation: "The exact amount is the same, but the tea’s flavor can make it seem sweeter." },
  { id: 29, category: "Food", type: "Which lasts longer?", prompt: "Which lasts longer?", answerA: "Uncooked rice", answerB: "Cooked rice", correctAnswer: "A", explanation: "Cooked rice spoils faster, while dry uncooked rice is much more stable." },
  { id: 30, category: "History", type: "Which came first?", prompt: "Which came first?", answerA: "The Roman Empire", answerB: "The Roman Republic", correctAnswer: "B", explanation: "The Republic predates the Empire by centuries." },
  { id: 31, category: "Space", type: "Which is heavier?", prompt: "Which is heavier?", answerA: "A neutron star", answerB: "A white dwarf", correctAnswer: "A", explanation: "Neutron stars are incredibly dense, packing enormous mass into a tiny volume." },
  { id: 32, category: "Nature", type: "Which is more common?", prompt: "Which is more common?", answerA: "The color blue in the natural world", answerB: "The color red in the natural world", correctAnswer: "A", explanation: "Blue is surprisingly common in nature because of how light scatters in the atmosphere and in water." },
  { id: 33, category: "Animals", type: "Which is faster?", prompt: "Which is faster?", answerA: "A peregrine falcon in a dive", answerB: "A cheetah on land", correctAnswer: "A", explanation: "Peregrine falcons dive at breathtaking speeds that exceed even a cheetah’s top sprint." },
  { id: 34, category: "Psychology", type: "Which can survive longer?", prompt: "Which can survive longer?", answerA: "A habit", answerB: "A mood", correctAnswer: "A", explanation: "Habits can persist for years, while moods usually change more quickly." },
  { id: 35, category: "Technology", type: "Which was invented first?", prompt: "Which was invented first?", answerA: "The transistor", answerB: "The vacuum tube", correctAnswer: "B", explanation: "Vacuum tubes appeared before transistors changed modern electronics." },
  { id: 36, category: "Food", type: "Which contains more?", prompt: "Which contains more?", answerA: "Caffeine in a cup of coffee", answerB: "Caffeine in a cup of tea", correctAnswer: "A", explanation: "Coffee generally contains more caffeine than tea, though the exact amount varies widely." },
  { id: 37, category: "Geography", type: "Which is larger?", prompt: "Which is larger?", answerA: "The Sahara Desert", answerB: "The Antarctic Desert", correctAnswer: "B", explanation: "The Antarctic Desert covers a larger area than the Sahara." },
  { id: 38, category: "Language", type: "Which is more common?", prompt: "Which is more common?", answerA: "The word the in English", answerB: "The word of in English", correctAnswer: "A", explanation: "The is one of the most frequent words in English by a wide margin." },
  { id: 39, category: "History", type: "Which came first?", prompt: "Which came first?", answerA: "The first recorded Olympic Games", answerB: "The first recorded marathon", correctAnswer: "A", explanation: "The Olympic Games predate the marathon as a named event." },
  { id: 40, category: "Weird facts", type: "Which is true?", prompt: "Which statement is true?", answerA: "Diamonds can melt in a furnace", answerB: "Diamonds are impossible to melt", correctAnswer: "A", explanation: "Diamonds are carbon, so they can be transformed under enough heat." },
  { id: 41, category: "Science", type: "Which is faster?", prompt: "Which is faster?", answerA: "A hummingbird’s wingbeat", answerB: "A fly’s wingbeat", correctAnswer: "A", explanation: "Hummingbirds beat their wings with extraordinary rapidity, especially during hovering." },
  { id: 42, category: "Human body", type: "Which lasts longer?", prompt: "Which lasts longer?", answerA: "A fingertip print", answerB: "A memory", correctAnswer: "A", explanation: "Fingerprints remain on surfaces long after a memory fades from the mind." },
  { id: 43, category: "Animals", type: "Which can survive longer?", prompt: "Which can survive longer?", answerA: "A camel without water", answerB: "A horse without water", correctAnswer: "A", explanation: "Camels are built to endure dehydration far better than horses." },
  { id: 44, category: "Nature", type: "Which travels farther?", prompt: "Which travels farther?", answerA: "A river from source to sea", answerB: "A cloud over a day", correctAnswer: "A", explanation: "Rivers flow over long distances, while clouds often drift shorter routes." },
  { id: 45, category: "Space", type: "Which is more common?", prompt: "Which is more common?", answerA: "Small asteroids", answerB: "Large asteroids", correctAnswer: "A", explanation: "The smaller ones are vastly more numerous than the giant ones." },
  { id: 46, category: "Technology", type: "Which contains more?", prompt: "Which contains more?", answerA: "Data in a hard drive", answerB: "Data in a floppy disk", correctAnswer: "A", explanation: "Modern hard drives hold vastly more information than old floppy disks." },
  { id: 47, category: "Language", type: "Which came first?", prompt: "Which came first?", answerA: "Spoken language", answerB: "Written language", correctAnswer: "A", explanation: "Humans spoke long before writing systems emerged." },
  { id: 48, category: "Psychology", type: "Which is heavier?", prompt: "Which is heavier?", answerA: "A worry", answerB: "A thought", correctAnswer: "A", explanation: "A worry can feel weighty because it takes emotional energy to carry around." },
  { id: 49, category: "Food", type: "Which lasts longer?", prompt: "Which lasts longer?", answerA: "A potato in a dark cellar", answerB: "A tomato on a counter", correctAnswer: "A", explanation: "Potatoes store better in cool, dark conditions than fresh tomatoes do." },
  { id: 50, category: "History", type: "Which was invented first?", prompt: "Which was invented first?", answerA: "The wheel", answerB: "The plow", correctAnswer: "A", explanation: "The wheel came earlier than the plow in many early societies." },
  { id: 51, category: "Science", type: "Which is true?", prompt: "Which statement is true?", answerA: "A day on Venus is longer than a year there", answerB: "A year on Venus is longer than a day there", correctAnswer: "A", explanation: "Venus spins so slowly that its day lasts longer than its year." },
  { id: 52, category: "Geography", type: "Which travels farther?", prompt: "Which travels farther?", answerA: "A glacier’s movement", answerB: "A person’s daily commute", correctAnswer: "A", explanation: "Glaciers move over long geological times, which is far longer than a commute." },
  { id: 53, category: "Animals", type: "Which is more common?", prompt: "Which is more common?", answerA: "A species with two legs", answerB: "A species with four legs", correctAnswer: "A", explanation: "Humans and many other bipeds are much more common than quadrupeds in the animal world." },
  { id: 54, category: "Nature", type: "Which contains more?", prompt: "Which contains more?", answerA: "A rainforest’s biodiversity", answerB: "A desert’s biodiversity", correctAnswer: "A", explanation: "Rainforests host far more species than deserts in general." },
  { id: 55, category: "Space", type: "Which lasts longer?", prompt: "Which lasts longer?", answerA: "A star’s life", answerB: "A human life", correctAnswer: "A", explanation: "Stars can shine for billions of years, far beyond a human lifespan." },
  { id: 56, category: "Technology", type: "Which is faster?", prompt: "Which is faster?", answerA: "A modern CPU", answerB: "A human brain in simple arithmetic", correctAnswer: "A", explanation: "A processor can perform calculations at astonishing speed compared with human mental arithmetic." },
  { id: 57, category: "Psychology", type: "Which is more common?", prompt: "Which is more common?", answerA: "Daydreaming", answerB: "Deep focus", correctAnswer: "A", explanation: "Many people spend a surprising share of their time drifting into daydreams." },
  { id: 58, category: "Human body", type: "Which is true?", prompt: "Which statement is true?", answerA: "Your nose can remember scents", answerB: "Your nose cannot remember scents", correctAnswer: "A", explanation: "Smell memories can be vivid because the olfactory system links closely with memory." },
  { id: 59, category: "Food", type: "Which is heavier?", prompt: "Which is heavier?", answerA: "A cup of cooked pasta", answerB: "A cup of dry pasta", correctAnswer: "A", explanation: "Cooked pasta absorbs water, so it becomes heavier by volume." },
  { id: 60, category: "History", type: "Which came first?", prompt: "Which came first?", answerA: "The first known use of glass", answerB: "The first known use of ceramics", correctAnswer: "B", explanation: "Ceramics came earlier than glass in many early cultures." },
  { id: 61, category: "Weird facts", type: "Which is true?", prompt: "Which statement is true?", answerA: "Bananas are berries but strawberries are not", answerB: "Strawberries are berries but bananas are not", correctAnswer: "A", explanation: "Botany uses a stricter definition than the kitchen one." },
  { id: 62, category: "Science", type: "Which contains more?", prompt: "Which contains more?", answerA: "The average human body’s iron", answerB: "The average human body’s copper", correctAnswer: "A", explanation: "The body contains more iron than copper, though both are needed in tiny amounts." },
  { id: 63, category: "Animals", type: "Which lasts longer?", prompt: "Which lasts longer?", answerA: "An elephant’s memory", answerB: "A goldfish’s memory", correctAnswer: "A", explanation: "Elephants are known for impressive memory, far beyond the stereotype of a goldfish." },
  { id: 64, category: "Geography", type: "Which is heavier?", prompt: "Which is heavier?", answerA: "A cubic meter of ice", answerB: "A cubic meter of liquid water", correctAnswer: "B", explanation: "Ice is less dense than liquid water, so it weighs less for the same volume." },
  { id: 65, category: "Language", type: "Which is more common?", prompt: "Which is more common?", answerA: "A word that begins with S", answerB: "A word that begins with Q", correctAnswer: "A", explanation: "S-words are far more common in English than Q-words." },
  { id: 66, category: "Space", type: "Which travels farther?", prompt: "Which travels farther?", answerA: "A meteor in space", answerB: "A shooting star seen from Earth", correctAnswer: "A", explanation: "A meteor can travel huge distances before burning up, while the visible streak is brief." },
  { id: 67, category: "History", type: "Which was invented first?", prompt: "Which was invented first?", answerA: "The alphabet", answerB: "The number zero", correctAnswer: "A", explanation: "Alphabetic writing appeared before the concept of zero entered common use." },
  { id: 68, category: "Technology", type: "Which came first?", prompt: "Which came first?", answerA: "The electric light bulb", answerB: "The steam engine", correctAnswer: "B", explanation: "Steam engines predate electric lighting by many decades." },
  { id: 69, category: "Food", type: "Which is more common?", prompt: "Which is more common?", answerA: "A pepper as a fruit", answerB: "A pepper as a vegetable", correctAnswer: "A", explanation: "Botanically, peppers are fruits, even though they are often cooked like vegetables." },
  { id: 70, category: "Psychology", type: "Which can survive longer?", prompt: "Which can survive longer?", answerA: "A first impression", answerB: "A forgettable detail", correctAnswer: "A", explanation: "First impressions often stick far longer than minor details." },
  { id: 71, category: "Nature", type: "Which is faster?", prompt: "Which is faster?", answerA: "A hummingbird in flight", answerB: "A dragonfly in flight", correctAnswer: "A", explanation: "Hummingbirds can move with startling speed and maneuverability." },
  { id: 72, category: "Human body", type: "Which contains more?", prompt: "Which contains more?", answerA: "The skin’s pores", answerB: "The average brain’s neurons", correctAnswer: "B", explanation: "The brain contains an enormous number of neurons, far more than the number of visible pores on the skin." },
  { id: 73, category: "Science", type: "Which is heavier?", prompt: "Which is heavier?", answerA: "A gallon of water", answerB: "A gallon of oil", correctAnswer: "A", explanation: "Water is denser than most cooking oils, so it weighs more per gallon." },
  { id: 74, category: "Animals", type: "Which lasts longer?", prompt: "Which lasts longer?", answerA: "A turtle’s lifespan", answerB: "A rabbit’s lifespan", correctAnswer: "A", explanation: "Many turtles outlive rabbits by decades or more." },
  { id: 75, category: "Geography", type: "Which is more common?", prompt: "Which is more common?", answerA: "A mountain on Earth", answerB: "A volcano on Earth", correctAnswer: "A", explanation: "Mountains are far more widespread than volcanoes." },
  { id: 76, category: "Weird facts", type: "Which is true?", prompt: "Which statement is true?", answerA: "Some jellyfish are biologically immortal", answerB: "Jellyfish always age normally", correctAnswer: "A", explanation: "A few species can revert to an earlier life stage and avoid the usual march of aging." },
  { id: 77, category: "Space", type: "Which was invented first?", prompt: "Which was invented first?", answerA: "The telescope", answerB: "The microscope", correctAnswer: "A", explanation: "The telescope appeared before the microscope became a scientific instrument." },
  { id: 78, category: "History", type: "Which travels farther?", prompt: "Which travels farther?", answerA: "A message carried by a horse", answerB: "A message carried by a pigeon", correctAnswer: "B", explanation: "Pigeons could cover greater distances than most horses over comparable time." },
  { id: 79, category: "Technology", type: "Which is more common?", prompt: "Which is more common?", answerA: "A password reset request", answerB: "A password success", correctAnswer: "B", explanation: "Most password attempts fail, so successes are relatively uncommon." },
  { id: 80, category: "Language", type: "Which is true?", prompt: "Which statement is true?", answerA: "The word ‘set’ has the most meanings in English", answerB: "The word ‘run’ has the most meanings in English", correctAnswer: "A", explanation: "Set is famous for having an unusually large number of meanings and uses." },
  { id: 81, category: "Food", type: "Which is larger?", prompt: "Which is larger?", answerA: "A banana’s peel", answerB: "A banana’s edible portion", correctAnswer: "A", explanation: "Banana peels take up a surprising amount of the fruit’s total bulk." },
  { id: 82, category: "Animals", type: "Which is true?", prompt: "Which statement is true?", answerA: "A flamingo’s color comes from its diet", answerB: "A flamingo’s color comes from its habitat", correctAnswer: "A", explanation: "The pigments in the food they eat help create their pink tones." },
  { id: 83, category: "Nature", type: "Which can survive longer?", prompt: "Which can survive longer?", answerA: "A cactus in drought", answerB: "A fern in drought", correctAnswer: "A", explanation: "Cacti are built to store water and endure arid conditions far better than ferns." },
  { id: 84, category: "Human body", type: "Which contains more?", prompt: "Which contains more?", answerA: "The average body’s blood", answerB: "The average body’s bone", correctAnswer: "A", explanation: "Blood makes up a substantial share of the body’s total mass and volume." },
  { id: 85, category: "Psychology", type: "Which lasts longer?", prompt: "Which lasts longer?", answerA: "A habit", answerB: "A burst of motivation", correctAnswer: "A", explanation: "Habits tend to persist much longer than short-lived bursts of motivation." },
  { id: 86, category: "Science", type: "Which is more common?", prompt: "Which is more common?", answerA: "Oxygen in the atmosphere", answerB: "Carbon dioxide in the atmosphere", correctAnswer: "A", explanation: "Oxygen is far more abundant than carbon dioxide in the air we breathe." },
  { id: 87, category: "Weird facts", type: "Which is true?", prompt: "Which statement is true?", answerA: "Some turtles can breathe through their rear ends", answerB: "Turtles can’t breathe through their rear ends", correctAnswer: "A", explanation: "A few turtle species can absorb oxygen through specialized tissues in their cloaca." },
  { id: 88, category: "History", type: "Which came first?", prompt: "Which came first?", answerA: "The first use of the wheel", answerB: "The first use of the sail", correctAnswer: "B", explanation: "Sails appeared before wheels were widely used for transport in many regions." },
  { id: 89, category: "Geography", type: "Which is faster?", prompt: "Which is faster?", answerA: "A river current", answerB: "A walking person", correctAnswer: "A", explanation: "River currents can move much faster than a casual walking pace." },
  { id: 90, category: "Space", type: "Which is larger?", prompt: "Which is larger?", answerA: "The sun", answerB: "The moon", correctAnswer: "A", explanation: "The sun is vastly larger than the moon." },
  { id: 91, category: "Language", type: "Which contains more?", prompt: "Which contains more?", answerA: "A sentence with many clauses", answerB: "A sentence with one clause", correctAnswer: "A", explanation: "More clauses usually mean a denser, more complex sentence." },
  { id: 92, category: "Technology", type: "Which lasts longer?", prompt: "Which lasts longer?", answerA: "A mechanical watch", answerB: "A digital watch battery", correctAnswer: "A", explanation: "A mechanical watch can run for decades, while batteries need regular replacement." },
  { id: 93, category: "Food", type: "Which was invented first?", prompt: "Which was invented first?", answerA: "The sandwich", answerB: "The hot dog", correctAnswer: "A", explanation: "The sandwich predates the hot dog as a named food form." },
  { id: 94, category: "History", type: "Which is more common?", prompt: "Which is more common?", answerA: "A civilization that used bronze", answerB: "A civilization that used iron first", correctAnswer: "A", explanation: "Bronze was used earlier and more broadly in early metallurgy." },
  { id: 95, category: "Nature", type: "Which is true?", prompt: "Which statement is true?", answerA: "Moonlight is reflected sunlight", answerB: "Moonlight is made by the moon", correctAnswer: "A", explanation: "The moon shines because it reflects sunlight rather than producing light itself." },
  { id: 96, category: "Animals", type: "Which can survive longer?", prompt: "Which can survive longer?", answerA: "A shark without food", answerB: "A dolphin without food", correctAnswer: "A", explanation: "Sharks can endure longer fasting periods than many mammals, including dolphins." },
];

export default function PlayPage() {
  const shouldReduceMotion = useReducedMotion();
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState<Phase>("question");
  const [selectedAnswer, setSelectedAnswer] = useState<"A" | "B" | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [previousQuestionId, setPreviousQuestionId] = useState<number | null>(null);
  const [recentQuestionIds, setRecentQuestionIds] = useState<number[]>([]);
  const [completedQuestions, setCompletedQuestions] = useState(0);
  const [progressMessage, setProgressMessage] = useState<string | null>(null);
  const progressTimeoutRef = useRef<number | null>(null);

  const questionBank = useMemo(() => questions, []);

  useEffect(() => {
    return () => {
      if (progressTimeoutRef.current !== null) {
        window.clearTimeout(progressTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (completedQuestions > 0 && completedQuestions % 5 === 0) {
      const messages: Record<number, string> = {
        5: "⭐ Curiosity Level 5",
        10: "🧠 You're warming up.",
        15: "🚀 Level 15 reached.",
        20: "🌍 Explorer unlocked.",
        25: "✨ Curiosity never rests.",
        30: "🪐 The rabbit hole deepens.",
        35: "🧬 The wonder keeps climbing.",
        40: "🌟 A true explorer now.",
        45: "🛸 Curiosity in orbit.",
        50: "💫 The loop is endless.",
      };

      if (progressTimeoutRef.current !== null) {
        window.clearTimeout(progressTimeoutRef.current);
      }

      setProgressMessage(messages[completedQuestions] ?? "🌈 Curiosity keeps rising.");
      progressTimeoutRef.current = window.setTimeout(() => {
        setProgressMessage(null);
      }, shouldReduceMotion ? 900 : 1600);
    } else {
      setProgressMessage(null);
    }
  }, [completedQuestions, shouldReduceMotion]);

  const getNextQuestion = (currentId: number | null, recentIds: number[]) => {
    const pool = questionBank.filter((question) => question.id !== currentId && !recentIds.includes(question.id));

    if (pool.length === 0) {
      const fallbackPool = questionBank.filter((question) => question.id !== currentId);
      if (fallbackPool.length === 0) {
        return questionBank[Math.floor(Math.random() * questionBank.length)];
      }
      return fallbackPool[Math.floor(Math.random() * fallbackPool.length)];
    }

    return pool[Math.floor(Math.random() * pool.length)];
  };

  const startNewRound = () => {
    const nextQuestion = getNextQuestion(previousQuestionId, recentQuestionIds);
    setCurrentQuestion(nextQuestion);
    setSelectedAnswer(null);
    setPhase("question");
    setPreviousQuestionId(nextQuestion.id);
    setRecentQuestionIds((current) => [...current.slice(-2), nextQuestion.id]);
  };

  const handleAnswer = (answer: "A" | "B") => {
    if (!currentQuestion) {
      return;
    }

    setSelectedAnswer(answer);
    if (answer === currentQuestion.correctAnswer) {
      setScore((current) => current + 1);
    }
    setCompletedQuestions((current) => current + 1);
    setPhase("revealed");
  };

  return (
    <PageLayout>
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: "easeOut" }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "700px",
          textAlign: "center",
        }}
      >
        <a
          href="/"
          style={{
            alignSelf: "flex-start",
            marginBottom: "1rem",
            textDecoration: "none",
            color: "#4B5563",
            fontWeight: 600,
          }}
        >
          ← Home
        </a>

        <PageTitle title="Curiosity Ladder" subtitle="One surprising question at a time." />

        <div
          style={{
            width: "100%",
            background: "#FFFDF8",
            borderRadius: "24px",
            padding: "clamp(1.25rem, 3vw, 2rem)",
            boxShadow: "0 14px 36px rgba(0, 0, 0, 0.07)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1rem",
              paddingBottom: "0.85rem",
              borderBottom: "1px solid rgba(15, 23, 42, 0.08)",
            }}
          >
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "0.82rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "#7C3AED" }}>
                Score
              </div>
              <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#111827" }}>{score}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "0.82rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "#7C3AED" }}>
                Round
              </div>
              <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "#111827" }}>{previousQuestionId ? previousQuestionId : "—"}</div>
            </div>
          </div>

          {!currentQuestion ? (
            <div style={{ textAlign: "left" }}>
              <button
                type="button"
                onClick={startNewRound}
                style={{
                  width: "100%",
                  padding: "15px 20px",
                  border: "none",
                  borderRadius: "16px",
                  background: "#38BDF8",
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                }}
              >
                Start Curiosity Ladder
              </button>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion.id + phase}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: "easeOut" }}
              >
                {phase === "question" ? (
                  <>
                    <div
                      style={{
                        textAlign: "left",
                        padding: "1.1rem 1.15rem",
                        borderRadius: "18px",
                        background: "rgba(56, 189, 248, 0.08)",
                        color: "#111827",
                        marginBottom: "1rem",
                      }}
                    >
                      <div style={{ fontSize: "0.8rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "#7C3AED", marginBottom: "0.4rem" }}>
                        {currentQuestion.type}
                      </div>
                      <div style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", lineHeight: 1.6, fontWeight: 700 }}>
                        {currentQuestion.prompt}
                      </div>
                    </div>

                    <div style={{ display: "grid", gap: "0.75rem" }}>
                      {(["A", "B"] as const).map((answerKey) => {
                        const isAnswerA = answerKey === "A";
                        const optionText = isAnswerA ? currentQuestion.answerA : currentQuestion.answerB;

                        return (
                          <button
                            key={answerKey}
                            type="button"
                            onClick={() => handleAnswer(answerKey)}
                            style={{
                              width: "100%",
                              textAlign: "left",
                              padding: "0.95rem 1rem",
                              borderRadius: "16px",
                              border: "1px solid rgba(15, 23, 42, 0.1)",
                              background: "#FFFFFF",
                              color: "#111827",
                              fontSize: "1rem",
                              fontWeight: 600,
                              cursor: "pointer",
                              boxShadow: "0 8px 16px rgba(15, 23, 42, 0.04)",
                              transition: "transform 0.2s ease, boxShadow 0.2s ease",
                            }}
                          >
                            {optionText}
                          </button>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                    <div
                      style={{
                        padding: "1.1rem 1.15rem",
                        borderRadius: "18px",
                        background: selectedAnswer === currentQuestion.correctAnswer ? "#ECFDF3" : "#FEF2F2",
                        border: `1px solid ${selectedAnswer === currentQuestion.correctAnswer ? "rgba(22, 163, 74, 0.2)" : "rgba(220, 38, 38, 0.2)"}`,
                        textAlign: "left",
                      }}
                    >
                      <div style={{ fontSize: "0.8rem", letterSpacing: "0.16em", textTransform: "uppercase", color: selectedAnswer === currentQuestion.correctAnswer ? "#15803D" : "#B91C1C", marginBottom: "0.35rem" }}>
                        {selectedAnswer === currentQuestion.correctAnswer ? "Correct" : "Almost"}
                      </div>
                      <div style={{ fontSize: "1rem", lineHeight: 1.6, color: "#111827" }}>
                        {currentQuestion.explanation}
                      </div>
                    </div>

                    {progressMessage ? (
                      <div
                        style={{
                          padding: "0.85rem 1rem",
                          borderRadius: "14px",
                          background: "rgba(124, 58, 237, 0.08)",
                          color: "#5B21B6",
                          fontSize: "0.95rem",
                          fontWeight: 700,
                          textAlign: "center",
                        }}
                      >
                        {progressMessage}
                      </div>
                    ) : null}

                    <div
                      style={{
                        padding: "1rem",
                        borderRadius: "16px",
                        background: "#F9FAFB",
                        color: "#374151",
                        fontSize: "0.95rem",
                        lineHeight: 1.6,
                      }}
                    >
                      Score updated. You are now at {score + (selectedAnswer === currentQuestion.correctAnswer ? 1 : 0)}.
                    </div>

                    <button
                      type="button"
                      onClick={startNewRound}
                      style={{
                        width: "100%",
                        padding: "15px 20px",
                        border: "none",
                        borderRadius: "16px",
                        background: "#111827",
                        color: "white",
                        fontSize: "1rem",
                        fontWeight: 700,
                        cursor: "pointer",
                        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      Next Question
                    </button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </motion.div>
    </PageLayout>
  );
}