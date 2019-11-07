const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const browserConfig = {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
  },
  target: 'web',
  mode: 'development',
  entry: ['./src/browser/index.js'],
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.json($|\?)/,
        use: 'json-loader',
        type: 'javascript/auto'
      },
      {
        test: /\.css$/i,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
        ]
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true",
      'process.env': {
        __isBrowser__: true
      }
    })
  ]
};
const serverConfig = {
  target: 'node',
  externals: [nodeExternals()],
  mode: 'development',
  entry: ['./src/server/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.json($|\?)/,
        use: 'json-loader',
        type: 'javascript/auto'
      },
      {
        test: /\.css$/i,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
        ]
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false",
      'process.env': {
        __isBrowser__: false
      }
    })
  ]
};

module.exports = [browserConfig, serverConfig]
