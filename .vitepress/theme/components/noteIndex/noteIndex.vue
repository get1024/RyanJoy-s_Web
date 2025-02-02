<script setup>
import { data as posts } from './note.data.ts'
import PostList from '../PostList/PostList.vue'

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
    <PostList :posts="group.posts" />
  </div>
</template>

<style scoped>
h2.noteIndex-h2 {
  font-weight: bold;
  font-size: 1.5em;
  margin-top: 20px;
}
</style>