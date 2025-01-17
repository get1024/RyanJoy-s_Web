---
title: Git学习
createAt: 2024-03-26 10:55:46
updateAt: 2025-01-16 23:29:52
tags:
  - git
---
# Git 学习

::: tip 作者说
本文档是笔者基于对 [Learn Git Branching](https://learngitbranching.js.org/?locale=zh_CN) 的自主学习整理的补充性文档。如果有幸此文被您发现，强烈推荐结合 [Learn Git Branching](https://learngitbranching.js.org/?locale=zh_CN) 进行学习。
:::

## Git 主要

### 提交

Git 仓库中的提交记录保存的是项目的目录下**所有文件的快照**，就像是把整个目录复制，然后再粘贴一样，但比复制粘贴优雅许多。

```shell [git]
git commit -m "提交描述"
```

### 分支

Git 的分支也非常轻量。它们只是简单地指向**某个提交纪录** —— 仅此而已。所以许多 Git 使用者传颂：**早建分支！多用分支！**

#### 新建并切换分支

```sh [git]
git branch <分支名>   // 新建分支
git switch <分支名>   // 切换分支
```

#### 合并分支

```shell [git]
git merge <分支名>   // 把指定分支合并到当前操作的分支上
git rebase <分支名>  // 把当前操作的分支合并到指定分支上
```

### 在提交树上移动

#### HEAD

HEAD 是一个对当前所在分支的符号引用 —— 也就是指向你正在其基础上进行工作的提交记录。**HEAD 总是指向当前分支上最近一次提交记录**。大多数修改提交树的 Git 命令都是从改变 HEAD 的指向开始的。HEAD 通常情况下是指向分支名的（如 bugFix）。在你提交时，改变了 bugFix 的状态，这一变化通过 HEAD 变得可见。

原本情况下， `HEAD => [branch] => 提交记录`

```shell [git]
git checkout <提交记录hash值>
```

就变为 `HEAD => 提交记录` 。但也不难察觉，这种方式要求我们能够明确指出 `<提交记录hash值>` ，这不是一个轻松的活。所以就有了 相对引用。

#### 相对引用

正如上文所说，通过哈希值指定提交记录来移动 HEAD 很不方便，所以 Git 引入了相对引用。这个就很厉害了!

使用相对引用的话，你就可以从一个易于记忆的地方（比如 `bugFix` 分支或 `HEAD` ）开始操作。

相对引用非常给力，这里我介绍两个简单的用法：
- 使用 `^` 向上移动 1 个提交记录
- 使用 `~<num>` 向上移动多个提交记录，如 `~3`

```sh [git]
git checkout <分支名>^
git checkout <分支名>~<num>
```

#### 强制移动分支

相对引用最多的就是移动分支。可以直接使用 `-f` 选项让分支指向另一个提交。

```sh [git]
git branch -f <被移动分支> <HEAD/分支名>~<num>
```

这一命令会将 `被移动分支` 强制指向 `HEAD/分支名` 指向的提交记录的第 `num` 级 `parent` 提交。

#### 撤销变更

```sh [git]
git reset HEAD^  // 用于本地回滚一个版本，对远程提交无效
git revert HEAD  // 用于远程回滚。
```

我们比较常用 `git revert HEAD` ，这一命令通过新建一个 与父级提交状态相同的 提交，来覆盖本次提交。

### 整理提交记录

#### git cherry-pick

如果你想将一些提交复制到当前所在的位置（ `HEAD` ）下面的话， cherry-pick 是最直接的方式了。我个人非常喜欢 `cherry-pick` ，因为它特别简单。

```sh [git]
git cherry-pick <提交记录hash值1> <提交记录hash值2> ... <提交记录hash值3>
```

#### 交互式 rebase

与引入 [[📒笔记/🖥️专业技能/🌵Git/Git学习#相对引用|相对引用]] 的原因相同，我们有时候并不知道**提交记录 hash 值**，这时我们就可以使用 交互式 rebase。

交互式 rebase 指的是使用带参数 `--interactive` 的 rebase 命令, 简写为 `-i` 。

如果你在命令后增加了这个选项, Git 会打开一个 UI 界面并列出将要被复制到目标分支的备选提交记录，它还会显示每个提交记录的哈希值和提交说明，提交说明有助于你理解这个提交进行了哪些更改。

在实际使用时，所谓的 UI 窗口一般会在文本编辑器 —— 如 Vim —— 中打开一个文件。 

```sh [git]
git rebase -i HEAD~<num>
```

这一命令表明：将通过 UI 调整 `HEAD` 第 `<num>` 级 `parent` 提交记录 **(不包含自身)** 以下的提交记录。

### 提交的技巧

#### 技巧 1

接下来这种情况也是很常见的：你之前在 `newImage` 分支上进行了一次提交，然后又基于它创建了 `caption` 分支，然后又提交了一次。

此时你想对某个以前的提交记录进行一些小小的调整。比如设计师想修改一下 `newImage` 中图片的分辨率，尽管那个提交记录并不是最新的了。

我们可以通过下面的方法来克服困难：

- 先用 `git rebase -i HEAD~<num>` 将提交重新排序，然后把我们**想要修改的提交记录**挪到最前
- 然后用 `git commit --amend` 来进行一些小修改
- 接着再用 `git rebase -i HEAD~<num>` 来将他们调回原来的顺序
- 最后我们把 main 移到修改的最前端（详见 [[📒笔记/🖥️专业技能/🌵Git/Git学习#强制移动分支|强制移动分支]]），就大功告成啦！

#### 技巧 2

主要是通过 [[#git cherry-pick|`git cherry-pick`]] 和 [[#强制移动分支]] 进行多次提交

### Git tags

`tag` 用来永远指向某个提交记录。

```sh [git]
git tag <标签值> <提交记录hash值>or<相对引用>
```

### Git describe

```sh [git]
git describe <ref>
```

`<ref>` 是任何能被 Git 识别成提交记录的引用，如果你没有指定的话，Git 会使用你目前所在的位置（ `HEAD` ）。

它输出的结果是这样的：

`<tag>_<numCommits>_g<hash>`

`tag` 表示的是离 `ref` 最近的标签， `numCommits` 是表示这个 `ref` 与 `tag` 相差有多少个提交记录， `hash` 表示的是你所给定的 `ref` 所表示的提交记录哈希值的前几位。

当 `ref` 提交记录上有某个标签时，则只输出标签名称。

## Git 远程




## Git 命令自定义别名

```sh {2}
设置别名命令
git config --global alias.[别名] '[原git命令]'

个人命令别名设置
git sb --> git status -sb
git cm "[message]" --> git commit -m "[message]"
git pl  --> git pull origin main
git pu --> git push origin main
```