import Bar from "../../src/pressComponent/bar.vue"
// .vitepress/config.js
export default {
    // 站点级选项
    title: 'G-Chart',
    description: '自定义基础图表',
    base:"repo",
    themeConfig: {
      sidebar: [
        {
          text: '基础配置',
          link: '/',
        },
        {
          text: '图表',
          items: [
            { text: '柱形图', link: '/bar' },
            { text: 'k线图', link: '/kLine' },
            { text: '饼图', link: '/pie' },
          ]
        },
      ]
    },
    // enhanceApp({ app }) {
    //   app.component('Bar', Bar)
    // }
  }