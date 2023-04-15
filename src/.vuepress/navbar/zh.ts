import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/",
    {
        text: "科研",
        icon: "discover",
        prefix: "/research/",
        children: [
            {
                text: "基础知识",
                icon: "edit",
                prefix: "basic/",
                children: [
                    { text: "环境配置", icon: "edit", link: "envs" },
                    { text: "深度学习", icon: "edit", link: "deep-learn" }
                ]
            },
            {
                text: "论文阅读",
                icon: "edit",
                prefix: "papers/",
                children: [
                    {text: "RGB盲超分", icon: "edit", link: "blind-sr"},
                ]
            },
        ]
    },
    {
        text: "项目开发",
        icon: "edit",
        prefix: "/develops/",
        children: [
            { text: "前端", icon: "edit", link: "frontend/" },
            { text: "后端", icon: "edit", link: "backend/" },
        ],
    },
    {
        text: "其它",
        icon: "note",
        link: "others/",
    },
]);
