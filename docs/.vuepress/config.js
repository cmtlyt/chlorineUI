const path = require('path')
const VueExamplePlugin = require('vuepress-plugin-vue-example')

module.exports = {
  base: '/chlorineUI/',
  title: 'Chlorine UI',
  description: '一个可能会令人窒息的组件库',
  themeConfig: {
    sidebar: [
      '/otherDocs/fastStart',
      {
        title: '基本组件',
        path: '/componentDocs/base/button',
        children: ['/componentDocs/base/button', '/componentDocs/base/icon', '/componentDocs/base/viewWindow'],
      },
    ],
    nav: [
      { text: '快速开始', link: '/otherDocs/fastStart' },
      { text: '组件', link: '/componentDocs/base/button' },
      { text: 'GitHub', link: 'https://github.com/cmtlyt/chlorineUI' },
    ],
  },
  alias: {
    styles: path.resolve(__dirname, './styles'),
    '@style': path.resolve(__dirname, './public/style'),
  },
  plugins: [
    VueExamplePlugin({
      componentsPath: '/docs/examples/',
    }),
  ],
}
