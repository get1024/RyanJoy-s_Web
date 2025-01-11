---
title: Powershell 笔记
createAt: 2024-04-19 20:13:26
updateAt: 2025-01-11 22:44:40
---
# {{$frontmatter.title}}

- 快捷键
```sh
#呼出powershell窗口
win+R：wt.exe

#呼出下拉终端
win+`
```
## 端口相关
- 查询置顶 `port` 并释放
```sh
#查询置顶端口占用信息
> netstat -ano | findstr [port] 
链接类型      源端口              目标端口            链接状态        PID
  TCP    127.0.0.1:7897     127.0.0.1:[port]     FIN_WAIT_2      [PID]
  TCP    127.0.0.1:[port]   127.0.0.1:7897       CLOSE_WAIT      [PID]

#根据PID查询所占用端口号的进程
> tasklist | findstr [PID]

#根据PID结束所占用端口号的进程
> taskkill -PID [PID] -F
```