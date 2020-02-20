const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.[hash:8].js'
  },
  devServer: {
    port: '3000',
    progress: true,
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader'] // css-laoder 处理@import导入语法，style-loader把css插入到head标签中成为外部文件
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
};