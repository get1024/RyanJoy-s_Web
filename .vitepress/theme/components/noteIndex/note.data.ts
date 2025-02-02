import { createContentLoader } from "vitepress";

// Helper function to format date and split into components
function splitDate(dateStr: string) {
    const date = new Date(dateStr);
    return {
        year: date.getUTCFullYear(),
        month: (date.getUTCMonth() + 1).toString().padStart(2, '0'),
        day: date.getUTCDate().toString().padStart(2, '0'),
        hour: date.getUTCHours().toString().padStart(2, '0'),
        minute: date.getUTCMinutes().toString().padStart(2, '0'),
        second: date.getUTCSeconds().toString().padStart(2, '0')
    };
}

// Helper function to group posts by year
function groupByYear(posts) {
    return posts.reduce((acc, post) => {
        const year = post.frontmatter.createAt.year;
        if (!acc[year]) {
            acc[year] = [];
        }
        acc[year].push(post);
        return acc;
    }, {});
}

export default createContentLoader("📒文章/**/*.md", {
    transform(rawPosts) {
        // Split dates and group by year
        const postsWithDate = rawPosts.map((post) => {
            const { createAt, updateAt } = post.frontmatter;
            post.frontmatter.createAt = splitDate(createAt);
            post.frontmatter.updateAt = splitDate(updateAt);
            return post;
        });

        return groupByYear(postsWithDate);
    },
});