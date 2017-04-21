'use strict';

// Modules
var webpack = require('webpack');
const path = require('path');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var ENV = process.env.npm_lifecycle_event;
var isTest = ENV === 'test' || ENV === 'test-watch';
var isProd = ENV === 'build';

module.exports = function makeWebpackConfig() {
  var config = {};

  config.entry = isTest ? void 0 : {
    app: './src/js/app.ts'
  };

  config.output = {
    path: __dirname + '/dist',
    publicPath: isProd ? '/' : 'http://localhost:9999/',
    filename: isProd ? '[name].[hash].js' : '[name].bundle.js',
    chunkFilename: isProd ? '[name].[hash].js' : '[name].bundle.js'
  };

  config.devtool = 'eval-source-map';

  config.module = {
    rules: [{
      test: /\.ts$/,
      loader: ['babel-loader', 'ts-loader'],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: [
          {loader: 'css-loader', query: {sourceMap: true}},
          {loader: 'postcss-loader'}
        ],
      })
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      loader: 'file-loader'
    }, {
      test: /\.html$/,
      loader: 'raw-loader'
    }]
  };

  config.resolve =  {
        extensions: [".ts", ".js"],
        modules: [path.resolve('./src'), 'node_modules']
    },

  config.plugins = [
    new webpack.LoaderOptionsPlugin({
      test: /\.scss$/i,
      options: {
        postcss: {
          plugins: [autoprefixer]
        }
      }
    })
  ];

  config.plugins.push(
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin({filename: 'css/[name].css', allChunks: true})
  )

  config.devServer = {
    contentBase: './src',
    stats: 'minimal'
  };

  return config;
}();
