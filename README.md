---
title: "RyanJoy's Blog"
createAt: 2024-05-01 12:16:46
updateAt: 2025-02-10 11:04:56
tags:
  - Info
---

# RyanJoy's Blog

## 🌐 部署方式

这是一个基于 VitePress 搭建的个人博客系统。目前使用 [Obsidian](https://obsidian.md/) 进行文档编写、 [Visual Studio Code](https://code.visualstudio.com/) 进行版本维护。

目前同步托管在 [Vercel](https://vercel.com/) 、 [GitHub Pages](https://pages.github.com/)、 [Cloudflare](https://www.cloudflare.com/zh-cn/) 上，这就产生了三个地址：

- 主站 `Vercel`：<https://blog.ryanjoy.top/>
- 副站 `Github Pages` ：<https://get1024.github.io/>
- 副站 `CloudFlare Pages` ：<https://get1024-github-io.pages.dev/>

**速度对比**

|                                 [Vercel](https://blog.ryanjoy.top/)                                  |                                 [Github Pages](https://get1024.github.io/)                                 |                            [CloudFlare Pages](https://get1024-github-io.pages.dev/)                            |
| :--------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------: |
| ![](https://github.com/get1024/get1024.github.io/blob/main/public/README-assets/vercel.png?raw=true) | ![](https://github.com/get1024/get1024.github.io/blob/main/public/README-assets/gtihub-pages.png?raw=true) | ![](https://github.com/get1024/get1024.github.io/blob/main/public/README-assets/CloudFlare-pages.png?raw=true) |

可见 `Vercel` 还是比较不错的，但是仍然存在问题：对于国内搜索引擎 `Baidu` 的 SEO 做得差强人意，不过这也是静态博客的常见问题了……

考虑到个人博客的「个人」属性，其实对于搜索 => 点击量也不是特别重要，实在有想要别人看到的，最笨的方法就是 share your link 嘛~也没什么的，不太优雅而已。

## 🌟 特性

- 📝 基于 Markdown 的文档编写
- 🔍 全文搜索功能
- 🎨 美化的代码块和代码组展示、 `<table>` 样式……等众多美化样式，高效提升阅读体验！
- 📊 自动生成 [侧边栏](https://blog.ryanjoy.top/%F0%9F%93%92%E6%96%87%E7%AB%A0/%F0%9F%91%A8%F0%9F%8F%BC%E2%80%8D%F0%9F%92%BB%E4%B8%AA%E4%BA%BA%E9%A1%B9%E7%9B%AE/%F0%9F%8C%90%E5%8D%9A%E5%AE%A2/%F0%9F%94%8C%E5%8A%9F%E8%83%BD%E8%A7%A3%E8%80%A6%E6%8F%92%E4%BB%B6/Vitepress%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90%E4%BE%A7%E8%BE%B9%E6%A0%8F.html)、[索引页](https://blog.ryanjoy.top/%F0%9F%93%92%E6%96%87%E7%AB%A0/%F0%9F%91%A8%F0%9F%8F%BC%E2%80%8D%F0%9F%92%BB%E4%B8%AA%E4%BA%BA%E9%A1%B9%E7%9B%AE/%F0%9F%8C%90%E5%8D%9A%E5%AE%A2/%F0%9F%94%8C%E5%8A%9F%E8%83%BD%E8%A7%A3%E8%80%A6%E6%8F%92%E4%BB%B6/Vitepress%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90%E7%B4%A2%E5%BC%95%E9%A1%B5.html)、[标签检索页](https://blog.ryanjoy.top/%F0%9F%93%92%E6%96%87%E7%AB%A0/%F0%9F%91%A8%F0%9F%8F%BC%E2%80%8D%F0%9F%92%BB%E4%B8%AA%E4%BA%BA%E9%A1%B9%E7%9B%AE/%F0%9F%8C%90%E5%8D%9A%E5%AE%A2/%F0%9F%94%8C%E5%8A%9F%E8%83%BD%E8%A7%A3%E8%80%A6%E6%8F%92%E4%BB%B6/Vitepress%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90%E7%B4%A2%E5%BC%95%E9%A1%B5.html) ……等系列自动化配置，完全专注于文章编写
- 🔄 Git 更新日志集成、Obsidian `[[双链]]` 语法支持……等众多插件，强力支持**个人跨平台知识库体系**搭建
- 🎯 SEO 优化
- ……更多特性等你挖掘

## 🛠️ 技术栈

`VitePress` 、 `Vue 3` 、 `TypeScript` 、 `Node.js` 、 `Git` 、 `Markdown` ……

## 📦 项目结构

>  当前还是一个简单的 `Vitepress` 项目，日后会更新为 `monorepo` 来更好的支持博客模板和系列插件等

```sh
~
├── 📒文章/              # 文章目录
├── otherDocs/           # nav文章目录
├── .vitepress/          # VitePress 配置目录
│  ├── dist/             # 构建输出目录
│  ├── theme/            # 主题配置
│  └── config.mts        # 主配置文件
├── public/              # 静态资源目录
└── package.json         # 项目依赖配置

```

## 🚀 快速开始

1. 克隆项目

```bash
git clone https://github.com/get1024/get1024.github.io.git
```

2. 安装依赖

```bash
pnpm install
```

3. 本地开发

```bash
pnpm dev
```

4. 构建部署

```bash
pnpm build
```

## 📝 最佳实践

### 文档规范

所有文档需要包含以下 front matter:

```markdown
---
title: 文章标题
createAt: YYYY-MM-DD HH:mm:ss
updateAt: YYYY-MM-DD HH:mm:ss
tags:
---
```

### 资源处理

所有图片、音频、视频等页内直接引入资源一律放入 `📂:assets/` 中， `📂:assets/` 与当前 `.md` 文档的位置关系如下：

```sh
fatherFolder
|——📂childFoler
|	|——📄file1
|	|——📄file1
|	|——📂assets
|	|	|——📂file1
|	|	|	|——image1.png
|	|	|	|——image2.jepg
|	|	|	|——music.mp3
|	|	|	|——video.mp4
|	|	|	|——...
|	|	|——📂file2/...
|...
```

所有 `PDF` 、 `.xml` 或者一些组件使用的图片、音频、视频等不被直接渲染的资源，放入 **`📂:[root]/public/`**

## 🤝 贡献指南

1. `Fork` [本仓库](https://github.com/get1024/get1024.github.io)
2. 创建您的特性分支 ( `git checkout -b [name]` )
3. 提交您的更改 ( `git commit -m '[message]'` )
4. 推送到分支 ( `git push origin [name]` )
5. 开启一个 `Pull Request`

## 📄 许可证

本项目采用 MIT 许可证

## 👨‍💻 作者

RyanJoy - [个人主页](https://github.com/get1024)

## 🙏 致谢

- [VitePress](https://vitepress.dev/)
- [Vue.js](https://vuejs.org/)
- [Node.js](https://nodejs.org/)