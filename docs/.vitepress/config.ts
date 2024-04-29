import { defineConfig } from 'vitepress';
import { en } from './en'
import { zh } from './zh'

export default defineConfig({
    appearance: true,
    markdown: {
        theme: 'monokai'
    },
    // 主题配置
    /* themeConfig: {
        // 左侧栏目录配置
        sidebar: [
            {text: 'index', link : '/index.md'},
            {text: 'Test', link : '/Test.md'},
        ]
    } */
    locales: {
        root: { label: 'English', ...en },
        zh: { label: '简体中文', ...zh },
    }
});
