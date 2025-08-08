import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/",
    server: {
      base: "/",
    },
  };

  console.log(`Vite config - command: ${command}, base: ${config.base}, server.base: ${config.server.base}`);

  return config;
});

console.log("Vite config loaded with base: / and server.base: /");
