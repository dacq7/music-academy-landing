function Hero() {
  return (
    <section id="hero" style={{ textAlign: "center", padding: "100px 20px" }}>
      <img
        src={`${import.meta.env.BASE_URL}images/hero.png`}
        alt="Academia de Música"
        style={{ maxWidth: "300px", marginBottom: "20px", borderRadius: "12px" }}
      />
      <h1>Academia de Música</h1>
      <p>Clases de piano, guitarra, violín, canto, composición y teoría musical</p>
      <button
        onClick={() =>
          document.getElementById("contacto").scrollIntoView({ behavior: "smooth" })
        }
        style={{ marginTop: "20px" }}
      >
        Reserva tu clase gratis
      </button>
    </section>
  );
}

export default Hero;



