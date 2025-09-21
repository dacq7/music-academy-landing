import cursos from "../content/cursos.json";

function Courses() {
  return (
    <section id="cursos" style={{ padding: "60px 20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Nuestros Cursos</h2>
      <ul style={{ maxWidth: "600px", margin: "0 auto", listStyle: "none", padding: 0 }}>
        {cursos.map((curso) => (
          <li
            key={curso.id}
            style={{
              marginBottom: "20px",
              padding: "16px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <h3>{curso.titulo}</h3>
            <p>{curso.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Courses;
// TODO: implementar Courses
