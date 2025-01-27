import type { listdata } from "./lists";

// const baseUrl = "/RyanJoy-s_Web/📒笔记";
const baseUrl = "/📒笔记";

function completeUrl(path: string): string {
    return `${baseUrl}${path}`;
}

export const tech_skills: listdata[] = [
    {
        "title": "🌵Git",
        "items": [
            {
                "name": "Git学习",
                "url": completeUrl("/🖥️专业技能/🌵Git/Git学习"),
                "image": "../components/lists/git.png",
                "bdcolor": "#E64A19",
                "bgcolor": "#E68933",
            },
            {
                "name": "如何规范Git_Commit？",
                "url": completeUrl("/🖥️专业技能/🌵Git/如何规范Git_Commit？"),
                "image": "../components/lists/commit.png",
                "bdcolor": "#009688",
                "bgcolor": "#00BBBB",
            },
        ]
    },
    {
        title: '💈CSS',
        items: [
            {
                "name": "CSS2",
                "url": completeUrl("/🖥️专业技能/💈CSS/CSS2"),
                "image": "../components/lists/CSS.png",
                "bdcolor": "#ffcc00",
                "bgcolor": "#ffdd33",
            },
        ]
    },
    {
        title: '📄HTML',
        items: [
            {
                "name": "HTML4",
                "url": completeUrl("/🖥️专业技能/📄HTML/HTML4"),
                "image": "../components/lists/icon_html.png",
                "bdcolor": "#00B3EB",
                "bgcolor": "#AAEFFF",
            },
        ]
    },
    {
        title: '🔧VUE',
        items: [
            {
                "name": "VUE",
                "url": completeUrl("/🖥️专业技能/🔧VUE/VUE"),
                "image": "../components/lists/Vue.png",
                "bdcolor": "#41B883",
                "bgcolor": "#41DD33",
            },
        ]
    }
]
