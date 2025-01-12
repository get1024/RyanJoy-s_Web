---
title: git使用
createAt: 2024-03-26 10:55:46
updateAt: 2025-01-12 16:10:11
tags:
  - git
---
# {{$frontmatter.title}}

## Git 常用命令

### git commit

Git 仓库中的提交记录保存的是项目的目录下**所有文件的快照**，就像是把整个目录复制，然后再粘贴一样，但比复制粘贴优雅许多。

Git 希望提交记录尽可能地**轻量**，因此在你每次进行提交时，它并不会盲目地复制整个目录。条件允许的情况下，它会将当前版本与仓库中的上一个版本进行对比，并把所有的差异打包到一起作为一个提交记录。这也就是**历史记录**存在的原因，同样也是为什么大多数提交记录的上面都有 parent 节点的原因。对于项目组的成员来说，维护提交历史对大家都有好处。

如此使用
```shell [powershell]
git commit -m "提交描述"
```

### git branch

Git 的分支也非常轻量。它们只是简单地指向**某个提交纪录** —— 仅此而已。所以许多 Git 使用者传颂：**早建分支！多用分支！**

这是因为即使创建再多的分支也*不会造成储存或内存上的开销*，并且按逻辑分解工作到不同的分支要比维护那些特别臃肿的分支简单多了。只要记住使用分支其实就相当于在说：“我想基于这个提交以及它所有的 parent 提交进行新的工作。”

如此实用
```sh [powershell]
```

```sh
克隆项目
git clone [项目ssh地址]

更新项目
git add .
git commit -m [注释]
git status
git pull origin main
git push origin main
```

## Git 命令别名

```sh {2}
设置别名命令
git config --global alias.[别名] '[原git命令]'

个人命令别名设置
git sb --> git status -sb
git cm "[message]" --> git commit -m "[message]"
git pl  --> git pull origin main
git pu --> git push origin main
```