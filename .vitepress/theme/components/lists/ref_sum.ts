import type { listdata } from "./lists";

const baseUrl = "/RyanJoy-s_Web/📒笔记";

function completeUrl(path: string): string {
    return `${baseUrl}${path}`;
}

export const ref_sum: listdata[] = [
    {
        "title": "💯考研",
        "items": [
            {
                "name": "动力鸡汤",
                "url": completeUrl("/🤔反思和总结/💯考研/动力鸡汤"),
                "image": "../components/lists/jitang.png",
                "bdcolor": "#FFAD53",
                "bgcolor": "#ffdd33",
            },
            {
                "name": "英二学习经验",
                "url": completeUrl("/🤔反思和总结/💯考研/英二学习经验"),
                "image": "../components/lists/english.png",
                "bdcolor": "#F9C933",
                "bgcolor": "#ffdd33",
            },
        ]
    },
    {
        title: "📈个人成长",
        items: [
            {
                "name": "一些鸡汤句",
                "url": completeUrl("/🤔反思和总结/📈个人成长/一些鸡汤句"),
                "image": "../components/lists/Motivation.png",
                "bdcolor": "#60BAE2",
                "bgcolor": "#F9D0B4",
            },
            {
                "name": "关于做好Read_it_later的重要性",
                "url": completeUrl("/🤔反思和总结/📈个人成长/关于做好Read_it_later的重要性"),
                "image": "../components/lists/read.png",
                "bdcolor": "#FF6062",
                "bgcolor": "#FF8A8C",
            },
        ]
    },
    {
        title: "🥰情感",
        items:[
            {
                "name": "放下感情还是提高自己？",
                "url": completeUrl("/🤔反思和总结/🥰情感/放下感情还是提高自己？"),
                "image": "../components/lists/break.png",
                "bdcolor": "#FFAB00",
                "bgcolor": "#FFECB3",
            },
            {
                "name": "自我分析",
                "url": completeUrl("/🤔反思和总结/🥰情感/自我分析"),
                "image": "../components/lists/analyze.png",
                "bdcolor": "#01C3A3",
                "bgcolor": "#D8F4EE",
            },
        ]
    }
]
