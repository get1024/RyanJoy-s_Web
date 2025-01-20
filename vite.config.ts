//vite.config.ts

import { defineConfig } from "vite";
import Sitemap from 'vite-plugin-sitemap';
import Vue from '@vitejs/plugin-vue'; 

export default defineConfig({
    plugins:[
        Vue(),
        Sitemap({
            hostname: 'https://get1024.github.io/RyanJoy-s_Web/',
            changefreq: 'daily',
        }),
    ]
});