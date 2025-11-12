import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For Vercel, no special base needed. Build to dist (default).
export default defineConfig({
  plugins: [react()],
});
