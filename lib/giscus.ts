import giscus from '@giscus/vue';
import { Component, createApp, h, nextTick, onMounted, Ref, watch } from 'vue';
import { PageData, Route } from 'vitepress';
import { GiscusProps } from '@giscus/vue/dist/types';

type vitepressAPI = {
    frontmatter: Ref<PageData['frontmatter']>,
    route: Route
}

/**
 * add comment container
 * <br>添加评论容器
 * @param props giscus setting (配置)
 * @param frontmatter frontmatter (前言)
 * @param defaultEnable default enable comment area (默认启用评论区)
 */
const setGiscus = (props: GiscusProps | {} = {}, frontmatter?: Ref<PageData['frontmatter']>, defaultEnable: boolean = true) => {
    const defaultProps: GiscusProps = {
        id: 'comment',
        host: 'https://giscus.app',
        category: 'General',
        mapping: 'pathname',
        term: 'Welcome to giscus!',
        reactionsEnabled: '1',
        inputPosition: 'top',
        lang: 'zh-CN',
        loading: 'lazy',
        repo: 'xxx/xxx',
        repoId: ''
    };
    const lightTheme = props.lightTheme || 'light';
    const darkTheme = props.darktheme || 'transparent_dark';
    // Delete the original comment container
    // 删除原有评论容器
    let oldCommentContainer = document.getElementById('giscus');
    if (oldCommentContainer) {
        oldCommentContainer.parentNode!.removeChild(oldCommentContainer);
    }
    console.log(frontmatter?.value.comment);
    if (frontmatter?.value.comment !== undefined) {
        // If comment is false, comments are not loaded
        // 如果 comment 为 false，则不加载评论
        if (!Boolean(frontmatter?.value.comment)) {
            return;
        }
    } else {
        if (!defaultEnable) {
            return;
        }
    }
    // If it is the homepage, do not add it
    // 如果是首页，则不添加
    if (!location.pathname || location.pathname === '/') {
        return;
    }
    const dark: boolean = !!document.querySelector('html')?.className;
    // Get the parent container and create a comment container
    // 获取父容器，并创建评论容器
    const docContent = document.getElementsByClassName('content-container')[0];
    if (docContent) {
        const bindGiscus = document.createElement('div');
        // Set the attribute and style of the comment container
        // 设置评论容器的属性及样式
        bindGiscus.setAttribute('id', 'giscus');
        bindGiscus.style.height = 'auto';
        bindGiscus.style.marginTop = '40px';
        bindGiscus.style.borderTop = '1px solid var(--vp-c-divider)';
        bindGiscus.style.paddingTop = '20px';
        // Add comment container
        // 添加评论容器
        docContent.append(bindGiscus);
        // Use vue to dynamically create comment components and bind them to the corresponding elements
        // 使用vue动态创建评论组件并绑定到相应元素上
        createApp({
            render: () => {
                return h(
                    (giscus as Component), { ...defaultProps, theme: dark ? darkTheme : lightTheme, ...props }
                );
            }
        }).mount('#giscus');
    }
};

/**
 * Listen to the page theme and change the theme of the comment container
 * <br>监听页面主题，更改评论容器的主题
 */
const setThemeWatch = (props: GiscusProps | {} = {}) => {
    const element: HTMLElement | Node | null = document.querySelector('html');
    const lightTheme = props.lightTheme || 'light';
    const darkTheme = props.darktheme || 'transparent_dark';
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type == 'attributes') {
                let comment: Element | null = document.getElementById('comment');
                comment?.setAttribute('theme', (element! as HTMLElement).className.indexOf('dark') !== -1 ? darkTheme : lightTheme);
            }
        });
    });
    observer.observe((element as Node), {
        attributeFilter: [ 'class' ]
    });
};

/**
 * initialize comment area
 * <br>初始化评论区
 * @param props giscus setting (giscus 配置)
 * @param vitepressObj frontmatter & routing (前言 & 路由)
 * @param defaultEnable default enable comment area (默认启用评论区)
 */
const giscusTalk = (props: GiscusProps, vitepressObj: vitepressAPI, defaultEnable: boolean = true) => {
    onMounted(() => {
        setGiscus(props, vitepressObj.frontmatter, defaultEnable);
        setThemeWatch(props);
    });
    watch(() => vitepressObj.route.path, () => nextTick(() => {
        setGiscus(props, vitepressObj.frontmatter, defaultEnable);
    }));
};

export default giscusTalk;
