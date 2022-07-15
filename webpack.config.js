const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin(
    {
      template: './client/index.html',
    }
  ),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ],
  },
  devServer: {
    // static: {
    // directory: path.join(__dirname, 'dist'),
    // publicPath: '/',
    // },
    // historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3333',
        pathRewrite: { '^/api': '' },
      }
    }
    ,
    // compress: true,
    // hot: true,
    // open: true,
    port: 8080,
  }
}