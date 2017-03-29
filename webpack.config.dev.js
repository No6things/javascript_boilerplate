import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import NgAnnotatePlugin from "ng-annotate-webpack-plugin";

export default {
  resolve: {
    descriptionFiles: ["package.json"],
    extensions: ["*", ".js", ".jsx", ".json"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    enforceExtension: false,
    mainFiles: ["main", "name"],
    alias: {
      Components: path.resolve(__dirname, "src/components/"),
      Services: path.resolve(__dirname, "src/services/"),
      Directives: path.resolve(__dirname, "src/directives/")
    }
  },
  devtool: "inline-source-map",
  entry: {
    app: path.resolve(__dirname, "src/index"),
    vendor: ["angular"]
  },
  target: "web",
  output: {
    path: path.resolve(__dirname, "src"),
    publicPath: "/",
    filename: "[name].js"
  },
  plugins: [
    new webpack.ProvidePlugin({
      'angular': 'angular',
      'window.jQuery': 'jquery'
    }),

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
      template: "src/index.html",
      inject: true
    })
  ],
  module: {
    loaders: [
      {
        test: require.resolve('angular'),
        loader: 'exports-loader?window.angular'
      },
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader"
        }]
      },
      {
        test: /\.js$/,
        exclude: ["node_modules"],
        use: [{
          loader: "babel-loader"
        }]
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
      },
      {
        test: /\.css$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }]
      },
      {
        test: /\.(png|jpg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 25000
          }
        }]
      },
      {
        test: /\.woff$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }]
      },
      {
        test: /\.woff2$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }]
      },
      {
        test: /\.ttf$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }]
      },
      {
        test: /\.eot$/,
        use: [{
          loader: 'file-loader'
        }]
      },
      {
        test: /\.svg$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }]
      }
    ]
  }
}
