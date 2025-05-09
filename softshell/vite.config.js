import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Default Vite development port
    open: true, // Opens the browser on start
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
