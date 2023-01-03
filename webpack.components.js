const glob = require('glob')
const { resolve } = require('path')
const path = require('path')
const entry = {}

!(async (dirPath, entry) => {
  const files = glob.sync(`${dirPath}/**/index.js`)
  for (const file of files) {
    const cmpName = file.split(/[/.]/)[2]
    entry[cmpName] = `./${file}`
  }
})('components/lib', entry)

module.exports = {
  entry,
  mode: 'production',
  output: {
    filename: '[name]/index.js',
    path: path.resolve(__dirname, 'dist/lib'),
    library: {
      name: '[name]',
      type: 'umd',
      umdNamedDefine: true,
    },
    // libraryTarget: 'umd',
  },
  module: {
    rules: [
      { test: /\.vue$/, use: [{ loader: 'vue-loader' }] },
      {
        test: /\.s?[ca]ss/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
      {
        test: /\.js/,
        use: [{ loader: 'babel-loader' }],
        include: [resolve('components/lib')],
      },
    ],
  },
}
