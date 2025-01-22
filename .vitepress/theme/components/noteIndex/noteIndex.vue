<script setup>
import { data as posts } from './note.data.ts'
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
      <a class="post-link" v-for="post of group.posts" :key="post.url" :href="'/RyanJoy-s_Web' + post.url">
        <li class="post-item">
          <span class="post-link-update">
            <span class="post-title">{{ post.frontmatter.title }}</span>&nbsp;
            <span class="post-update">{{ post.frontmatter.updateAt.year }}.{{ post.frontmatter.updateAt.month }}.{{
              post.frontmatter.updateAt.day }} {{ post.frontmatter.updateAt.hour }}:{{ post.frontmatter.updateAt.minute
              }}:{{ post.frontmatter.updateAt.second }} 更新</span>
          </span>

          <span class="post-date">创建于 {{ post.frontmatter.createAt.year }}.{{ post.frontmatter.createAt.month }}.{{
            post.frontmatter.createAt.day }} {{ post.frontmatter.createAt.hour }}:{{ post.frontmatter.createAt.minute
            }}:{{ post.frontmatter.createAt.second }}</span>
        </li>
      </a>
    </ul>
  </div>
</template>

<style scoped>
h2.noteIndex-h2 {
  font-weight: bold;
  font-size: 1.5em;
  margin-top: 20px;
}

.post-link {
  text-decoration: none;
  display: block;
}

.post-link:hover .post-title {
  text-decoration: underline;
}

.post-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 8px 0;
  padding: 1rem;
  transition: transform 0.3s ease, box-shadow 0s ease;
  border: 2px solid var(--custom-border);
  border-radius: 0.5rem;
  background-color: transparent;
}

.post-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--custom-shadow);
}

.post-link-update {
  text-align: left;
}

.post-title {
  font-family: monospace;
  text-decoration: none;
  display: inline-block;
}

.post-update {
  color: var(--custom-text);
  font-family: monospace;
  white-space: nowrap;
  min-width: 200px;
  font-size: 0.76em;
  font-weight: bolder;
}

.post-date {
  text-align: right;
  color: var(--custom-text);
  font-family: monospace;
  white-space: nowrap;
  min-width: 200px;
  font-size: 0.76em;
  font-weight: bolder;
}
</style>