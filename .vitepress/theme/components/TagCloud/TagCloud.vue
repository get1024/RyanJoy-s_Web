<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { data as tags } from './tags.data'
import PostList from '../PostList/PostList.vue'

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
          v-for="(tag, index) in tags"
          :key="tag.name"
          class="tag-item"
          :class="{ active: selectedTag === tag.name }"
          :style="{ 
            '--tag-color': tag.color,
            fontSize: `${tag.size}rem`,
            '--rotate': `${Math.random() * 6 - 3}deg`,
            '--delay': `${index * 0.15}s`,
            '--float-duration': `${4 + Math.random() * 2}s`,
            '--x-offset': `${Math.random() * 6 - 3}px`,
            '--y-offset': `${Math.random() * 6 - 3}px`,
            '--z-index': index
          }"
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

/* 标签列表容器 */
.tags-container {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 6px;          /* 水平和垂直间距 */
    padding-top: 12px;
    justify-content: center;
    align-items: center;
}

/* 单个标签样式 */
.tag-item {
    display: inline-block;
    margin: 0;
    padding: 0.3rem 0.6rem;
    border-radius: 1rem;
    cursor: pointer;
    transition: all 0.16s ease;
    transform: rotate(var(--rotate));
    animation: float var(--float-duration) ease-in-out infinite;
    animation-delay: var(--delay);
    position: relative;
    z-index: calc(var(--z-index));
}

/* 标签文本和计数样式 */
.tag-text, .tag-count {
    color: var(--tag-color);
    transition: color 0.3s ease;
}

/* 标签悬浮效果 */
.tag-item:hover {
    border-color: var(--tag-color);
    transform: translateY(-2px);
}

/* 激活状态样式 */
.tag-item.active {
    background-color: var(--tag-color);
    border-color: var(--tag-color);
}

.tag-item.active .tag-text,
.tag-item.active .tag-count {
    color: var(--vp-c-bg);
}

/* 计数样式 */
.tag-count {
    margin-left: 2px;
    opacity: 0.9;
}

/* 浮动动画定义 */
@keyframes float {
    0%, 100% {
        transform: translate(0, 0) rotate(var(--rotate));
    }
    25% {
        transform: translate(var(--x-offset), var(--y-offset)) rotate(calc(var(--rotate) + 1deg));
    }
    75% {
        transform: translate(calc(var(--x-offset) * -0.5), calc(var(--y-offset) * -0.5)) rotate(calc(var(--rotate) - 1deg));
    }
}
</style> 