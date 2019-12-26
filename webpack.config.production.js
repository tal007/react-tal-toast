const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: "development",
  entry: "./App.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    libraryTarget: "umd",
    library: 'ReactCmp'
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
}