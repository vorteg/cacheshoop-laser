import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
   integrations: [react()],
   site: 'https://vorteg.github.io',
   base: 'cacheshoop-laser',  
  routes: [
    // Otras rutas aquí
    { match: '404', redirect: '/404' }
  ]
  
});