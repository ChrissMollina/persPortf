// Vite configuration for the React frontend
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Enable React and proxy API calls to Flask
export default defineConfig({
  plugins: [react()],
  server: {
    // Forward /api requests to the Flask backend
    proxy: {
      "/api": "http://127.0.0.1:5000",
    },
  },
});
