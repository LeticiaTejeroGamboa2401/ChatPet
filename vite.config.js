import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://10.0.145.19:5000', // tu IP local
        changeOrigin: true,
      },
    },
  },
});
