import type { listdata } from "./lists";

// const baseUrl = "/RyanJoy-s_Web/📒文章";
const baseUrl = "/📒文章";

function completeUrl(path: string): string {
    return `${baseUrl}${path}`;
}

export const personalProject: listdata[] = [
    {
        title: "🌐博客",
        items: [
            {
                name: "Cannot find module '@rollup-win32-x64-msvc'",
                url: completeUrl(
                    "/👨🏼‍💻个人项目/🌐博客/🐞BUG解决方案/Cannot find module '@rollup-win32-x64-msvc'"
                ),
                image: "../components/lists/bug.png",
                bdcolor: "#7A8289",
                bgcolor: "#6A737B",
            },
            {
                name: "代码块图标标题",
                url: completeUrl("/👨🏼‍💻个人项目/🌐博客/🔌插件/代码块图标标题"),
                image: "../components/lists/codeblock.png",
                bdcolor: "#27BA8F",
                bgcolor: "#27ff8F",
                stars: "⭐",
            },
            {
                name: "自动生成侧边栏",
                url: completeUrl("/👨🏼‍💻个人项目/🌐博客/🔌插件/自动生成侧边栏"),
                image: "../components/lists/sidebar.png",
                bdcolor: "#27BA8F",
                bgcolor: "#27ff8F",
                stars: "⭐⭐⭐",
            },
            {
                name: "自动生成索引页",
                url: completeUrl("/👨🏼‍💻个人项目/🌐博客/🔌插件/自动生成索引页"),
                image: "../components/lists/archiver.png",
                bdcolor: "#469FCC",
                bgcolor: "#33ddff",
                stars: "⭐⭐⭐",
            },
            {
                name: "个人博客系统搭建最优解",
                url: completeUrl("/👨🏼‍💻个人项目/🌐博客/个人博客系统搭建最优解"),
                image: "../components/lists/blog.png",
                bdcolor: "#FC8059",
                bgcolor: "#FFD880",
            }
        ]
    },
    {
        title: "🎦JY-movie",
        items: [
            {
                name: "jy-movie",
                url: completeUrl("/👨🏼‍💻个人项目/🎦JY-movie/jy-movie"),
                image: "../components/lists/movie.png",
                bdcolor: "#36CFC9",
                bgcolor: "#B5F5EC",
            },
            {
                name: "JY-movie答辩相关",
                url: completeUrl("/👨🏼‍💻个人项目/🎦JY-movie/JY-movie答辩相关"),
                image: "../components/lists/speech.png",
                bdcolor: "#F16051",
                bgcolor: "#FDBF5E",
            },
        ],
    },
    {
        title: "🎵网易云音乐",
        items:[
            {
                name: "待完成",
                url: completeUrl("/👨🏼‍💻个人项目/🎵网易云音乐/待完成"),
                image: "../components/lists/home-todo.png",
                bdcolor: "#FF5151",
                bgcolor: "#F98272",
            },
        ]
    },
    {
        title: "💴基于vue+springboot的资产管理系统",
        items: [
            {
                name: "第1天---前端",
                url: completeUrl(
                    "/👨🏼‍💻个人项目/💴基于vue+springboot的资产管理系统/第1天---前端"
                ),
                image: "../components/lists/DAYS-01.png",
                bdcolor: "#0A5ECC",
                bgcolor: "#0A9E99",
            },
            {
                name: "第2天_1---若依",
                url: completeUrl(
                    "/👨🏼‍💻个人项目/💴基于vue+springboot的资产管理系统/第2天_1---若依"
                ),
                image: "../components/lists/DAYS-02.png",
                bdcolor: "#D4237A",
                bgcolor: "#ff6699",
            },
            {
                name: "第2天_2---项目速成攻略",
                url: completeUrl(
                    "/👨🏼‍💻个人项目/💴基于vue+springboot的资产管理系统/第2天_2---项目速成攻略"
                ),
                image: "../components/lists/DAYS-02.png",
                bdcolor: "#D4237A",
                bgcolor: "#ff6699",
            },
            {
                name: "第3天---spring security",
                url: completeUrl(
                    "/👨🏼‍💻个人项目/💴基于vue+springboot的资产管理系统/第3天---spring security"
                ),
                image: "../components/lists/DAYS-03.png",
                bdcolor: "#13227A",
                bgcolor: "#0A5ECC",
            },
            {
                name: "第4天---智慧物业管理系统",
                url: completeUrl(
                    "/👨🏼‍💻个人项目/💴基于vue+springboot的资产管理系统/第4天---智慧物业管理系统"
                ),
                image: "../components/lists/DAYS-04.png",
                bdcolor: "#FDBF5E",
                bgcolor: "#F4EA2A",
            },
        ]
    }
];
