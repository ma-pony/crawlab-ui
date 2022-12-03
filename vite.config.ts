import {resolve} from 'path';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import dynamicImport from 'vite-plugin-dynamic-import';

export default defineConfig({
  build: {
    lib: {
      name: 'crawlab-ui',
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'crawlab-ui',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    },
  },
  resolve: {
    alias: [
      {find: '@', replacement: resolve(__dirname, 'src')},
    ],
    extensions: [
      '.js',
      '.ts',
      '.jsx',
      '.tsx',
      '.json',
      '.vue',
      '.scss',
    ]
  },
  plugins: [
    vue(),
    dynamicImport(),
  ],
  server: {
    cors: true,
  },
});
