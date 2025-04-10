import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  preview: {
    port: 443,
    host: "0.0.0.0", // Explicitly listen on all interfaces
    https:
      fs.existsSync("./cert.key") && fs.existsSync("./cert.crt")
        ? {
            key: fs.readFileSync("./cert.key"),
            cert: fs.readFileSync("./cert.crt"),
          }
        : false,
    middleware: [
      (req, res, next) => {
        // Only redirect in production
        if (process.env.NODE_ENV === "production" && !req.secure) {
          const host = req.headers.host?.split(":")[0] || req.headers.host; // Remove port if present
          const httpsUrl = `https://${host}${req.url}`;
          res.writeHead(301, { Location: httpsUrl });
          res.end();
        } else {
          next();
        }
      },
    ],
  },
  server: {
    // Add the same middleware for development server
    middleware: [
      (req, res, next) => {
        if (mode === "production" && !req.secure) {
          const host = req.headers.host?.split(":")[0] || req.headers.host;
          const httpsUrl = `https://${host}${req.url}`;
          res.writeHead(301, { Location: httpsUrl });
          res.end();
        } else {
          next();
        }
      },
    ],
  },
  plugins: [react()],
  define: {
    "import.meta.env.VITE_API_URL": JSON.stringify(
      mode === "production"
        ? "https://caresyncunity.live:8000/api/v1"
        : "http://localhost:8000/api/v1"
    ),
  },
}));
