const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
// const isDevelopment = process.env.NODE_ENV !== "production";

const htmlWebPackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  // mode: "development", // production
  // mode: isDevelopment ? "development" : "production",
  mode: "production",
  devtool: "hidden-source-map",
  resolve: {
    extensions: [".jsx", ".js"]
  },

  entry: {
    app: "./src/index"
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },

  plugins: [htmlWebPackPlugin],
  output: {
    path: path.resolve("dist"),
    filename: "[name].js"
  }
};
