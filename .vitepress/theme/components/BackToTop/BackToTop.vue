<template>
    <el-backtop class="el-backtop">
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M512 0A512 512 0 1 1 0 512 512 512 0 0 1 512 0z" fill="var(--vp-c-brand-1)" />
            <path
                d="M675.57181 542.524952a30.378667 30.378667 0 0 1-20.016762-7.533714l-145.627429-127.097905-140.970667 126.829715a30.47619 30.47619 0 0 1-40.764952-45.348572l161.060571-144.847238a30.47619 30.47619 0 0 1 40.423619-0.292571l165.961143 144.871619a30.47619 30.47619 0 0 1-20.065523 53.418666z"
                fill="var(--main-page-bg)" />
            <path
                d="M512.073143 730.745905a30.47619 30.47619 0 0 1-30.476191-30.476191v-182.857143a30.47619 30.47619 0 0 1 60.952381 0v182.857143a30.47619 30.47619 0 0 1-30.47619 30.476191z"
                fill="var(--main-page-bg)" />
        </svg>
    </el-backtop>
</template>

<script>
export default {
    name: 'BackToTop'
}
</script>

<style scoped>

.el-backtop {
    background-color: var(--vp-c-bg-soft);
}

.el-backtop:hover {
    background-color: var(--vp-c-brand-3);
}

.icon {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 80%;
    transform: translate(-50%, -50%);
    will-change: transform;
}
</style>