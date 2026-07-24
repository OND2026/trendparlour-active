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
      </p><div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "320px",
    marginTop: "2rem",
  }}
>
  <a href="/laugh">
  <button
  style={{
    padding: "14px 28px",
    borderRadius: "16px",
    border: "none",
    background: "#7ED957",
    color: "white",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    marginBottom: "12px",
    width: "260px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
  }}
>
  😊 Make Me Laugh
</button>
</a>

 <a href="/play">
  <button
  style={{
    padding: "14px 28px",
    borderRadius: "16px",
    border: "none",
    background: "#8B5CF6",
    color: "white",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    marginBottom: "12px",
    width: "260px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
  }}
>
  🎮 Let Me Play
</button>
</a>

  <a href="/surprise">
  <button
  style={{
    padding: "14px 28px",
    borderRadius: "16px",
    border: "none",
    background: "#38BDF8",
    color: "white",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    marginBottom: "12px",
    width: "260px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
  }}
>
  ✨ Surprise Me
</button>
</a>

  <a href="/challenge">
  <button
  style={{
    padding: "14px 28px",
    borderRadius: "16px",
    border: "none",
    background: "#FACC15",
    color: "#222",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    marginBottom: "12px",
    width: "260px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
  }}
>
  🧠 Challenge Me
</button>
</a>

  <a href="/weird">
  <button
  style={{
    padding: "14px 28px",
    borderRadius: "16px",
    border: "none",
    background: "#EC4899",
    color: "white",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    marginBottom: "12px",
    width: "260px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
  }}
>
  🌍 Show Me Something Weird
</button>
</a>

  
</div>
    </section>
  );
}