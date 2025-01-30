//vite.config.ts

import { defineConfig } from "vite";
import Sitemap from 'vite-plugin-sitemap';
import { promises as fs } from 'fs';
import path from 'path';

export default defineConfig({
    plugins: [
        Sitemap({
            hostname: 'https://blog.ryanjoy.top/',
            changefreq: 'daily',
            outDir: '.vitepress/dist',
            generateRobotsTxt: true,
            robots: [{ userAgent: '*', allow: '/' }],
            priority: 1,                  // 优先级
            lastmod: new Date(),          // 最后修改时间
            readable: true,               // 可读的 XML 格式
        }),
        {
            name: 'copy-sitemap-and-robots-to-public',
            async closeBundle() {
                const distPathSitemap = path.resolve(__dirname, '.vitepress/dist/sitemap.xml');
                const distPathRobots = path.resolve(__dirname, '.vitepress/dist/robots.txt');
                const publicPathSitemap = path.resolve(__dirname, 'public/sitemap.xml');
                const publicPathRobots = path.resolve(__dirname, 'public/robots.txt');

                console.log('distPathSitemap:', distPathSitemap);
                console.log('distPathRobots:', distPathRobots);

                try {
                    await fs.access(distPathSitemap);  // 检查文件是否存在
                    await fs.copyFile(distPathSitemap, publicPathSitemap); // 复制文件到 public
                    console.log('sitemap.xml has been copied to public folder');
                } catch (err) {
                    console.warn('sitemap.xml not found in dist folder.');
                }

                try {
                    await fs.access(distPathRobots);  // 检查文件是否存在
                    await fs.copyFile(distPathRobots, publicPathRobots); // 复制文件到 public
                    console.log('robots.txt has been copied to public folder');
                } catch (err) {
                    console.warn('robots.txt not found in dist folder.');
                }
            },
        },
    ],
    build: {
        minify: false,
    }
});