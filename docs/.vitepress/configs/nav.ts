import type { DefaultTheme } from 'vitepress'
export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '🏡Home',
    link: '/',
  },
  {
    text: '📒Blog',
    items: [
      {
        text: '🚶Life Skills',
        link:'/blog/life_skills/index'
      },
      {
        text: '🛠️Project',
        link:'/blog/project/index'
      },
      {
        text: '🤔Reflection & Summary',
        link:'/blog/reflection&summary/index'
      },
      {
        text: '💻Technical Competence',
        link:'/blog/tech_skills/index'
      },
    ]
  },
  {
    text: '👨‍🎓About Me',
    link: '/about_me/index'
  },
  {
    text: '🗃️Archive',
    link: '/archive/index'
  },
]