import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import NgAnnotatePlugin from 'ng-annotate-webpack-plugin';

export default {
  resolve: {
    descriptionFiles: ['bower.json', 'package.json'],
    extensions: ['*', '.js', '.jsx', '.json'],
    modules: [path.resolve(__dirname, 'src'), 'bower_components', 'node_modules'],
    enforceExtension: false,
    mainFiles: ['main', 'name']

  },
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new NgAnnotatePlugin({
      add: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
      noInfo: true // set to false to see a list of every file being bundled.
    }),
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
  ],
  module: {
    loaders: [
      {   
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
        }, {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
        }]
      }
    ]
  }
}
