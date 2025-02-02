import { createContentLoader } from 'vitepress'

// 复用 note.data.ts 中的日期处理函数
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

interface TagItem {
  name: string
  count: number
  posts: {
    url: string
    frontmatter: {
      title: string
      createAt: {
        year: number
        month: string
        day: string
        hour: string
        minute: string
        second: string
      }
      updateAt: {
        year: number
        month: string
        day: string
        hour: string
        minute: string
        second: string
      }
    }
  }[]
}

declare const data: TagItem[]
export { data }

export default createContentLoader('**/*.md', {
  transform(raw) {
    const tags = new Map<string, TagItem>()

    // 遍历所有文档
    raw.forEach(page => {
      // 如果frontmatter中没有tags，添加默认值"待定"
      if (!page.frontmatter.tags) {
        page.frontmatter.tags = ['待定']
      }
      
      const pageTags = page.frontmatter.tags
      
      // 确保tags是数组
      const tagsArray = Array.isArray(pageTags) ? pageTags : [pageTags]
      
      // 处理每个标签
      tagsArray.forEach(tag => {
        if (!tags.has(tag)) {
          tags.set(tag, {
            name: tag,
            count: 0,
            posts: []
          })
        }
        
        const tagData = tags.get(tag)!
        tagData.count++

        // 处理日期
        const createAt = splitDate(page.frontmatter.createAt)
        const updateAt = splitDate(page.frontmatter.updateAt)

        tagData.posts.push({
          url: page.url,
          frontmatter: {
            title: page.frontmatter.title,
            createAt,
            updateAt
          }
        })
      })
    })

    // 对每个标签的文章按创建时间排序
    tags.forEach(tag => {
      tag.posts.sort((a, b) => {
        const aDate = new Date(
          `${a.frontmatter.createAt.year}-${a.frontmatter.createAt.month}-${a.frontmatter.createAt.day} ` +
          `${a.frontmatter.createAt.hour}:${a.frontmatter.createAt.minute}:${a.frontmatter.createAt.second}`
        )
        const bDate = new Date(
          `${b.frontmatter.createAt.year}-${b.frontmatter.createAt.month}-${b.frontmatter.createAt.day} ` +
          `${b.frontmatter.createAt.hour}:${b.frontmatter.createAt.minute}:${b.frontmatter.createAt.second}`
        )
        return bDate.getTime() - aDate.getTime()
      })
    })

    return Array.from(tags.values())
  }
}) 