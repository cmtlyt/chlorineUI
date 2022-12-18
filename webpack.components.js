const glob = require('glob')
const path = require('path')
// const { VueLoaderPlugin } = require('vue-loader')

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
  mode: 'development',
  output: {
    filename: '[name].umd.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'clui',
    libraryTarget: 'umd',
  },
  // plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      { test: /\.vue$/, use: [{ loader: 'vue-loader' }] },
      { test: /\.s[ca]ss/, use: ['style-loader', 'css-loader', 'sass-loader'] },
    ],
  },
}
