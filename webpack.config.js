'use strict';

const path = require('path'),
      webpack = require('webpack');

module.exports = {
  // 页面入口文件配置
  entry: path.join(__dirname, 'src/main.js'),
  // 入口文件输出配置
  output: {
    path: path.join(__dirname, 'static/js'),
    filename : '[name].bundle.js'
  },
  module: {
    // 加载器配置
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        loader: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version", "Firefox 15"]}!sass-loader?outputStyle=expanded'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file-loader'
      }
    ]
  },
  // 其他解决方案配置
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.json']
  },
  // 插件项
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ]
};