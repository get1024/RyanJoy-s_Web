<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const isVisible = ref(false)
const isHovered = ref(false)
const isScrolling = ref(false)
const fillPercentage = ref(0)

// 计算圆环进度
const progressOffset = computed(() => {
    const circumference = 2 * Math.PI * 20 // 圆的周长
    return circumference * (1 - fillPercentage.value / 100)
})

// 监听滚动事件
const handleScroll = () => {
    if (isScrolling.value) return

    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

    // 计算滚动百分比
    fillPercentage.value = Math.min(Math.round((scrollTop / scrollHeight) * 100), 100)

    // 显示/隐藏按钮
    isVisible.value = scrollTop > 300
}

// 平滑滚动到顶部
const scrollToTop = () => {
    if (isScrolling.value) return

    isScrolling.value = true
    const startPosition = window.scrollY
    const startTime = performance.now()
    const duration = fillPercentage.value * 20

    const animation = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        const easeProgress = progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2

        window.scrollTo(0, startPosition * (1 - easeProgress))
        fillPercentage.value = Math.round((1 - easeProgress) * fillPercentage.value)

        if (progress < 1) {
            requestAnimationFrame(animation)
        } else {
            isScrolling.value = false
        }
    }

    requestAnimationFrame(animation)
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <button class="back-to-top" :class="{ visible: isVisible, hover: isHovered }" @click="scrollToTop"
        @mouseenter="isHovered = true" @mouseleave="isHovered = false" aria-label="返回顶部">
        <div class="progress-ring">
            <svg class="ring" viewBox="0 0 48 48">
                <circle class="ring-background" cx="24" cy="24" r="20" />
                <circle class="ring-progress" cx="24" cy="24" r="20"
                    :style="{ 'stroke-dashoffset': progressOffset }" />
            </svg>
            <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M512 0A512 512 0 1 1 0 512 512 512 0 0 1 512 0z" fill="#FFDA00" />
                <path
                    d="M675.57181 542.524952a30.378667 30.378667 0 0 1-20.016762-7.533714l-145.627429-127.097905-140.970667 126.829715a30.47619 30.47619 0 0 1-40.764952-45.348572l161.060571-144.847238a30.47619 30.47619 0 0 1 40.423619-0.292571l165.961143 144.871619a30.47619 30.47619 0 0 1-20.065523 53.418666z"
                    fill="#111111" />
                <path
                    d="M512.073143 730.745905a30.47619 30.47619 0 0 1-30.476191-30.476191v-182.857143a30.47619 30.47619 0 0 1 60.952381 0v182.857143a30.47619 30.47619 0 0 1-30.47619 30.476191z"
                    fill="#111111" />
            </svg>
        </div>
    </button>
</template>

<style scoped>
.back-to-top {
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    width: 3rem;
    height: 3rem;
    border: none;
    background: transparent;
    cursor: pointer;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.3s, transform 0.3s;
    z-index: 100;
}

.back-to-top.visible {
    opacity: 1;
    transform: translateY(0);
}

.progress-ring {
    position: relative;
    width: 100%;
    height: 100%;
}

.ring {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
}

.ring-background {
    fill: none;
    stroke: var(--vp-c-bg-soft);
    stroke-width: 3;
}

.ring-progress {
    fill: none;
    stroke: var(--vp-c-brand-1);
    stroke-width: 3;
    stroke-linecap: round;
    stroke-dasharray: 125.66;
    transition: stroke-dashoffset 0.3s;
}

.icon {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 70%;
    transform: translate(-50%, -50%);
}

.back-to-top.hover {
    transform: scale(1.1);
}
</style>