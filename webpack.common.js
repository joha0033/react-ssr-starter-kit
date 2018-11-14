const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// SAGA IS NOT IN VENDOR (or in use) FILE - HOOKED UP BUT NOT NECESSARY YET (THUNK AS WELL)
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
      'redux-thunk',
      'react-redux',
      'prop-types',
      'axios',
      'lodash.debounce',
      'lodash.pickby'
    ],
    app: ['./lib/renderers/dom.js']},
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/, 
        exclude: [/node_modules/, /__tests__/, /__mocks__/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env', 'stage-2']
          }
        } 
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  optimization: {
    splitChunks:{
      chunks: 'async'
    } 
  }
}


