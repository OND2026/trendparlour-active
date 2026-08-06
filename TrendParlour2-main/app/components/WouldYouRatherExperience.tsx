"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import wouldYouRatherQuestions, { type WouldYouRatherQuestion } from "../data/wouldYouRatherQuestions";

type SelectedOption = "A" | "B" | null;
type Phase = "idle" | "answering" | "revealed";

type Milestone = {
  threshold: number;
  label: string;
  icon: string;
};

const milestoneMessages: Milestone[] = [
  { threshold: 10, label: "Decision Apprentice", icon: "🎉" },
  { threshold: 25, label: "Certified Overthinker", icon: "🏆" },
  { threshold: 50, label: "Philosophy Major", icon: "🧠" },
  { threshold: 100, label: "Decision Machine", icon: "👑" },
  { threshold: 250, label: "Master of Impossible Choices", icon: "🌟" },
];

const counterLabels = ["Decision Count", "Chaos Level", "Opinion Score", "Questions Survived", "Dilemmas Solved"];

const reactionPool = [
  "😂 The internet would definitely argue with you.",
  "🫡 Respect.",
  "😬 That’s... a choice.",
  "👀 Interesting strategy.",
  "💀 Absolutely chaotic.",
  "🏆 Elite decision making.",
  "🦆 The ducks approve.",
  "✨ A very confident answer.",
  "🧠 You have chosen with conviction.",
  "🥶 Cold, calculated, and slightly dramatic.",
  "🕯️ The room has gone still.",
  "🎭 A little theatrical. We like it.",
  "🧁 That was a pastry-level commitment.",
  "🌧️ The vibes are strong.",
  "🪄 Somehow this feels important now.",
  "🛸 That answer came in from another dimension.",
  "🍜 The noodles would judge this.",
  "🪶 Very graceful. Very suspicious.",
  "🎲 The universe is taking notes.",
  "🐾 The animals are concerned.",
  "🧺 The chaos basket is full.",
  "📦 Delivered with dramatic flair.",
  "🧩 A bold little puzzle piece.",
  "🪞 That answer has a lot of self-awareness.",
  "🧪 Scientifically unhinged.",
  "🦇 No one can explain it, but it is memorable.",
  "🍕 This is how legends begin.",
  "🫠 The emotional support committee is now involved.",
  "🤌 Very intentional.",
  "🪵 The furniture is listening.",
  "⚡ That felt strangely powerful.",
  "🌈 A little too sincere for this game.",
  "🧶 Tied together with excellent energy.",
  "☁️ Soft, but still dangerous.",
  "🍋 The lemon of it all.",
  "🥁 A dramatic little drumroll.",
  "🧵 You stitched a very specific reality.",
  "🪁 This answer is soaring.",
  "🔮 The future just got a little louder.",
  "🗂️ This one has excellent filing potential.",
  "🧿 Somehow this feels cursed in a charming way.",
  "☕ A bold sip of destiny.",
  "🧉 You have made a very particular choice.",
  "🪐 This is a planetary-level decision.",
  "🌿 The plants are leaning in.",
  "🧼 Surprisingly clean for a chaotic answer.",
  "🗣️ The fake crowd is already debating it.",
  "🍬 Sweet, weird, and unforgettable.",
  "🛁 You have committed to the bit.",
  "🥳 This answer has been vaccinated against boredom.",
  "🎈 Quite the little balloon of conviction.",
  "🌙 A very late-night choice.",
  "🎧 The headphones are definitely listening.",
  "🛸 That answer is doing a lot of heavy lifting.",
  "🧠 The overthinking is already underway.",
  "🧷 Fastened with pure confidence.",
  "🏡 This feels like a housewarming for your soul.",
  "🫧 Beautifully unhinged.",
  "🧺 The chaos basket is now overflowing.",
  "🍰 Soft, but devastatingly specific.",
  "🪄 The spell is working.",
  "🎀 A very polished little disaster.",
  "🫶 We are not pretending this was normal.",
  "🧿 The vibes are immaculate.",
  "🦄 This answer is doing a lot of mythic work.",
  "🧵 Very threadbare, but somehow effective.",
];

const reportTitlePool = [
  "Community Pulse",
  "Department of Vibes",
  "Parallel Universe Poll",
  "Tiny Opinion Bureau",
  "Alternate Timeline Report",
  "Committee of Ducks",
  "Pocket Universe Census",
  "Certified Silly Statistics",
  "Public Vibe Meter",
  "Chaos Research Institute",
  "Goblin Survey Division",
  "Tiny Council Report",
  "Vibe Check Results",
  "Neighborhood Consensus",
  "Imaginary Polling Agency",
  "Bureau of Questionable Statistics",
  "Cosmic Opinion Desk",
  "Committee of Tiny Goblins",
  "Universal Mood Index",
  "Reality Check",
];

const reportNotePool = [
  "Source: absolutely nobody.",
  "Margin of error: emotionally significant.",
  "Verified by three ducks.",
  "Results checked by one sleepy raccoon.",
  "Statistically questionable.",
  "Generated after consulting the moon.",
  "Our potato approved this survey.",
  "Certified by imaginary experts.",
  "The goblins were unanimous.",
  "Confidence level: suspiciously high.",
  "Backed by zero real evidence.",
  "Cross-checked with another timeline.",
  "The pigeons voted twice.",
  "The universe shrugged.",
  "Your fridge disagrees.",
  "Science remains politely silent.",
  "A cat walked across the keyboard and approved this.",
  "We asked around. Nobody answered.",
  "Survey funded by good vibes.",
  "Data collected from parallel dimensions.",
  "The candles were very persuasive.",
  "A very small committee agreed.",
  "Checked by one dramatic spoon.",
  "Nobody can prove it, but it feels true.",
  "The moon was a little indecisive.",
  "A sock puppet signed off on this.",
  "The results are delightfully vague.",
  "A tiny goblin whispered the answer.",
  "The vibe was strong enough to count.",
  "This was reviewed by a very sleepy cat.",
  "The evidence is mostly emotional.",
  "Three pigeons and a candle agreed.",
  "A soft breeze carried the result.",
  "The spreadsheet looked concerned.",
  "A suspiciously confident teapot weighed in.",
  "The numbers were mostly symbolic.",
  "We asked the moon and it nodded.",
  "A tiny committee of raccoons approved.",
  "The results arrived in a very mysterious envelope.",
  "The universe gave a small shrug.",
  "One very opinionated lamp agreed.",
  "The tea leaves were absolutely certain.",
  "This was polished by tiny goblin hands.",
];

const achievementPool = [
  { name: "Chaos Goblin", icon: "👹", description: "You made a gloriously unhinged choice." },
  { name: "Professional Overthinker", icon: "🧠", description: "You treated a tiny dilemma like a life event." },
  { name: "Certified Gremlin", icon: "😈", description: "You brought the energy of a tiny troublemaker." },
  { name: "Duck Whisperer", icon: "🦆", description: "You have the calm of someone who understands birds." },
  { name: "Snack Philosopher", icon: "🥨", description: "You answered like a person with strong opinions about crackers." },
  { name: "Meme Wizard", icon: "🧙", description: "You chose with internet-level confidence." },
  { name: "Professional Fence Sitter", icon: "🤹", description: "You stayed balanced in a deeply suspicious way." },
];

function getStoredProgress() {
  if (typeof window === "undefined") {
    return { answered: 0, seenIds: [] as number[], badges: [] as string[] };
  }

  const stored = window.localStorage.getItem("trendparlour-would-you-rather-progress");

  if (!stored) {
    return { answered: 0, seenIds: [] as number[], badges: [] as string[] };
  }

  try {
    const parsed = JSON.parse(stored) as { answered?: number; seenIds?: number[]; badges?: string[] };
    return {
      answered: typeof parsed.answered === "number" ? parsed.answered : 0,
      seenIds: Array.isArray(parsed.seenIds) ? parsed.seenIds : [],
      badges: Array.isArray(parsed.badges) ? parsed.badges : [],
    };
  } catch {
    return { answered: 0, seenIds: [] as number[], badges: [] as string[] };
  }
}

function pickQuestion(previousIds: number[]) {
  const available = wouldYouRatherQuestions.filter((question) => !previousIds.includes(question.id));

  if (available.length === 0) {
    return wouldYouRatherQuestions[Math.floor(Math.random() * wouldYouRatherQuestions.length)];
  }

  return available[Math.floor(Math.random() * available.length)];
}

function getRandomCounterLabel(previousLabel: string | null) {
  const available = counterLabels.filter((label) => label !== previousLabel);
  return available[Math.floor(Math.random() * available.length)] ?? counterLabels[0];
}

function getRandomReaction(previousReaction: string | null) {
  const available = reactionPool.filter((reaction) => reaction !== previousReaction);
  return available[Math.floor(Math.random() * available.length)] ?? reactionPool[0];
}

function getRandomReportTitle(previousTitle: string | null) {
  const available = reportTitlePool.filter((title) => title !== previousTitle);
  return available[Math.floor(Math.random() * available.length)] ?? reportTitlePool[0];
}

function getRandomReportNote(previousNote: string | null) {
  const available = reportNotePool.filter((note) => note !== previousNote);
  return available[Math.floor(Math.random() * available.length)] ?? reportNotePool[0];
}

function getCommunityStats(questionId: number, option: SelectedOption, previousTitle: string | null, previousNote: string | null) {
  const selectedPercent = Math.min(97, Math.max(52, Math.floor(Math.random() * 46) + 52));
  const otherPercent = 100 - selectedPercent;

  let label = "A very brave little minority.";
  if (selectedPercent >= 90) {
    label = "Almost everyone agrees.";
  } else if (selectedPercent >= 80) {
    label = "Most people leaned this way.";
  } else if (selectedPercent >= 70) {
    label = "Surprisingly popular.";
  } else if (selectedPercent >= 60) {
    label = "Apparently this is the winning side.";
  } else if (selectedPercent >= 55) {
    label = "A solid little majority.";
  }

  return {
    selectedPercent,
    otherPercent,
    label,
    title: getRandomReportTitle(previousTitle),
    note: getRandomReportNote(previousNote),
  };
}

export default function WouldYouRatherExperience() {
  const [currentQuestion, setCurrentQuestion] = useState<WouldYouRatherQuestion | null>(null);
  const [selectedOption, setSelectedOption] = useState<SelectedOption>(null);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [seenIds, setSeenIds] = useState<number[]>([]);
  const [phase, setPhase] = useState<Phase>("idle");
  const [reaction, setReaction] = useState("Choose your fate.");
  const [milestoneMessage, setMilestoneMessage] = useState<string | null>(null);
  const [counterLabel, setCounterLabel] = useState(counterLabels[0]);
  const [communityStats, setCommunityStats] = useState<{ selectedPercent: number; otherPercent: number; label: string; title: string; note: string } | null>(null);
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>([]);
  const [newBadge, setNewBadge] = useState<string | null>(null);
  const [hoveredOption, setHoveredOption] = useState<SelectedOption>(null);
  const [loadingDots, setLoadingDots] = useState(".");
  const [lastReaction, setLastReaction] = useState<string | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [reportVisible, setReportVisible] = useState(false);
  const revealTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const progress = getStoredProgress();
    setAnsweredCount(progress.answered);
    setSeenIds(progress.seenIds);
    setUnlockedBadges(progress.badges);
    setCounterLabel(getRandomCounterLabel(null));
    const initialQuestion = pickQuestion(progress.seenIds);
    setCurrentQuestion(initialQuestion);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const nextProgress = {
      answered: answeredCount,
      seenIds,
      badges: unlockedBadges,
    };

    window.localStorage.setItem("trendparlour-would-you-rather-progress", JSON.stringify(nextProgress));
  }, [answeredCount, seenIds, unlockedBadges]);

  useEffect(() => {
    if (phase !== "answering") {
      return;
    }

    const interval = window.setInterval(() => {
      setLoadingDots((current) => (current === "..." ? "." : current === "." ? ".." : "..."));
    }, 220);

    return () => window.clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updatePreference);
      return () => mediaQuery.removeEventListener("change", updatePreference);
    }

    mediaQuery.addListener(updatePreference);
    return () => mediaQuery.removeListener(updatePreference);
  }, []);

  useEffect(() => {
    return () => {
      if (revealTimeoutRef.current !== null) {
        window.clearTimeout(revealTimeoutRef.current);
      }
    };
  }, []);

  const handleAnswer = (option: "A" | "B") => {
    if (!currentQuestion) {
      return;
    }

    if (revealTimeoutRef.current !== null) {
      window.clearTimeout(revealTimeoutRef.current);
    }

    setSelectedOption(option);
    setPhase("answering");
    setReaction("Preparing your verdict");
    setLoadingDots(".");
    setCommunityStats(null);
    setReportVisible(false);
    setNewBadge(null);

    const nextAnsweredCount = answeredCount + 1;
    setAnsweredCount(nextAnsweredCount);
    setCounterLabel((current) => getRandomCounterLabel(current));
    setSeenIds((current) => {
      if (current.includes(currentQuestion.id)) {
        return current;
      }
      return [...current, currentQuestion.id].slice(-250);
    });

    revealTimeoutRef.current = window.setTimeout(() => {
      const nextReaction = getRandomReaction(lastReaction);
      setLastReaction(nextReaction);
      setReaction(nextReaction);
      setPhase("revealed");

      const revealDelay = prefersReducedMotion ? 0 : 220;
      window.setTimeout(() => {
        setCommunityStats(getCommunityStats(currentQuestion.id, option, communityStats?.title ?? null, communityStats?.note ?? null));
        setReportVisible(true);
      }, revealDelay);

      const milestone = milestoneMessages.find((item) => nextAnsweredCount === item.threshold);
      if (milestone) {
        setMilestoneMessage(`${milestone.icon} ${milestone.label}`);
      } else if (nextAnsweredCount % 25 === 0 && nextAnsweredCount !== 0) {
        setMilestoneMessage("🧠 A very respectable streak of opinions.");
      } else {
        setMilestoneMessage(null);
      }

      setUnlockedBadges((current) => {
        const existing = new Set(current);
        if (existing.size >= achievementPool.length) {
          return current;
        }

        if (Math.random() < 0.28) {
          const available = achievementPool.filter((badge) => !existing.has(badge.name));
          if (available.length > 0) {
            const badge = available[Math.floor(Math.random() * available.length)];
            const nextBadges = [...current, badge.name];
            setNewBadge(`${badge.icon} ${badge.name}`);
            return nextBadges;
          }
        }

        return current;
      });
    }, 400);
  };

  const handleNext = () => {
    if (!currentQuestion || phase !== "revealed") {
      return;
    }

    const nextQuestion = pickQuestion([...seenIds, currentQuestion.id]);
    setCurrentQuestion(nextQuestion);
    setSelectedOption(null);
    setPhase("idle");
    setReaction("Choose your fate.");
    setLoadingDots(".");
    setCommunityStats(null);
    setReportVisible(false);
    setMilestoneMessage(null);
    setNewBadge(null);
  };

  const progressLabel = useMemo(() => `${answeredCount} ${counterLabel}`, [answeredCount, counterLabel]);

  return (
    <section
      style={{
        width: "min(100%, 760px)",
        margin: "1.4rem auto 0",
        padding: "clamp(1rem, 2.4vw, 1.35rem)",
        borderRadius: "24px",
        background: "#F7F1E8",
        border: "1px solid #E8DDCC",
        boxShadow: "0 10px 24px rgba(31, 41, 55, 0.05)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "0.95rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              width: "fit-content",
              padding: "0.35rem 0.7rem",
              borderRadius: "999px",
              background: "#F1E4C9",
              color: "#7A5D2E",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <span aria-hidden="true">🤔</span>
            Would You Rather
          </div>
          <h3
            style={{
              margin: 0,
              fontSize: "clamp(1.25rem, 2.2vw, 1.45rem)",
              lineHeight: 1.2,
              color: "#1F2937",
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            Pick a side and let your opinions do the talking.
          </h3>
          <p
            style={{
              margin: 0,
              color: "#4B5563",
              lineHeight: 1.65,
              fontSize: "0.95rem",
              maxWidth: "620px",
            }}
          >
            A calm, local-first dilemma experience with a gentle little streak of chaos.
          </p>
        </div>

        <div
          style={{
            borderRadius: "20px",
            background: "#FFFDF8",
            border: "1px solid #EDE3D8",
            padding: "clamp(1rem, 2vw, 1.2rem)",
            display: "flex",
            flexDirection: "column",
            gap: "0.95rem",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
            <div style={{ color: "#6B7280", fontSize: "0.92rem", fontWeight: 600, transition: "transform 0.2s ease", transform: phase === "revealed" ? "translateY(-1px)" : "translateY(0)" }}>
              {progressLabel}
            </div>
            {currentQuestion ? (
              <div
                style={{
                  color: "#7A5D2E",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  padding: "0.32rem 0.7rem",
                  borderRadius: "999px",
                  background: "#F5E9D8",
                  opacity: phase === "revealed" ? 1 : 0,
                  transform: phase === "revealed" ? "translateY(0)" : "translateY(4px)",
                  transition: "opacity 0.24s ease, transform 0.24s ease",
                }}
              >
                🏷 {currentQuestion.category}
              </div>
            ) : null}
          </div>

          {currentQuestion ? (
            <>
              <div
                style={{
                  padding: "clamp(1rem, 1.7vw, 1.2rem)",
                  borderRadius: "18px",
                  background: "rgba(255, 255, 255, 0.75)",
                  border: "1px solid rgba(31, 41, 55, 0.06)",
                  boxShadow: "0 8px 16px rgba(31, 41, 55, 0.04)",
                }}
              >
                <h4
                  style={{
                    margin: 0,
                    fontSize: "clamp(1.08rem, 1.9vw, 1.24rem)",
                    lineHeight: 1.45,
                    color: "#1F2937",
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {currentQuestion.prompt}
                </h4>
              </div>

              <div style={{ display: "grid", gap: "0.85rem" }}>
                <button
                  type="button"
                  onClick={() => handleAnswer("A")}
                  disabled={phase !== "idle"}
                  onMouseEnter={() => setHoveredOption("A")}
                  onMouseLeave={() => setHoveredOption(null)}
                  style={{
                    minHeight: "70px",
                    borderRadius: "18px",
                    border: selectedOption === "A" ? "1px solid #1F2937" : "1px solid #EADFCF",
                    background: selectedOption === "A" ? "#1F2937" : "#F9F5EB",
                    color: selectedOption === "A" ? "#FFF" : "#1F2937",
                    padding: "1rem 1.05rem",
                    textAlign: "left",
                    fontSize: "1rem",
                    fontWeight: 700,
                    lineHeight: 1.5,
                    cursor: phase !== "idle" ? "not-allowed" : "pointer",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease",
                    transform: hoveredOption === "A" && phase === "idle" ? "translateY(-2px) scale(1.01)" : "translateY(0) scale(1)",
                    boxShadow: selectedOption === "A" ? "0 10px 24px rgba(31, 41, 55, 0.14)" : hoveredOption === "A" ? "0 8px 18px rgba(31, 41, 55, 0.08)" : "none",
                    opacity: phase === "revealed" && selectedOption !== "A" ? 0.78 : 1,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                    <span style={{ fontSize: "1.05rem", fontWeight: 800 }}>A</span>
                    <span style={{ lineHeight: 1.45 }}>{currentQuestion.optionA}</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleAnswer("B")}
                  disabled={phase !== "idle"}
                  onMouseEnter={() => setHoveredOption("B")}
                  onMouseLeave={() => setHoveredOption(null)}
                  style={{
                    minHeight: "70px",
                    borderRadius: "18px",
                    border: selectedOption === "B" ? "1px solid #1F2937" : "1px solid #EADFCF",
                    background: selectedOption === "B" ? "#1F2937" : "#F9F5EB",
                    color: selectedOption === "B" ? "#FFF" : "#1F2937",
                    padding: "1rem 1.05rem",
                    textAlign: "left",
                    fontSize: "1rem",
                    fontWeight: 700,
                    lineHeight: 1.5,
                    cursor: phase !== "idle" ? "not-allowed" : "pointer",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease",
                    transform: hoveredOption === "B" && phase === "idle" ? "translateY(-2px) scale(1.01)" : "translateY(0) scale(1)",
                    boxShadow: selectedOption === "B" ? "0 10px 24px rgba(31, 41, 55, 0.14)" : hoveredOption === "B" ? "0 8px 18px rgba(31, 41, 55, 0.08)" : "none",
                    opacity: phase === "revealed" && selectedOption !== "B" ? 0.78 : 1,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                    <span style={{ fontSize: "1.05rem", fontWeight: 800 }}>B</span>
                    <span style={{ lineHeight: 1.45 }}>{currentQuestion.optionB}</span>
                  </div>
                </button>
              </div>
            </>
          ) : null}

          {phase === "answering" ? (
            <div
              style={{
                borderRadius: "16px",
                background: "#F4EBDC",
                border: "1px solid #E5D7BB",
                padding: "0.8rem 0.95rem",
                color: "#7A5D2E",
                fontSize: "0.95rem",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: "0.45rem",
              }}
            >
              <span style={{ fontSize: "1rem" }} aria-hidden="true">
                ✨
              </span>
              <span>Preparing your verdict{loadingDots}</span>
            </div>
          ) : null}

          {phase === "revealed" && reaction ? (
            <div
              style={{
                borderRadius: "16px",
                background: "#F4EBDC",
                border: "1px solid #E5D7BB",
                padding: "0.8rem 0.95rem",
                color: "#7A5D2E",
                fontSize: "0.95rem",
                fontWeight: 700,
                transform: "translateY(0)",
                opacity: 1,
                transition: "transform 0.24s ease, opacity 0.24s ease",
              }}
            >
              {reaction}
            </div>
          ) : null}

          {phase === "revealed" && communityStats ? (
            <div
              style={{
                borderRadius: "16px",
                background: "#F9F4EA",
                border: "1px solid #E9DCC6",
                padding: "0.8rem 0.95rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.45rem",
                opacity: reportVisible ? 1 : 0,
                transition: prefersReducedMotion ? "none" : "opacity 0.24s ease",
              }}
            >
              <div style={{ color: "#7A5D2E", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {communityStats.title}
              </div>
              <div style={{ color: "#1F2937", fontSize: "0.98rem", fontWeight: 700 }}>
                {communityStats.selectedPercent}% of imaginary internet strangers agree.
              </div>
              <div style={{ color: "#6B7280", fontSize: "0.9rem" }}>{communityStats.label}</div>
              <div style={{ color: "#7A5D2E", fontSize: "0.85rem", fontWeight: 600 }}>{communityStats.note}</div>
            </div>
          ) : null}

          {phase === "revealed" && newBadge ? (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                width: "fit-content",
                padding: "0.4rem 0.7rem",
                borderRadius: "999px",
                background: "#F1E4C9",
                color: "#7A5D2E",
                fontSize: "0.84rem",
                fontWeight: 700,
                animation: "fadeIn 0.24s ease",
              }}
            >
              <span aria-hidden="true">🏅</span>
              {newBadge}
            </div>
          ) : null}

          {phase === "revealed" && unlockedBadges.length > 0 ? (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
              {unlockedBadges.map((badge) => (
                <div
                  key={badge}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    borderRadius: "999px",
                    padding: "0.35rem 0.6rem",
                    background: "rgba(241, 228, 201, 0.75)",
                    color: "#7A5D2E",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                  }}
                >
                  <span aria-hidden="true">🏅</span>
                  {badge}
                </div>
              ))}
            </div>
          ) : null}

          {milestoneMessage ? (
            <div style={{ color: "#7A5D2E", fontSize: "0.94rem", fontWeight: 700 }}>{milestoneMessage}</div>
          ) : null}

          <button
            type="button"
            onClick={handleNext}
            disabled={phase !== "revealed"}
            style={{
              alignSelf: "flex-start",
              border: "1px solid #E4D8C5",
              borderRadius: "999px",
              background: phase === "revealed" ? "#F7F1E8" : "#EFE7D7",
              color: phase === "revealed" ? "#1F2937" : "#8B7D64",
              padding: "0.78rem 1rem",
              fontSize: "0.92rem",
              fontWeight: 700,
              cursor: phase === "revealed" ? "pointer" : "not-allowed",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              transform: phase === "revealed" ? "translateY(-1px)" : "translateY(0)",
            }}
          >
            Next Question
          </button>
        </div>
      </div>
    </section>
  );
}
