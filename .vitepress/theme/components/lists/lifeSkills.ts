import type { listdata } from "./lists";

const baseUrl = "/RyanJoy-s_Web/📒笔记";

function completeUrl(path: string): string {
    return `${baseUrl}${path}`;
}

export const lifeSkills: listdata[] = [
    {
        "title": "🛒购物",
        "items": [
            {
                "name": "7000￥价位笔记本电脑选购指北",
                "url": completeUrl("/🏙️生活技巧/🛒购物/7000￥价位笔记本电脑选购指北"),
                "image": "../components/lists/computer.png",
                "bdcolor": "rgb(239,150, 47)",
                "bgcolor": "rgb(244,164, 23)",
            },
            {
                "name": "衣物挑选——个人向",
                "url": completeUrl("/🏙️生活技巧/🛒购物/衣物挑选——个人向"),
                "image": "../components/lists/cloth.png",
                "bdcolor": "rgb( 61,116,196)",
                "bgcolor": "rgb(100,200,255)",
            },
        ]
    },
];