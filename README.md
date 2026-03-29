# 我的小站 · My Garden

Astro + Tailwind CSS 个人博客，支持中英双语切换。

## 快速开始

```bash
npm install      # 安装依赖
npm run dev      # 本地开发 → http://localhost:4321
npm run build    # 构建生产版本
```

## 写文章

### 博客 `src/content/blog/文件名.md`

```markdown
---
title: "中文标题"
titleEn: "English Title"           # 可选，没有则用 title
date: 2025-03-29
description: "中文简介"             # 可选
descriptionEn: "English summary"   # 可选
tags: ["标签1", "标签2"]            # 可选
---

正文（支持完整 Markdown 语法）
```

### 随想 `src/content/thoughts/文件名.md`

```markdown
---
title: "中文标题"
titleEn: "English Title"
date: 2025-03-29
description: "简介"
---

随想内容
```

## 个性化

### 换配色

打开 `tailwind.config.mjs`，修改 `colors` 里的值：

```js
colors: {
  frame:   '#1e2330',  // 外框背景色
  paper:   '#fdfcfa',  // 内容区底色
  accent:  '#b5502a',  // 强调色（目前是赭石色）
  accentL: '#f5ece8',  // 强调色浅背景
  // ...
}
```

**配色方案参考**（直接替换 accent 和 accentL）：

| 风格 | accent | accentL |
|------|--------|---------|
| 赭石（默认）| `#b5502a` | `#f5ece8` |
| 蓝色 | `#1d4ed8` | `#eff6ff` |
| 绿色 | `#16a34a` | `#f0fdf4` |
| 紫色 | `#7c3aed` | `#f5f3ff` |
| 玫瑰 | `#be185d` | `#fdf2f8` |

### 换字体

打开 `tailwind.config.mjs`，修改 `fontFamily`，然后在 `src/styles/global.css` 顶部更新 Google Fonts 链接。

### 改网站名

打开 `src/layouts/Layout.astro`，找到导航栏里的「我的小站」和「My Garden」，改成你自己的。

### 改关于我

打开 `src/pages/about.astro`，把 `[你的名字]`、`[学校]` 等占位符替换成你自己的信息。

## 部署到 GitHub Pages

1. 把代码推到 GitHub 仓库（建议仓库名为 `用户名.github.io`）

2. 在 `astro.config.mjs` 加上 site 配置：
```js
export default defineConfig({
  site: 'https://你的用户名.github.io',
  integrations: [tailwind(), mdx()],
  // ...
});
```

3. 在仓库里创建 `.github/workflows/deploy.yml`：
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

4. 仓库 Settings → Pages → Source 选 **GitHub Actions**，保存。

以后每次 `git push`，网站自动更新。

## 目录结构

```
src/
├── content/
│   ├── blog/          ← 博客文章（.md）
│   ├── thoughts/      ← 随想（.md）
│   └── config.ts      ← 内容集合配置
├── layouts/
│   └── Layout.astro   ← 全局布局
├── pages/
│   ├── index.astro    ← 首页
│   ├── about.astro    ← 关于我
│   ├── blog/          ← 博客列表 & 详情
│   └── thoughts/      ← 随想列表 & 详情
└── styles/
    └── global.css     ← 全局样式
```
