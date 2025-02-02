import type { listdata } from "./lists";

// const baseUrl = "/RyanJoy-s_Web/📒文章";
const baseUrl = "/📒文章";

function completeUrl(path: string): string {
    return `${baseUrl}${path}`;
}

export const os: listdata[] = [
    {
    "title": "💠Windows11",
    "items": [
        {
            "name": "Microsoft Todo无法同步问题",
            "url": completeUrl("/💻操作系统/💠Windows11/Microsoft Todo无法同步问题"),
            "image": "../components/lists/todo.png",
            "bdcolor": "#185ABD",
            "bgcolor": "#41A5EE",
        },
    ]
},
]
