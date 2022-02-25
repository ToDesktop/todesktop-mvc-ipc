const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "..", "./index/index.js"),
    main: path.resolve(__dirname, "..", "./main/main.js"),
    aside: path.resolve(__dirname, "..", "./aside/aside.js"),
    spotlight: path.resolve(__dirname, "..", "./spotlight/spotlight.js"),
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  output: {
    // output config
    path: path.resolve(__dirname, ".."),
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "index", "./index.html"),
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "main", "./main.html"),
      chunks: ["main"],
      filename: "main.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "aside", "./aside.html"),
      chunks: ["aside"],
      filename: "aside.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "spotlight", "./spotlight.html"),
      chunks: ["spotlight"],
      filename: "spotlight.html",
    }),
  ],
};
