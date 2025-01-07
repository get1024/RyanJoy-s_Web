import { link } from "fs";
import { cwd } from "node:process";
import { text } from "stream/consumers";
import { defineConfig, type DefaultTheme } from "vitepress";
import flexSearchIndexOptions from "flexsearch";
import { chineseSearchOptimize, pagefindPlugin } from 'vitepress-plugin-pagefind'
//git更新版本
import { join } from "node:path";
import {
  GitChangelog,
  GitChangelogMarkdownSection,
} from "@nolebase/vitepress-plugin-git-changelog/vite";
import { hostname } from "os";
//时间线插件
import timeline from "vitepress-markdown-timeline";
// to-do插件
import taskLists from "markdown-it-task-checkbox";
//引入nav
import { nav } from "./configs";
//引入sidebar
// import {sidebar} from './configs'  //原sidebar配置函数存放地
// import { calculateSidebar as originalCalculateSidebar } from "@nolebase/vitepress-plugin-sidebar";
//自己重新上传的npm包
import { calculateSidebar as originalCalculateSidebar } from "@ryanjoy/vitepress-plugin-sidebar";
//引入algolia
import algolia from "./algolia";
//引入 面包屑导航
// import { generateBreadcrumbsData } from '@nolebase/vitepress-plugin-breadcrumbs/vitepress'
//页面属性
import { PageProperties } from "@nolebase/vitepress-plugin-page-properties/vite";
// 引入obsidian双链规则插件
import { BiDirectionalLinks } from "@nolebase/markdown-it-bi-directional-links";
//引入行内链接预览插件
import { InlineLinkPreviewElementTransform } from "@nolebase/vitepress-plugin-inline-link-preview/markdown-it";
//代码组、块图标
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons";

function calculateSidebarWithDefaultOpen(targets, base) {
  const result = originalCalculateSidebar(targets, base);
  if (Array.isArray(result)) {
    result.forEach(item => {
      item.collapsed = false; 
    });
  } else {
    Object.values(result).forEach(items => {
      items.forEach(item => {
        item.collapsed = false; 
      });
    });
  }
  return result;
}

function customChineseSearchOptimize(input: string) {
  const segmenter = new Intl.Segmenter('zh-CN', { granularity: 'word' })
  const segmentedWords: string[] = []
  for (const it of segmenter.segment(input)) {
    if (it.isWordLike) {
      segmentedWords.push(it.segment)
    }
  }
  const processedInput = segmentedWords.join(' ');
  return chineseSearchOptimize(processedInput);
}


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/RyanJoy-s_Web/",
  lang: "zh-CN",
  title: "RyanJoy's Web",
  description: "RyanJoy前途似锦",
  lastUpdated: true,

  //站点地图
  sitemap: {
    hostname: "https://get1024.github.io/RyanJoy-s_Web/",
  },

  //配置网页图标
  head: [["link", { rel: "icon", href: "/RyanJoy-s_Web/logo.png" }]],

  //阅读增强插件
  vite: {
    plugins: [
      GitChangelog({
        // 填写在此处填写您的仓库链接
        repoURL: () => "https://github.com/get1024/RyanJoy-s_Web",
        //V2 --> V3 特性迁移
        mapAuthors: [
          {
            name: "RyanJoy",
            username: "get1024",
            mapByNameAliases: ["RJY", "junyeren"],
            mapByEmailAliases: [
              "junyeren@outlook.com",
              "2025050361@henu.edu.cn",
              "18903803658@163.com",
            ],
            avatar:
              "https://github.com/get1024/RyanJoy-s_Web/blob/main/public/avatar.png?raw=true",
            links: "https://github.com/get1024",
          },
        ],
      }),
      GitChangelogMarkdownSection(),
      PageProperties(),
      pagefindPlugin({
        customSearchQuery: customChineseSearchOptimize,
        btnPlaceholder: '搜索',
        placeholder: '搜索文档',
        emptyText: '空空如也',
        heading: '共: {{searchResult}} 条结果',
        excludeSelector: ['img', 'a.header-anchor'],
        filter(searchItem, idx, originArray) {
          console.log(searchItem)
          return !searchItem.route.includes('404')
        },
      }),
      groupIconVitePlugin(), //代码组图标
    ],
    optimizeDeps: {
      include: [
        // @rive-app/canvas is a CJS/UMD module, so it needs to be included here
        // for Vite to properly bundle it.
        "@nolebase/vitepress-plugin-enhanced-readabilities > @nolebase/ui > @rive-app/canvas",
      ],
      exclude: [
        "@nolebase/vitepress-plugin-enhanced-readabilities/client",
        // '@nolebase/vitepress-plugin-breadcrumbs/client', //面包屑导航
        "@nolebase/vitepress-plugin-inline-link-preview/client", //行内链接
      ],
    },
    ssr: {
      noExternal: [
        // 如果还有别的依赖需要添加的话，并排填写和配置到这里即可
        "@nolebase/vitepress-plugin-enhanced-readabilities",
        "@nolebase/vitepress-plugin-highlight-targeted-heading",
        // '@nolebase/vitepress-plugin-breadcrumbs', //面包屑导航
        "@nolebase/vitepress-plugin-inline-link-preview", //行内链接
      ],
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    //左上角的logo头像
    logo: "/logo.png",

    nav,

    editLink: {
      pattern: "https://github.com/get1024/RyanJoy-s_Web/edit/main/:path",
      text: "在 GitHub 上编辑此页面",
    },

    footer: {
      message: "孩儿立志出乡关，学不成名誓不还。",
      copyright: `Copyright © 2022-${new Date().getFullYear()}  <a href="https://github.com/get1024">RyanJoy(get1024)</a>`,
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "本页大纲",
      level: [1, 4],
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/get1024/RyanJoy-s_Web",
      },
      {
        icon: {
          svg: '<svg t="1715358041217" class="icon" viewBox="0 0 1217 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6062" width="200" height="200"><path d="M459.643282 956.423306l18.87277-283.091558 513.826397-462.687277c22.525565-20.699168-4.870392-31.048751-34.701545-12.78478L323.272295 598.449465 48.703924 511.391201c-59.053508-16.437574-59.662307-57.227111 13.393579-87.058264L1130.539834 12.78478c48.703924-21.916766 95.581451 12.175981 76.70868 87.058264l-182.030916 856.580262c-12.78478 60.879905-49.312723 75.491082-100.451843 47.486325l-277.003567-204.55648-133.326992 129.065398c-14.611177 15.219976-27.395957 28.004756-54.791914 28.004757z" p-id="6063"></path></svg>',
        },
        link: "https://t.me/RyanJoy_1945815",
      },
      {
        icon: "x",
        link: "https://x.com/RyanJoy_1945815",
      },
    ],

    // BUG:解决algolia搜索不爬虫的问题
    search: {
      // provider: 'algolia',
      // options: algolia,
      provider: "local",
    },
    //侧边栏自动配置
    sidebar: calculateSidebarWithDefaultOpen([
      { folderName: "👨🏼‍🎓关于我", separate: true },
      { folderName: "📒笔记", separate: true },
    ],''),
  },

  markdown: {
    lineNumbers: true,
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true,
    },

    config: (md) => {
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
        let htmlResult = slf.renderToken(tokens, idx, options);
        if (tokens[idx].tag === "h1") htmlResult += `<ArticleMetadata />`;
        return htmlResult;
      }; //update和阅读成本
      md.use(groupIconMdPlugin); //代码组图标
      //行内链接预览
      md.use(InlineLinkPreviewElementTransform);
      //obsidian双链插件
      md.use(BiDirectionalLinks());
      //时间线插件
      md.use(timeline);
      //to-do插件
      md.use(taskLists, {
        disabled: false,
        divWrap: false,
        divClass: "checkbox",
        idPrefix: "cbx_",
        ulClass: "task-list",
        liClass: "task-list-item",
      });
    },
  },

});
