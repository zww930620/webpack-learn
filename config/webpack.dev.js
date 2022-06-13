const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const  { merge } = require('webpack-merge')
const common = require('./webpack.config.js')


const config = merge(common, {
  mode: 'development',
  devtool: "eval-cheap-module-source-map",
  devServer: {
    // static: './dist'
  },
})

module.exports = config
