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
        link:'/blog/life_skills/'
      },
      {
        text: '🛠️Project',
        link:'/blog/project/'
      },
      {
        text: '🤔Reflection & Summary',
        link:'/blog/reflection&summary/'
      },
      {
        text: '💻Technical Competence',
        link:'/blog/tech_skills/'
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
]