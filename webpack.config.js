const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  resolve: {
    modules: [
      path.resolve('./lib'),
      path.resolve('./node_modules'),
      path.resolve('./__tests__')
    ]
  },
  entry: {
    vendor: [
      'babel-polyfill',
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'redux-thunk',
      'prop-types',
      'axios',
      'lodash.debounce',
      'lodash.pickby'
    ],
    app: ['./lib/renderers/dom.js']},
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/, 
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env', 'stage-2']
          }
        } 
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['public']),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
}
