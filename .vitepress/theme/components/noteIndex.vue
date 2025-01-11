<script setup>
import { data as posts } from '../utils/note.data.ts'
import '../style/nodeIndex.css'


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
    <h2>{{ group.year }}年</h2>
    <ul>
      <li v-for="post of group.posts" :key="post.url" class="post-item">
        <a :href="'/RyanJoy-s_Web'+post.url">{{ post.frontmatter.title }}</a>
        <span class="post-date">创建于 {{ post.frontmatter.createAt.year }}-{{ post.frontmatter.createAt.month }}-{{ post.frontmatter.createAt.day }} {{ post.frontmatter.createAt.hour }}:{{ post.frontmatter.createAt.minute }}:{{ post.frontmatter.createAt.second }}</span>
      </li>
    </ul>
  </div>
</template>

