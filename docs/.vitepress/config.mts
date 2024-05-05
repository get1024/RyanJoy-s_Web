import { link } from 'fs'
import { cwd } from 'node:process'
import { text } from 'stream/consumers'
import { defineConfig, type DefaultTheme } from 'vitepress'

//git更新版本
import { join } from 'node:path'
import { 
  GitChangelog, 
  GitChangelogMarkdownSection, 
} from '@nolebase/vitepress-plugin-git-changelog/vite'
import { hostname } from 'os'
//时间线插件
import timeline from "vitepress-markdown-timeline"; 

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:'/RyanJoy-s_Web/',
  lang: 'zh-CN',
  title: "RyanJoy's Palace🏢",
  description: 'RyanJoy前途似锦',
  lastUpdated: true,

  //站点地图
  sitemap:{
    hostname:'https://get1024.github.io/RyanJoy-s_Web/',
  },

  //配置网页图标
  head: [
    ['link', { rel: 'icon', href: '/RyanJoy-s_Web/logo.png' }],
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
      GitChangelogMarkdownSection({ 
        getChangelogTitle: (_, __, { helpers }): string => {
          if (helpers.idStartsWith(join('pages', 'en')))
            return 'File History'
          if (helpers.idStartsWith(join('pages', 'zh-CN')))
            return '文件历史'
  
          return 'File History'
        },
        getContributorsTitle: (_, __, { helpers }): string => {
          if (helpers.idStartsWith(join('pages', 'en')))
            return 'Contributors'
          if (helpers.idStartsWith(join('pages', 'zh-CN')))
            return '贡献者'
  
          return 'Contributors'
        },
      }), 
    ],
  }, 

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    //左上角的logo头像
    logo: '/logo.png',

    nav: nav(),

    editLink: {
      pattern: 'https://github.com/get1024/RyanJoy-s_Web/edit/main/docs/:path',
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
      level:[1,3],
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
        icon: 'x',
        link: 'https://twitter.com/RyanJoy_1945815',
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
    //base键值对是直接省略了在后续sidebar函数中的路径了，默认从base指定的路径开始。
    sidebar: {
      '/blog': { base: '/blog', items: sidebar_blog() },
      '/about_me': { base: '/about_me', items: sidebar_about_me() },
      '/archive': { base: '/archive', items: sidebar_archive() },
    },

  },

  markdown: {
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    },
    
    config: (md) => {
      //时间线插件
      md.use(timeline);
    },
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
      text: '📒Blog',
      items: [
        {
          text: '🚶Life Skills',
          link:'/blog/life_skills/'
        },
        {
          text: '💻Technical Competence',
          link:'/blog/tech_skills/'
        },
        {
          text: '🛠️Project',
          link:'/blog/project/'
        },
        {
          text: '🤔Reflection & Summary',
          link:'/blog/reflection&summary/'
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

//archive侧边栏
function sidebar_archive(): DefaultTheme.SidebarItem[]{
  return [
    {
      text: '暂时没有内容',
      link:'',
    }
  ]
}

//about_me侧边栏
function sidebar_about_me(): DefaultTheme.SidebarItem[]{
  return [
    {
      text: 'Friend Chains',
      link: '/friendChains',
    },
    {
      text: 'Reach Me',
      link: '/reach_me',
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
          collapsed: true,
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
      text: '🛠️Project',
      collapsed: false,
      items: [
        {
          text: '💸基于Springboot的资产管理系统',
          collapsed: true,
          items: [
            {
              text: '1.前端',
              link: '/project/基于vue+springboot的资产管理系统/第1天---前端',
            },
            {
              text: '2-1.若依——低代码开发平台',
              link: '',
            },
            {
              text: '2-2.项目速成攻略',
              link: '/project/基于vue+springboot的资产管理系统/第2天_2---项目速成攻略',
            },
            {
              text: '3.Sping Security',
              link: '',
            },
            {
              text: '4.智慧物业管理系统',
              link: '/project/基于vue+springboot的资产管理系统/第4天---智慧物业管理系统',
            },
          ]
        },
        {
          text: '🎬JY-movie',
          collapsed: true,
          items: [
            {
              text: 'README.md文档',
              link: '/project/JY-movie/jy-movie'
            },
            {
              text: '毕业答辩相关',
              link: '/project/JY-movie/定稿后答辩'
            },
          ]
        },
        {
          text: '🏢RyanJoy\'s Web',
          collapsed: true,
          items: [
            {
              text: '目前还是空',
            }
          ]
        },
        {
          text: '🚀Starship Customize',
          collapsed: true,
          items: [
            {
              text: 'README.md文档',
              link: '/project/Starship_customize/starship_custom',
            },
          ]
        },
      ]
    },

    {
      text: '🤔Reflection & Summary',
      collapsed: false,
      items: [
        {
          text: '目前还是空'
        },
      ]
    },

    {
      text: '💻Technical Competence',
      collapsed: false,
      items: [
        {
          // 第二级
          text: '📑个人Blog搭建指北',
          collapsed: true,
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
          collapsed: true,
          items: [
            {
              text: 'CSS2笔记',
              link:'/tech_skills/CSS/CSS2',
            },
            // {
            //   text: 'CSS3笔记',
            //   link:'/tech_skills/CSS/CSS3',
            // },
          ]
        },
        {
          text: '🌵Git—代码版本控制',
          collapsed: true,
          items: [
            {
              text: '如何规范commit？',
              link:'/tech_skills/Git/如何规范Git Commit？',
            },
            {
              text: 'Git使用',
              link:'/tech_skills/Git/git使用',
            },
          ]
        },
        {
          text: '📗HTML学习笔记',
          collapsed: true,
          items: [
            {
              text: 'HTML4笔记',
              link:'/tech_skills/HTML/HTML4',
            },
          ]
        },
        {
          text: '⌨️Powershell-新一代终端',
          collapsed: true,
          items: [
            {
              text: 'Powershell使用笔记',
              link: '/tech_skills/Powershell/powershell'
            },
          ]
        },
        {
          text: '📘SpringBoot学习笔记',
          collapsed: true,
          items: [
            {
              text: '目前还是空',
            },
          ]
        },
        {
          text: '📙Vue学习笔记',
          collapsed: true,
          items: [
            {
              text: 'VUE笔记',
              link: '/tech_skills/VUE/VUE'
            },
          ]
        },
      ]
    },

  ]
}