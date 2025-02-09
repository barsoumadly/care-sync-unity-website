import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";

// https://vite.dev/config/
export default defineConfig({
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
});
