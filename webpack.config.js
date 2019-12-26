const path = require('path');
const webpack = require('webpack')

module.exports = {
  mode: "development",
  entry: "./App.js",
  output: {
    publicPath:'/dist',
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    host: "localhost",
    port: 3000,
    // open: true,
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
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