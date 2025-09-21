# Checklist de Accesibilidad y Performance

## ♿ Accesibilidad
- Contraste de colores conforme a WCAG AA.
- Todas las imágenes con atributo **alt** descriptivo.
- Formularios (si se agregan más adelante) con etiquetas asociadas.
- Navegación posible con teclado (tab, enter, espacio).
- Jerarquía semántica: solo un **h1** (en Hero), luego h2/h3 según corresponda.
- Botones con texto claro (evitar "click aquí").

## ⚡ Performance
- Usar imágenes optimizadas (webp o png comprimido).
- Lazy load en imágenes no críticas (ej: testimonios).
- Fuentes de Google Fonts con display=swap.
- CSS y JS minimizados (Vite lo hace en build).
- Verificar con Lighthouse antes del deploy.

## 📱 Responsividad
- Mobile first (empezar diseño desde pantallas pequeñas).
- Verificar en breakpoints: 320px, 768px, 1024px, 1280px.

## 🧪 Validación
- Revisar accesibilidad con extensión AXE o Lighthouse.
- Revisar performance y tiempos de carga.

