---
Created at: 2024年05月18日 15:28:26
Last edited at: 2024年05月18日 15:30:08
title: Todo Tree🌳
---
# {{$frontmatter.title}}
<div class="flex gap-[4px] items-center" style="color:gray;font-size:14px;">
  👁️‍🗨️阅读量: <span id="busuanzi_container_page_pv">
    <span id="busuanzi_value_page_pv" />
  </span>
</div>

## 安装
插件搜索`Todo Tree`，选择下图所示。
![todo tree](/blog/tools/vscode/插件/todo_tree.png)
## 自定义进行配置
### 进入插件设置界面
![setting1](/blog/tools/vscode/插件/todotree_setting1.png)

### 打开setting.json文件
![setting2](/blog/tools/vscode/插件/todotree_setting2.png)

### 配置自定义样式
> 以下是我的个人配置，在`setting.json`文件中写入以下内容：
::: code-group
```json
//todo-tree settings
    "todo-tree.regex.regex": "((//|#|<!--|;|/\\*|^)\\s*($TAGS):|^\\s*- \\[ \\])",
    "todo-tree.general.tags": [
        "TODO",
        "BUG"
    ],
    "todo-tree.regex.regexCaseSensitive": false,
    "todo-tree.tree.showInExplorer": true,
    "todo-tree.highlights.defaultHighlight": {
        "foreground": "white",
        "background": "Orange",
        "icon": "checklist",
        "rulerColour": "Orange",
        "type": "tag",
        "iconColour": "Orange"
    },
    "todo-tree.highlights.customHighlight": {
        "BUG": {
            "background": "green",
            "icon": "bug",
            "rulerColour": "green",
            "iconColour": "green",
            "opacity": 50,
        },
    },
```
:::

## 用法
在要使用的地方点击快捷键`ctrl+/`，即可插入注释，在其中输入**既定的字段**，即以下内容：
::: code-group
```json 
"todo-tree.general.tags": [
        "TODO", // [!code focus]
        "BUG"   // [!code focus]
    ],
```
:::

## 使用示例
![use](/blog/tools/vscode/插件/todotree_use1.png)

![use](/blog/tools/vscode/插件/todotree_use2.png)
## 效果预览
![display](/blog/tools/vscode/插件/todotree_display.png)
<hr/>

> [!TIP] 作者说
> 
> 如果您有任何配置问题，欢迎在**评论区**留言，我会尽快回复。