const pattern
    = /[a-zA-Z0-9_\u0392-\u03C9\u00C0-\u00FF\u0600-\u06FF\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\u3040-\u309F\uAC00-\uD7AF]+/g

// 定义类型
export interface ArticleStats {
    wordCount: number;
    imageCount: number;
    readTimeMinutes: number;
}

export function countWord(data: string): number {
    const m = data.match(pattern)
    let count = 0
    if (!m) {
        return 0
    }
    for (let i = 0; i < m.length; i += 1) {
        if (m[i].charCodeAt(0) >= 0x4E00) {
            count += m[i].length
        }
        else {
            count += 1
        }
    }
    return count
}

export function calculateImageTime(imageCount: number): number {
    if (imageCount <= 10) {
        // 等差数列求和
        return imageCount * 13 + (imageCount * (imageCount - 1)) / 2
    }
    return 175 + (imageCount - 10) * 3
}

export function calculateWordTime(wordCount: number): number {
    return (wordCount / 275) * 60
}

export function calculateReadTime(wordCount: number, imageCount: number): number {
    const wordTime = calculateWordTime(wordCount)
    const imageTime = calculateImageTime(imageCount)
    return Math.ceil((wordTime + imageTime) / 60)
}

export function getArticleStats(content: string, imageCount: number): ArticleStats {
    const wordCount = countWord(content)
    return {
        wordCount,
        imageCount,
        readTimeMinutes: calculateReadTime(wordCount, imageCount)
    }
}