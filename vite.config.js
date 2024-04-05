import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { BootstrapVueNextResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    server: {
      proxy: {
          '/api/auth/signin': {
              target: `${env.VITE_BACKEND}`,
              // changeOrigin: true,
              // secure: false, 
            },
            '/student' : {
              target: `${env.VITE_BACKEND}`
            },
            '/courses': {
              target: `${env.VITE_BACKEND}`,            
            },
          }
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
          BootstrapVueNextResolver()
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
      },
  }
};
});
