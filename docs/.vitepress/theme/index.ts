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

export const Theme: ThemeConfig = {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
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
    // 基于git的页面历史
    app.use(NolebaseGitChangelogPlugin)
  },

  //图片缩放
  setup() {
    const route = useRoute();
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
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    );
  },
}

export default Theme