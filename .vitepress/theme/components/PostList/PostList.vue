<script setup lang="ts">
import { computed } from 'vue'
import { data as tagsData } from './tags.data'

interface Post {
    url: string
    frontmatter: {
        title: string
        tags?: string[]
        createAt: {
            year: number
            month: string
            day: string
            hour: string
            minute: string
            second: string
        }
        updateAt: {
            year: number
            month: string
            day: string
            hour: string
            minute: string
            second: string
        }
    }
}

const props = defineProps<{
    posts: Post[]
}>()

// 使用 tags.data.ts 中处理过的标签数据
const processedPosts = computed(() => {
    return props.posts.map(post => {
        // 在 tagsData 中查找当前文档的标签
        const postTags = tagsData.reduce((acc: string[], tagItem) => {
            if (tagItem.posts.some(p => p.url === post.url)) {
                acc.push(tagItem.name)
            }
            return acc
        }, [])

        return {
            ...post,
            frontmatter: {
                ...post.frontmatter,
                tags: postTags
            }
        }
    })
})
</script>

<template>
    <ul class="post-list-ul">
        <a class="post-link" v-for="post of processedPosts" :key="post.url" :href="post.url">
            <li class="post-item">
                <div class="post-content">
                    <div class="post-title-container">
                        <span class="post-title">{{ post.frontmatter.title }}</span>
                        <span class="post-tags" v-if="post.frontmatter.tags?.length">
                            <span class="tag-label">标签:</span>
                            <span
                                v-for="(tag, index) in post.frontmatter.tags"
                                :key="tag"
                                class="tag-item"
                            >
                                {{ tag }}{{ index < post.frontmatter.tags.length - 1 ? ', ' : '' }}
                            </span>
                        </span>
                    </div>
                    <div class="post-dates">
                        <span class="post-update">
                            更新于 {{ post.frontmatter.updateAt.year }}.{{ post.frontmatter.updateAt.month }}.{{
                                post.frontmatter.updateAt.day }} {{ post.frontmatter.updateAt.hour }}:{{
                                post.frontmatter.updateAt.minute }}:{{ post.frontmatter.updateAt.second }}
                        </span>
                        <span class="post-date">
                            创建于 {{ post.frontmatter.createAt.year }}.{{ post.frontmatter.createAt.month }}.{{
                                post.frontmatter.createAt.day }} {{ post.frontmatter.createAt.hour }}:{{
                                post.frontmatter.createAt.minute }}:{{ post.frontmatter.createAt.second }}
                        </span>
                    </div>
                </div>
            </li>
        </a>
    </ul>
</template>

<style scoped>
.post-list-ul {
    list-style: none;
    padding: 0;
    margin: 0;
}   

.post-link {
    text-decoration: none;
    display: block;
}

.post-link:hover .post-title {
    text-decoration: underline;
}

.post-item {
    margin: 8px 0;
    padding: 1rem;
    transition: transform 0.16s ease, box-shadow 0s ease;
    border: 2px solid var(--custom-border);
    border-radius: 0.5rem;
    background-color: transparent;
}

.post-item:hover {
    transform: translateY(-5px);
    box-shadow: var(--custom-shadow);
}

.post-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.post-title-container {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.post-title {
    font-weight: bolder;
    text-decoration: none;
    word-break: break-word;
    flex-shrink: 0;
    font-size: 0.95em;
}

.post-tags {
    color: gray;
    font-weight: bolder;
    font-size: 0.72em;
    font-weight: bolder;
}

.tag-label {
    color: var(--custom-text);
}

.tag-item {
    color: var(--vp-c-brand-1);
    margin: 0 2px;
}

.post-dates {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
}

.post-update,
.post-date {
    color: var(--custom-text);
    font-weight: bolder;
    font-size: 0.72em;
}

/* 移动端适配 */
@media (max-width: 768px) {
    .post-content {
        gap: 0.8rem;
    }

    .post-title-container {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.4rem;
    }

    .post-dates {
        flex-direction: column;
        gap: 0.3rem;
    }

    .post-update,
    .post-date {
        white-space: normal;
        min-width: unset;
    }

    .post-item {
        padding: 0.8rem;
    }
}
</style>