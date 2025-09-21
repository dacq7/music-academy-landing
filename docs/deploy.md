# Plan de Deploy en AWS (Free Tier)

## 🚀 Opción 1: AWS Amplify Hosting (recomendada por simplicidad)
1. Crear una cuenta en AWS y activar Free Tier.
2. Instalar Amplify CLI (opcional, se puede usar solo la consola).
   - `npm install -g @aws-amplify/cli`
3. Conectar el repositorio desde la consola de AWS Amplify.
4. Configuración:
   - Framework: **Vite (React)**
   - Build command: `npm run build`
   - Output directory: `dist`
5. Activar auto-deploy con cada push a la rama `main`.
6. AWS asigna un dominio tipo `https://main.<id>.amplifyapp.com`.
7. Opcional: conectar dominio propio (ej. `academia.com`).

## 🚀 Opción 2: S3 + CloudFront (más control manual)
1. Crear un bucket S3 con nombre único (ej. `music-academy-landing`).
2. Configurar el bucket como **static website hosting**.
3. Subir el contenido de la carpeta `dist` (después de `npm run build`).
4. Dar permisos de lectura pública o usar CloudFront.
5. (Opcional) Configurar CloudFront para distribución global y HTTPS gratis con ACM.
6. Acceso final: `https://<bucket-name>.s3.amazonaws.com/index.html` o el dominio asignado en CloudFront.

## ✅ Recomendaciones antes de desplegar
- Ejecutar `npm run build && npm run preview` para validar el build localmente.
- Revisar el sitio con Lighthouse (performance, accesibilidad, SEO).
- Si usas S3, asegúrate de configurar correctamente la política del bucket para servir archivos estáticos.
- Si usas Amplify, revisa la consola para logs de cada build.


