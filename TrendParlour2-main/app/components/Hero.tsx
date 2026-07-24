import CuriosityButton from "./CuriosityButton";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#F8F7F2",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          marginBottom: "1rem",
        }}
      >
        TrendParlour
      </h1>

      <p
        style={{
          fontSize: "1.5rem",
          color: "#555",
          marginBottom: "2rem",
        }}
      >
        What are you curious about today?
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "320px",
          marginTop: "2rem",
        }}
      >
        <CuriosityButton href="/laugh" color="#7ED957" emoji="😊" text="Make Me Laugh" />
        <CuriosityButton href="/play" color="#8B5CF6" emoji="🎮" text="Let Me Play" />
        <CuriosityButton href="/surprise" color="#38BDF8" emoji="✨" text="Surprise Me" />
        <CuriosityButton
          href="/challenge"
          color="#FACC15"
          textColor="#222"
          emoji="🧠"
          text="Challenge Me"
        />
        <CuriosityButton
          href="/weird"
          color="#EC4899"
          emoji="🌍"
          text="Show Me Something Weird"
        />
      </div>
    </section>
  );
}