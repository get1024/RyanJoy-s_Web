<script setup lang="ts">
interface Post {
    url: string
    frontmatter: {
        title: string
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

defineProps<{
    posts: Post[]
}>()
</script>

<template>
    <ul class="noteIndex-ul">
        <a class="post-link" v-for="post of posts" :key="post.url" :href="post.url">
            <li class="post-item">
                <span class="post-link-update">
                    <span class="post-title">{{ post.frontmatter.title }}</span>&nbsp;
                    <span class="post-update">
                        更新于 {{ post.frontmatter.updateAt.year }}.{{ post.frontmatter.updateAt.month }}.{{
                            post.frontmatter.updateAt.day }} {{ post.frontmatter.updateAt.hour }}:{{
                            post.frontmatter.updateAt.minute }}:{{ post.frontmatter.updateAt.second }}
                    </span>
                </span>
                <span class="post-date">
                    创建于 {{ post.frontmatter.createAt.year }}.{{ post.frontmatter.createAt.month }}.{{
                        post.frontmatter.createAt.day }} {{ post.frontmatter.createAt.hour }}:{{
                        post.frontmatter.createAt.minute }}:{{ post.frontmatter.createAt.second }}
                </span>
            </li>
        </a>
    </ul>
</template>

<style scoped>
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
    transition: transform 0.2s ease, box-shadow 0s ease;
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