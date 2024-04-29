import { AvailableLanguage } from '@giscus/vue';
import { Ref } from 'vue';
import { PageData, Route } from 'vitepress';
import { GiscusProps } from '@giscus/vue/dist/types';
type vitepressAPI = {
    frontmatter: Ref<PageData['frontmatter']>;
    route: Route;
};
type GiscusPropsType = GiscusProps & {
    lightTheme?: string;
    darkTheme?: string;
    lang?: AvailableLanguage;
    locales?: Record<string, string>;
    homePageShowComment?: boolean;
};
/**
 * initialize comment area
 * <br>初始化评论区
 * @param props giscus setting (giscus 配置)
 * @param vitepressObj frontmatter & routing (前言 & 路由)
 * @param defaultEnable default enable comment area (默认启用评论区)
 */
declare const giscusTalk: (props: GiscusPropsType, vitepressObj: vitepressAPI, defaultEnable?: boolean) => void;
export default giscusTalk;
