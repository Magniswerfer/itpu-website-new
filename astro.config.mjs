// @ts-check
import { defineConfig } from 'astro/config';

// Sæt SITE til det endelige domæne, når sitet går i luften.
export default defineConfig({
  site: process.env.SITE ?? 'https://itpu.example.dk',
  output: 'static',
  trailingSlash: 'always',
});
