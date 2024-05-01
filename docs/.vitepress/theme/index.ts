import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme as ThemeConfig } from 'vitepress'
import { 
  NolebaseEnhancedReadabilitiesMenu, 
  NolebaseEnhancedReadabilitiesScreenMenu, 
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import type { Options } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import { InjectionKey } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import './styles/vars.css'
import './styles/main.css'

//行内链接预览
import { 
  NolebaseInlineLinkPreviewPlugin, 
} from '@nolebase/vitepress-plugin-inline-link-preview/client'
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css'

//高亮目标标题
import {  
  NolebaseHighlightTargetedHeading,  
} from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'
import '@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css'
//文件更新git页面历史
import { 
  NolebaseGitChangelogPlugin 
} from '@nolebase/vitepress-plugin-git-changelog/client'
import {
  NolebaseGitChangelog,  
} from '@nolebase/vitepress-plugin-git-changelog/client'
import {
  NolebaseGitContributors,  
} from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'

//mark元素增强
import '@nolebase/vitepress-plugin-enhanced-mark/client/style.css'
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
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }
    //配置国际化
    app.provide(InjectionKey, {
      locales: { // 配置国际化
        'zh-CN': { // configure for Simplified Chinese
          popup: {
            loading: '加载中...',
            loadingAriaLabel: '加载中',
          }
        },
        'en': { // configure for English
          popup: {
            loading: 'Loading...',
            loadingAriaLabel: 'Loading',
          }
        },
      }
    }),
      //基于git的页面历史
      // app.use(NolebaseGitChangelogPlugin, { 
      //   // 把选项填写在这里吧...
      //   locales: {
      //     'zh-CN': {
      //       // noLogs: '暂无最近变更历史',
      //       lastEdited: '本页面最后编辑于 {{daysAgo}}',
      //       lastEditedDateFnsLocaleName: 'zhCN',
      //       viewFullHistory: '查看完整历史',
      //       committedOn: '于 {{date}} 提交',
      //     },
      //   },
      //   mapContributors: [
      //     {
      //       name: 'RyanJoy',
      //       nameAliases:['RJY','任俊业'],
      //       avatar: '/logo.png',
      //       email: 'junyeren@outlook.com',
      //       emailAliases:['2025050361@henu.edu.cn','1195975371@qq.com','18903803658@163.com']
      //     }
      //   ]
      // })
      app.use(NolebaseGitChangelogPlugin);
      app.use(NolebaseInlineLinkPreviewPlugin);
  },
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
  },
}

export default Theme