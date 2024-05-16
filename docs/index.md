---
layout: home

title: 🏡Home

head:
  - - meta
    - name: keywords
    - content: vitepress vue vite blog 个人博客 博客
  - - meta
    - name: description
    - content: 一个全栈程序员的个人博客

hero:
  name: RyanJoy's Blog
  text: 📝记录RyanJoy生活、学习、回忆的个人宫殿
  tagline: “🌟且视他人之疑目如盏盏鬼火，大胆地去走自己的夜路吧。”
  actions:
  #  /blog/ --> 默认进入blog下的index.md
    - theme: brand
      text: 进入博客
      link: /blog/index
    - theme: alt
      text: 联系我
      link: /about_me/reach_me
    - theme: sponsor
      text: 赞助作者
      link: /about_me/sponsor
  image:
    src: /logo.png
    alt: RyanJoy's Blog logo

features:
  - icon: 🗞️
    title: 精彩的知识以及内容！
    details: RyanJoy知识库所包含的页面均由RyanJoy创作&维护，涉及到生活中、技术上、个人项目等各方面知识和内容；也含有作者个人的反思以及成长。
  - icon: 📑
    title: 全都是Markdown！
    details: 从理论到实践、从开始研究到得出结论、从搭建到部署，全都使用Markdown进行撰写，为您提供清晰的文章脉络，进而获得更好的阅读体验。
  - icon: 📔
    title: 基于Obsidian
    details: 项目基于作者obsidian的RyanJoy's Vault知识图书馆。一款强大的知识管理工具，让知识图谱的构建更加简单！
  - icon: 🚀
    title: 由Vitepress提供支持
    details: 一款快速、易用的SSG工具，为本知识系统提供支持。在此感谢为vue.js、vite、vitepress做出贡献的所有朋友🙏。
---

<p align="center" style="margin:30px;font-size:13px;">
  本站总访问量 <span id="busuanzi_value_site_pv" style="color:#bd34fe"/> 次
  本站访客数 <span id="busuanzi_value_site_uv" style="color:#bd34fe"/> 人次
</p>

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #ffd30b);

  --vp-home-hero-image-background-image: linear-gradient(30deg, #bd34fe 25%, #ffd30b 75%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
