# Portfolio — David Manuel García

Portfolio personal construido con React + Vite. Diseño corporativo y limpio,
sin librerías de UI externas (CSS a medida).

## Estructura

```
src/
  data.js          ← todo el contenido (perfil, experiencia, skills, proyectos)
  components/      ← un componente por sección
  index.css        ← tokens de diseño (colores, tipografías) y estilos globales
```

Para actualizar textos, fechas, skills o proyectos, edita únicamente
`src/data.js`. No hace falta tocar los componentes.

## Antes de publicar

- [ ] Sustituye los 3 proyectos de ejemplo en `src/data.js` por proyectos reales.
- [ ] Añade tus enlaces reales de `github` y `linkedin` en `src/data.js`.
- [ ] Revisa si quieres mantener el teléfono público en la sección de contacto.
- [ ] (Opcional) Cambia el avatar de iniciales "DG" por tu foto: añade la imagen
      en `public/` e impórtala en `src/components/Hero.jsx`.

## Desarrollo local

Requiere [Node.js](https://nodejs.org/) 18 o superior.

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Compilar para producción

```bash
npm run build
npm run preview   # para revisar el build localmente
```

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub, por ejemplo `portfolio-david`.
2. En `vite.config.js`, comprueba que `base` sea `'/portfolio-david/'`
   (debe coincidir exactamente con el nombre de tu repositorio).
3. Sube el proyecto:

   ```bash
   git init
   git add .
   git commit -m "Primer commit: portfolio"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/portfolio-david.git
   git push -u origin main
   ```

4. Instala las dependencias y despliega:

   ```bash
   npm install
   npm run deploy
   ```

   Esto genera la carpeta `dist` y la publica en la rama `gh-pages`.

5. En GitHub: **Settings → Pages → Branch**, selecciona `gh-pages` y guarda.
   Tu web quedará en `https://TU_USUARIO.github.io/portfolio-david/`.

### Alternativa: Vercel o Netlify

Si prefieres no usar GitHub Pages, puedes importar el repositorio directamente
en [Vercel](https://vercel.com) o [Netlify](https://netlify.com) sin
configuración adicional (detectan Vite automáticamente). En ese caso, cambia
`base` en `vite.config.js` de vuelta a `'/'`.
