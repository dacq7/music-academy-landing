import { useState } from "react";
import cursos from "../content/cursos.json";

function Courses() {
  const [cursoActivo, setCursoActivo] = useState(null);

  const toggleDetalle = (id) => {
    setCursoActivo(cursoActivo === id ? null : id);
  };

  return (
    <section id="cursos">
      <h2>Nuestros Cursos</h2>
      <ul>
        {cursos.map((curso) => (
          <li
            key={curso.id}
            onClick={() => toggleDetalle(curso.id)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/${curso.imagen}`}
              alt={curso.titulo}
            />
            <h3>{curso.titulo}</h3>
            <p>{curso.desc}</p>
            {cursoActivo === curso.id && (
              <p style={{ marginTop: "10px", color: "var(--color-text-muted)" }}>
                {curso.detalle}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Courses;



