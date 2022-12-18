const path = require('path')

module.exports = {
  base:'/chlorineUI/',
  title: 'Chlorine UI',
  description: '一个可能会令人窒息的组件库',
  themeConfig: {
    sidebar: [
      '/otherDocs/fastStart',
      {
        title: '基本组件',
        path: '/componentDocs/base/button',
        children: ['/componentDocs/base/button'],
      },
    ],
    nav: [
      { text: '快速开始', link: '/otherDocs/fastStart' },
      { text: '组件', link: '/componentDocs/base/button' },
      { text: 'Gitee', link: 'https://gitee.com/cmtlyt' },
      { text: 'GitHub', link: 'https://github.com/cmtlyt' },
    ],
  },
  alias: {
    styles: path.resolve(__dirname, './styles'),
    '@style': path.resolve(__dirname, './public/style'),
  },
}
