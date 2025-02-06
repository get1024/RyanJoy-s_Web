import { ContentData, createContentLoader } from "vitepress";

// 日期处理函数：将日期字符串转换为结构化对象
function splitDate(dateStr: string) {
    const date = new Date(dateStr);
    return {
        year: date.getUTCFullYear(),
        month: (date.getUTCMonth() + 1).toString().padStart(2, "0"),
        day: date.getUTCDate().toString().padStart(2, "0"),
        hour: date.getUTCHours().toString().padStart(2, "0"),
        minute: date.getUTCMinutes().toString().padStart(2, "0"),
        second: date.getUTCSeconds().toString().padStart(2, "0"),
    };
}

// 文章接口定义
interface Post {
    url: string;
    frontmatter: {
        title: string;
        tags?: string[];
        createAt: {
            year: number;
            month: string;
            day: string;
            hour: string;
            minute: string;
            second: string;
        };
        updateAt: {
            year: number;
            month: string;
            day: string;
            hour: string;
            minute: string;
            second: string;
        };
    };
}

// 标签接口定义
interface Tag {
    name: string; // 标签名称
    count: number; // 文章数量
    posts: Post[]; // 相关文章列表
    size: number; // 标签字体大小
}

// 根据文章数量计算标签大小
const calculateSize = (count: number, maxCount: number): number => {
    const minSize = 0.9;
    const maxSize = 1.4;
    const scale = (count - 1) / (maxCount - 1);
    return minSize + (maxSize - minSize) * scale;
};

declare const data: Tag[];
export { data };

// 内容加载器：处理markdown文件并生成标签数据
export default createContentLoader("**/*.md", {
    transform(raw: ContentData[]) {
        // 创建标签映射表
        const tagMap = new Map<string, { count: number; posts: ContentData[] }>();

        // 遍历文章，统计标签信息
        raw.forEach((post) => {
            const tags = post.frontmatter.tags || [];
            tags.forEach((tag) => {
                if (!tagMap.has(tag)) {
                    tagMap.set(tag, { count: 0, posts: [] });
                }
                const tagData = tagMap.get(tag)!;
                tagData.count++;
                tagData.posts.push(post);
            });
        });

        // 计算最大文章数，用于标签大小计算
        const maxCount = Math.max(
            ...Array.from(tagMap.values()).map((t) => t.count)
        );

        // 转换数据结构并添加样式属性
        const tags: Tag[] = Array.from(tagMap.entries())
            .map(([name, data]) => ({
                name,
                count: data.count,
                posts: data.posts
                    .map((post) => ({
                        url: post.url,
                        frontmatter: {
                            title: post.frontmatter.title,
                            tags: post.frontmatter.tags,
                            createAt: splitDate(post.frontmatter.createAt),
                            updateAt: splitDate(post.frontmatter.updateAt),
                        },
                    }))
                    .sort((a, b) => {
                        // 按创建时间降序排序
                        const dateA = new Date(
                            `${a.frontmatter.createAt.year}-${a.frontmatter.createAt.month}-${a.frontmatter.createAt.day}`
                        );
                        const dateB = new Date(
                            `${b.frontmatter.createAt.year}-${b.frontmatter.createAt.month}-${b.frontmatter.createAt.day}`
                        );
                        return dateB.getTime() - dateA.getTime();
                    }) as Post[],
                size: calculateSize(data.count, maxCount),
            }))
            .sort(() => Math.random() - 0.5); // 随机打乱标签顺序

        return tags;
    },
});
