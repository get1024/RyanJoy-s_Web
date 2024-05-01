import { link } from 'fs'
import { cwd } from 'node:process'
import { BiDirectionalLinks } from '@nolebase/markdown-it-bi-directional-links'
import { createRequire } from 'module'
import { text } from 'stream/consumers'
import { defineConfig, type DefaultTheme } from 'vitepress'
// 行内链接悬浮窗
import { 
  InlineLinkPreviewElementTransform 
} from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it'

//git更新版本
import { 
  GitChangelog, 
  GitChangelogMarkdownSection, 
} from '@nolebase/vitepress-plugin-git-changelog/vite'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:'/RyanJoy-s_Web/',
  lang: 'zh-CN',
  title: "RyanJoy's Palace🏢",
  description: 'RyanJoy前途似锦',
  lastUpdated: true,

  //配置网页图标
  head: [
    ['link', { rel: 'icon', href: '/RyanJoy_logo.png' }],
  ],

  
  //阅读增强插件
  vite: { 
    optimizeDeps: {
      include: [ 
        // @rive-app/canvas is a CJS/UMD module, so it needs to be included here
        // for Vite to properly bundle it.
        '@nolebase/vitepress-plugin-enhanced-readabilities > @nolebase/ui > @rive-app/canvas', 
      ], 
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client', 
      ], 
    },
    ssr: { 
      noExternal: [ 
        // 如果还有别的依赖需要添加的话，并排填写和配置到这里即可
        '@nolebase/vitepress-plugin-enhanced-readabilities', 
        '@nolebase/vitepress-plugin-highlight-targeted-heading', 
      ], 
    }, 
    plugins: [ 
      GitChangelog({ 
        // 填写在此处填写您的仓库链接
        repoURL: () => 'https://github.com/nolebase/integrations', 
      }), 
      GitChangelogMarkdownSection(), 
    ],
  }, 

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    //左上角的logo头像
    logo: '/logo.png',

    nav: nav(),

    editLink: {
      pattern: 'https://github.com/get1024',
      text: '在 GitHub 上编辑此页面',
    },

    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: `Copyright © 2022-${new Date().getFullYear()}  <a href="https://github.com/get1024">RyanJoy(get1024)</a>`,
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '本页大纲',
      level:[1,6],
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/get1024',
      },
      {
        icon: 'github',
        link: 'https://github.com/get1024',
      },
      {
        icon: 'github',
        link: 'https://github.com/get1024',
      },
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          'zh-CN': {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
              }
            }
          }
        }
      }
    },

    //侧边栏配置
    sidebar: {
      '/blog':{base:'/blog',items:sidebar_blog()},
    },

  },

  markdown: {
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    },
    //努力在适配obsidian双链语法的插件，但是不好用，遇到数字会需要额外加“_”在最前面
    // config: (md) => {
    //   md.use(BiDirectionalLinks({
    //     dir: cwd(),
    //   }))
    // },
  },

})


//nav定义
//link设置为不带.md后缀的路径
function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '🏡Home',
      link: '/',
    },
    {
      text: '📰Blog',
      items: [
        {
          text: '🚶Life Skills',
          link:'/blog/life_skills/'
        },
        {
          text: '💻Technical Skills',
          link:'/blog/tech_skills/'
        },
        {
          text: '🛠️Project',
          link:'/blog/project/'
        },
      ]
    },
    {
      text: '👨‍🎓About Me',
      link: '/about_me/'
    },
    {
      text: '🗃️Archive',
      link: '/archive/'
    },
    {
      text: '🧑‍🤝‍🧑Friend Chains',
      link: '/about_me/friendChains'
    },
  ]
}

//blog侧边栏
function sidebar_blog(): DefaultTheme.SidebarItem[]{
  return [
  // 第一级
    {
      text: '🚶Life Skills',
      collapsed: false,
      items: [
        {
          // 第二级
          text: '🛒Shopping',
          collapsed: false,
          items: [
            {
              text:'7000元笔记本电脑选购指北',
              link: '/life_skills/shopping/7000￥价位笔记本电脑选购指北.md',
            }
          ]
        },
      ]
    },

    {
      text: '💻Technical Skills',
      collapsed: false,
      items: [
        {
          // 第二级
          text: '📑个人Blog搭建指北',
          collapsed: false,
          items: [
            {
              // 第三级
              text: '个人博客系统搭建最优解',
              link:'/tech_skills/Blog/个人博客系统搭建最优解',
            },
          ]
        },
        {
          text: '📕CSS学习笔记',
          collapsed: false,
          items: [
            {
              text: 'CSS2笔记',
              link:'/tech_skills/CSS/CSS',
            },
          ]
        },
      ]
    },
    {
      text: '🛠️Project',
      collapsed: false,
      items: [
        {
          text: '7000￥价位笔记本电脑选购指北',
          link: '7000￥价位笔记本电脑选购指北.md',
        },
      ]
    },
  ]
}