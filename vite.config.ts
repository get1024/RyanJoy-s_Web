//vite.config.ts

import { defineConfig } from "vite";
import Sitemap from 'vite-plugin-sitemap';

export default defineConfig({
    plugins:[
        Sitemap({
            hostname: 'https://get1024.github.io/RyanJoy-s_Web/',
            changefreq: 'daily',
            outDir: 'public'
        }),
    ]
});