import { link } from 'fs'
import { cwd } from 'node:process'
import { text } from 'stream/consumers'
import { defineConfig, type DefaultTheme } from 'vitepress'
import { SearchPlugin } from "vitepress-plugin-search";
//git更新版本
import { join } from 'node:path'
import { 
  GitChangelog, 
  GitChangelogMarkdownSection, 
} from '@nolebase/vitepress-plugin-git-changelog/vite'
import { hostname } from 'os'
//时间线插件
import timeline from "vitepress-markdown-timeline"
// to-do插件
import taskLists from 'markdown-it-task-checkbox'
//引入nav
import { nav } from './configs'
//引入algolia
import algolia from './algolia'


//archive侧边栏
function sidebar_archive(): DefaultTheme.SidebarItem[]{
  return [
    {text: '暂时没有内容',link:'',}
  ]
}

//error fix
function sidebar_error_fix():DefaultTheme.SidebarItem[]{
  return[
    //相对路径，相对rollup.md的路径
    {text: '🔙BACK TO MAIN DIRECTORY', link: '../../../../'},
    {text:'———————————————',},
    {text: 'Error: Cannot find module \'@rollup/rollup-win32-x64-msvc\'',link: '/rollup',}
  ]
}

//about_me侧边栏
function sidebar_about_me(): DefaultTheme.SidebarItem[]{
  return [
    {text: '📱Reach Me',link: '/reach_me',},
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
          text: '🛒Shopping',
          collapsed: true,
          items: [
            {text:'7000元笔记本电脑选购指北',link: '/life_skills/shopping/7000￥价位笔记本电脑选购指北.md',}
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
            {text: '1.前端',link: '/project/基于vue+springboot的资产管理系统/第1天---前端',},
            {text: '2-1.若依——低代码开发平台',link: '',},
            {text: '2-2.项目速成攻略',link: '/project/基于vue+springboot的资产管理系统/第2天_2---项目速成攻略',},
            {text: '3.Sping Security',link: '',},
            {text: '4.智慧物业管理系统',link: '/project/基于vue+springboot的资产管理系统/第4天---智慧物业管理系统',},
          ]
        },
        {
          text: '🎬JY-movie',
          collapsed: true,
          items: [
            {text: 'README.md文档',link: '/project/JY-movie/jy-movie'},
            {text: '毕业答辩相关',link: '/project/JY-movie/JY-movie答辩相关'},
          ]
        },
        {
          text: '🏢RyanJoy\'s Web',
          collapsed: true,
          items: [
            {text: '目前还是空',}
          ]
        },
        {
          text: '🚀Starship Customize',
          collapsed: true,
          items: [
            {text: 'README.md文档',link: '/project/Starship_customize/starship_custom',},
          ]
        },
        {
          text: '🎵Cloud Music个人实现',
          collapsed: true,
          items: [
            // todo:完成cloud music的内容
            {text: '暂时为空'},
          ]
        },
      ]
    },

    {
      text: '🤔Reflection & Summary',
      collapsed: false,
      items: [
        {
          text: '🆙个人成长',
          collapsed: true,
          items:[
            {text:'关于做好Read it later的重要性', link:'/reflection&summary/个人成长/关于做好Read_it_later的重要性'},
          ]
        },
        {
          text: '👩‍❤️‍👨感情',
          collapsed: true,
          items:[
            {text:'自我分析',link:'/reflection&summary/感情/自我分析'},
            {text:'放下感情还是提高自己？',link:'/reflection&summary/感情/放下感情还是提高自己？'},
          ]
        },
        {
          text: '👨‍🎓考研',
          collapsed: true,
          items:[
            {text:'动力鸡汤', link:'/reflection&summary/考研/动力鸡汤'},
          ]
        }
      ]
    },

    {
      text: '💻Technical Stack',
      collapsed: false,
      items: [
        {
          // 第二级
          text: '📑个人Blog搭建指北',
          collapsed: true,
          items: [
            {text: '个人博客系统搭建最优解',link:'/tech_skills/Blog/个人博客系统搭建最优解',},
            {text: 'Blog搭建过程中的排坑指北',link: '/tech_skills/Blog/error_fix/'},
          ]
        },
        {
          text: '📕CSS学习笔记',
          collapsed: true,
          items: [
            {text: 'CSS2笔记',link:'/tech_skills/CSS/CSS2',},
          ]
        },
        {
          text: '📗HTML学习笔记',
          collapsed: true,
          items: [
            {text: 'HTML4笔记',link:'/tech_skills/HTML/HTML4',},
          ]
        },
        {
          text: '📘SpringBoot学习笔记',
          collapsed: true,
          items: [
            {text: '目前还是空',},
          ]
        },
        {
          text: '📙Vue学习笔记',
          collapsed: true,
          items: [
            {text: 'VUE笔记',link: '/tech_skills/VUE/VUE'},
          ]
        },
      ]
    },
    
    {
      text: '🛠️Tools',
      collapsed: false,
      items:[
        {
          text: '🌵Git-代码版本控制',
          collapsed: true,
          items: [
            {text: '如何规范commit？',link:'/tools/Git/如何规范Git_Commit？',},
            {text: 'Git使用',link:'/tools/Git/git使用',},
          ]
        },
        {
          text: '⌨️Powershell-新一代终端',
          collapsed: true,
          items: [
            {text: 'Powershell使用笔记',link: '/tools/Powershell/powershell'},
          ]
        },
        {
          text: '👨‍💻VScode',
          collapsed: true,
          items: [
            {
              text: '🔌插件——我在用什么？',
              collapsed:true,
              items:[
                {
                  text: 'Todo Tree',
                  link: '/tools/VSCode/插件/todo_tree',
                }
              ]
            }
          ]
        }
      ]
    }

  ]
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:'/RyanJoy-s_Web/',
  lang: 'zh-CN',
  title: "RyanJoy's Web",
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
    plugins: [ 
      GitChangelog({ 
        // 填写在此处填写您的仓库链接
        repoURL: () => 'https://github.com/get1024/RyanJoy-s_Web', 
      }), 
      GitChangelogMarkdownSection(),
    ],
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
    
  }, 

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    //左上角的logo头像
    logo: '/logo.png',

    nav,

    editLink: {
      pattern: 'https://github.com/get1024/RyanJoy-s_Web/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },

    footer: {
      message: '孩儿立志出乡关，学不成名誓不还。',
      copyright: `Copyright © 2022-${new Date().getFullYear()}  <a href="https://github.com/get1024">RyanJoy(get1024)</a>`,
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '本页大纲',
      level:[1,4],
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
        link: 'https://github.com/get1024/RyanJoy-s_Web',
      },
      {
        icon: {svg: '<svg t="1715358041217" class="icon" viewBox="0 0 1217 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6062" width="200" height="200"><path d="M459.643282 956.423306l18.87277-283.091558 513.826397-462.687277c22.525565-20.699168-4.870392-31.048751-34.701545-12.78478L323.272295 598.449465 48.703924 511.391201c-59.053508-16.437574-59.662307-57.227111 13.393579-87.058264L1130.539834 12.78478c48.703924-21.916766 95.581451 12.175981 76.70868 87.058264l-182.030916 856.580262c-12.78478 60.879905-49.312723 75.491082-100.451843 47.486325l-277.003567-204.55648-133.326992 129.065398c-14.611177 15.219976-27.395957 28.004756-54.791914 28.004757z" p-id="6063"></path></svg>'},
        link: 'https://t.me/RyanJoy_1945815',
      },
      {
        icon: 'x',
        link: 'https://x.com/RyanJoy_1945815',
      }
    ],

    // BUG:解决algolia搜索不爬虫的问题
    search: {
      // provider: 'algolia',
      // options: algolia,
      provider: 'local',
    },

    //侧边栏配置
    //base键值对是直接省略了在后续sidebar函数中的路径了，默认从base指定的路径开始。
    sidebar: {
      // 主分支
      '/blog': { base: '/blog', items: sidebar_blog() },
      '/about_me': { base: '/about_me', items: sidebar_about_me() },
      '/archive': { base: '/archive', items: sidebar_archive() },

      //递进分支
      '/blog/tech_skills/Blog/error_fix': {base:'/blog/tech_skills/Blog/error_fix',items:sidebar_error_fix()},
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
      //to-do插件
      md.use(taskLists, {
        disabled: false,  
        divWrap: false,
        divClass: 'checkbox',
        idPrefix: 'cbx_',
        ulClass: 'task-list',
        liClass: 'task-list-item',
      });
    },
  },

})