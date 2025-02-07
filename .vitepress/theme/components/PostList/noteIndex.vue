<script setup>
import { data as posts } from './note.data.ts'
import PostList from './PostList.vue'

// 计算文章总数
const totalPosts = Object.values(posts).reduce((sum, yearPosts) => sum + yearPosts.length, 0)

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
  <div class="note-index">
    <p class="total-posts marker-fakeTitle">共计 {{ totalPosts }} 篇文章，RyanJoy在持续更新中~</p>
    <div v-for="group in groupedPosts" :key="group.year">
      <h2 class="noteIndex-h2">{{ group.year }}年</h2>
      <PostList :posts="group.posts" />
    </div>
  </div>
</template>

<style scoped>
.total-posts {
  margin-bottom: 1rem;
}

h2.noteIndex-h2 {
  font-weight: bold;
  font-size: 1.5em;
  margin-top: 20px;
}
</style>