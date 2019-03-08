const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, './src');
const DIST_DIR = path.resolve(__dirname, './dist');

const config = {
  entry: {
    index: ["babel-polyfill", `${SRC_DIR}/index.js`],
  },
  output: {
    path: DIST_DIR,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.vue'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [SRC_DIR],
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        include: [SRC_DIR],
        loader: 'vue-loader',
      },
      {
        test: /\.scss$/,
        include: [SRC_DIR],
        loaders: ["style-loader", "css-loader", "sass-loader"],
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: true,
          },
          sourceMap: true
        }
      }),
    ]
  }
};

module.exports = config;
