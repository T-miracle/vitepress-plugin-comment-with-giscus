# vitepress-plugin-comment-with-giscus

![npm](https://img.shields.io/npm/v/vitepress-plugin-comment-with-giscus?color=green&style=plastic)

![](demo.png)

> 基于 `giscus` 的 `vitepress` 评论区插件

## 安装

```shell
// npm
npm i vitepress-plugin-comment-with-giscus @giscus/vue
// yarn
yarn add vitepress-plugin-comment-with-giscus @giscus/vue
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
        
        // 评论组件 - https://giscus.app/
        giscusTalk({
            repo: '你的仓库地址',
            repoId: '你的仓库id',
            category: '你选择的分类', // 默认: `General`
            categoryId: '你的分类id',
            mapping: 'pathname', // 默认: `pathname`
            inputPosition: 'top', // 默认: `top`
            lang: 'zh-CN', // 默认: `zh-CN`
            // ...
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
