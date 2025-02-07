<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import PostList from './PostList.vue'
import { data as tags } from './tags.data.ts'

// 当前选中的标签
const selectedTag = ref('')

// 获取选中标签的文章列表
const selectedPosts = computed(() => {
    if (!selectedTag.value) return []
    return tags.find(t => t.name === selectedTag.value)?.posts || []
})

// 标签点击处理函数
const selectTag = (tag: string) => {
    selectedTag.value = selectedTag.value === tag ? '' : tag
}

// 组件挂载时检查URL参数
onMounted(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const tagParam = urlParams.get('tag')
    if (tagParam) {
        selectedTag.value = decodeURIComponent(tagParam)
    }
})
</script>

<template>
  <div class="tag-section">
    <!-- 标签云部分 -->
    <div class="tag-cloud">
      <div class="tags-container">
        <span
          v-for="tag in tags"
          :key="tag.name"
          class="tag-item"
          :class="{ active: selectedTag === tag.name }"
          :style="{ fontSize: `${tag.size}rem` }"
          @click="selectTag(tag.name)"
        >
          <span class="tag-text">{{ tag.name }}</span>
          <span class="tag-count">({{ tag.count }})</span>
        </span>
      </div>
    </div>

    <!-- 文章列表部分 -->
    <div v-if="selectedTag && selectedPosts.length" class="posts-list">
      <h4>{{ selectedTag }} 相关文章 —— {{ selectedPosts.length }} 篇</h4>
      <PostList :posts="selectedPosts" />
    </div>
  </div>
</template>

<style scoped>
/* 标签云容器布局 */
.tag-section {
    display: flex;
    flex-direction: column;
}

.tag-cloud {
    background-color: var(--vp-c-bg-soft);
    border-radius: 12px;
    padding: 20px;
    margin: 1rem 0;
    box-shadow: var(--custom-shadow);
}

.tags-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

/* 单个标签样式 */
.tag-item {
    display: inline-block;
    padding: 0.3rem 0.6rem;
    border-radius: 1rem;
    cursor: pointer;
    transition: all 0.16s ease;
    color: var(--main-page-text);
    background: transparent;
}

.tag-item:hover {
    color: var(--vp-c-brand-1);
    transform: translateY(-2px);
    background-color: var(--main-page-bg);
}

/* 激活状态样式 */
.tag-item.active {
    color: var(--vp-c-brand-1);
    font-weight: bold;
}


.tag-count {
    margin-left: 2px;
    opacity: 0.8;
    font-size: 0.9em;
}

</style> 