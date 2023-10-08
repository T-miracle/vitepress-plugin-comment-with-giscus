# vitepress-plugin-comment-with-giscus

[![npm](https://img.shields.io/npm/v/vitepress-plugin-comment-with-giscus?color=green&style=flat)](https://www.npmjs.com/package/vitepress-plugin-comment-with-giscus)

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
        },
            // 是否全部页面启动评论区。
            // 默认为 true，表示启用，此参数可忽略；
            // 如果为 false，表示不启用。
            // 可以在页面使用 `comment: true` 前言单独启用
            true
        );
    }
};
```

`giscus` 的参数获取方式请看：[giscus配置获取](https://giscus.app/)

## 扩展使用

当配置选项默认启用评论区时，添加以下代码，则不会生成评论区

```md
---
comment: false
---
```

当配置选项默认不启用评论区时，您仍可以通过以下代码在当前页面启用评论区

```md
---
comment: true
---
```

## 更多vitepress插件

这些插件你可能会感兴趣：[点我查看更多vitepress插件](https://github.com/T-miracle/vitepress-plugins)
