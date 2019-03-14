const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const SRC_DIR = path.resolve(__dirname, './src');
const DIST_DIR = path.resolve(__dirname, './dist');

const config = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    path: DIST_DIR,
    filename: 'index.js',
    libraryTarget: 'commonjs',
  },
  resolve: {
    extensions: ['.js', '.vue'],
  },
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
};

module.exports = config;
