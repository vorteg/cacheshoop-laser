import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
   integrations: [react()], 
  routes: [
    // Otras rutas aquí
    { match: '404', redirect: '/404' }
  ]
  
});