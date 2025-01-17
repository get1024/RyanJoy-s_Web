import { defineConfig } from 'astro/config'

export default defineConfig({
    site: 'https://get1024.github.io',
    base: '/RyanJoy-s_Web',
    build: {
        outDir: '.vitepress/dist' // 设置构建输出目录
    }
})