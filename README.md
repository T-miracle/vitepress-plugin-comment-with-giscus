# vitepress-plugin-comment-with-giscus

[![npm](https://img.shields.io/npm/v/vitepress-plugin-comment-with-giscus?color=green&style=flat)](https://www.npmjs.com/package/vitepress-plugin-comment-with-giscus)

EN | [中文文档](README_zh.md)

![](demo.png)

> `vitepress` comment section plugin based on `giscus`

## Install

```shell
// npm
npm i vitepress-plugin-comment-with-giscus
// yarn
yarn add vitepress-plugin-comment-with-giscus
```

## Usage

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
        // Get frontmatter and route
        const { frontmatter } = useData();
        const route = useRoute();
        
        // Obtain configuration from: https://giscus.app/
        giscusTalk({
            repo: 'your github repository',
            repoId: 'your repository id',
            category: 'your category', // default: `General`
            categoryId: 'your category id',
            mapping: 'pathname', // default: `pathname`
            inputPosition: 'top', // default: `top`
            lang: 'en', // default: `zh-CN`
            // ...
        }, {
            frontmatter, route
        },
            // Whether to enable the comment area on all pages, enabled by default, this parameter can be ignored
            true
        );
    }
};
```

For the parameter acquisition method of `giscus`, please refer to：[giscus configuration](https://giscus.app/)

## Extended

When the configuration option enables the comment area by default, add the following code, the comment area will not be generated

```md
---
comment: false
---
```

When the configuration options do not enable the comment area by default, you can still enable the comment area on the current page through the following code

```md
---
comment: true
---
```

## more vitepress plugins

You may be interested in these plugins：
[Click me to view more vitepress plugins](https://github.com/T-miracle/vitepress-plugins)
