<script setup lang="ts">
import '../style/Linkcard.css';

interface Props {
    url: string
    title: string
    description: string
    logo: string
}

const props = withDefaults(defineProps<Props>(), {
    url: '',
    title: '',
    description: '',
    logo: '',
})
</script>


<template>
    <div class="linkcard">
        <a :href="props.url" target="_blank">
            <p class="description">{{ props.title }}<br><span>{{ props.description }}</span></p>
            <div class="logo">
                <img alt="logo" width="70px" height="70px" :src="props.logo" />
            </div>
        </a>
    </div>
</template>


<!-- 使用方法 -->
<!-- <Linkcard url="你的网址" title="标题" description="描述" logo="logo图片路径"/> -->