# Bai'Blog

>   基于 [Fuwari](https://github.com/saicaca/fuwari) 魔改的个人博客，使用 Astro 的现代化静态网页构建。

[![Astro](https://img.shields.io/badge/Astro-7.2-ff5d01?logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06b6d4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Svelte](https://img.shields.io/badge/Svelte-5-ff3e00?logo=svelte&logoColor=white)](https://svelte.dev)
[![License](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

![1](https://im.213578848.xyz/blog.png)
在线访问：[https://baiblog.vip](https://baiblog.vip)

---

## ✨ 功能特性

- **Markdown 写作**：文章即 Markdown 文件，支持 KaTeX 数学公式、代码高亮、提示块（Admonition）等扩展语法
- **静态站内搜索**：基于 Pagefind，构建时自动生成全文索引，无需后端
- **暗色模式**：亮/暗主题一键切换，支持自定义主题色
- **图片灯箱**：PhotoSwipe 5 支持，点击图片即可查看大图
- **页面过渡动画**：基于 SWUP 的 SPA 式页面切换
- **归档 / 分类 / 标签**：自动聚合的文章索引体系
- **Giscus 评论**：基于 GitHub Discussions 的评论系统
- **RSS 与站点地图**：自动生成 `rss.xml` 与 `sitemap.xml`
- **友链系统**：通过 GitHub PR 提交即可添加友链
- **纯静态输出**：构建产物为静态文件，可部署到任意静态托管平台

## 🧱 技术栈

| 类别 | 技术 |
| --- | --- |
| 核心框架 | [Astro](https://astro.build) 7 · TypeScript 5 |
| UI / 样式 | Tailwind CSS 3 · Stylus · [Svelte](https://svelte.dev) 5（交互组件） |
| 内容管线 | remark / rehype · KaTeX · Shiki / Expressive Code |
| 功能增强 | Pagefind（搜索）· PhotoSwipe（灯箱）· SWUP（过渡）· Giscus（评论）· RSS / Sitemap |
| 工程化 | pnpm 9 · Biome 2（格式化 / Lint）· GitHub Actions（CI） |

## 🚀 快速开始

### 环境要求

- [Node.js](https://nodejs.org) ≥ 20
- [pnpm](https://pnpm.io) ≥ 9（项目通过 `preinstall` 强制使用 pnpm）

### 安装与运行

```bash
# 1. 安装依赖
pnpm install

# 2. 启动开发服务器（默认 http://localhost:4321）
pnpm dev

# 3. 生产构建（自动生成 Pagefind 搜索索引）
pnpm build

# 4. 本地预览构建产物
pnpm preview
```

## 📁 目录结构

```
.
├── public/               # 静态资源（favicon、图片等）
├── src/
│   ├── components/       # 组件（Navbar、PostCard、Search、Giscus 等）
│   ├── content/
│   │   ├── posts/        # 文章（Markdown 文件）
│   │   └── spec/         # 特殊页面（关于、友链）
│   ├── layouts/          # 页面布局
│   ├── pages/            # 路由页面
│   ├── i18n/             # 国际化
│   ├── plugins/          # remark / rehype 自定义插件
│   ├── styles/           # 全局样式
│   ├── utils/            # 工具函数
│   ├── config.ts         # 站点全局配置（标题、头像、导航、友链等）
│   └── types/            # 类型定义
├── astro.config.mjs      # Astro 配置
├── tailwind.config.cjs   # Tailwind 配置
├── pagefind.yml          # Pagefind 搜索配置
└── vercel.json           # Vercel 部署配置
```

## ✍️ 写文章

### 方式一：使用脚本

```bash
pnpm new-post
```

按提示输入标题即可自动生成带 frontmatter 的文章文件。

### 方式二：手动创建

在 `src/content/posts/` 下新建 `.md` 文件，frontmatter 格式：

```markdown
---
title: 文章标题
published: 2026-08-08
description: 文章描述（用于列表与 SEO）
tags: [标签1, 标签2]
category: 分类
draft: false
---
文章正文……
```

- `draft: true` 表示草稿，不会发布
- 正文支持 KaTeX 公式、代码块、Admonition 提示块等扩展语法

## 🔗 添加友链

欢迎通过 **GitHub Pull Request** 添加友链：

1. Fork 本仓库
2. 编辑 [`src/pages/friends.astro`](src/pages/friends.astro) 中的 `items` 数组，按以下格式追加：

```js
{
    title: '名字',
    imgurl: 'https://xxxx.xx/xx.png',  // 头像
    desc: 'saying',
    siteurl: '你的链接',
    tags: ['Friends'],
},
```

3. 提交并创建 Pull Request

## ☁️ 部署

构建产物位于 `dist/`（纯静态文件），可部署到任意平台：

- **Vercel**：仓库已包含 `vercel.json`，导入即用
- **Cloudflare Pages**：构建命令 `pnpm build`，输出目录 `dist`
- **GitHub Pages / 自有服务器**：上传 `dist/` 目录即可

## 🛠️ 常用命令

| 命令 | 说明 |
| --- | --- |
| `pnpm dev` | 启动开发服务器 |
| `pnpm build` | 生产构建（含 Pagefind 索引） |
| `pnpm preview` | 本地预览 |
| `pnpm check` | 类型检查 |
| `pnpm new-post` | 快速新建文章 |
| `pnpm format` | Biome 格式化 `src/` |
| `pnpm lint` | Biome 检查并修复 `src/` |

## 📄 许可证

本站内容与代码采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可协议。

---

**Bai'Blog** · 由 [Bai21357](https://github.com/Bai21357) 维护 · 基于 [Fuwari](https://github.com/saicaca/fuwari)
