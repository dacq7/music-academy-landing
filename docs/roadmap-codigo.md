# Roadmap de Implementación

## 🧩 Orden de desarrollo de componentes
1. **Hero**
   - Crear sección inicial con título, subtítulo y CTA (botón).
   - Imagen de fondo/acompañamiento (hero.png).
   - ID: `#hero`.

2. **Courses**
   - Renderizar lista desde `src/content/cursos.json`.
   - Mostrar título, descripción y una imagen por curso.
   - ID: `#cursos`.

3. **Testimonials**
   - Renderizar lista desde `src/content/testimonios.json`.
   - Mostrar nombre, texto y opcionalmente una foto.
   - ID: `#testimonios`.

4. **Footer (Contacto)**
   - Renderizar información desde `src/content/contacto.json`.
   - Incluir dirección, teléfono (tel:), email (mailto:) y enlaces a redes sociales.
   - ID: `#contacto`.

## 🎨 Estilos globales
- Definir tipografías y paleta de colores en `index.css`.
- Mobile-first, con breakpoints según la guía de estilo.
- Botones y secciones siguiendo lo documentado en `docs/guia-de-estilo.md`.

## 🔎 SEO y accesibilidad
- Configurar metadatos en `index.html` (title, description, og).
- Asegurarse de usar etiquetas semánticas correctas (h1 en Hero, h2 en secciones).
- Añadir atributos `alt` en imágenes.

## ⚡ Optimización final
- Ejecutar `npm run build`.
- Validar en local con `npm run preview`.
- Pasar Lighthouse para revisar performance, accesibilidad y SEO.
- Ajustar detalles antes del deploy en AWS.

