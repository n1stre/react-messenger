const { join } = require("path");
const { merge } = require("webpack-merge");
const webpack = require("webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");

const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  mode: "development",
  entry: ["./src/index.tsx"],
  output: {
    filename: "js/bundle.[contenthash].min.js",
    publicPath: "/",
  },
  devServer: {
    contentBase: join(__dirname, "../public"),
    hot: true,
    open: true,
    quiet: true, // because we're using FriendlyErrorsPlugin
    historyApiFallback: true, // https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsPlugin(),
    new ForkTsCheckerWebpackPlugin({ async: false }),
  ],
});
