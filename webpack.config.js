const path = require('path'),
  webpack = require('webpack'),
  browserConfig = {
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
        }
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
  }

module.exports = [browserConfig]
