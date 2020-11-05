const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const TS_CONFIG_DIR = __dirname;

const getAlias = () => {
  const { paths, baseUrl } = require("./tsconfig.json").compilerOptions;

  const alias = {};

  for (const tsPath of Object.entries(paths)) {
    const key = tsPath[0].replace("/*", "");
    const value = tsPath[1][0].replace("/*", "");

    alias[key] = path.join(TS_CONFIG_DIR, baseUrl, value);
  }

  return alias;
};

module.exports = {
  entry: path.join(__dirname, "src/index.tsx"),
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: getAlias(),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  output: {
    filename: "bundle.js",
    publicPath: "/",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
};
