const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "build"),
    historyApiFallback: true,
    host: "localhost",
    compress: true,
    hot: true,
    port: 3002,
    publicPath: "/",
  },
  devtool: "source-map",
});
