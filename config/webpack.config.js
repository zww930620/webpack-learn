const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: {
    index: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    filename: "[name].[hash:8].js",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
  },
  plugins: [ new HtmlWebpackPlugin({
    title: "test",
    template: path.resolve(__dirname, "index.html"),
  })]
}

module.exports = config
