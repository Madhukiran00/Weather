
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  preview: {
    host: "0.0.0.0",
    port: process.env.PORT || 10000,
    allowedHosts: ["task-weather-app-7f0y.onrender.com"]
  },
});
