import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite configuration for React + Vercel deployment
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",        // Folder where the built files go
  },
  server: {
    port: 3000,            // Local dev port
    open: true,            // Auto-open browser when running locally
  },
});
