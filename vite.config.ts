import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin('all')
  ],
});
