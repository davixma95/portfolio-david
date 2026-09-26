# Portfolio — David Manuel García

Portfolio personal construido con React + Vite.

## Estructura

```
src/
  data.js          ← todo el contenido (perfil, experiencia, skills, proyectos)
  components/      ← un componente por sección
  index.css        ← tokens de diseño (colores, tipografías) y estilos globales
```

Para actualizar textos, fechas, skills o proyectos, edita únicamente
`src/data.js`. No hace falta tocar los componentes.

## Desarrollo local

[Node.js](https://nodejs.org/) 18 o superior.

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


4. Instala las dependencias y despliega:

   ```bash
   npm install
   npm run deploy
   ```
