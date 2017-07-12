const webpack           = require('webpack')
const autoprefixer      = require('autoprefixer')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WriteFilePlugin   = require('write-file-webpack-plugin')

const path = require('path');

const THEME_NAME        = 'your_theme'
exports.THEME_NAME      = THEME_NAME

module.exports = {
  entry: './' + THEME_NAME + '/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../wp-content/themes/' + THEME_NAME + '/assets'),
    publicPath: path.resolve(__dirname, '../wp-content/themes/' + THEME_NAME + '/assets'),
  },
   module: {
    rules: [
      {test: /\.(js|jsx)$/, use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ["react", "stage-2", "es2015"]
          }
        }
      ]},
      {test: /(\.css|\.scss)$/, use: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'sass-loader?sourceMap']},
      {test: /\.(png|jpg)$/, loader: 'url?name=/wp-content/themes/' + THEME_NAME + '/assets/[path][name].[ext]?limit=1000'}      
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {context: __dirname + '/' + THEME_NAME + '/theme-files', from: './**/*', to: '../'}
    ], {ignore: ['./styles', './js', './index.js']}),
    new WriteFilePlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: () => [autoprefixer]
      }
    })
  ]
}
