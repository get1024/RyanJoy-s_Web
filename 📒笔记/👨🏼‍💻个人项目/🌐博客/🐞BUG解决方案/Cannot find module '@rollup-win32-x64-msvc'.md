---
title: Cannot find module '@rollup-win32-x64-msvc'
createAt: 2023-12-07 10:15:38
updateAt: 2025-01-13 16:52:26
tags:
  - 博客
  - bug
---
# Cannot find module '@rollup-win32-x64-msvc'

## 报错表现

在搭建好基于 `vitepress` 的 `blog` 结构后，运行 `npm run docs:dev` 命令，进行部署前的运行结果检查，结果报以下错误：

![[public/blog/project/博客/error_show.png]]

**最为关键**的错误提示为以下一行代码：

::: code-group

```sh
Error: Cannot find module '@rollup/rollup-win32-x64-msvc'
```

:::

即当前依赖包中缺少`@rollup`相关，针对此错误有以下解决方法供参考。
## 解决方法

1. 删除`node_modules`和`package-lock.json`文件后，在项目根目录下打开终端，执行`npm install`命令，部分同志通过这个步骤可解决；
2. node版本或者npm版本不对，或者没有全局安装vite，依次运行下列命令

::: code-group

```sh
更新npm
npm install -g npm@latest
全局安装vite
npm install -g vite
```

:::

3. 缺啥补啥。直接安装`@rollup/rollup-win32-x64-msvc`，再次执行`npm run docs:dev`。

::: code-group

```sh
npm install @rollup/rollup-win32-x64-msvc
npm run docs:dev
```

:::

> [!TIP] 作者说
> 经历上述三个方法，你的问题基本能够得到解决，如果还有报错，请在下方评论，我将尽力为您解决。