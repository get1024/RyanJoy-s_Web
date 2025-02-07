import { createContentLoader } from "vitepress";
import { processPost, Post } from "./dateUtils";

// Helper function to group posts by year
function groupByYear(posts: Post[]) {
    return posts.reduce((acc, post) => {
        const year = post.frontmatter.createAt.year;
        if (!acc[year]) {
            acc[year] = [];
        }
        acc[year].push(post);
        return acc;
    }, {} as Record<number, Post[]>);
}

export default createContentLoader("📒文章/**/*.md", {
    transform(rawPosts) {
        // Process posts and group by year
        const processedPosts = rawPosts.map(processPost);
        return groupByYear(processedPosts);
    },
});