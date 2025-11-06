import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,          // permite usar describe, test, expect sem importar
    environment: "jsdom",   // simula DOM para testes de React
  },
});
