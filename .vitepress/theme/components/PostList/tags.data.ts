import { ContentData, createContentLoader } from "vitepress";
import { processPost, sortPostsByDate } from "./dateUtils";
import type { Post as BlogPost } from "./dateUtils";

// 标签接口定义
interface Tag {
    name: string;
    count: number;
    posts: BlogPost[];
    size: number;
}

// 根据文章数量计算标签大小
const calculateSize = (count: number, maxCount: number): number => {
    const minSize = 0.8;
    const maxSize = 1.7;
    
    // 处理边界情况
    if (count <= 1) return minSize;
    if (count >= maxCount) return maxSize;
    if (maxCount <= 1) return minSize;

    // 使用对数函数使大小变化更平滑
    const logBase = Math.E;
    const normalizedCount = Math.log(count) / Math.log(logBase);
    const normalizedMax = Math.log(maxCount) / Math.log(logBase);
    
    // 使用 sigmoid-like 函数使变化更加平滑
    const scale = normalizedCount / normalizedMax;
    const smoothScale = 1 / (1 + Math.exp(-5 * (scale - 0.5)));
    
    return minSize + (maxSize - minSize) * smoothScale;
};

declare const data: Tag[];
export { data };

export default createContentLoader("**/*.md", {
    transform(raw: ContentData[]) {
        // 创建标签映射表
        const tagMap = new Map<string, { count: number; posts: BlogPost[] }>();

        // 处理所有文章并统计标签信息
        raw.forEach((rawPost) => {
            const post = processPost(rawPost);
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

        // 计算最大文章数
        const maxCount = Math.max(
            ...Array.from(tagMap.values()).map((t) => t.count)
        );

        // 转换数据结构并添加样式属性
        const tags: Tag[] = Array.from(tagMap.entries())
            .map(([name, data]) => ({
                name,
                count: data.count,
                posts: sortPostsByDate(data.posts),
                size: calculateSize(data.count, maxCount),
            }))
            .sort(() => Math.random() - 0.5); // 随机打乱标签顺序

        return tags;
    },
});
