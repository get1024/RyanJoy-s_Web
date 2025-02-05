export default async (req, res) => {
    try {
        const userUrl = new URL(req.url, `http://${req.headers.host}`);
        const pathSegments = userUrl.pathname.split('/');
        const targetType = pathSegments[3]; // 提取路径中的类型标识

        // 根据路径类型设置目标 URL
        let baseUrl;
        if (targetType === 'graph') {
            baseUrl = 'https://github-readme-activity-graph.vercel.app/graph';
        } else {
            baseUrl = 'https://github-readme-stats.vercel.app/api';
        }

        const targetUrl = new URL(baseUrl);

        // 复制所有查询参数
        userUrl.searchParams.forEach((value, key) => {
            targetUrl.searchParams.set(key, value);
        });

        const response = await fetch(targetUrl.toString());

        res.setHeader("Content-Type", "image/svg+xml");
        res.setHeader("Cache-Control", "public, max-age=600");
        res.status(200).send(await response.text());
    } catch (error) {
        console.error("Proxy Error:", error);
        res.status(500).send("Internal Server Error");
    }
};