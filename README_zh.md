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
export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        // ...
    },
    setup() {
        // 获取前言
        const { frontmatter } = useData();
        // 评论组件
        giscusTalk(frontmatter, {
            repo: '你的github仓库',
            repoId: '你的仓库id',
            categoryId: '你的分类id',
            mapping: 'pathname'
        });
    }
};
```

`giscus` 的参数获取方式请看：[giscus配置获取](https://giscus.app/)


