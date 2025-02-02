---
title: 文章索引页
createAt: 2024-04-29 21:50:23
updateAt: 2025-02-02 23:43:34
tags:
  - Index
  - Info
  - 博客
---
<script setup>
    import {lifeSkills} from '/.vitepress/theme/components/lists/lifeSkills'
    import {os} from '/.vitepress/theme/components/lists/os'
    import {personalProject} from '/.vitepress/theme/components/lists/personalProject'
    import {ref_sum} from '/.vitepress/theme/components/lists/ref_sum'
    import {tech_skills} from '/.vitepress/theme/components/lists/tech_skills'
    import {tools} from '/.vitepress/theme/components/lists/tools'
</script>

# 文章索引页

## <p><img src="/avatar.png" class="titleAvatar" /><span >RyanJoy 的知识图书馆</span></p>

👏欢迎来到小业的知识图书馆 [RyanJoy's Web](https://ryanjoy.top/)，这里是「🗃️笔记归档」分区！

<span class="marker-underline">***左侧*** 是</span><span class="marker-fakeTitle">📒文章侧边栏</span><span class="marker-underline">，***下方*** 是</span><span class="marker-fakeTitle">📒文章更新时间树</span><span class="marker-underline">。 `浏览` 或者 `ctrl+k` 搜索你需要的文档查阅吧！</span>

<nodeIndex />

<!--  linklist组件式索引页，目前还没实现自动添加。主要问题是，没法自动获取icon  -->

<!-- 
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

<list v-for="{ title , items } in tools" :title="title" :items="items" /> -->