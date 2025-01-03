//旧侧边栏配置代码

// //archive侧边栏
// function sidebar_archive(): DefaultTheme.SidebarItem[] {
// return [
//     { text: '暂时没有内容', link: '', }
// ]
// }

// //error fix
// function sidebar_error_fix(): DefaultTheme.SidebarItem[] {
// return [
//     //相对路径，相对rollup.md的路径
//     { text: '🔙BACK TO MAIN DIRECTORY', link: '../../../../' },
//     { text: '———————————————', },
//     { text: 'Error: Cannot find module \'@rollup/rollup-win32-x64-msvc\'', link: '/rollup', }
// ]
// }

// //about_me侧边栏
// function sidebar_about_me(): DefaultTheme.SidebarItem[] {
// return [
//     { text: '📱Reach Me', link: '/联系我', },
// ]
// }

// //blog侧边栏
// function sidebar_blog(): DefaultTheme.SidebarItem[] {
// return [
//     // 第一级
//     {
//         text: '📂Life Skills',
//         collapsed: false,
//         items: [
//             {
//                 text: '🛒Shopping',
//                 collapsed: true,
//                 items: [
//                     { text: '7000元笔记本电脑选购指北', link: '/life_skills/shopping/7000￥价位笔记本电脑选购指北.md', }
//                 ]
//             },
//         ]
//     },

//     {
//         text: '📂Project',
//         collapsed: false,
//         items: [
//             {
//                 text: '💸基于Springboot的资产管理系统',
//                 collapsed: true,
//                 items: [
//                     { text: '1.前端', link: '/project/基于vue+springboot的资产管理系统/第1天---前端', },
//                     { text: '2-1.若依——低代码开发平台', link: '', },
//                     { text: '2-2.项目速成攻略', link: '/project/基于vue+springboot的资产管理系统/第2天_2---项目速成攻略', },
//                     { text: '3.Sping Security', link: '', },
//                     { text: '4.智慧物业管理系统', link: '/project/基于vue+springboot的资产管理系统/第4天---智慧物业管理系统', },
//                 ]
//             },
//             {
//                 text: '🎬JY-movie',
//                 collapsed: true,
//                 items: [
//                     { text: 'README.md文档', link: '/project/JY-movie/jy-movie' },
//                     { text: '毕业答辩相关', link: '/project/JY-movie/JY-movie答辩相关' },
//                 ]
//             },
//             {
//                 text: '🏢RyanJoy\'s Web',
//                 collapsed: true,
//                 items: [
//                     { text: '目前还是空', }
//                 ]
//             },
//             {
//                 text: '🚀Starship Customize',
//                 collapsed: true,
//                 items: [
//                     { text: 'README.md文档', link: '/project/Starship_customize/starship_custom', },
//                 ]
//             },
//             {
//                 text: '🎵Cloud Music个人实现',
//                 collapsed: true,
//                 items: [
//                     // todo:完成cloud music的内容
//                     { text: '暂时为空' },
//                 ]
//             },
//         ]
//     },

//     {
//         text: '📂Reflection & Summary',
//         collapsed: false,
//         items: [
//             {
//                 text: '🆙个人成长',
//                 collapsed: true,
//                 items: [
//                     { text: '关于做好Read it later的重要性', link: '/reflection&summary/个人成长/关于做好Read_it_later的重要性' },
//                 ]
//             },
//             {
//                 text: '👩‍❤️‍👨感情',
//                 collapsed: true,
//                 items: [
//                     { text: '自我分析', link: '/reflection&summary/感情/自我分析' },
//                     { text: '放下感情还是提高自己？', link: '/reflection&summary/感情/放下感情还是提高自己？' },
//                 ]
//             },
//             {
//                 text: '👨‍🎓考研',
//                 collapsed: true,
//                 items: [
//                     { text: '动力鸡汤', link: '/reflection&summary/考研/动力鸡汤' },
//                 ]
//             }
//         ]
//     },

//     {
//         text: '📂Technical Stack',
//         collapsed: false,
//         items: [
//             {
//                 // 第二级
//                 text: '📑个人Blog搭建指北',
//                 collapsed: true,
//                 items: [
//                     { text: '个人博客系统搭建最优解', link: '/tech_skills/Blog/个人博客系统搭建最优解', },
//                     { text: 'Blog搭建过程中的排坑指北', link: '/tech_skills/Blog/error_fix/' },
//                 ]
//             },
//             {
//                 text: '📕CSS学习笔记',
//                 collapsed: true,
//                 items: [
//                     { text: 'CSS2笔记', link: '/tech_skills/CSS/CSS2', },
//                 ]
//             },
//             {
//                 text: '📗HTML学习笔记',
//                 collapsed: true,
//                 items: [
//                     { text: 'HTML4笔记', link: '/tech_skills/HTML/HTML4', },
//                 ]
//             },
//             {
//                 text: '📘SpringBoot学习笔记',
//                 collapsed: true,
//                 items: [
//                     { text: '目前还是空', },
//                 ]
//             },
//             {
//                 text: '📙Vue学习笔记',
//                 collapsed: true,
//                 items: [
//                     { text: 'VUE笔记', link: '/tech_skills/VUE/VUE' },
//                 ]
//             },
//         ]
//     },

//     {
//         text: '📂Tools',
//         collapsed: false,
//         items: [
//             {
//                 text: '🌵Git-代码版本控制',
//                 collapsed: true,
//                 items: [
//                     { text: '如何规范commit？', link: '/tools/Git/如何规范Git_Commit？', },
//                     { text: 'Git使用', link: '/tools/Git/git使用', },
//                 ]
//             },
//             {
//                 text: '⌨️Powershell-新一代终端',
//                 collapsed: true,
//                 items: [
//                     { text: 'Powershell使用笔记', link: '/tools/Powershell/powershell' },
//                 ]
//             },
//             {
//                 text: '👨‍💻VScode',
//                 collapsed: true,
//                 items: [
//                     {
//                         text: '🔌插件——我在用什么？',
//                         collapsed: true,
//                         items: [
//                             {
//                                 text: 'Todo Tree',
//                                 link: '/tools/VSCode/插件/todo_tree',
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     }

// ]
// }