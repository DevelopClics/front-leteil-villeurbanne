import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      // dev specific config
      plugins: [react()],
      base: '/',
    }
  } else {
    // command === 'build'
    return {
      // build specific config
      plugins: [react()],
      base: '/front-leteil-villeurbanne/',
    }
  }
});
