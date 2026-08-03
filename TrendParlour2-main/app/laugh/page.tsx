"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import PageLayout from "../components/PageLayout";
import PageTitle from "../components/PageTitle";

const jokes = [
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "What do you call fake spaghetti? An impasta.",
  "Why don’t eggs tell jokes? They’d crack each other up.",
  "What kind of tree can fit in your hand? A palm tree.",
  "Why did the math book look sad? It had too many problems.",
  "What do you call cheese that isn’t yours? Nacho cheese.",
  "Why did the cookie go to the doctor? Because it felt crummy.",
  "How do you organize a space party? You planet.",
  "What did the zero say to the eight? Nice belt.",
  "Why did the bicycle fall over? It was two tired.",
  "What do you call a bear with no teeth? A gummy bear.",
  "Why can’t your nose be 12 inches long? Because then it would be a foot.",
  "What did one wall say to the other wall? I’ll meet you at the corner.",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
  "How does a penguin build its house? Igloos it together.",
  "Why did the tomato blush? It saw the salad dressing.",
  "What did the paper say to the pencil? Write on.",
  "What do you call an alligator in a vest? An investigator.",
  "Why did the banana go to the party? Because it was peeling good.",
  "How do you catch a squirrel? Climb a tree and act like a nut.",
  "Why did the student eat their homework? Because the teacher said it was a piece of cake.",
  "What kind of shoes do ninjas wear? Sneakers.",
  "Why did the orange stop? It ran out of juice.",
  "What do you call a sleeping bull? A bulldozer.",
  "Why did the baker stop making donuts? Because he got tired of the hole thing.",
  "How do you make a tissue dance? You put a little boogie in it.",
  "What did the big flower say to the little flower? Hi, bud.",
  "Why did the computer go to the doctor? It had a virus.",
  "What do you call a happy mushroom? A fun-guy.",
  "Why did the clock get in trouble? It tocked too much.",
  "What do you call a fish wearing a bowtie? Sofishticated.",
  "Why did the superhero flush the toilet? To help the situation.",
  "How do you make a lemonade stand? Stand on the lemon.",
  "What did the lamp say to the other lamp? You light up my life.",
  "Why did the dad bring a ladder to the bar? Because he heard the drinks were on the house.",
  "What do you call a snowman in summer? A puddle.",
  "Why did the chicken join a band? Because it had the drumsticks.",
  "How do you fix a broken pumpkin? With a patch.",
  "What did one pickle say to the other? You mean a lot to me.",
  "Why did the bee get married? Because he found his honey.",
  "What do you call a parade of rabbits hopping down the street? A hare-raising event.",
  "How do you make holy water? You boil the hell out of it.",
  "Why did the ghost go to the party? Because he was feeling boo-tiful.",
  "What musical instrument is found in the bathroom? A tuba toothpaste.",
  "Why don’t skeletons fight each other? They don’t have the guts.",
  "What do you say to a rabbit on his birthday? Hoppy birthday.",
  "Why did the coffee file a police report? It got mugged.",
  "What is an astronaut’s favorite part of a computer? The space bar.",
  "Why did the broom get promoted? It swept the competition.",
  "What did the ocean say to the beach? Nothing, it just waved.",
  "What do you call a lazy kangaroo? A pouch potato.",
  "Why did the mushroom get invited to every party? Because he was a fungi.",
  "What kind of music do planets like? Nep-tunes.",
  "Why do bees have sticky hair? Because they use honeycombs.",
];

export default function LaughPage() {
  const [joke, setJoke] = useState(jokes[0]);

  const pickJoke = () => {
    const nextIndex = Math.floor(Math.random() * jokes.length);
    setJoke((current) => {
      if (jokes[nextIndex] === current) {
        const fallbackIndex = (nextIndex + 1) % jokes.length;
        return jokes[fallbackIndex];
      }
      return jokes[nextIndex];
    });
  };

  return (
    <PageLayout>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          width: "100%",
          maxWidth: "680px",
          textAlign: "center",
        }}
      >
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", color: "#4B5563", textDecoration: "none", fontWeight: 600, marginBottom: "1rem" }}>
          ← Home
        </Link>

        <PageTitle title="Make Me Laugh" subtitle="A clean joke for your next smile." />

        <div
          style={{
            background: "#FFFDF8",
            padding: "clamp(1.25rem, 3vw, 2rem)",
            borderRadius: "24px",
            marginTop: "0.5rem",
            boxShadow: "0 14px 36px rgba(0, 0, 0, 0.07)",
            fontSize: "clamp(1.1rem, 2.2vw, 1.3rem)",
            lineHeight: "1.7",
            color: "#374151",
          }}
        >
          {joke}
        </div>

        <button
          onClick={pickJoke}
          style={{
            marginTop: "1.25rem",
            padding: "15px 24px",
            background: "#7ED957",
            color: "white",
            border: "none",
            borderRadius: "16px",
            fontSize: "1rem",
            cursor: "pointer",
            fontWeight: 700,
            boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
            transition: "transform 0.22s ease, boxShadow 0.22s ease",
          }}
        >
          😂 Tell Me Another
        </button>
      </motion.div>
    </PageLayout>
  );
}