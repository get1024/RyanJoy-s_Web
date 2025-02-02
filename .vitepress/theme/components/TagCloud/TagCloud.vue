<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { data as tags } from './tags.data'
import PostList from '../PostList/PostList.vue'

// 当前选中的标签
const selectedTag = ref('')

// 获取选中标签的文章
const selectedPosts = computed(() => {
  if (!selectedTag.value) return []
  return tags.find(t => t.name === selectedTag.value)?.posts || []
})

// 选择标签
const selectTag = (tag: string) => {
  selectedTag.value = selectedTag.value === tag ? '' : tag
}

// 从 URL 参数中获取标签并自动选择
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
          class="tag"
          :class="{ active: selectedTag === tag.name }"
          @click="selectTag(tag.name)"
        >
          {{ tag.name }} ({{ tag.count }})
        </span>
      </div>
    </div>

    <!-- 文章列表部分 -->
    <div v-if="selectedTag && selectedPosts.length" class="posts-list">
      <h4>{{ selectedTag }} 相关文章</h4>
      <PostList :posts="selectedPosts" />
    </div>
  </div>
</template>

<style scoped>
.tag-section {
  display: flex;
  flex-direction: column;
}

.tag-cloud {
  margin-top: 24px;
  padding: 20px;
  border-radius: 8px;
  background-color: var(--custom-bg);
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 10px 0;
}

.tag {
  padding: 4px 12px;
  border-radius: 15px;
  color: var(--main-page-text);
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  font-size: 16px;
}

.tag:hover {
  transform: translateY(-2px);
  color: var(--vp-c-brand-1);
}

.tag.active {
  color: var(--vp-c-brand-2);
  transform: translateY(-2px);
  background-color: #f7a80030;
}


</style> 