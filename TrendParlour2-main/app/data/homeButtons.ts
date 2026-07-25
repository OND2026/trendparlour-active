type HomeButton = {
  href: string;
  text: string;
  emoji: string;
  color: string;
  textColor?: string;
};

const homeButtons: HomeButton[] = [
  {
    href: "/surprise",
    text: "Surprise Me",
    emoji: "🎲",
    color: "#38BDF8",
  },
  {
    href: "/play",
    text: "Play a Mini Game",
    emoji: "🎮",
    color: "#8B5CF6",
  },
  {
    href: "/challenge",
    text: "Test My Reflexes",
    emoji: "⚡",
    color: "#FACC15",
    textColor: "#222",
  },
  {
    href: "/laugh",
    text: "Make Me Laugh",
    emoji: "😂",
    color: "#7ED957",
  },
  {
    href: "/weird",
    text: "Blow My Mind",
    emoji: "🤯",
    color: "#EC4899",
  },
];

export default homeButtons;
