import type { DefaultTheme } from 'vitepress'
export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '📒文章',
    link: '/📒文章/index',
  },
  {
    text: '📆日记',
    link: '/📆日记/index',
  },
  {
    text: '👨‍🎓关于我',
    link: '/otherDocs/关于我'
  },
  {
    text: '🏷️标签',
    link: '/otherDocs/tagCloud'
  }
]