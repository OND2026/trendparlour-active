type HomeButton = {
  href: string;
  text: string;
  emoji: string;
  color: string;
  textColor?: string;
};

const homeButtons: HomeButton[] = [
  {
    href: "/laugh",
    text: "Make Me Laugh",
    emoji: "😊",
    color: "#7ED957",
  },
  {
    href: "/play",
    text: "Let Me Play",
    emoji: "🎮",
    color: "#8B5CF6",
  },
  {
    href: "/surprise",
    text: "Surprise Me",
    emoji: "✨",
    color: "#38BDF8",
  },
  {
    href: "/challenge",
    text: "Challenge Me",
    emoji: "🧠",
    color: "#FACC15",
    textColor: "#222",
  },
  {
    href: "/weird",
    text: "Show Me Something Weird",
    emoji: "🌍",
    color: "#EC4899",
  },
];

export default homeButtons;
