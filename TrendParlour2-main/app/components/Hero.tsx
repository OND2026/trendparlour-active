import CuriosityButton from "./CuriosityButton";
import homeButtons from "../data/homeButtons";

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
        {homeButtons.map((button) => (
          <CuriosityButton
            key={button.href}
            href={button.href}
            color={button.color}
            textColor={button.textColor}
            emoji={button.emoji}
            text={button.text}
          />
        ))}
      </div>
    </section>
  );
}