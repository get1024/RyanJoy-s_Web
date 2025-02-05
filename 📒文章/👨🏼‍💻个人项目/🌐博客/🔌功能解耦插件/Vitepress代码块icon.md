---
title: Vitepress 代码块显示 icon 方案
createAt: 2025-02-03 22:26:06
updateAt: 2025-02-05 12:32:28
tags:
  - 博客
  - 插件
  - 解决方案
  - 教程
---

# Vitepress 代码块显示 icon 方案

## 安装

::: code-group

```sh [pnpm]
pnpm add -D vitepress-plugin-group-icons
```

```sh [npm]
npm install vitepress-plugin-group-icons -D
```

```sh [yarn]
yarn add vitepress-plugin-group-icons -D
```

```sh [bun]
bun vitepress-plugin-group-icons -d
```

:::

## 配置

首先配置 `Vitepress` 的核心配置文件 `📄:.vitepress/config.mts`

```ts [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons' // [!code ++]

export default defineConfig({
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin) // [!code ++]
    },
  },
  vite: {
    plugins: [
      groupIconVitePlugin() // [!code ++]
    ],
  }
})
```

再配置 `Vitepress` 的主题配置文件 `📄:.vitepress/theme/index.ts`

```ts [.vitepress/theme/index.ts]
import Theme from 'vitepress/theme'
import 'virtual:group-icons.css' // [!code ++]

export default Theme
```

## 使用

### 代码块图标

输入

````md [example.md]
::: code-group

```sh [npm]
npm install vitepress-plugin-group-icons
```

```sh [yarn]
yarn add vitepress-plugin-group-icons
```

```sh [pnpm]
pnpm add vitepress-plugin-group-icons
```

```sh [bun]
bun add vitepress-plugin-group-icons
```

:::
````

输出

::: code-group

```sh [npm]
npm install vitepress-plugin-group-icons
```

```sh [yarn]
yarn add vitepress-plugin-group-icons
```

```sh [pnpm]
pnpm add vitepress-plugin-group-icons
```

```sh [bun]
bun add vitepress-plugin-group-icons
```

:::

### 含标题代码块组

输入

````md [example.md]
```js [vite.config.js] <!-- [!code warning] -->
import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
})
```
````

输出

```js [vite.config.js]
import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
})
```

### 分不清图标和标题?

对于 [代码块图标](#代码块图标) ，是我们指定使用的包管理器如 `pnpm` 、文件后缀如 `.ts` 等的名称后，显示出来的对应图标。

对于 [含标题代码块组](#含标题代码块组) ，是我们指定文件名如 `example.md` 后，显示出来标题 example.md。

## 图标字典汇总

### 包管理器

```js [index.js]
// package manager
"pnpm": "vscode-icons:file-type-light-pnpm",
"npm": "vscode-icons:file-type-npm",
"yarn": "vscode-icons:file-type-yarn",
"bun": "vscode-icons:file-type-bun",
"deno": "vscode-icons:file-type-light-deno",
"pip": "vscode-icons:file-type-pip", // [!code warning]
```

效果如下

::: code-group

```sh [pnpm]
demo
```

```sh [npm]
demo
```

```sh [yarn]
demo
```

```sh [bun]
demo
```

```sh [deno]
demo
```

```sh [pip]
demo
```

:::

### 框架

```js [index.js]
// frameworks
"vue": "vscode-icons:file-type-vue",
"svelte": "vscode-icons:file-type-svelte",
"angular": "vscode-icons:file-type-angular",
"react": "vscode-icons:file-type-reactjs",
"next": "vscode-icons:file-type-light-next",
"nuxt": "vscode-icons:file-type-nuxt",
"solid": "logos:solidjs-icon",
"astro": "vscode-icons:file-type-light-astro",
"docker":"vscode-icons:file-type-docker2", // [!code warning]
```

效果如下

::: code-group

``` [Vue]
demo
```

``` [Svelte]
demo
```

``` [angular]
demo
```

``` [react]
demo
```

``` [next]
demo
```

``` [nuxt]
demo
```

``` [solid]
demo
```

``` [astro]
demo
```

``` [docker]
demo
```

:::

### 打包器

```js [index.js]
// bundlers
"rollup": "vscode-icons:file-type-rollup",
"webpack": "vscode-icons:file-type-webpack",
"vite": "vscode-icons:file-type-vite",
"esbuild": "vscode-icons:file-type-esbuild",
```

效果如下

::: code-group

``` [rollup]
demo
```

``` [webpack]
demo
```

``` [vite]
demo
```

``` [esbuild]
demo
```

:::

### 配置文件

```js [index.js]
// configuration files
"package.json": "vscode-icons:file-type-node",
"tsconfig.json": "vscode-icons:file-type-tsconfig",
".npmrc": "vscode-icons:file-type-npm",
".editorconfig": "vscode-icons:file-type-editorconfig",
".eslintrc": "vscode-icons:file-type-eslint",
".eslintignore": "vscode-icons:file-type-eslint",
"eslint.config": "vscode-icons:file-type-eslint",
".gitignore": "vscode-icons:file-type-git",
".gitattributes": "vscode-icons:file-type-git",
".env": "vscode-icons:file-type-dotenv",
".env.example": "vscode-icons:file-type-dotenv",
".vscode": "vscode-icons:file-type-vscode",
"tailwind.config": "vscode-icons:file-type-tailwind",
"uno.config": "vscode-icons:file-type-unocss",
"unocss.config": "vscode-icons:file-type-unocss",
".oxlintrc": "vscode-icons:file-type-oxlint",
```

::: code-group

``` [package.json]
demo
```

``` [tsconfig.json]
demo
```

``` [.npmrc]
demo
```

``` [.editorconfig]
demo
```

``` [.eslintrc]
demo
```

``` [.eslintignore]
demo
```

``` [eslint.config]
demo
```

``` [.gitignore]
demo
```

``` [.gitattributes]
demo
```

``` [.env]
demo
```

``` [.env.example]
demo
```

``` [.vscode]
demo
```

``` [tailwind.config]
demo
```

``` [uno.config]
demo
```

``` [unocss.config]
demo
```

``` [.oxlintrc]
demo
```

:::

### 文件扩展名

```js [index.js]
// filename extensions
".ts": "vscode-icons:file-type-typescript",
".mts":"vscode-icons:file-type-typescript", // [!code warning]
".tsx": "vscode-icons:file-type-typescript",
".mjs": "vscode-icons:file-type-js",
".cjs": "vscode-icons:file-type-js",
".json": "vscode-icons:file-type-json",
".js": "vscode-icons:file-type-js",
".jsx": "vscode-icons:file-type-js",
".md": "vscode-icons:file-type-markdown",
".py": "vscode-icons:file-type-python",
".cpp":"vscode-icons:file-type-cpp", // [!code warning]
".ico": "vscode-icons:file-type-favicon",
".html": "vscode-icons:file-type-html",
".css": "vscode-icons:file-type-css",
".yml": "vscode-icons:file-type-light-yaml",
".yaml": "vscode-icons:file-type-light-yaml",
```

::: code-group

``` [.ts]
demo
```

``` [.mts]
demo
```

``` [.tsx]
demo
```

``` [.mjs]
demo
```

``` [.cjs]
demo
```

``` [.json]
demo
```

``` [.js]
demo
```

``` [.jsx]
demo
```

``` [.md]
demo
```

``` [.py]
demo
```

``` [.cpp]
demo
```

``` [.ico]
demo
```

``` [.html]
demo
```

``` [.css]
demo
```

``` [.yml]
demo
```

``` [.yaml]
demo
```

:::

### 命令行

```js [index.js]
// bash
"git":"vscode-icons:file-type-git", // [!code warning]
"powershell":"vscode-icons:file-type-powershell", // [!code warning]
"shell":"vscode-icons:file-type-shell", // [!code warning]
```

::: code-group

``` [git]
demo
```

``` [powershell]
demo
```

``` [shell]
demo
```

:::

---

::: details 示例代码高亮行含义？
上述高亮示例代码是我针对个人需求，补充了插件库中所缺失的图标配置，内容如下

```ts [config.mts]
groupIconVitePlugin({
	customIcon: {
		pip: "vscode-icons:file-type-pip",
		docker: "vscode-icons:file-type-docker2",
		".mts":"vscode-icons:file-type-typescript",
		".cpp": "vscode-icons:file-type-cpp",
		git: "vscode-icons:file-type-git",
		powershell: "vscode-icons:file-type-powershell",
		shell: "vscode-icons:file-type-shell"
	},
}),
```

如何客制化需求？见下文。
:::

## 自定义图标

你可以从 [vscode-icons](https://github.com/vscode-icons/vscode-icons/tree/master/icons)、本地 `SVG` 文件或者外部 `URL` 链接进行图标自定义操作。

```ts {2,13-19} [.vitepress/config.ts]
import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin, localIconLoader } from 'vitepress-plugin-group-icons'

export default defineConfig({
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          '.mdx': 'vscode-icons:file-type-light-mdx',
          'babel': 'vscode-icons:file-type-babel',
          'ryanjoy': localIconLoader(import.meta.url, '../public/RyanJoy.svg'),
          'unplugin': 'https://unplugin.unjs.io/logo_light.svg',
        },
      })
    ],
  }
})
```

::: code-group

``` [foo.mdx]
demo
```

``` [Babel]
demo
```

``` [RyanJoy]
demo
```

``` [Unplugin]
demo
```

:::