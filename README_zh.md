# README_zh

## vitepress-plugin-comment-with-giscus

![](demo.png)

> 基于 `giscus` 的 `vitepress` 评论区插件

## 安装

```shell
// npm
npm i vitepress-plugin-comment-with-giscus
// yarn
yarn add vitepress-plugin-comment-with-giscus
```

## 用法

```ts
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        // ...
    },
    setup() {
        // 获取前言和路由
        const { frontmatter } = useData();
        const route = useRoute();
        // 评论组件
        giscusTalk({
            repo: '你的github仓库',
            repoId: '你的仓库id',
            categoryId: '你的分类id',
            mapping: 'pathname'
        }, {
            frontmatter, route
        });
    }
};
```

`giscus` 的参数获取方式请看：[giscus配置获取](https://giscus.app/)

## 扩展使用

如果文章前言添加以下代码，则不会生成评论区

```md
---
comment: false
---
```
