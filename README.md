---
title: RyanJoy's Web
createAt: 2024-05-01 12:16:46
updateAt: 2025-02-03 23:26:57
tags:
  - Info
---
# RyanJoy's Web

这是一个基于 VitePress 搭建的个人博客系统。

博客模板待整理中……(主要现在也没需求)

## 🌟 特性

- 📝 基于 Markdown 的文档编写
- 🔍 全文搜索功能
- 🎨 美化的代码块和代码组展示
- 📊 自动生成侧边栏和索引页
- 🔄 Git 更新日志集成
- 🌐 多端同步支持
- 🎯 SEO 优化

## 🛠️ 技术栈

- VitePress
- Vue 3
- TypeScript
- Node.js
- Git

## 📦 项目结构

```sh
.
├── 📒文章/              # 博客文章目录
├── .vitepress/          # VitePress 配置目录
│   ├── dist/           # 构建输出目录
│   ├── theme/         # 主题配置
│   └── config.mts     # 主配置文件
├── public/             # 静态资源目录
└── package.json        # 项目依赖配置

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

## 📝 文档规范

所有文档需要包含以下 front matter:

```markdown
---
title: 文章标题
createAt: YYYY-MM-DD HH:mm:ss
updateAt: YYYY-MM-DD HH:mm:ss
tags:
---
```

## 🤝 贡献指南

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 `Pull Request`

## 📄 许可证

本项目采用 MIT 许可证

## 👨‍💻 作者

RyanJoy - [个人主页](https://github.com/get1024)

## 🙏 致谢

- [VitePress](https://vitepress.dev/)
- [Vue.js](https://vuejs.org/)
- [Node.js](https://nodejs.org/)