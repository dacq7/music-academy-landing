function Navbar() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "#111827",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        zIndex: 1000,
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "18px" }}>Academia</div>

      <div>
        <button
          onClick={() => handleScroll("hero")}
          style={{ margin: "0 10px", background: "none", color: "#fff", border: "none", cursor: "pointer" }}
        >
          Inicio
        </button>
        <button
          onClick={() => handleScroll("cursos")}
          style={{ margin: "0 10px", background: "none", color: "#fff", border: "none", cursor: "pointer" }}
        >
          Cursos
        </button>
        <button
          onClick={() => handleScroll("testimonios")}
          style={{ margin: "0 10px", background: "none", color: "#fff", border: "none", cursor: "pointer" }}
        >
          Testimonios
        </button>
        <button
          onClick={() => handleScroll("contacto")}
          style={{ margin: "0 10px", background: "none", color: "#fff", border: "none", cursor: "pointer" }}
        >
          Contacto
        </button>
      </div>

      <button
        onClick={() => handleScroll("contacto")}
        style={{
          padding: "8px 16px",
          backgroundColor: "#1E3A8A",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Reserva tu clase gratis
      </button>
    </nav>
  );
}

export default Navbar;
