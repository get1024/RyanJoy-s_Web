<script lang="ts" setup>
import { useData, useRouter } from 'vitepress'
import { computed, ref, onMounted } from 'vue'
import { getArticleStats, type ArticleStats } from './functions'
import { splitDate } from '../PostList/dateUtils'

const { page } = useData()
const router = useRouter()

const date = computed(() => page.value.frontmatter.createAt)
const formattedDate = computed(() => date.value ? splitDate(date.value) : null)
const tags = computed(() => page.value.frontmatter.tags || ['待定'])

const articleStats = ref<ArticleStats>({
    wordCount: 0,
    imageCount: 0,
    readTimeMinutes: 0
})

function analyze() {
    document.querySelectorAll('.meta-des').forEach(v => v.remove())
    const docDomContainer = window.document.querySelector('#VPContent')
    const imgs = docDomContainer?.querySelectorAll<HTMLImageElement>(
        '.content-container .main img'
    )
    const words = docDomContainer?.querySelector('.content-container .main')?.textContent || ''

    articleStats.value = getArticleStats(words, imgs?.length || 0)
}

onMounted(() => {
    analyze()
})

const handleTagClick = (tag: string) => {
    router.go(`/otherDocs/tagCloud.html?tag=${encodeURIComponent(tag)}`)
}
</script>


<template>
    <div class="ArticleMetadata-word">
        <p class="ArticleMetadata-create" v-if="formattedDate">
            <svg t="1738918990663" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="26494" width="15" height="15">
                <path
                    d="M800.280706 320.674487l71.413469-70.936609-85.505419-85.385693-78.57866 78.818114c-41.080627-24.600281-87.057775-41.857317-136.139633-49.619095l-3.344165-45.499263H450.854385l-3.104711 45.499263c-48.963155 8.060583-94.940302 25.13854-136.02093 49.9179l-76.130911-78.93784-87.535659 83.356476 71.175039 73.145927c-58.755172 67.651796-94.342692 155.904793-94.342691 252.635881 0 212.689077 172.384116 385.192919 385.073192 385.192919s385.013841-172.563194 385.013841-385.192919c-0.059352-96.732112-35.766598-185.343265-94.700849-252.995061zM509.908362 856.995405c-156.50138 0-283.386232-126.884852-283.386232-283.32688 0-156.50138 126.884852-283.386232 283.386232-283.386232S793.294594 417.167145 793.294594 573.668525c0 156.442028-126.884852 283.32688-283.386232 283.32688z m23.824615-538.709315h-67.771523v287.446711h245.768473v-79.475076H533.792329V318.28609h-0.059352z m-106.882286-185.341219h166.115342c16.59905 0 30.213116-13.434987 30.213116-30.094412V87.74339c0-16.779152-13.614066-25.496697-30.213116-25.496697H426.850691c-16.59905 0-30.213116 8.717546-30.213115 25.496697v15.107069c-0.001023 16.659425 13.613042 30.094412 30.213115 30.094412z"
                    p-id="26495" fill="var(--main-page-text)"></path>
            </svg>
            <span>创建: {{ formattedDate.year }}.{{ formattedDate.month }}.{{ formattedDate.day }} {{ formattedDate.hour
                }}:{{ formattedDate.minute }}:{{ formattedDate.second }}</span>
            &nbsp;
            <svg t="1736647717345" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="9217" width="16" height="16">
                <path
                    d="M512 101.376a410.624 410.624 0 1 1 0 821.248 410.624 410.624 0 0 1 0-821.248z m0 74.666667a336.042667 336.042667 0 1 0 0 672 336.042667 336.042667 0 0 0 0-672.085334z m149.333333 149.333333a37.290667 37.290667 0 0 1 6.741334 73.984l-6.741334 0.682667H549.290667v298.666666a37.290667 37.290667 0 0 1-73.984 6.656l-0.682667-6.741333v-298.666667H362.666667a37.290667 37.290667 0 0 1-6.741334-73.984l6.741334-0.597333h298.666666z"
                    p-id="9218" fill="var(--main-page-text)"></path>
            </svg>
            <span>字数: {{ articleStats.wordCount }}</span>
            &nbsp;
            <svg t="1736647890935" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="14827" width="16" height="16">
                <path
                    d="M938.666667 553.92V768c0 64.8-52.533333 117.333333-117.333334 117.333333H202.666667c-64.8 0-117.333333-52.533333-117.333334-117.333333V256c0-64.8 52.533333-117.333333 117.333334-117.333333h618.666666c64.8 0 117.333333 52.533333 117.333334 117.333333v297.92z m-64-74.624V256a53.333333 53.333333 0 0 0-53.333334-53.333333H202.666667a53.333333 53.333333 0 0 0-53.333334 53.333333v344.48A290.090667 290.090667 0 0 1 192 597.333333a286.88 286.88 0 0 1 183.296 65.845334C427.029333 528.384 556.906667 437.333333 704 437.333333c65.706667 0 126.997333 16.778667 170.666667 41.962667z m0 82.24c-5.333333-8.32-21.130667-21.653333-43.648-32.917333C796.768 511.488 753.045333 501.333333 704 501.333333c-121.770667 0-229.130667 76.266667-270.432 188.693334-2.730667 7.445333-7.402667 20.32-13.994667 38.581333-7.68 21.301333-34.453333 28.106667-51.370666 13.056-16.437333-14.634667-28.554667-25.066667-36.138667-31.146667A222.890667 222.890667 0 0 0 192 661.333333c-14.464 0-28.725333 1.365333-42.666667 4.053334V768a53.333333 53.333333 0 0 0 53.333334 53.333333h618.666666a53.333333 53.333333 0 0 0 53.333334-53.333333V561.525333zM320 480a96 96 0 1 1 0-192 96 96 0 0 1 0 192z m0-64a32 32 0 1 0 0-64 32 32 0 0 0 0 64z"
                    fill="var(--main-page-text)" p-id="14828"></path>
            </svg>
            <span>图片: {{ articleStats.imageCount }}</span>
        </p>
        <p class="ArticleMetadata-tags">
            <svg t="1738476810960" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="4127" width="16" height="16">
                <path
                    d="M483.2 790.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-0.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3c-2.3-0.2-4.7 0.6-6.3 2.3L137.7 444.8c-3.1 3.1-3.1 8.2 0 11.3l334.2 334.2c3.1 3.2 8.2 3.2 11.3 0z m62.6-651.7l224.6 19 19 224.6L477.5 694 233.9 450.5l311.9-311.9z"
                    p-id="4128" fill="var(--main-page-text)"></path>
                <path d="M605.958852 324.826232a48 48 0 1 0 67.881066-67.883435 48 48 0 1 0-67.881066 67.883435Z"
                    p-id="4129" fill="var(--main-page-text)"></path>
                <path
                    d="M889.7 539.8l-39.6-39.5c-3.1-3.1-8.2-3.1-11.3 0l-362 361.3-237.6-237c-3.1-3.1-8.2-3.1-11.3 0l-39.6 39.5c-3.1 3.1-3.1 8.2 0 11.3l243.2 242.8 39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3z"
                    p-id="4130" fill="var(--main-page-text)"></path>
            </svg>

            <span class="tag-content">标签:
                <span v-for="(tag, index) in tags" :key="tag" class="tag-item" @click="handleTagClick(tag)">
                    {{ tag }}{{ index < tags.length - 1 ? ',  ' : '' }} </span>
                </span>
        </p>
    </div>
</template>


<style scoped>
.ArticleMetadata-word {
    color: var(--custom-text);
    white-space: nowrap;
    width: fit-content;
    min-width: 200px;
    font-size: 0.72em;
    font-weight: bolder;
}

.ArticleMetadata-word p {
    display: flex;
    align-items: center;
    margin: 0px;
}

.ArticleMetadata-word p svg {
    margin-right: 2px;
    flex-shrink: 0;
    vertical-align: middle;
}

.ArticleMetadata-word p span {
    line-height: 1.5;
}

.tag-item {
    cursor: pointer;
    color: var(--vp-c-brand-1);
}

.tag-item:hover {
    color: var(--vp-c-brand-3);
    text-decoration: underline;
}
</style>