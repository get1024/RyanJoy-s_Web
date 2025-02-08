---
title: BackToTop-回到顶部按钮
createAt: 2025-02-08 09:23:44
updateAt: 2025-02-08 09:23:49
tags:
  - 插件
  - 博客
  - 解决方案
  - 前端
  - Vue
---

# BackToTop-回到顶部按钮

::: tip 作者说
这里提供两个方案，方案一采用 [Backtop 回到顶部 \| Element Plus](https://element-plus.org/zh-CN/component/backtop.html) ，方案二从零开始写一个组件。
:::

## 方案一

### 效果展示

![](assets/backtotop-回到顶部按钮/2025-02-08_16-49-37.gif)

### 安装 ElementPlus

::: code-group

```sh [pnpm]
pnpm add -D element-plus
```

```sh [npm]
npm install element-plus --save
```

```sh [yarn]
yarn add element-plus
```

:::
要在 Vitepress 项目中新增一个使用 Element Plus 组件 `el-backtop` 的自定义组件，你需要按照以下步骤进行配置。以下是详细的步骤：

### 组件定义

新建 `📄:.vitepress/theme/components/BackToTop/BackToTop.vue` ，复制粘贴以下内容

```vue [BackToTop.vue]
<template>
    <el-backtop class="el-backtop">
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M512 0A512 512 0 1 1 0 512 512 512 0 0 1 512 0z" fill="var(--vp-c-brand-1)" />
            <path
                d="M675.57181 542.524952a30.378667 30.378667 0 0 1-20.016762-7.533714l-145.627429-127.097905-140.970667 126.829715a30.47619 30.47619 0 0 1-40.764952-45.348572l161.060571-144.847238a30.47619 30.47619 0 0 1 40.423619-0.292571l165.961143 144.871619a30.47619 30.47619 0 0 1-20.065523 53.418666z"
                fill="var(--custom-backtop-ring)" />
            <path
                d="M512.073143 730.745905a30.47619 30.47619 0 0 1-30.476191-30.476191v-182.857143a30.47619 30.47619 0 0 1 60.952381 0v182.857143a30.47619 30.47619 0 0 1-30.47619 30.476191z"
                fill="var(--custom-backtop-ring)" />
        </svg>
    </el-backtop>
</template>

<script>
export default {
    name: 'BackToTop'
}
</script>

<style scoped>
.el-backtop {
    background-color: var(--custom-backtop-ring); /* [!code warning] */
}

.icon {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 80%;
    transform: translate(-50%, -50%);
    will-change: transform;
}
</style>
```

::: details 高亮代码什么意思？
`var(--custom-backtop-ring);` 是自定义的一种颜色样式，为了自动跟随 `Vitepress` 两种主题进行切换。具体配置如下。

在 `📄:.vitepress/theme/style/colorCustom.css` 中添加下述内容

```css [colorCustom.css]
:root {
    --custom-backtop-ring: #f7a800; /* [!code ++] */
    --custom-bg: #f0f0f0;
    --custom-border: #dedede;
    --custom-text: #575d65;
    --vp-button-brand-text: #F6CEEC;
    --vp-button-brand-bg: #D939CD;
    --vp-button-brand-hover-text: #fff;
    --vp-button-brand-hover-bg: #fe64f1;
    --custom-shadow:0 10px 30px 0 rgb(0 0 0 / 40%);
    --custom-block-info-left: #cccccc;
    --custom-block-info-bg: #fafafa;
    --custom-block-tip-left: #009400;
    --custom-block-tip-bg: #e6f6e6;
    --custom-block-warning-left: #e6a700;
    --custom-block-warning-bg: #fff8e6;
    --custom-block-danger-left: #e13238;
    --custom-block-danger-bg: #ffebec;
    --custom-block-note-left: #4cb3d4;
    --custom-block-note-bg: #eef9fd;
    --custom-block-important-left: #a371f7;
    --custom-block-important-bg: #f4eefe;
    --custom-block-caution-left: #e0575b;
    --custom-block-caution-bg: #fde4e8;
    --main-page-bg: white;
    --main-page-text: #050505;
    --main-page-from: #222222;
    --main-page-to: #585858;
    --main-page-menu: #525861;
    --main-page-appearance: #e0e0e0;
    --custom-toast-bg: #00000020;
    --custom-toast-text: #000000;
}

.dark {
    --custom-backtop-ring: #3451B2; /* [!code ++] */
    --vp-c-brand-1: #f7a800;
    --vp-c-brand-2: #ffb300;
    --vp-c-brand-3: #f9d423;
    --custom-bg: #1f1f1f;
    --custom-border: #282828;
    --custom-text: #969ba6;
    --custom-shadow:0 10px 30px 0 rgb(255 255 255 / 40%);
    --custom-block-info-left: #cccccc;
    --custom-block-info-bg: #474748;
    --custom-block-tip-left: #009400;
    --custom-block-tip-bg: #003100;
    --custom-block-warning-left: #e6a700;
    --custom-block-warning-bg: #4d3800;
    --custom-block-danger-left: #e13238;
    --custom-block-danger-bg: #4b1113;
    --custom-block-note-left: #4cb3d4;
    --custom-block-note-bg: #193c47;
    --custom-block-important-left: #a371f7;
    --custom-block-important-bg: #230555;
    --custom-block-caution-left: #e0575b;
    --custom-block-caution-bg: #391c22;
    --main-page-bg: #050505;
    --main-page-text: #f0f0f0;
    --main-page-from: #f0f0f0;
    --main-page-to: #575757;
    --main-page-menu: #969ba6;
    --main-page-appearance: #222222;
    --custom-toast-bg: #ffffff20;
    --custom-toast-text: #ffffff;
}
```
:::

### 引入 ElementPlus 并使用组件

在 `Vitepress` 主题文件 `📄:.vitepress/theme/index.ts` 中引入

```javascript
// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import { ElBacktop } from 'element-plus' // [!code ++]
import 'element-plus/dist/index.css' // [!code ++]
import BackToTop from './components/BackToTop/BackToTop.vue' // [!code ++]

export const Theme: ThemeConfig = {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(BackToTop) // [!code ++]
    })
  },
  enhanceApp = ({ app, router }: EnhanceAppContext) => {
  	app.component('BackToTop', BackToTop) // [!code ++]
  	app.component(ElBacktop.name!, ElBacktop) // [!code ++]
}
```

刷新项目，就能看到 `<el-backtop>` 按钮啦~
## 方案二

::: info 谴责 RyanJoy
这是一个重复造轮子的尝试……并且效果极其垃圾；

不过，你仍然可以尝试这一方案！

现存的问题是性能不友好，在手机上使用起来就略显掉帧，ipad 和 MacBook 体验良好。欢迎您的尝试并期待收到 `PR` 🥺。
:::
### 效果展示

![](assets/backtotop-回到顶部按钮/2025-02-08_09-41-45.gif)

按钮默认隐藏，只有当前位置不在「页面顶部」时才会出现；按钮外部有「环形进度条」，进度条与当前页面位置正相关；点击按钮返回页面顶部。

### 组件定义

新建 `📄:.vitepress/theme/components/BackToTop/BackToTop.vue` 文件，复制粘贴下述内容：

```vue [BackToTop.vue]
<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const isVisible = ref(false)
const isHovered = ref(false)
const fillPercentage = ref(0)
const CIRCUMFERENCE = 2 * Math.PI * 20
const progressOffset = computed(() => 
    CIRCUMFERENCE * (1 - Math.floor(fillPercentage.value / 5) * 5 / 100)
)
let scrollTimeout: number | null = null
const handleScroll = () => {
    if (scrollTimeout) return
    scrollTimeout = window.setTimeout(() => {
        const scrollTop = window.scrollY
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
        fillPercentage.value = Math.min(Math.round((scrollTop / scrollHeight) * 100), 100)
        isVisible.value = scrollTop > 300
        scrollTimeout = null
    }, 16)
}
const scrollToTop = () => {
    const duration = 500
    const start = window.scrollY
    const startPercentage = fillPercentage.value
    const startTime = performance.now()
    const scroll = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easing = 1 - Math.pow(1 - progress, 3)
        window.scrollTo({
            top: start * (1 - easing),
            behavior: 'auto'
        })
        fillPercentage.value = Math.round(startPercentage * (1 - easing))
        if (progress < 1) {
            requestAnimationFrame(scroll)
        }
    }
    requestAnimationFrame(scroll)
}
onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
})
onUnmounted(() => {
    if (scrollTimeout) {
        window.clearTimeout(scrollTimeout)
    }
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <button class="back-to-top" :class="{ visible: isVisible, hover: isHovered }" @click="scrollToTop"
        @mouseenter="isHovered = true" @mouseleave="isHovered = false" aria-label="返回顶部">
        <div class="progress-ring">
            <svg class="ring" viewBox="0 0 48 48">
                <circle class="ring-background" cx="24" cy="24" r="20" />
                <circle class="ring-progress" cx="24" cy="24" r="20"
                    :style="{ 'stroke-dashoffset': progressOffset }" />
            </svg>
            <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M512 0A512 512 0 1 1 0 512 512 512 0 0 1 512 0z" fill="#FFDA00" />
                <path
                    d="M675.57181 542.524952a30.378667 30.378667 0 0 1-20.016762-7.533714l-145.627429-127.097905-140.970667 126.829715a30.47619 30.47619 0 0 1-40.764952-45.348572l161.060571-144.847238a30.47619 30.47619 0 0 1 40.423619-0.292571l165.961143 144.871619a30.47619 30.47619 0 0 1-20.065523 53.418666z"
                    fill="#111111" />
                <path
                    d="M512.073143 730.745905a30.47619 30.47619 0 0 1-30.476191-30.476191v-182.857143a30.47619 30.47619 0 0 1 60.952381 0v182.857143a30.47619 30.47619 0 0 1-30.47619 30.476191z"
                    fill="#111111" />
            </svg>
        </div>
    </button>
</template>

<style scoped>
.back-to-top {
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    width: 3rem;
    height: 3rem;
    border: none;
    background: transparent;
    cursor: pointer;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.3s, transform 0.3s;
    z-index: 100;
    will-change: transform, opacity;
}

.back-to-top.visible {
    opacity: 1;
    transform: translateY(0);
}

.progress-ring {
    position: relative;
    width: 100%;
    height: 100%;
}

.ring {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
    will-change: transform;
}

.ring-background {
    fill: none;
    stroke: var(--vp-c-bg-soft);
    stroke-width: 3;
}

.ring-progress {
    fill: none;
    stroke: var(--vp-c-brand-1);
    stroke-width: 3;
    stroke-linecap: round;
    stroke-dasharray: 125.66;
    transition: stroke-dashoffset 0.16s ease-out;
    will-change: stroke-dashoffset;
}

.icon {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 70%;
    transform: translate(-50%, -50%);
    will-change: transform;
}

.back-to-top.hover {
    transform: scale(1.1);
}
</style>
```

### 组件注册和使用

在 `Vitepress` 主题配置文件 `📄:.vitepress/theme/index.ts` 中做以下修改：

```ts [index.ts]
import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import BackToTop from './components/BackToTop/BackToTop.vue' // [!code ++]
// ...
export const Theme: ThemeConfig = {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(BackToTop) // [!code ++]
    })
  },
  // ...
  enhanceApp = ({ app }) => {
  	// ...
  	app.component('BackToTop', BackToTop) // [!code ++]
  }
  setup() {},
}

export default Theme
```

### 检验成果

滑动页面时，在右下角出现按钮，按钮样式跟随主题发生变化

| ![](assets/backtotop-回到顶部按钮/2025-02-08_10-28-36.gif) | ![](assets/backtotop-回到顶部按钮/2025-02-08_10-29-35.gif) |
| :--------------------------------------------------: | :--------------------------------------------------: |

::: details 为什么与我的样式不一致？

我在这篇文档编写的时候，又重新优化了我的样式，目前 `📄:.vitepress/theme/components/BackToTop/BackToTop.vue` 文件的内容我放在下方，如果有需要，您自行对比修改。

```vue [BackToTop.vue]
<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const isVisible = ref(false)
const isHovered = ref(false)
const fillPercentage = ref(0)

// 预计算圆环周长
const CIRCUMFERENCE = 2 * Math.PI * 20
const progressOffset = computed(() => 
    CIRCUMFERENCE * (1 - Math.floor(fillPercentage.value / 5) * 5 / 100)  // 将进度离散化，每5%更新一次
)

// 节流的滚动处理
let scrollTimeout: number | null = null
const handleScroll = () => {
    if (scrollTimeout) return

    scrollTimeout = window.setTimeout(() => {
        const scrollTop = window.scrollY
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
        
        fillPercentage.value = Math.min(Math.round((scrollTop / scrollHeight) * 100), 100)
        isVisible.value = scrollTop > 300
        
        scrollTimeout = null
    }, 8) // 约120fps
}

// 优化的滚动动画
const scrollToTop = () => {
    const duration = 500
    const start = window.scrollY
    const startPercentage = fillPercentage.value
    const startTime = performance.now()

    const scroll = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        const easing = 1 - Math.pow(1 - progress, 3)
        
        window.scrollTo({
            top: start * (1 - easing),
            behavior: 'auto'
        })

        // 直接从当前进度值递减
        fillPercentage.value = Math.round(startPercentage * (1 - easing))

        if (progress < 1) {
            requestAnimationFrame(scroll)
        }
    }

    requestAnimationFrame(scroll)
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
})

onUnmounted(() => {
    if (scrollTimeout) {
        window.clearTimeout(scrollTimeout)
    }
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <button class="back-to-top" :class="{ visible: isVisible, hover: isHovered }" @click="scrollToTop"
        @mouseenter="isHovered = true" @mouseleave="isHovered = false" aria-label="返回顶部">
        <div class="progress-ring">
            <svg class="ring" viewBox="0 0 48 48">
                <circle class="ring-background" cx="24" cy="24" r="20" />
                <circle class="ring-progress" cx="24" cy="24" r="20"
                    :style="{ 'stroke-dashoffset': progressOffset }" />
            </svg>
            <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M512 0A512 512 0 1 1 0 512 512 512 0 0 1 512 0z" fill="var(--vp-c-brand-1)" />
                <path
                    d="M675.57181 542.524952a30.378667 30.378667 0 0 1-20.016762-7.533714l-145.627429-127.097905-140.970667 126.829715a30.47619 30.47619 0 0 1-40.764952-45.348572l161.060571-144.847238a30.47619 30.47619 0 0 1 40.423619-0.292571l165.961143 144.871619a30.47619 30.47619 0 0 1-20.065523 53.418666z"
                    fill="var(--main-page-bg)" />
                <path
                    d="M512.073143 730.745905a30.47619 30.47619 0 0 1-30.476191-30.476191v-182.857143a30.47619 30.47619 0 0 1 60.952381 0v182.857143a30.47619 30.47619 0 0 1-30.47619 30.476191z"
                    fill="var(--main-page-bg)" />
            </svg>
        </div>
    </button>
</template>

<style scoped>
/* 返回顶部按钮的基础样式 */
.back-to-top {
    position: fixed;  /* 固定定位 */
    right: 2rem;     /* 距离右侧边距 */
    bottom: 2rem;    /* 距离底部边距 */
    width: 3rem;     /* 按钮宽度 */
    height: 3rem;    /* 按钮高度 */
    border: none;    /* 移除边框 */
    background: transparent;  /* 透明背景 */
    cursor: pointer; /* 鼠标指针样式 */
    opacity: 0;      /* 初始透明 */
    transform: translateY(20px);  /* 初始向下偏移 */
    transition: opacity 0.3s, transform 0.3s;  /* 过渡动画 */
    z-index: 100;    /* 确保按钮在其他元素上方 */
    will-change: transform, opacity;  /* 提示浏览器优化这些属性的变化 */
}

/* 按钮可见时的样式 */
.back-to-top.visible {
    opacity: 1;      /* 完全不透明 */
    transform: translateY(0);  /* 恢复正常位置 */
}

/* 进度环容器 */
.progress-ring {
    position: relative;  /* 相对定位，作为子元素的定位参考 */
    width: 100%;        /* 填充父元素宽度 */
    height: 100%;       /* 填充父元素高度 */
}

/* 环形SVG容器 */
.ring {
    position: absolute;  /* 绝对定位 */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);  /* 旋转使进度从顶部开始 */
    will-change: transform;     /* 优化变换性能 */
}

/* 环形背景 */
.ring-background {
    fill: none;                    /* 无填充 */
    stroke: var(--vp-c-bg-soft);   /* 使用主题软背景色 */
    stroke-width: 3;               /* 线条宽度 */
}

/* 进度条环形 */
.ring-progress {
    fill: none;                    /* 无填充 */
    stroke: var(--vp-c-brand-3);   /* 使用主题主色 */
    stroke-width: 3;               /* 线条宽度 */
    stroke-linecap: round;         /* 圆形线帽 */
    stroke-dasharray: 125.66;      /* 虚线周长 */
    transition: stroke-dashoffset 0.16s ease-out;  /* 平滑过渡 */
    will-change: stroke-dashoffset;  /* 优化描边偏移动画 */
}


/* 中心图标 */
.icon {
    position: absolute;            /* 绝对定位 */
    top: 50%;
    left: 50%;
    width: 70%;                   /* 图标大小 */
    height: 70%;
    transform: translate(-50%, -50%);  /* 居中对齐 */
    will-change: transform;            /* 优化变换性能 */
}

/* 悬浮效果 */
.back-to-top.hover {
    transform: scale(1.1);  /* 悬浮时放大效果 */
}
</style>
```

:::