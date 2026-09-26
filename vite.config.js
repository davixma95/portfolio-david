import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Si vas a desplegar en GitHub Pages en https://TU_USUARIO.github.io/NOMBRE_REPO/
// cambia "base" por "/NOMBRE_REPO/". Si usas un dominio propio o Vercel/Netlify, deja "/".
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-david/',
})
