---
title: 📒笔记首页
createAt: 2024-04-29 21:50:23
updateAt: 2025-01-20 23:52:47
---
<script setup>
    import {lifeSkills} from '/.vitepress/theme/components/lists/lifeSkills'
    import {os} from '/.vitepress/theme/components/lists/os'
    import {personalProject} from '/.vitepress/theme/components/lists/personalProject'
    import {ref_sum} from '/.vitepress/theme/components/lists/ref_sum'
    import {tech_skills} from '/.vitepress/theme/components/lists/tech_skills'
    import {tools} from '/.vitepress/theme/components/lists/tools'
</script>

# 笔记首页

## <p><img src="/avatar.png" class="titleAvatar" /><span >RyanJoy 的知识图书馆</span></p>

👏欢迎来到小业的知识图书馆 [RyanJoy's Web](https://get1024.github.io/RyanJoy-s_Web/)，这里是「📒笔记」分区!

## 🏙️生活技巧

<list v-for="{ title , items } in lifeSkills" :title="title" :items="items" />

## 👨🏼‍💻个人项目

<list v-for="{ title , items } in personalProject" :title="title" :items="items" />

## 💻操作系统

<list v-for="{ title , items } in os" :title="title" :items="items" />

## 🖥️专业技能

<list v-for="{ title , items } in tech_skills" :title="title" :items="items" />

## 🤔反思和总结

<list v-for="{ title , items } in ref_sum" :title="title" :items="items" />

## 🛠️实用工具

<list v-for="{ title , items } in tools" :title="title" :items="items" />