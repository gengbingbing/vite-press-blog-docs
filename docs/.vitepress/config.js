module.exports = {
  title: "Tengyu Blog",// 网站标题
  description: '我的vitepress博客.', //网站描述
  base: '/', //  部署时的路径 默认 /  可以使用二级地址 /base/
  // lang: 'en-US', //语言
  repo: 'vuejs/vitepress',
  head: [
      // 改变title的图标
      [
          'link',
          {
              rel: 'icon',
              href: '/img/logo.png',//图片放在public文件夹下
          },
      ],
  ],
  // 主题配置
  themeConfig: {
    // 展示搜索框
    algolia: {
      appKey: '',
      indexName: '',
      searchParameters: {
        faeFilters: ['tags:guide,api']
      }
    },
    //   头部导航
    nav: [
        { text: '首页', link: '/' },
        { text: '文档', link: '/doc/01.Hook概述' },
        { text: '关于', link: '/about/' },
        {
          text: "Drop Menu",
          items: [
            { text: 'Item A', link: '/item-1' },
            { text: 'Item B', link: '/item-2' },
            { text: 'Item C', link: '/item-3' }
          ]
        }
    ],
    //   侧边导航
    sidebar: {
      "/doc/": [
        {
          text: "《React》笔记",
          items: [
            {
              text: "Hook概述",
              link: "/doc/01.Hook概述",
            },
            {
              text: "State Hook",
              link: "/doc/02.使用StateHook",
            },
          ],
        },
        {
          text: "vue教程",
          items: [
            {
              text: "MVVM模式",
              link: "/doc/MVVM模式",
            },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://gitee.com/bingtengaoyu" },
      { icon: "twitter", link: "..." },
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
        },
        link: "...",
      },
    ],
  },
}