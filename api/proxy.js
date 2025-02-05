export default async (req, res) => {
    try {
        // 构建原始 API 地址
        const targetUrl = new URL("https://github-readme-stats.vercel.app/api");
        if (req.url.includes("activity")) {
            targetUrl.hostname = "github-readme-activity-graph.vercel.app"; // 如果是 activity 图像请求，修改为相应的 API 地址
        }
        
        // 将用户请求的参数附加到目标 URL
        const userParams = new URL(req.url, `http://${req.headers.host}`);
        userParams.searchParams.forEach((value, key) => {
            targetUrl.searchParams.set(key, value);
        });

        // 发起代理请求
        const response = await fetch(targetUrl.toString());

        // 设置正确的响应头
        res.setHeader("Content-Type", "image/svg+xml");
        res.setHeader("Cache-Control", "public, max-age=600"); // 10分钟缓存

        // 返回响应内容
        res.status(200).send(await response.text());
    } catch (error) {
        console.error("Proxy Error:", error);
        res.status(500).send("Internal Server Error");
    }
};