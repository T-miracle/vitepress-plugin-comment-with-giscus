import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
    lang: 'en-US',
    description: 'Vite & Vue powered static site generator.',

    themeConfig: {
        sidebar: [
            { text: 'English Demo', link: '/index.md' },
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Evan You'
        }
    }
})
