// 主题配置文件
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme as ThemeConfig } from 'vitepress'
import {
  InjectionKey as NolebaseEnhancedReadabilitiesInjectionKey,
  LayoutMode as NolebaseEnhancedReadabilitiesLayoutMode,
  NolebaseEnhancedReadabilitiesMenu, 
  NolebaseEnhancedReadabilitiesScreenMenu, 
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import type { Options } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import './styles/vars.css'
import './styles/main.css'

//高亮目标标题
import {  
  NolebaseHighlightTargetedHeading,  
} from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'
import '@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css'
//文件更新git页面历史
import { 
  NolebaseGitChangelogPlugin,
  NolebaseGitChangelog, 
  NolebaseGitContributors,
  InjectionKey
} from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
//时间线样式
import "vitepress-markdown-timeline/dist/theme/index.css";
//浏览量
import googleAnalytics from 'vitepress-plugin-google-analytics'
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
//图片缩放
import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
import './style/index.css'
//评论giscus
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData } from 'vitepress';
import { strict } from 'assert'
import { emit } from 'process'
import theme from 'vitepress/theme'
//面包屑导航
// import { NolebaseBreadcrumbs } from '@nolebase/vitepress-plugin-breadcrumbs/client'
//页面属性
import {
  NolebasePagePropertiesPlugin,
} from '@nolebase/vitepress-plugin-page-properties/client'
//行内链接预览
import { 
  NolebaseInlineLinkPreviewPlugin, 
} from '@nolebase/vitepress-plugin-inline-link-preview/client'
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css'
import 'virtual:group-icons.css' //代码组图标

//组件
import Linkcard from "./components/Linkcard.vue"
import HomeUnderLine from './components/HomeUnderLine.vue'
import Update from './components/Update.vue'
import ArticleMetadata from "./components/ArticleMetadata.vue"

export const Theme: ThemeConfig = {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      //将面包屑导航添加到文档上方
      // 'doc-before': () => h(NolebaseBreadcrumbs), 
      // 为较宽的屏幕的导航栏添加阅读增强菜单
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu), 
      // 为较窄的屏幕（通常是小于 iPad Mini）添加阅读增强菜单
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu), 
      'layout-top': () => [ 
        h(NolebaseHighlightTargetedHeading), 
      ],
    })
  },

  enhanceApp({ app, router }) {
    if (inBrowser) {
      router.onAfterRouteChanged = (to) => {
        busuanzi.fetch()
      }
    }
    app.use(NolebaseGitChangelogPlugin)
    app.use(NolebasePagePropertiesPlugin<{
      tags: string[]
      progress: number
    }>(), {
      properties: {
        'zh-CN': [
          {
            key: 'tags',
            type: 'tags',
            title: '标签',
          },
          {
            key: 'progress',
            type: 'progress',
            title: '完成进度',
          },
          {
            key: 'wordCount',
            type: 'dynamic',
            title: '字数',
            options: {
              type: 'wordsCount',
            },
          },
          {
            key: 'readingTime',
            type: 'dynamic',
            title: '阅读时间',
            options: {
              type: 'readingTime',
              dateFnsLocaleName: 'zhCN',
            },
          },
        ],
      },
    }),
    app.use(NolebaseInlineLinkPreviewPlugin),
    app.component('Linkcard' , Linkcard),
    app.component('HomeUnderLine', HomeUnderLine),
    app.component('Update',Update),
    app.component('ArticleMetadata' , ArticleMetadata)
  },

  //图片缩放
  setup() {
    const route = useRoute();
    // const initZoom = () => {
    //   // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
    //   mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    // };
    // onMounted(() => {
    //   initZoom();
    // });
    // watch(
    //   () => route.path,
    //   () => nextTick(() => initZoom())
    // );
    //giscus评论插件
    // Get frontmatter and route
    const { frontmatter } = useData();
        
    // giscus配置
    giscusTalk({
      repo: 'get1024/RyanJoy-s_Web', //仓库
      repoId: 'R_kgDOL1mSLA', //仓库ID
      category: 'Announcements', // 讨论分类
      categoryId: 'DIC_kwDOL1mSLM4CfRSC', //讨论分类ID
      mapping: 'pathname',
      strict: '0',
      inputPosition: 'top',
      theme:'preferred_color_scheme',
      lang: 'zh-CN',
      crossorigin:'anonymous',
      }, 
      {
        frontmatter, route
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    );
  },
}

export default Theme