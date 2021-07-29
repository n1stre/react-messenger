const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CssModules = {
  loader: {
    loader: "css-loader",
    options: {
      importLoaders: 1,
      modules: true,
    },
  },
};

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "~": path.resolve(__dirname, "../src/"),
    },
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.(scss|sass)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        exclude: /\.module\.(scss|sass)$/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, CssModules.loader],
        include: /\.module\.css$/,
      },
      {
        test: /\.(scss|sass)$/,
        use: [MiniCssExtractPlugin.loader, CssModules.loader, "sass-loader"],
        include: /\.module\.(scss|sass)$/,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          "file-loader?hash=sha512&digest=hex&name=img/[contenthash].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ template: "public/index.html" }),
  ],
};
