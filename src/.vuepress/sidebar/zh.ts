import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/": [
        "",
        {
            text: "科研相关",
            icon: "creative",
            prefix: "research/",
            children: "structure"
        },
        {
            text: "开发",
            icon: "creative",
            prefix: "develops/",
            children: "structure"
        },
        // {
        //     text: "文章",
        //     icon: "note",
        //     prefix: "posts/",
        //     children: "structure",
        // },
        // "intro",
        // "slides",
    ],
});
