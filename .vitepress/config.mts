import { link } from "fs";
import { cwd } from "node:process";
import { text } from "stream/consumers";
import { defineConfig, type DefaultTheme } from "vitepress";
import flexSearchIndexOptions from "flexsearch";
import { pagefindPlugin } from "vitepress-plugin-pagefind";
//git更新版本
import { join } from "node:path";
import {
  GitChangelog,
  GitChangelogMarkdownSection,
} from "@nolebase/vitepress-plugin-git-changelog/vite";
import { hostname } from "os";
//引入nav
import { nav } from "./configs";
//引入sidebar
// import {sidebar} from './configs'  //原sidebar配置函数存放地
// import { calculateSidebar as originalCalculateSidebar } from "@nolebase/vitepress-plugin-sidebar";
//自己重新上传的npm包
import { calculateSidebar as originalCalculateSidebar } from "@ryanjoy/vitepress-plugin-sidebar";
// 引入obsidian双链规则插件
import { BiDirectionalLinks } from "@nolebase/markdown-it-bi-directional-links";
//代码组、块图标
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
  localIconLoader,
} from "vitepress-plugin-group-icons";
// 脚注插件
import footnote_plugin from "markdown-it-footnote";
// 任务列表插件
import task_checkbox_plugin from "markdown-it-task-checkbox";

function calculateSidebarWithDefaultOpen(targets, base) {
  const result = originalCalculateSidebar(targets, base);
  if (Array.isArray(result)) {
    result.forEach((item) => {
      item.collapsed = false;
    });
  } else {
    Object.values(result).forEach((items) => {
      items.forEach((item) => {
        item.collapsed = false;
      });
    });
  }
  return result;
}

function chineseSearchOptimize(input: string) {
  const segmenter = new Intl.Segmenter("zh-CN", { granularity: "word" });
  const result: string[] = [];
  for (const it of segmenter.segment(input)) {
    if (it.isWordLike) {
      result.push(it.segment);
    }
  }
  return result.join(" ");
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/RyanJoy-s_Web/",
  lang: "zh-CN",
  title: "RyanJoy's Web",
  description: "RyanJoy前途似锦",
  lastUpdated: true,
  appearance: true,

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
      pagefindPlugin({
        customSearchQuery: chineseSearchOptimize,
        btnPlaceholder: "搜索",
        placeholder: "搜索文档",
        emptyText: "空空如也",
        heading: "共: {{searchResult}} 条结果",
        excludeSelector: ["img", "a.header-anchor"],
        filter(searchItem, idx, originArray) {
          console.log(searchItem);
          return !searchItem.route.includes("404");
        },
      }),
      groupIconVitePlugin({
        customIcon: {
          pip: "vscode-icons:file-type-pip",
          docker: "vscode-icons:file-type-docker2",
          ".cpp": "vscode-icons:file-type-cpp",
          git: "vscode-icons:file-type-git",
          powershell: "vscode-icons:file-type-powershell",
          shell: "vscode-icons:file-type-shell",
          ".mts":"vscode-icons:file-type-typescript"
        },
      }), //代码组图标
    ],
    optimizeDeps: {
      include: [],
      exclude: [],
    },
    ssr: {
      noExternal: [
        // 如果还有别的依赖需要添加的话，并排填写和配置到这里即可
        "@nolebase/vitepress-plugin-highlight-targeted-heading",
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
      label: "📑本页大纲",
      level: "deep",
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

    search: {
      provider: "local",
    },
    //侧边栏自动配置
    sidebar: calculateSidebarWithDefaultOpen(
      [{ folderName: "📒笔记", separate: true }],
      ""
    ),
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
      //obsidian双链插件
      md.use(BiDirectionalLinks());
      md.use(footnote_plugin);
      md.use(task_checkbox_plugin, {
        disabled: true,
        divWrap: false,
        divClass: "checkbox",
        idPrefix: "cbx_",
        ulClass: "task-list",
        liClass: "task-list-item",
      });

      // 保存原有的table渲染器
      const defaultRender =
        md.renderer.rules.table_open ||
        ((tokens, idx) => {
          return "<table>";
        });

      // 自定义table渲染
      md.renderer.rules.table_open = (tokens, idx) => {
        // 获取用户自定义的类名
        const className = "custom-table-container";
        return `<div class="${className}"><table>`;
      };

      // 确保table结束标签后，div标签正确关闭
      const defaultTableClose =
        md.renderer.rules.table_close ||
        ((tokens, idx, options, env, self) => {
          return "</table>";
        });

      md.renderer.rules.table_close = (tokens, idx, options, env, self) => {
        return `${defaultTableClose(tokens, idx, options, env, self)}</div>`;
      };

    },
  },
});
