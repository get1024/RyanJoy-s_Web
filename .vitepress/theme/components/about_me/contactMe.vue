<script setup>
import { ref } from 'vue';

const showToast = ref(false);

const copyEmail = () => {
    navigator.clipboard.writeText('ryanjoy2002@gmail.com');
    showToast.value = true;
    setTimeout(() => {
        showToast.value = false;
    }, 3000);
};
</script>

<template>
    <div class="contact-container">
        <div class="tooltip">
            <!-- SVG 图片作为按钮内容 -->
            <svg t="1716284448713" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="2668" width="50" height="50">
                <path
                    d="M337.387283 341.82659c-17.757225 0-35.514451 11.83815-35.514451 29.595375s17.757225 29.595376 35.514451 29.595376 29.595376-11.83815 29.595376-29.595376c0-18.49711-11.83815-29.595376-29.595376-29.595375zM577.849711 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763zM501.641618 401.017341c17.757225 0 29.595376-12.578035 29.595376-29.595376 0-17.757225-11.83815-29.595376-29.595376-29.595375s-35.514451 11.83815-35.51445 29.595375 17.757225 29.595376 35.51445 29.595376zM706.589595 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763z"
                    fill="#28C445" p-id="2669"></path>
                <path
                    d="M510.520231 2.959538C228.624277 2.959538 0 231.583815 0 513.479769s228.624277 510.520231 510.520231 510.520231 510.520231-228.624277 510.520231-510.520231-228.624277-510.520231-510.520231-510.520231zM413.595376 644.439306c-29.595376 0-53.271676-5.919075-81.387284-12.578034l-81.387283 41.433526 22.936416-71.768786c-58.450867-41.433526-93.965318-95.445087-93.965317-159.815029 0-113.202312 105.803468-201.988439 233.803468-201.98844 114.682081 0 216.046243 71.028902 236.023121 166.473989-7.398844-0.739884-14.797688-1.479769-22.196532-1.479769-110.982659 1.479769-198.289017 85.086705-198.289017 188.67052 0 17.017341 2.959538 33.294798 7.398844 49.572255-7.398844 0.739884-15.537572 1.479769-22.936416 1.479768z m346.265896 82.867052l17.757225 59.190752-63.630058-35.514451c-22.936416 5.919075-46.612717 11.83815-70.289017 11.83815-111.722543 0-199.768786-76.947977-199.768786-172.393063-0.739884-94.705202 87.306358-171.653179 198.289017-171.65318 105.803468 0 199.028902 77.687861 199.028902 172.393064 0 53.271676-34.774566 100.624277-81.387283 136.138728z"
                    fill="#28C445" p-id="2670"></path>
            </svg>
            <!-- 悬浮提示框 -->
            <span class="tooltiptext">
                <img class="wechatImg" src="/wechat.jpg" alt="Tooltip Image">
            </span>
        </div>
        <div @click="copyEmail" style="cursor: pointer;">
            <svg t="1716286376303" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="5209" width="55" height="55">
                <path d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#608BE9" p-id="5210"></path>
                <path d="M192 302m32 0l576 0q32 0 32 32l0 356q0 32-32 32l-576 0q-32 0-32-32l0-356q0-32 32-32Z"
                    fill="#EAEDF5" p-id="5211"></path>
                <path
                    d="M224 722h576c17.673 0 32-14.327 32-32v-58C660.96 493.333 554.294 424 512 424c-42.294 0-148.96 69.333-320 208v58c0 17.673 14.327 32 32 32z"
                    fill="#CCDAF7" p-id="5212"></path>
                <path
                    d="M224 302h576c17.673 0 32 14.327 32 32v58C651.35 517.333 544.683 580 512 580c-32.683 0-139.35-62.667-320-188v-58c0-17.673 14.327-32 32-32z"
                    fill="#FFFFFF" p-id="5213"></path>
            </svg>
            <div v-if="showToast" class="toast">邮箱已复制到剪切板，去发邮件吧！</div>
        </div>

    </div>
</template>

<style scoped>
.contact-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* Align items to the left */
    gap: 10px;
    /* Add space between icons */
}

.tooltip {
    position: relative;
    display: inline-block;
}

.tooltiptext {
    visibility: hidden;
    width: 400px;
    background-color: transparent;
    text-align: center;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    /* Position the tooltip above the icon */
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}

.wechatImg {
    width: 100%;
    height: auto;
}

.toast {
    position: fixed; /* 固定定位 */
    bottom: 20px; /* 距离底部20px */
    left: 50%; /* 水平居中定位 */
    transform: translateX(-50%); /* 水平居中偏移修正 */
    background-color: var(--custom-toast-bg); /* 半透明黑色背景 */
    color: var(--custom-toast-text); /* 白色文字 */
    padding: 10px 20px; /* 内边距：上下10px，左右20px */
    border-radius: 15px; /* 圆角边框8px */
    z-index: 1000; /* 确保显示在其他元素上层 */
    text-align: center; /* 文字居中对齐 */
    width: fit-content; /* 宽度自适应内容 */
    box-shadow: var(--custom-shadow);
}
</style>