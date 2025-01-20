<script setup>
import { data as posts } from '../utils/note.data.ts'
import '../style/noteIndex.css'
import { useData } from "vitepress"


const groupedPosts = Object.entries(posts)
  .map(([year, yearPosts]) => ({
    year,
    posts: yearPosts.sort((a, b) => {
      const aDate = a.frontmatter.createAt;
      const bDate = b.frontmatter.createAt;
      if (bDate.month !== aDate.month) {
        return bDate.month - aDate.month;
      }
      if (bDate.day !== aDate.day) {
        return bDate.day - aDate.day;
      }
      if (bDate.hour !== aDate.hour) {
        return bDate.hour - aDate.hour;
      }
      if (bDate.minute !== aDate.minute) {
        return bDate.minute - aDate.minute;
      }
      if (bDate.second !== aDate.second) {
        return bDate.second - aDate.second;
      }
      return 0;
    }),
  }))
  .sort((a, b) => b.year - a.year);
</script>

<template>
  <div v-for="group in groupedPosts" :key="group.year">
    <h2 class="noteIndex-h2">{{ group.year }}年</h2>
    <ul class="noteIndex-ul">
      <li v-for="post of group.posts" :key="post.url" class="post-item">
        <span class="post-link-update">
          <a :href="'/RyanJoy-s_Web'+post.url">{{ post.frontmatter.title }}</a>
          &nbsp;
          <span class="post-update">更新于{{ post.frontmatter.updateAt.year }}-{{ post.frontmatter.updateAt.month }}-{{ post.frontmatter.updateAt.day }} {{ post.frontmatter.updateAt.hour }}:{{ post.frontmatter.updateAt.minute }}:{{ post.frontmatter.updateAt.second }}</span>
        </span>
        <span class="post-date">创建于 {{ post.frontmatter.createAt.year }}-{{ post.frontmatter.createAt.month }}-{{ post.frontmatter.createAt.day }} {{ post.frontmatter.createAt.hour }}:{{ post.frontmatter.createAt.minute }}:{{ post.frontmatter.createAt.second }}</span>
      </li>
    </ul>
  </div>
</template>