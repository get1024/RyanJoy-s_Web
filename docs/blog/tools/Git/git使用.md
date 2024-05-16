---
Created at: 2024年03月26日 10:55:46
Last edited at: 2024年05月07日 23:52:01
title: Git使用
---
# {{$frontmatter.title}}

<div class="flex gap-[4px] items-center" style="color:gray;font-size:14px;">
  👁️‍🗨️阅读量: <span id="busuanzi_container_page_pv">
    <span id="busuanzi_value_page_pv" />
  </span>
</div>

## Git 命令别名
```sh:line-numbers {2}
设置别名命令
git config --global alias.[别名] '[原git命令]'

个人命令别名设置
git sb --> git status -sb
git cm "[message]" --> git commit -m "[message]"
git p  --> git pull origin main
git pu --> git push origin main
```
## Git 常用命令
```sh:line-numbers
克隆项目
git clone [项目ssh地址]

更新项目
git add .
git commit -m [注释]
git status
git pull origin main
git push origin main
```