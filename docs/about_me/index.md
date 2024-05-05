---
Created at: 2024年04月29日 20:06:40
Last edited at: 2024年05月05日 23:53:16
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
]
</script>

# 关于我

欢迎联系！

<VPTeamMembers size="small" :members="members" />