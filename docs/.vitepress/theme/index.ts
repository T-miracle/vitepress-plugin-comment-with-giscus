import DefaultTheme from 'vitepress/theme';
import { EnhanceAppContext, useData, useRoute } from 'vitepress';
import { toRefs } from "vue";
import giscusTalk from '../../../lib/giscus';

export default {
    ...DefaultTheme,
    enhanceApp(ctx: EnhanceAppContext) {
        DefaultTheme.enhanceApp(ctx);
    },
    setup() {
        // 获取前言和路由
        const { frontmatter } = toRefs(useData());
        const route = useRoute();
        giscusTalk({
            repo: 'T-miracle/blog',
            repoId: 'R_kgDOJCf-FQ',
            categoryId: 'DIC_kwDOJCf-Fc4CUohc',
            mapping: 'pathname',
            // darkTheme: 'dark_dimmed',
            // lightTheme: 'noborder_light'
        }, {
            frontmatter, route
        });
    }
};
