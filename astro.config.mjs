import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({  
  integrations: [react(),
  ],
  output: 'server',
  build: {
    // Aquí puedes definir las rutas personalizadas si es necesario
  },
  routes: [
    // Otras rutas aquí
    { match: '404', redirect: '/404' }
  ]
  
});