// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://mimio.ftrhq.my.id",
  devToolbar: {
    enabled: false,
  },
  vite: {
    // @ts-ignore - Type mismatch between Astro's Vite and Tailwind's Vite types
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
