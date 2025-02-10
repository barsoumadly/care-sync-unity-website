import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  preview: {
    port: 443,
    host: true, // Listen on all addresses
    https:
      fs.existsSync("./cert.key") && fs.existsSync("./cert.crt")
        ? {
            key: "./cert.key",
            cert: "./cert.crt",
          }
        : false,
  },
  plugins: [react()],
  define: {
    'import.meta.env.VITE_API_URL': JSON.stringify(
      mode === 'production'
        ? 'https://caresyncunity.live:8000/api/v1'
        : 'http://localhost:8000/api/v1'
    )
  }
}));
