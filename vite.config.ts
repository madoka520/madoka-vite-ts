import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url';
import {AntDesignVueResolver} from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import requireTransform from 'vite-plugin-require-transform';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      Components({
          resolvers: [
              AntDesignVueResolver({
                  importStyle: false, // css in js
              }),
          ],
      }),
      requireTransform({
          fileRegex: /.js$|.vue$/
      }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
