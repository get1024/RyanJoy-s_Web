---
title: Table美化方案
createAt: 2025-02-05 12:46:30
updateAt: 2025-02-05 22:16:52
tags:
  - 美化
  - 前端
  - 解决方案
---

# Table美化方案

## 效果对比

|                   原生样式                   |                   美化样式                   |
| :--------------------------------------: | :--------------------------------------: |
| ![](assets/table美化方案/20250205125210.png) | ![](assets/table美化方案/20250205125322.png) |

可见，美化后表格自动居中，且表格各列宽自动适配并拉伸。

## 配置

### `<div>` 自动包裹 `<table>`

为了方便设置样式，我们需要给全局 `<table>` 标签外自动包裹上一层 `<div>` 标签，进而为控制此 `<div>` 的样式做准备。

这里我选择采用 `Vitepress` 原生的 `markdown` 扩展配置。你只需要在对应位置添加**高亮代码**即可。

```ts [.vitepress/config.mts] twoslash:no-line-numbers
import { defineConfig, type DefaultTheme } from "vitepress";
// ...
export default defineConfig({
  // ...
  markdown: {
	// ...
    config: (md) => {
      // 保存原有的table渲染器 // [!code ++]
      const defaultRender = // [!code ++]
        md.renderer.rules.table_open || // [!code ++]
        ((tokens, idx) => { // [!code ++]
          return "<table>"; // [!code ++]
        }); // [!code ++]
      // 自定义table渲染 // [!code ++]
      md.renderer.rules.table_open = (tokens, idx) => { // [!code ++]
        // 获取用户自定义的类名 // [!code ++]
        const className = "custom-table-container"; // [!code ++]
        return `<div class="${className}"><table>`; // [!code ++]
      }; // [!code ++]
      // 确保table结束标签后，div标签正确关闭 // [!code ++]
      const defaultTableClose = // [!code ++]
        md.renderer.rules.table_close || // [!code ++]
        ((tokens, idx, options, env, self) => { // [!code ++]
          return "</table>"; // [!code ++]
        }); // [!code ++]
      md.renderer.rules.table_close = (tokens, idx, options, env, self) => { // [!code ++]
        return `${defaultTableClose(tokens, idx, options, env, self)}</div>`; // [!code ++]
      }; // [!code ++]
      // ...
    },
    // ...
  },
});

```

### 设置全局 `<table>` 样式

创建样式文件 `📄:.vitepress/theme/style/tableCustom.css` ，填写内容如下：

```css [tableCustom.css]
/* 表格容器样式 */
.vp-doc .custom-table-container {
    width: 90%;
    margin: 1rem auto;
    overflow-x: auto;
}

/* 表格基础样式 */
.vp-doc table {
    display: table;          /* 确保表格以表格形式显示 */
    width: 100%;            /* 占满容器宽度 */
    table-layout: auto;     /* 根据内容自动分配列宽 */
    border-collapse: collapse;  /* 合并边框 */
    margin: 0;             /* 移除表格默认外边距 */
}

/* 表头样式 */
.vp-doc thead {
    background-color: var(--vp-c-bg-soft);  /* 表头背景色 */
}

/* 表头单元格样式 */
.vp-doc th {
    white-space: nowrap;     /* 防止表头文字换行 */
    text-align: left;        /* 文字左对齐 */
    padding: 12px 16px;       /* 内边距 */
    margin: 0;             /* 确保无外边距 */
}

/* 表格单元格样式 */
.vp-doc td {
    padding: 12px 16px;       /* 内边距 */
    text-align: left;        /* 文字左对齐 */
    margin: 0;             /* 确保无外边距 */
}

/* 确保表格在小屏幕上也能正常显示 */
@media (max-width: 768px) {
    .vp-doc .custom-table-container {
        margin: 1rem auto;  /* 保持一致的外边距 */
        padding: 0;         /* 移除内边距 */
    }
}
```

在总样式文件 `📄:.vitepress/theme/style/index.css` 中进行引入

```css [index.css]
@import './tableCustom.css';
```

## 效果验证

在你的 `markdown` 文档中，粘贴下述内容，验证效果

```md [example.md]
|  这   | 是一  | 个用于验证 |  的  | 表格demo |
| :--: | :-: | :---: | :-: | :----: |
|  宽度  |  会  |   跟   |  随  |   列宽   |
| 自动调整 |  ，  | 并且表格  | 整体  |   居中   |
```