import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        kids: ["'Fredoka'", "cursive"],   // main kids font
        fun: ["'Baloo 2'", "cursive"],   // playful option
        chewy: ["'Chewy'", "cursive"],   // cartoon option
      },
    },
  },
  plugins: [react(),
  tailwindcss()
  ],
})
