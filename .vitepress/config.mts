import { defineConfig } from "vitepress";
import { getPosts } from "./theme/serverUtils";
// https://vitepress.dev/reference/site-config
//每页的文章数量
const pageSize = 10;
export default defineConfig({
  title: "suporka-vitepress-theme",
  description: "A simple and beautiful vitepress theme",
  themeConfig: {
    posts: await getPosts(pageSize),
    website: "https://github.com/zxpsuper/suporka-vitepress-theme", //copyright link
    // 评论的仓库地址
    comment: {
      repo: "zxpsuper/zxpsuper.github.io",
      repoId: "MDEwOlJlcG9zaXRvcnk5NTMzMzM0OQ==",
      category: "Announcements",
      categoryId: "DIC_kwDOBa6r5c4CevP1",
      mapping: "pathname",
      themes: "https://gw.alipayobjects.com/os/k/t/comment.css",
      lang: 'zh-CN'
    },
    nav: [
      { text: "Home", link: "/" },
      // { text: "Category", link: "/pages/category" },
      { text: "Archives", link: "/pages/archives" },
      { text: "Tags", link: "/pages/tags" },
      // { text: 'Airene', link: 'http://airene.net' }  -- External link test
    ],
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/zxpsuper/suporka-vitepress-theme" },
    ],
  } as any,
});
