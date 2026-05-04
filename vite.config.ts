import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [react(), tailwindcss()],
    define: {

    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // SECURITY: Restrict HMR and allowed hosts to prevent DNS rebinding attacks
      hmr: {
        protocol: 'ws',
        host: 'localhost',
        port: 5173,
      },
      allowedHosts: ['localhost', '127.0.0.1'],
    },
  };
});