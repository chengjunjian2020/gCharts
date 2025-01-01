import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
})
