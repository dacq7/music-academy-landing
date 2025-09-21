import { useState } from "react";
import contacto from "../content/contacto.json";

function Footer() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    fecha: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reserva enviada:", formData);
    alert("¡Tu solicitud de clase ha sido enviada!");
    setFormData({ nombre: "", email: "", fecha: "", mensaje: "" });
  };

  return (
    <footer id="contacto">
      <h2>Contacto</h2>
      <p>{contacto.direccion}</p>
      <p>
        <a href={`tel:${contacto.telefono}`}>{contacto.telefono}</a>
      </p>
      <p>
        <a href={`mailto:${contacto.email}`}>{contacto.email}</a>
      </p>

      <div>
        <a href={contacto.redes.instagram} target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href={contacto.redes.facebook} target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href={contacto.redes.youtube} target="_blank" rel="noopener noreferrer">
          YouTube
        </a>
      </div>

      {/* 📌 Formulario de reserva */}
      <div className="reserva">
        <h3>Reserva tu clase gratis</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="datetime-local"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
          />
          <textarea
            name="mensaje"
            placeholder="Mensaje (opcional)"
            value={formData.mensaje}
            onChange={handleChange}
          />
          <button type="submit">Reservar</button>
        </form>
      </div>

      <p>© {new Date().getFullYear()} Academia de Música. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;


