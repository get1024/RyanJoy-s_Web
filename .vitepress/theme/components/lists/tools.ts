import type { listdata } from "./lists";

// const baseUrl = "/RyanJoy-s_Web/📒笔记";
const baseUrl = "/📒笔记";

function completeUrl(path: string): string {
    return `${baseUrl}${path}`;
}

export const tools: listdata[] = [
    {
        "title": "📡科学上网",
        items: [
            {
                "name": "飞机场汇总➕对比",
                "url": completeUrl("/🛠️实用工具/📡科学上网/飞机场汇总➕对比"),
                "image": "../components/lists/plane.png",
                "bdcolor": "#3AD0F9",
                "bgcolor": "#EBEBEB",
            },
        ]
    },
    {
        title: "🔳Powershell",
        items: [
            {
                "name": "powershell",
                "url": completeUrl("/🛠️实用工具/🔳Powershell/powershell"),
                "image": "../components/lists/powershell.png",
                "bdcolor": "#497CE3",
                "bgcolor": "#3AD0F9",
            },
            {
                "name": "配置starship美化",
                "url": completeUrl("/🛠️实用工具/🔳Powershell/配置starship美化"),
                "image": "../components/lists/starship.png",
                "bdcolor": "#DD0B78",
                "bgcolor": "#DD4F33",
            },
        ]
    },
    {
        title: "🛡️VSCode",
        items: [
            {
                "name": "todo_tree",
                "url": completeUrl("/🛠️实用工具/🛡️VSCode/🔌插件/todo_tree"),
                "image": "../components/lists/tree.png",
                "bdcolor": "#1CA538",
                "bgcolor": "#65320B",
            },
        ]
    }
]