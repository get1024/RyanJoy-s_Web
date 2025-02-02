// 主题配置文件
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme as ThemeConfig } from 'vitepress'
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
//浏览量
import googleAnalytics from 'vitepress-plugin-google-analytics'
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
//图片缩放
import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
//引入外部样式文件
import './style/index.css'
//评论giscus
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData } from 'vitepress';
import { strict } from 'assert'
import { emit } from 'process'
import theme from 'vitepress/theme'
import 'virtual:group-icons.css' //代码组图标
//
import vitepressNprogress from 'vitepress-plugin-nprogress'
import 'vitepress-plugin-nprogress/lib/css/index.css'
//组件
import Linkcard from "./components/Linkcard/Linkcard.vue"
import HomeUnderLine from './components/HomeUnderline/HomeUnderLine.vue'
import ArticleMetadata from "./components/ArticleMetadata/ArticleMetadata.vue"
import nodeIndex from "./components/noteIndex/noteIndex.vue"
import list from "./components/lists/list.vue"
import githubData from "./components/about_me/githubData.vue"
import backEnd from "./components/about_me/backEnd.vue"
import frontEnd from "./components/about_me/frontEnd.vue"
import devOps from "./components/about_me/devOps.vue"
import developTools from "./components/about_me/developTools.vue"
import others from "./components/about_me/others.vue"
import contactMe from "./components/about_me/contactMe.vue"
import TagCloud from './components/TagCloud/TagCloud.vue'
import BackToTop from './components/BackToTop/BackToTop.vue'

const enhanceAppOriginal = ({ app, router, siteData }) => {
  if (inBrowser) {
    router.onAfterRouteChanged = (to) => {
      busuanzi.fetch()
    }
  }
  app.use(NolebaseGitChangelogPlugin)
  
  // 组件引入
  app.component('Linkcard', Linkcard)
  app.component('HomeUnderLine', HomeUnderLine)
  app.component('ArticleMetadata', ArticleMetadata)
  app.component('nodeIndex',nodeIndex)
  app.component('list', list)
  app.component('githubData', githubData)
  app.component('backEnd', backEnd)
  app.component('frontEnd', frontEnd)
  app.component('devOps', devOps)
  app.component('developTools', developTools)
  app.component('others', others)
  app.component('contactMe', contactMe)
  app.component('TagCloud', TagCloud)
  app.component('BackToTop', BackToTop)
}

export const Theme: ThemeConfig = {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => [ 
        h(NolebaseHighlightTargetedHeading), 
      ],
      'layout-bottom': () => h(BackToTop)
    })
  },

  // 简化enhanceApp的结构
  enhanceApp: (ctx) => {
    enhanceAppOriginal(ctx)  // 调用原有的配置
    vitepressNprogress(ctx)  // 使用新的插件
  },

  setup() {
    const route = useRoute();
      //图片缩放
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
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
      //您可以使用"comment:true"序言在页面上单独启用它
      true
    );
  },
}

export default Theme