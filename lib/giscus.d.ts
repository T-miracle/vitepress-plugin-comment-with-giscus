import { Ref } from 'vue';
import { PageData, Route } from 'vitepress';
import { GiscusProps } from '@giscus/vue/dist/types';
type vitepressAPI = {
    frontmatter: Ref<PageData['frontmatter']>;
    route: Route;
};
/**
 * 创建评论区
 * @param props giscus配置
 * @param vitepressObj 前言和路由
 */
declare const giscusTalk: (props: GiscusProps, vitepressObj: vitepressAPI) => void;
export default giscusTalk;
