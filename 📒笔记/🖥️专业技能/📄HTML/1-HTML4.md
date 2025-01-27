---
title: HTML 4 笔记
createAt: 2024-01-15 10:01:13
updateAt: 2025-01-24 15:55:50
tags:
  - 前端
---

# HTML 4 笔记

## 一、HTML 标签

- **标签** 又叫 **元素**，是和 html 基本组成单位
- 标签名不分大小写，但推荐小写，因为小写更加规范

### 1、标签类型

- 双标签

```html:line-numbers
<body></body>
```

- 单标签

```html:line-numbers
<input>
```

### 2、标签之间关系

- **嵌套关系**：需要格式化———即 `enter` 换行＋ `tab` 缩进
- **并列关系**

### 3、标签属性

- 用于给标签提供 **附加信息**

```html:line-numbers
<marquee loop="1"></marquee>
```

- loop 即是属性名，1 是属性值
- ***标签中出现同名属性时，后写的属性会失效***
- 有些特殊属性没有属性名只有属性值，例如 ：`<input disabled>` 

## 二、HTML 基本结构

### 1、检查&查看网页源代码

- 【检查】看到的是经过浏览器“处理”后的源代码
- 【查看网页源代码】看到的是程序员编写的源代码
- 在我们日常开发中，**【检查】用的最多**

### 2、基本结构

```html:line-numbers {6}
<html>
	<head>
		<title>[自定义页签名]</title>
	</head>
	<body>
		<marquee>RyanJoy现实有点小帅</marquee>
	</body>
</html>
```

-  **注：**``<head></head>`` 中写的内容实质上不会出现在页面中，但是浏览器在渲染前会检验代码来保证整体结构正确

## 三、HTML 注释

### 1、注释写法

- `<!-- [注释内容] -->`
- **注：** 注释可以写多行，但注释符号一定不能嵌套

## 四、HTML 文档声明

### 1、H5文档声明

- 文档声明用于告诉浏览器当前网页的版本

```html:line-numbers
<!DOCTYPE html>
```

- 文档声明必须写在整个 `html` 文档第一行
- 文档声明必须写在 `<html>` 标签的外侧

## 五、HTML 字符编码

### 1、计算机对数据的操作

- 存储——对数据进行**编码**
- 读取——对数据进行**解码**
- 编码、解码会遵循一定的规范——**字符集**

### 2、常见字符集

-  **`ASCII`**：大写字母、小写字母、数字、一些符号，共计 128 个。
- **`ISO 8859-1`**：在 ASCII 基础上，扩充了一些希腊字符等，共计是 256 个。
- **`GB 2312`**：继续扩充，收录了 6763 个常用汉字、682 个字符。
- **`GBK`**：收录了的汉字和符号达到 20000+ ，支持繁体中文。
- **`UTF-8`**：包含世界上所有语言的：所有文字与符号。—— **很常用**。

### 3、具体使用

- 平时编码时，统一采用 **`utf-8`** 编码
- 为了让浏览器在渲染 `html` 文件时，不犯错误，可以通过 **`meta`** 标签配合 **`charset`** 属性指定字符编码

```html:line-numbers
<head>
	<meta charset="UTF-8"/>
</head>
```

## 六、HTML 设置语言

- 属于 [全局属性](📒笔记/🖥️专业技能/📄HTML/1-HTML4.md#_15、html-全局属性)

### 1、主要作用

- ✔️让浏览器显示对应的翻译提示
- ✔️有利于搜索引擎优化

### 2、具体写法

```html:line-numbers
<html lang="zh-CN">
```

## 七、HTML 标准结构

### 1、标准结构

- 标准结构是在 [基本结构](📒笔记/🖥️专业技能/📄HTML/1-HTML4.md#_2、基本结构) 基础上进一步完善的 **`html`** 结构，如下所示：

```html:line-numbers
<!DOCTYPE html>
<html lang="zh-CN">
	<head>
		<meta charset="UTF-8">
		<title>我是一个标题</title>
	</head>
	<body>
	
	</body>
</html>
```

### 2、用法

- 在新建的 **`html`** 文件中输入 **`!`** ，出现提示后按下 **`enter`** 键即可快速生成标准结构；
- 配置 **`VSCode`** 的内置插件 **`emmet`**，可以对生成结构的属性进行定制；
- 在存放代码的文件夹中，存放一个 **`favicon.ico`** 图片，便可以配置网站图标。

## 八、HTML 基础知识

### 1、开发者文档

- 学习 `html`，建议参考最权威官网 [MDN Web Docs](https://developer.mozilla.org/zh-CN/)

### 排版标签

| 标签名         | 标签含义                                           | 单/双标签 |
| :---------- | :--------------------------------------------- | :---- |
| `<h1>~<h6>` | 标题                                             | 双     |
| `<p>`       | 段落                                             | 双     |
| `<div>`     | 没有任何含义，只用于整体布局，<br>有利于统一管理 `<div></div>` 内部的样式 | 双     |

>[!DANGER] 注意事项
>1. `<h1>` 最好只写一个，`<h2> ~ <h6>` 可以写多个
>2. `<h1> ~ <h6>` 不能互相嵌套
>3. `<p>` 标签内部**不能写** [[📒笔记/🖥️专业技能/📄HTML/1-HTML4#4、块级元素与行内元素|块级元素]]

### 3、语义化标签

1. 概念：用特定的标签，去表达特定的含义。
2. 原则：标签的**默认效果不重要**（后期可以通过 CSS 随便控制效果），**语义最重要**！
3. 举例：对于 `<h1>` 标签，效果是文字很大（不重要），语义是网页主要内容（很重要）。
4. 优势：
	- 代码结构清晰可读性强。
	- 有利于 `SEO`（搜索引擎优化）。
	- 方便设备解析（如屏幕阅读器、盲人阅读器等）。

### 4、块级元素与行内元素

1. **块级元素**：独占一行（[排版标签](📒笔记/🖥️专业技能/📄HTML/1-HTML4.md#_2、排版标签) 都是块级元素）；
2. **行内元素**：不独占一行（例如 `input` 、`img`等）

> [!WARNING] 用法
> **块级元素**中能写块级元素和行内元素；
> **行内元素**中能写行内元素，但不能写块级元素；

### 5、文本标签

1. 用于包裹：词汇、短语等；
2. 通常**写在** [排版标签](📒笔记/🖥️专业技能/📄HTML/1-HTML4.md#_2、排版标签) **里面**；
3. 排版标签更宏观（大段的文字），文本标签更微观（词汇、短语）。
4. **文本标签通常都是行内元素**。

#### ①常用标签

| 标签名 | 标签语义 | 单/双标签 |
| ---- | ---- | ---- |
| `<em>` | 要着重阅读的内容 | 双 |
| `<strong>` | 十分重要的内容（语气强于 `em`） | 双 |
| `<span>` | 没有语义，用于包裹短语的通用容器 | 双 |

通俗解释：`<div>` 是大包装袋，`<span>` 是小包装袋

#### ②不常用标签

| 标签名               | 标签语义                                          | 单/双标签 |
| ----------------- | --------------------------------------------- | ----- |
| `<cite>`          | 作品标题（书籍、歌曲、电影、电视节目、绘画、雕塑）                     | 双     |
| `<dfn>`           | 特殊术语，或专属名词                                    | 双     |
| `<del>` 与 `<ins>` | 删除的本文【与】插入的文本                                 | 双     |
| `<sub>` 与 `<sup>` | 下标文字【与】上标文字                                   | 双     |
| `<code>`          | 一段代码                                          | 双     |
| `<samp>`          | 从正常的上下文中，将某些内容提取出来，例如：标识设备输出                  | 双     |
| `<kbd>`           | 键盘文本，表示文本是通过键盘输入的，经常用在与计算机相关的手册中              | 双     |
| `<abbr>`          | 缩写，最好配合上 `<title>` 属性                         | 双     |
| `<bdo>`           | 更改文本方向，要配合 `<dir>` 属性，可选值：`<ltr>`（默认），`<rtl>` | 双     |
| `<var>`           | 标记变量，可以与 `<code>` 一起使用                        | 双     |
| `<small>`         | 附属细则，例如：版权，法律文本……（很少使用）                       | 双     |
| `<b>`             | 摘要中的关键字、评论中的产品名称。（很少使用）                       | 双     |
| `<i>`             | 本意是：人物的思想活动，所说的话等。现在多用于：呈现字体图标                | 双     |
| `<u>`             | 与正常内容有反差文本，例如：错的单词，不合适的描述等。（很少使用）             | 双     |
| `<q>`             | 短引用（很少使用）                                     | 双     |
| `<blockquote>`    | 长引用（很少使用）                                     | 双     |
| `<address>`       | 地址信息                                          | 双     |

> [!WARNING] 备注
> 1. 这些不常用的文本标签，编写代码时不用过于纠结（其实不用也行，主要就是用 [常用标签](📒笔记/🖥️专业技能/📄HTML/1-HTML4.md#_1常用标签)）
> 2. `<blockquote>` 与 `<address>` 是**块级元素**，其它的文本标签，都是**行内元素**
> 3. 有些语义感不强的标签，我们很少使用，例如：`<small>`、`<b>`、`<u>`、`<q>`、`<blockquote>`
> 4. 由于 HTML 标签实在太多，我们只需记住 [排版标签](📒笔记/🖥️专业技能/📄HTML/1-HTML4.md#_2、排版标签) 和 [常用标签](📒笔记/🖥️专业技能/📄HTML/1-HTML4.md#_1常用标签)即可

### 6、图片标签

| 标签名 | 标签语意 | 常用属性 | 单/双标签 |
| :--: | :--: | :--: | :--: |
| `img` | ==图片== | `src`：图片路径，用来指明图片的具体位置<br>`alt`：图片描述<br>`width`：图片宽度，单位是像素 `px`<br>`height`：图片高度，单位是像素 `px` | 单 |

> [!WARNING] alt属性的作用
> 1. *搜索引擎*通过此属性，得知图片的内容。（最主要的作用）
> 2. 当图片*无法显示*的时候，有些浏览器会呈现出此属性设置的值
> 3. *盲人阅读器*会朗读此属性值

#### ①常见图片格式

1. `jpg` 格式： 
	1. 概述：扩展名为 `.jpg` 或 `.jpeg`，是一种**有损的压缩格式**（把肉眼不容易观察出来的细节丢弃了）。
	2. 主要特点：支持的颜色丰富、占用空间较小、不支持透明背景、不支持动态图。
	3. 使用场景：对图片**细节没有极高要求**的场景，例如：网站的产品宣传图等。—— 该格式网页中很常见。
2. `png` 格式： 
	1. 概述：扩展名为`.png` ，是一种**无损的压缩格式**，能够更高质量的保存图片。
	2. 主要特点：支持的颜色丰富、占用空间略大、支持透明背景、不支持动态图。
	3. 使用场景：①想让图片有透明背景；②想**更高质量的呈现**图片；例如 ：公司 logo 图、重要配图等。 
3. `bmp` 格式： 
	1. 概述：扩展名为`.bmp`，**不进行压缩**的一种格式，在最大程度上保留图片更多的细节。
	2. 主要特点：支持的颜色丰富、保留的细节更多、占用空间极大、不支持透明背景、不支持动态图。
	3. 使用场景：对图片**细节要求极高**的场景，例如：一些大型游戏中的图片。（网页中很少使用） 
4. `gif`格式： 
	1. 概述：扩展名为`.gif`，仅支持 256 种颜色，色彩呈现不是很完整。
	2. 主要特点：支持的颜色较少、支持简单透明背景、支持动态图。
	3. 使用场景：网页中的动态图片。
5. `webp` 格式：
	1. 概述：扩展名为 `.webp`，谷歌推出的一种格式，专门用来在网页中呈现图片。
	2. 主要特点：**具备上述几种格式的优点**，但兼容性不好，一旦使用务必要解决兼容性问题。
	3. 使用场景：网页中的各种图片。
6. `base64` 格式：
	1. 本质：一串特殊的文本，要通过浏览器打开，传统看图应用通常无法打开。 
	2. 原理：把图片进行 base 64 编码，形成一串文本。
	3. 如何生成：靠一些工具或网站。 
	4. 如何使用：直接作为 img 标签的 src 属性的值即可，并且不受文件位置的影响。 
	5. 使用场景：一些**较小的**图片，或者**需要和网页一起加载的**图片。
*图片的格式非常之多，上述只是一些常见的。*

### 7、文件路径

#### ①相对路径

|  符号   | 含义  |
| :---: | :-: |
| `./`  | 同级  |
|  `/`  | 下一级 |
| `../` | 上一级 |

> [!WARNING] 注意点：
> 1. 相对路径中的 `./` 可以省略不写；
> 2. 相对路径依赖的是当前位置，后期若调整了文件位置，那么文件中的路径也要修改。

#### ②绝对路径

1. 本地绝对路径（例如）：`E:/a/b/c/html.md`。**很少使用**
2. 网络绝对路径：`http://www.atguigu.com/images/index_new/logo.png`。

> [!WARNING] 注意点：
> 1. 使用本地绝对路径，一旦更换设备，路径处理起来就很麻烦；
> 2. 使用网络绝对路径，确实方便，但要注意若服务器开启了**防盗链**，会造成图片引入失败。

### 8、超链接

1. 主要作用：从当前页面进行跳转；

| 标签名 | 标签语意 |                                                                       常用属性                                                                        | 单/双标签 |
| :-: | :--: | :-----------------------------------------------------------------------------------------------------------------------------------------------: | :---: |
| `a` | 超链接  | `href`：指定要跳转到的具体目标。<br>`target`：控制跳转时如何打开页面，`_self`: 在本窗口打开，`_blank`: 在新窗口打开。<br>`id`：元素的唯一标识，可用于**设置锚点**。<br>`name`：元素的名字，写在 `a` 标签中，也能**设置锚点**。 |   双   |

#### ①跳转到指定页面

```html:line-numbers
<!-- 跳转其他网页 -->
<a href="https://www.jd.com/" target="_blank">去京东</a>
<!-- 跳转本地网页 -->
<a href="[本地某前端界面路径]" target="_self">去往对应本地前端文件</a>
```

> [!WARNING] 注意点：
> 1. 代码中的**多个空格、多个回车**，都会被浏览器解析成一个空格；
> 2. 虽然 `a` 是行内元素，但 `a` 元素可以包裹除它自身外的任何元素。

#### ②跳转到指定文件（也可触发下载）

```html:line-numbers
<!-- 浏览器能直接打开的文件 -->
<a href="./resource/123.jpg">123</a>
<a href="./resource/456.mp4">456</a>
<a href="./resource/789.gif">789</a>

<!-- 浏览器不能打开的文件，会自动触发下载 -->
<a href="./resource/xxx.zip">下载xxx</a>

<!-- 强制触发下载（浏览器可以打开，但主动选择下载） -->
<a href="./resource/[媒体文件原名].mp4" download="[用户自定义文件名].mp4">下载xxx</a>
```

> [!WARNING] 注意点：
> 1. 若浏览器**无法打开文件**，则会引导用户下载；
> 2. 若想强制触发下载，则需使用 `download` 属性，属性值即为下载文件的名称。

#### ③跳转到锚点位置

> [!WARNING] 锚点是什么 
>网页中的一个**标记点**

具体使用方式：

1. 设置锚点

```html:line-numbers
<!-- 第一种方式：a标签配合name属性 -->
<a name="test1"></a>

<!-- 第二种方式：其他标签配合id属性 -->
<h2 id="test2">我是一个位置</h2>
```

> [!WARNING] 注意点：
> 1. 具有 `href` 属性的 `a` 标签是超链接，具有 `name` 属性的 `a` 标签是锚点；
> 2. `name` 和 `id` 都是**区分大小写**的，且 `id` 最好***别***是数字开头。

2. 跳转锚点

```html:line-numbers
<!-- 跳转到test1锚点 -->
<a href="#test1">去test1锚点</a>

<!-- 跳转到本页面顶部 -->
<a href="#">回到顶部</a>

<!-- 跳转到其他页面锚点 -->
<a href="demo.html#test1">去demo.html页面的test1锚点</a>

<!-- 刷新本页面 -->
<a href="">刷新本页面</a>

<!-- 执行一段js，如果还不知道执行什么，可以留空，javascript： -->
<a href="javascript:alert(1);">点我弹窗</a>
```

#### ④唤起指定应用；

通过 `a` 标签，可以唤起设备应用程序。

```html:line-numbers
<!-- 唤起设备拨号 -->
<a href="tel:10010">电话联系</a>

<!-- 唤起设备发送邮件 -->
<a href="mailto:10010@qq.com">邮件联系</a>

<!-- 唤起设备发送短信 -->
<a href="sms:10010">短信联系</a>
```

### 9、列表

#### ①有序列表 (ordered list)

概念：有顺序或侧重顺序的列表

```html:line-numbers
<h2>要把大象放冰箱总共分几步</h2>
<ol>
	<li>把冰箱门打开</li>
	<li>把大象放进去</li>
	<li>把冰箱门关上</li>
</ol>
```

#### ②无序列表 (unordered list)

概念：无顺序或不侧重顺序的列表

```html:line-numbers
<h2>我想去的几个城市</h2>
<ul>
	<li>成都</li>
	<li>上海</li>
	<li>西安</li>
</ul>
```

#### ③自定义列表 (definition list)

1. 概念：所谓自定义列表，就是一个包含**术语名称**以及**术语描述**的列表。
2. 一个 `dl` 就是一个自定义列表，一个 `dt` 就是一个术语名称（definition title），一个 `dd` 就是术语描述（definition description）（**可以有多个术语描述**）。

```html:line-numbers
<h2>如何高效的学习？</h2>
<dl>
	<dt>做好笔记</dt>
	<dd>笔记是我们以后复习的一个抓手</dd>
	<dd>笔记可以是电子版，也可以是纸质版</dd>
	<dt>多加练习</dt>
	<dd>只有敲出来的代码，才是自己的</dd>
	<dt>别怕出错</dt>
	<dd>错很正常，改正后并记住，就是经验</dd>
</dl>
```

#### ④列表嵌套

概念：列表中的某项内容，又包含一个列表（注意：嵌套时，务必把结构写完整）。

```html:line-numbers
<h2></h2>
<ul>
	<li>成都</li>
	<li>
		<span>上海</span>
		<ul>
			<li>外滩</li>
			<li>杜莎夫人蜡像馆</li>
			<li>
				<a href="https://www.opg.cn/">东方明珠</a>
			</li>
			<li>迪士尼乐园</li>
		</ul>
	</li>
	<li>西安</li>
	<li>武汉</li>
</ul>
```

> [!DANGER] 注意
> 1. `li` 标签最好写在 `ul` 或 `ol` 中，*不要单独使用*；
> 2. `li` 是 list item 列表项的缩写。

### 10、表格

#### ①基本结构

1. 一个完整的表格由：**表格标题、表格头部、表格主体、表格脚注**四部分组成。
   ![table structure](/blog/tech_skills/html/HTML_table_structure.png)
2. 表格涉及到的标签：
	- **`table`**：表格
	- **`caption`**：表格标题（没有属性）
	- **`thead`**：表格头部
	- **`tbody`**：表格主体
	- **`tfoot`**：表格脚注
	- **`tr`**：每一行
	- **`th`** 、**`td`**：每一个单元格（**注：表格头部中用 `th`，表格主体、表格脚注用 `td`**）
3. 具体编码：

```html:line-numbers
<table border="1">
	<!-- 表格标题 -->
      <caption>
        student infomation
      </caption>
      <!-- 表格头部 -->
      <thead>
        <tr>
          <th>name</th>
          <th>stu_id</th>
          <th>grade</th>
        </tr>
      </thead>
      <!-- 表格主体 -->
      <tbody>
        <tr>
          <td>barry</td>
          <td>1</td>
          <td>10</td>
        </tr>
        <tr>
          <td>jenny</td>
          <td>2</td>
          <td>10</td>
        </tr>
        <tr>
          <td>rosie</td>
          <td>3</td>
          <td>10</td>
        </tr>
      </tbody>
      <!-- 表格脚注 -->
      <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td>total:3 people</td>
        </tr>
      </tfoot>
    </table>
```

#### ②常用属性

|   标签名   | 标签语意  |                                                                              常用属性                                                                              | 单/双标签 |
| :-----: | :---: | :------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---: |
| `table` |  表格   |                                   `width`：设置表格宽度。<br>`height`：设置表格的最小高度。<br>`border`：设置表格边框宽度。<br>`cellspacing`：设置单元格之间的间距。                                    |   双   |
| `thead` | 表格头部  |       `height`：设置表格头部高度。<br>`align`：设置单元格的水平对齐方式，可选值有：1. `left`；2. `center`；3. `right`。<br>`valign`：设置单元格的垂直对齐方式，可选值有：1. `top`；2. `middle`；3. `bottom`。        |   双   |
| `tbody` | 表格主体  |                                                                            同`thead`                                                                            |   双   |
| `tfoot` | 表格脚注  |                                                                           同 `thead`                                                                            |   双   |
|  `tr`   |   行   |                                                                           同 `thead`                                                                            |   双   |
|  `td`   | 普通单元格 | `width`：设置单元格的宽度，同列所有单元格全都受影响。<br>`height`：设置单元格的高度，同行单元格全都受影响。<br>`align`：设置单元格的水平对齐方式。<br>`valign`：设置单元格的垂直对齐方式。<br>`rowspan`：指定要跨的行数。<br>`colspan`：指定要跨的列数。 |   双   |
|  `th`   | 表头单元格 |                                                                             同 `td`                                                                             |   双   |

 > [!WARNING]注意：
 > 1. `<table>` 元素的 `border` 属性可以控制表格边框，但 `border` 值的大小，并不控制**单元格边框**的宽度，只能控制表格最外侧边框的宽度。
 > 2. 默认情况下，每列的宽度取决于这一列最宽的那一格。
 > 3. 给某个 `th` 或 `td` 设置了宽/高度之后，它们所在那一列/行的宽/高度就确定了。

 #### ③跨行跨列
1. `rowspan`：指定要跨的行数。
2. `colspan`：指定要跨的列数。
3. 动手练习：
   ![table example](/blog/tech_skills/html/HTML_table_example.png)

### 11、常用标签补充

|  标签名  |           标签含义           | 单/双标签 |
| :---: | :----------------------: | :---: |
| `br`  |            换行            |   单   |
| `hr`  |       分隔线**（有语义）**       |   单   |
| `pre` | 按原文显示（一般用于在页面中嵌入大段文本/代码） |   双   |

> [!WARNING]注意：
> 1. 不要用 `<br>` 来增加文本之间的行间隔，应使用 `<p>` 元素，或使用 `CSS margin` 属性。（考虑语义）
> 2. `<hr>` 的语义是分隔线，如果不想包含语义，需使用 `CSS` 画出一条线。

### 12、表单

- 概念：一个包含**交互的区域**，用于**收集**用户提供的**数据**。*其实就是前端界面上可以输入的模块。*

#### ①基本结构

```html:line-numbers
<form action="https://www.baidu.com/s" method="get" target="_blank">
	<input type="text" name="wd">
	<button>search</button>
</form>
```

![form structure](/blog/tech_skills/html/HTML_form_structure.png)

#### ②常用表单控件

|  控件   |                                                                                                                                   代码&样式                                                                                                                                   |                                                   属性                                                   |
| :---: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------: |
| 文本输入框 |                                                                                             `<input type="text" placeholder="请输入文本">` <input type="text" placeholder="请输入文本">                                                                                             |                                       `name`、`value`、`maxlenght`                                       |
| 密码输入框 |                                                                                            `<input type="password" placeholder="密码">` <input type="password" placeholder="密码">                                                                                            |                                       `name`、`value`、`maxlenght`                                       |
|  单选框  |                                                                                  `<input type="radio" name="gender" value="female">女` <input type="radio" name="gender" value="female">女                                                                                  |                                        `name`、`value`、`checked`                                        |
|  复选框  |                                                                            `<input type="checkbox" name="xxx" value="xxx">hobby_name` <input type="checkbox" name="xxx" value="xxx">hobby_name                                                                            |                                        `name`、`value`、`checked`                                        |
|  隐藏域  |                                                                                                               `<input type="hidden">` <input type="hidden">                                                                                                               |                                             `name`、`value`                                             |
| 提交按钮  |                                                                                        `<input type="submit">` <input type="submit"><br>`<button>提交</button>` <button>提交</button>                                                                                         | `button` 标签中 `type` 属性默认值是 `submit`；<br> `button` 不要指定 `name` 属性；<br>`input` 编写的按钮，用 `value` 属性指定按钮文字。 |
| 重置按钮  |                                                                            `<input type="reset">` <input type="reset"><br> `<button type="reset">重置</button>` <button type="reset">重置</button>                                                                            |                                          **同上:BoBxsHandUp:**                                           |
| 普通按钮  |                                                           `<input type="button" value="普通按钮">` <input type="button" value="普通按钮"><br>`<button type="button">普通按钮</button>` <button type="button">普通按钮</button>                                                            |                         ⚠️普通按钮的 `type` 需写为 `button`，否则默认值是 `submit` 就会引起表单的提交                          |
|  文本域  |                                                                                         `<textarea row="5" col="10">这是文本域</textarea>` <textarea row="5" col="10">这是文本域</textarea>                                                                                         |                              `rows` 、`cols`<br>不能便携 `type` 属性，其余属性与文本框一致                               |
|  下拉框  | `<select name="from"><option value="1">选择 1</option><option value="2" selected>选择 2</option><option value="3">选择 3</option></select>` <select name="from"><option value="1">选择 1</option><option value="2" selected>选择 2</option><option value="3">选择 3</option></select> |                         `<select>`：`name`<br>`<option>`：`value`、`selected`<br>                         |

>[!WARNING] 备注
>结合后续 `CSS` 学习，`<input type="checkbox">` 、`<input type="radio">` 组件在 `CSS` 中是调整不了 `color` 和 `background-color` 的，因为有些控件的某些属性被固定了，我们无法进行修改。

#### ③禁用表单控件

- `disabled` 属性：给表单中控件设置此属性即可禁用
- 代码

```html:line-numbers
<input type="text" value="this is a disabled input box" disabled>
```

- 效果
<input type="text" value="this is a disabled input box" disabled>

#### ④label 标签

##### 作用：

`label` 标签可与表单控件相关联，关联之后点击文字，与之对应的表单控件就会获取焦点。

##### 关联方式：

1. 把 `label` 标签的 `for` 属性值=表单控件的 `id`；
2. 把表单控件嵌套在 `label` 里面。

##### 效果对比：

- 未关联：

```html:line-numbers
账户：<input type="text" value="请输入账户名">
```

账户：<input type="text" value="请输入账户名">

- 关联：

```html:line-numbers
<label>账户：<input type="text" value="请输入账户名"></label>
<label for="account">账户：</label><input type="text" id="account" value="请输入账户名">
```

<label>账户：<input type="text" value="请输入账户名"></label>

##### 提示：

- `<button>` 不需要和 `label` 做关联，因为没这个需求。

#### ⑤fieldset 和 legend 的使用（了解）

- `fieldset` 可以为表单控件分组
- `legend` 标签是分组的标题
- 代码

```html:line-numbers
<fieldset>
	<legend>主要信息</legend>
	<label>账户：
		<input id="zhanghu" type="text" name="account" maxlength="10">
	</label>
	<br>
	<label>密码：
		<input id="mima" type="password" name="pwd" maxlength="10">
	</label>
	<br>
	性别：
	<label><input type="radio" name="gender" value="male">男</label>
	<label><input type="radio" name="gender" value="female">女</label>
</fieldset>
```

<fieldset>
	<legend>主要信息</legend>
	<label>账户：
		<input id="zhanghu" type="text" name="account" maxlength="10">
	</label>
	<br>
	<label>密码：
		<input id="mima" type="password" name="pwd" maxlength="10">
	</label>
	<br>
	性别：
	<label><input type="radio" name="gender" value="male">男</label>
	<label><input type="radio" name="gender" value="female">女</label>
</fieldset>

### 13、框架标签

|   标签名    |       功能       |                                    属性                                    | 单/双标签 |
| :------: | :------------: | :----------------------------------------------------------------------: | :---: |
| `iframe` | 框架（在网页中嵌入其他文件） | `name`：框架名，可以与 `target` 属性配合；<br>`width`、`height`、`frameborder`：只有 0、1二态 |   双   |

- `<iframe>` 标签的实际应用：
	- 在网页中嵌入广告；
	- 与超链接或表单的 `target` 配合，展示不同内容。
- 代码实例

```html:line-numbers
- iframe嵌入普通网页
<iframe src="https://www.toutiao.com" width="100%" height="100%" frameborder="0"></iframe>

- iframe嵌入其他内容
<iframe src="E:\Learning_classes\learning_note\obsidian-md\RJY's Vault\Learning Notes\技术\HTML\HTML4笔记.pdf" width="100%" height="100%" frameborder="0"></iframe>

- 与超链接的target属性配合使用
<a href="https://www.toutiao.com" target="container">点我看新闻</a>

- 与表单的target属性配合使用
<form action="https://so.toutiao.com/searcch" target="container">
	<input type="text" name="keyword">
	<input type="submit" value="搜索">
</form>

<iframe name="container" frameborder="0" width="100%" height="100%"></iframe>
```

### 14、HTML 实体

- 在 `HTML` 中我们可以用一种**特殊形式**的内容，*来表示某个符号*，这种特殊形式的内容，就是 `HTML` 实体。比如小于号 `<` 用于定义 `HTML` 标签的开始，如果我们希望浏览器正确地显示这些字符，我们必须在 `HTML` 源码中插入字符实体。
- **字符实体**由三部分组成：一个 `&` 和一个实体名称（或者一个 `#` 和一个实体编号），最后加上一个 `;`。
- 常见字符实体总结：

| 符号  |      描述       |    实体名称    |
| :-: | :-----------: | :--------: |
| ` ` |      空格       |  `&nbsp;`  |
| `<` |      小于号      |   `&lt;`   |
| `>` |      大于号      |   `&gt;`   |
| `&` |      和号       |  `&amp;`   |
| `"` |      引号       |  `&quot;`  |
| `'` |      反引号      | `&acute;`  |
| `￠` |    分（cent）    |  `&cent;`  |
| `£` |   镑（pound）    | `&pound;`  |
| `￥` |    元（yen）     |  `&yen;`   |
| `€` |   欧元（euro）    |  `&euro;`  |
| `©` | 版权（copyright） |  `&copy;`  |
| `®` |     注册商标      |  `&reg;`   |
| `™` |      商标       | `&trade;`  |
| `×` |      乘号       | `&times;`  |
| `÷` |      除号       | `&divide;` |

### 15、HTML 全局属性

- 除了 **`<head>`、`<html>`、`<meta>`、`<script>`、`<style>` 、`<title>`** 以外，针对**其余所有标签**都适用的属性即全局属性；
- 常用全局属性：

|   属性名   |                                           含义                                           |
| :-----: | :------------------------------------------------------------------------------------: |
|  `id`   | 给标签指定*唯一标识*，注意 `id` 是不能重复的；<br>作用：可以让 `label` 标签与表单控件相关联；也可以与 `CSS`、`JavaScript` 配合使用。 |
| `class` |                  给标签指定类名，随后通过 `CSS` 就可以给标签设置样式。多个标签可以使用同一个类名，语义为其属同类。                  |
| `style` |                                    给标签设置 `CSS` 样式。                                     |
|  `dir`  |                                   内容的方向：`ltr`、`rtl`                                    |
| `title` |                               给标签设置一个文字提示，一般超链接和图片使用较多。                                |
| `lang`  |                   给标签指定语言，具体规范可参考 [[HTML4#六、HTML 设置语言|六、HTML设置语言]]                   |

### 16、meta 元信息

#### ①配置字符编码

```html:line-numbers
<meta charset="utf-8">
```

#### ②针对 IE 浏览器的兼容性配置

```html:line-numbers
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

#### ③针对移动端的配置

```html:line-numbers
<meta name="viewport" content="width=device-width,initial-scale=1.0">
```

#### ④配置网页关键字

```html:line-numbers
<meta name="keywords" content="[8-12个用英文逗号隔开的单词/词语]">
```

#### ⑤配置网页描述信息

```html:line-numbers
<meta name="description" content="[80字以内的一段话，与网站内容相关]">
```

- 更多 `<meta>` 信息，参考 [文档级元数据元素 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta)
