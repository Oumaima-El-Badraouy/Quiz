import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permet d'exposer l'application sur le réseau
    port: 5173, // Utilise le même port que celui de Vite
  },
  preview: {
    host: true,
    port: 4173, // Port par défaut pour `vite preview`
    allowedHosts: ["quiz-with-react-wegb.onrender.com"], // Autorise l'hôte de Render
  }
})
