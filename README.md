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

In the `index` file under the `.vitepress/theme` path

```ts
import DefaultTheme from 'vitepress/theme';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import { toRefs } from "vue";

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        // ...
    },
    setup() {
        // Get frontmatter and route
        const { frontmatter } = toRefs(useData());
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
            // i18n setting (Note: This configuration will override the default language set by lang)
            // Configured as an object with key-value pairs inside:
            // [your i18n configuration name]: [corresponds to the language pack name in Giscus]
            locales: {
                'zh-Hans': 'zh-CN',
                'en-US': 'en'
            },
            homePageShowComment: false, // Whether to display the comment area on the homepage, the default is false
            lightTheme: 'light', // default: `light`
            darkTheme: 'transparent_dark', // default: `transparent_dark`
            // ...
        }, {
            frontmatter, route
        },
            // Whether to activate the comment area on all pages.
            // The default is true, which means enabled, this parameter can be ignored;
            // If it is false, it means it is not enabled.
            // You can use `comment: true` preface to enable it separately on the page.
            true
        );
    }
};
```

For the parameter acquisition method of `giscus`, please refer to：[giscus configuration](https://giscus.app/)

[Click to see the list of currently supported languages](https://github.com/giscus/giscus/blob/main/lib/i18n.tsx#L45)

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

## change log

<details open>
  <summary>change log</summary>
  <ul>
    <li>
      <p>v1.1.15</p>
      <p>new i18n setting</p>
    </li>
    <li>
      <p>v1.1.10</p>
      <p>Now customizable day/night themes</p>
    </li>
    <li>
      <p>v1.1.9</p>
      <p>You can now set whether to enable configuration globally by default</p>
    </li>
  </ul>
</details>

## more vitepress plugins

You may be interested in these plugins：
[Click me to view more vitepress plugins](https://github.com/T-miracle/vitepress-plugins)
