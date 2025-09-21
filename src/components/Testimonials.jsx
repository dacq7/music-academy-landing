import testimonios from "../content/testimonios.json";

function Testimonials() {
  return (
    <section id="testimonios">
      <h2>Testimonios</h2>
      <div>
        {testimonios.map((t, index) => (
          <div key={index}>
            <p style={{ fontStyle: "italic" }}>"{t.texto}"</p>
            <p style={{ fontWeight: "bold", marginTop: "10px" }}>– {t.nombre}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

