---
title: Powershell配置和美化方案
createAt: 2024-04-24 18:03:36
updateAt: 2025-01-31 09:58:47
---

# Powershell配置和美化方案

## 前言

`Terminal` 和 `命令行工具` 相信大家都不陌生，但是作为计算机相关专业的学生/科研人员/工作人员，一定了解到 `Powershell`。

但是原生 `Powershell` 在语法高亮、代码补全、样式美化方面并不能完全满足大家个性化的需求，这里便提出了 `Powershell` 配置和美化方案。

先看配置美化完成的效果

- Windows 终端窗口

![Terminal](assets/1-powershell配置和美化方案/Terminal.png)

- VSCode 自带终端

![VSCode-Terminal](assets/1-powershell配置和美化方案/VSCode-Terminal.png)

是不是比原生的好看呢？接下来看看具体如何配置吧！如果你只是想复刻我的样式，请直接跳转这里： [复刻我的配置](#复刻我的配置)

## 安装

### Windows Terminal

对于 <span class="marker-evy">**Windows 11**</span> 系统已经默认用 Windows Terminal 取代了原本的 Powershell。<span class="marker-underline">「注：此处的 Powershell 并不是我们本文档所关注的 Powershell 7。」</span>Windows 11 用户可以 `跳过安装` 这一步，直接单击键盘上的 `Windows 徽标键` ，在弹出窗口搜索🔍 `Windows PowerShell` ，单击打开。

![search-powershell](assets/1-powershell配置和美化方案/search-powershell.png)

对于 <span class="marker-evy">**Windows 10**</span>，首先需要到 Microsoft store 安装 [Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701?rtc=1&hl=zh-CN&gl=CN)（点击此链接一键安装）。安装成功后，单击键盘上的 `Windows 徽标键` ，在弹出窗口搜索🔍 `Windows Terminal` ，单击打开。

![search-Terminal](assets/1-powershell配置和美化方案/search-Terminal.png)

::: tip 作者说

后文打开 `Windows Terminal` 或 `Windows PowerShell` 都是同样的操作，不再赘述。

:::

### Powershell 7

在 `Windows Terminal` (对于 Windows 11 用户) <span class="marker-evy">或</span> `Windows PowerShell` (对于 Windows 10 用户) 中，复制以下命令运行。

```sh [powershell]
winget install --id Microsoft.PowerShell --source winget
```

这样默认是安装在 `C:\` 盘中，我们也推荐如此。如果你实在不想这么做，可以通过追加参数 `-i` 打开交互式安装。

耐心等待后显示安装成功。

如果你有更多需求，请查看官方文档：[在 Windows 上安装 PowerShell](https://learn.microsoft.com/zh-cn/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.4#install-powershell-using-winget-recommended)

## 配置

### 设置默认

- 打开 `Windows Terminal` 设置页。

	可以按如下步骤操作，或直接在 `Windows Terminal` 窗口按 `ctrl+,` 快捷呼出。

	![config-default](assets/1-powershell配置和美化方案/config-default.png)

	![config-default2](assets/1-powershell配置和美化方案/config-default2.png)

- 新建空配置文件

	![config-default3](assets/1-powershell配置和美化方案/config-default3.png)

- 设置配置项

	如果你是安装到 `默认目录` ，那么照抄图中配置即可。如果你是安装到 `自定义目录` ，那你一定知道你在干什么，所以按照你的个性化配置填写下列配置即可。

	![config-default4](assets/1-powershell配置和美化方案/config-default4.png)

- 设置默认启动 Powershell 7。选中刚刚创建的配置文件。

	![config-default5](assets/1-powershell配置和美化方案/config-default5.png)

- 验证

	打开 `Windows Terminal` ，发现默认打开的即是 `Powershell7` 。

### 配置插件和美化

- 安装 `Oh-my-posh`

	在 `Powershell` 中运行以下命令，耐心等待安装成功

	```sh [powershell]
	winget install JanDeDobbeleer.OhMyPosh -s winget
	```

- 安装字体

	```sh [powershell]
	oh-my-posh font install meslo
	```

	安装字体后，您需要配置 `Windows 终端` 才能使用它。这可以通过修改 Windows 终端设置轻松完成（默认快捷方式： `CTRL + SHIFT + ,` ）。在您的 `settings.json` 文件中，在 `profiles` 中的 `defaults` 属性下添加 `font.face` 属性：

	```json [setting.json]
	{
	    "profiles":
	    {
	        "defaults":
	        {
	            "font":
	            {
	                "face": "MesloLGM Nerd Font"
	            }
	        }
	    }
	}
	```

- 设置 Powershell 7 外观配置

	![config-style](assets/1-powershell配置和美化方案/config-style.png)

	![config-style2](assets/1-powershell配置和美化方案/config-style2.png)

	只需设置标识的几项，剩余配置项保持默认、或者凭你喜好自由设置。

- 启用 `Oh-my-posh` 主题

	在 `Powershell` 中运行，显示所有预设主题，挑选你喜欢的主题。

	```sh [powershell]
	Get-PoshThemes
	```

	![Get-PoshThemes](assets/1-powershell配置和美化方案/Get-PoshThemes.gif)

	如果你觉得终端观看各种主题不太清楚，可以到官方文档 [Themes | Oh My Posh](https://ohmyposh.dev/docs/themes) 查看。

	挑选你喜欢的主题，并记住主题名字，这里我们以 `neko` 为例。

	终端运行：

	```sh [powershell]
	code $profile
	```

	在弹出窗口添加配置：

	```ps1 [Microsoft.PowerShell_profile.ps1]
	oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH/neko.omp.json" | Invoke-Expression
	```

	重新返回终端便可查看主题已经变为 `neko` 对应主题，设置其他主题也同理。

如果你对配置教程有更加深刻的需求，请访问官方文档 [Introduction \| Oh My Posh](https://ohmyposh.dev/docs)。

## 复刻我的配置

这里提供几个关键文件

::: code-group

```ps1 [Microsoft.PowerShell_profile.ps1]
# 引入 posh-git
Import-Module posh-git
# 引入 ps-read-line
Import-Module PSReadLine
# 退出时保存历史
Set-PSReadLineOption -HistorySaveStyle SaveAtExit
# 设置预测文本来源为历史记录
Set-PSReadLineOption -PredictionSource History
# 每次回溯输入历史，光标定位于输入内容末尾
Set-PSReadLineOption -HistorySearchCursorMovesToEnd
# 设置预测文本的展示样式为列表视图（另一选择：InlineView）
Set-PSReadLineOption -PredictionViewStyle ListView
# 禁用命令行输入时的铃声提醒，并改为光标提醒
Set-PSReadLineOption -BellStyle Visual
## 设置 Tab 键补全
Set-PSReadlineKeyHandler -Key Tab -Function Complete
## 设置 Ctrl+D 为菜单补全和 Intellisense
Set-PSReadLineKeyHandler -Key "Ctrl+d" -Function MenuComplete
## 设置 Ctrl+Z 为撤销
Set-PSReadLineKeyHandler -Key "Ctrl+z" -Function Undo
## 设置向上键为后向搜索历史记录
Set-PSReadLineKeyHandler -Key UpArrow -Function HistorySearchBackward
## 设置向下键为前向搜索历史记录
Set-PSReadLineKeyHandler -Key DownArrow -Function HistorySearchForward

oh-my-posh init pwsh | Invoke-Expression

oh-my-posh init pwsh --config 'C:\Users\RJY\AppData\Local\Programs\oh-my-posh\themes\ryanjoy.omp.json' | Invoke-Expression
```

```json [ryanjoy.omp.json]
// C:\Users\RJY\AppData\Local\Programs\oh-my-posh\themes\ryanjoy.omp.json
{
    "$schema": "https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/schema.json",
    "blocks": [
        {
            "alignment": "left",
            "segments": [
                {
                    "foreground": "#45F1C2",
                    "style": "plain",
                    "template": "\u256d\u2500",
                    "type": "text"
                },
                {
                    "foreground": "#45F1C2",
                    "style": "plain",
                    "template": "\ueb99 RyanJoy",
                    "type": "session"
                },
                {
                    "foreground": "#bc93ff",
                    "properties": {
                        "time_format": "<#ffffff>on</> 02/01/2006 <#ffffff>at</> 15:04"
                    },
                    "style": "diamond",
                    "template": " {{ .CurrentDate | date .Format }} ",
                    "type": "time"
                }
            ],
            "type": "prompt"
        },
        {
            "alignment": "left",
            "newline": true,
            "segments": [
                {
                    "foreground": "#45F1C2",
                    "style": "plain",
                    "template": "\u251c\u2500",
                    "type": "text"
                },
                {
                    "foreground": "#0CA0D8",
                    "properties": {
                        "folder_separator_icon": "/",
                        "style": "full"
                    },
                    "style": "plain",
                    "template": "<#ef5350>In</> \uf07b {{ .Path }} ",
                    "type": "path"
                },
                {
                    "foreground": "#14A5AE",
                    "powerline_symbol": "\ue0b0",
                    "properties": {
                        "fetch_stash_count": true,
                        "fetch_upstream_icon": true
                    },
                    "style": "plain",
                    "template": "<#ef5350>on branch</> {{ .UpstreamIcon }}{{ .HEAD }}{{ if gt .StashCount 0 }} \ueb4b {{ .StashCount }}{{ end }}{{ if .BranchStatus }} {{ .BranchStatus }}{{ end }}{{ if .Working.Changed }} \uf044 {{ .Working.String }}{{ end }}{{ if and (.Working.Changed) (.Staging.Changed) }} |{{ end }}{{ if .Staging.Changed }} \uf046 {{ .Staging.String }}{{ end }}",
                    "type": "git"
                }
            ],
            "type": "prompt"
        },
        {
            "alignment": "left",
            "newline": true,
            "segments": [
                {
                    "foreground": "#45F1C2",
                    "style": "plain",
                    "template": "\u2570\u2500",
                    "type": "text"
                },
                {
                    "foreground": "#ffffff",
                    "foreground_templates": [
                        "{{ if gt .Code 0 }}#ef5350{{ end }}"
                    ],
                    "properties": {
                        "always_enabled": true
                    },
                    "style": "plain",
                    "template": "\ue285\ueab6 ",
                    "type": "status"
                }
            ],
            "type": "prompt"
        }
    ],
    "version": 3
}
```

```json [setting.json]
// ctrl+Shift+,
{
    "$help": "https://aka.ms/terminal-documentation",
    "$schema": "https://aka.ms/terminal-profiles-schema",
    "actions": 
    [
        {
            "command": "paste",
            "id": "User.paste",
            "keys": "ctrl+v"
        },
        {
            "command": 
            {
                "action": "copy",
                "singleLine": false
            },
            "id": "User.copy.644BA8F2",
            "keys": "ctrl+c"
        },
        {
            "command": "find",
            "id": "User.find",
            "keys": "ctrl+shift+f"
        },
        {
            "command": 
            {
                "action": "splitPane",
                "split": "auto",
                "splitMode": "duplicate"
            },
            "id": "User.splitPane.A6751878",
            "keys": "alt+shift+d"
        }
    ],
    "alwaysShowTabs": true,
    "centerOnLaunch": true,
    "copyFormatting": "none",
    "copyOnSelect": false,
    "defaultProfile": "{18413164-90ab-4dbd-8011-8a1c2c70638b}",
    "focusFollowMouse": true,
    "initialCols": 90,
    "initialRows": 25,
    "language": "zh-Hans",
    "launchMode": "default",
    "newTabMenu": 
    [
        {
            "type": "remainingProfiles"
        }
    ],
    "profiles": 
    {
        "defaults": 
        {
            "colorScheme": "Homebrew",
            "experimental.retroTerminalEffect": false,
            "font": 
            {
                "face": "MesloLGM Nerd Font",
                "size": 12
            },
            "intenseTextStyle": "all",
            "opacity": 55,
            "startingDirectory": "%USERPROFILE%",
            "useAcrylic": true
        },
        "list": 
        [
            {
                "font": 
                {
                    "face": "Cascadia Code"
                },
                "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
                "hidden": false,
                "name": "Windows PowerShell"
            },
            {
                "adjustIndistinguishableColors": "indexed",
                "colorScheme": "One Half Dark",
                "elevate": true,
                "font": 
                {
                    "face": "FiraCode Nerd Font Mono Retina",
                    "size": 12
                },
                "guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
                "hidden": false,
                "name": "\u547d\u4ee4\u63d0\u793a\u7b26",
                "opacity": 42
            },
            {
                "guid": "{b453ae62-4e3d-5e58-b989-0a998ec441b8}",
                "hidden": false,
                "name": "Azure Cloud Shell",
                "source": "Windows.Terminal.Azure"
            },
            {
                "guid": "{16208362-94fc-5b1f-a491-5b2624d5ab56}",
                "hidden": true,
                "name": "Visual Studio Debug Console",
                "source": "VSDebugConsole"
            },
            {
                "adjustIndistinguishableColors": "never",
                "antialiasingMode": "cleartype",
                "backgroundImage": null,
                "backgroundImageOpacity": 0.49,
                "backgroundImageStretchMode": "none",
                "colorScheme": "Homebrew",
                "commandline": "C:\\Program Files\\PowerShell\\7\\pwsh.exe",
                "font": 
                {
                    "face": "MesloLGL Nerd Font",
                    "size": 12,
                    "weight": "semi-bold"
                },
                "guid": "{18413164-90ab-4dbd-8011-8a1c2c70638b}",
                "hidden": false,
                "icon": "C:\\Program Files\\PowerShell\\7\\assets\\Powershell_black.ico",
                "name": "Powershell7",
                "opacity": 100,
                "scrollbarState": "hidden",
                "showMarksOnScrollbar": true,
                "tabTitle": "Powershell7",
                "useAcrylic": false
            }
        ]
    },
    "schemes": 
    [
        {
            "name": "Homebrew",
            "background": "#283033",
            "black": "#000000",
            "blue": "#6666E9",
            "brightBlack": "#666666",
            "brightBlue": "#0000FF",
            "brightCyan": "#00E5E5",
            "brightGreen": "#00D900",
            "brightPurple": "#E500E5",
            "brightRed": "#E50000",
            "brightWhite": "#E5E5E5",
            "brightYellow": "#E5E500",
            "cursorColor": "#FFFFFF",
            "cyan": "#00A6B2",
            "foreground": "#00FF00",
            "green": "#00A600",
            "name": "Homebrew",
            "purple": "#B200B2",
            "red": "#FC5275",
            "selectionBackground": "#FFFFFF",
            "white": "#BFBFBF",
            "yellow": "#999900"
        },
        {
            "name": "HomebrewCus",
            "background": "#283033",
            "black": "#000000",
            "blue": "#6666E9",
            "brightBlack": "#666666",
            "brightBlue": "#0E5CEE",
            "brightCyan": "#00E5E5",
            "brightGreen": "#00D900",
            "brightPurple": "#E500E5",
            "brightRed": "#E50000",
            "brightWhite": "#E5E5E5",
            "brightYellow": "#E5E500",
            "cursorColor": "#FFFFFF",
            "cyan": "#00A6B2",
            "foreground": "#00FF00",
            "green": "#00A600",
            "name": "HomebrewCus",
            "purple": "#B200B2",
            "red": "#FC5275",
            "selectionBackground": "#FFFFFF",
            "white": "#BFBFBF",
            "yellow": "#999900"
        }
    ],
    "tabWidthMode": "titleLength",
    "theme": "light",
    "themes": [],
    "useAcrylicInTabRow": true
}
```

:::