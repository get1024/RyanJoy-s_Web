import{_ as t,c as e,I as s,aq as p,l as a,a as h,o as k,D as i}from"./chunks/framework.B5CrngwD.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"blog/tech_skills/Terminal/powershell.md","filePath":"blog/tech_skills/Terminal/powershell.md","lastUpdated":1714586826000}'),r={name:"blog/tech_skills/Terminal/powershell.md"},o=p(`<ul><li>快捷键</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#呼出powershell窗口</span></span>
<span class="line"><span>win+R：wt.exe</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#呼出下拉终端</span></span>
<span class="line"><span>win+\`</span></span></code></pre></div><h2 id="端口相关" tabindex="-1">端口相关 <a class="header-anchor" href="#端口相关" aria-label="Permalink to &quot;端口相关&quot;">​</a></h2><ul><li>查询置顶 <code>port</code> 并释放</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#查询置顶端口占用信息</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> netstat -ano </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> findstr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [port] </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">链接类型</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      源端口</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              目标端口</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            链接状态</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        PID</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  TCP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    127.0.0.1:7897</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     127.0.0.1:[port]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     FIN_WAIT_2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      [PID]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  TCP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    127.0.0.1:[port]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   127.0.0.1:7897</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       CLOSE_WAIT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      [PID]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#根据PID查询所占用端口号的进程</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tasklist </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> findstr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [PID]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#根据PID结束所占用端口号的进程</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> taskkill -PID [PID] -F</span></span></code></pre></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>`,6),d=a("h2",{id:"file-history",tabindex:"-1"},[h("File History "),a("a",{class:"header-anchor",href:"#file-history","aria-label":'Permalink to "File History"'},"​")],-1);function c(g,F,E,y,_,C){const n=i("NolebaseGitContributors"),l=i("NolebaseGitChangelog");return k(),e("div",null,[o,s(n),d,s(l)])}const m=t(r,[["render",c]]);export{b as __pageData,m as default};