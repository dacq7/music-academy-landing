function Hero() {
  return (
    <section id="hero" style={{ textAlign: "center", padding: "60px 20px" }}>
      <h1>Academia de Música</h1>
      <p>Clases de piano, guitarra, violín, canto, composición y teoría musical</p>
      <button
        style={{
          padding: "12px 24px",
          marginTop: "20px",
          backgroundColor: "#1E3A8A",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Reserva tu clase gratis
      </button>
    </section>
  );
}

export default Hero;
// TODO: implementar Hero
