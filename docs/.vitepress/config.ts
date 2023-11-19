import { defineConfig } from 'vitepress';

export default defineConfig({
    appearance: true,
    markdown: {
        theme: 'monokai'
    },
    // 主题配置
    themeConfig: {
        // 左侧栏目录配置
        sidebar: [
            {text: 'index', link : '/index.md'},
            {text: 'Test', link : '/Test.md'},
        ]
    }
});
