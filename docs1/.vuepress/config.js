const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')
const path = require('path')

module.exports = {
  base: "/TTQ/",
  dest: path.resolve(__dirname,'../../docs'),
  lang: 'zh-CN',
  title: 'Hello 甜甜圈~',
  description: '这是我的第一个 VuePress 站点',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  themeConfig: {
    nav: [
      {text: '指南',link:'/guide/install/install'}
    ],
  },
  theme: defaultTheme({
    // 在这里进行配置
  }),
  plugins: [
    searchPlugin({
      // 配置项
    }),
  ],
}