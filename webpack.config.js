const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// config.output.path = require('path').resolve('./interface/dist');

module.exports = {
  entry: './src/frontend/index.ts',
  mode: 'none',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main-[id]-[hash].js',
    publicPath: './',
    clean: true,
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve(__dirname, './babel.config.js'),
            }
          },

        ],
        exclude: [
          // path.resolve(__dirname, "../../project"),
          path.resolve(__dirname, "node_modules"),
        ]

      },

      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'postcss-loader',

        ],

      },
    ]
  },



  plugins: [
    new TsconfigPathsPlugin(),
    new Dotenv(),
    // new SpriteLoaderPlugin({

    // }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new webpack.SourceMapDevToolPlugin({
      test: /\.tsx?$/,
      filename: './dist/maps/[file].map.[query]',
      include: path.resolve(__dirname, 'src/'),
    }),

    new ESLintPlugin({
      files: path.resolve(__dirname, 'src'),

    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
  ],
  watchOptions: {
    ignored: [
      "node_modules",
      "**/node_modules"
    ]
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),

    },

    watchFiles: [
      './src/frontend/src/**/*.tsx',
      './src/frontend/src/**/*.ts',
      './src/frontend/src/*.ts',
    ],

    compress: true,
    historyApiFallback: true,
    open: true,
    // port: 8080
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".svg"],
    modules: [
      path.resolve(__dirname, "./.browserslistrc"),
      path.resolve(__dirname, "node_modules"),
      path.resolve(__dirname, "dist")
    ],

    alias: {
      // '@Websocket': path.resolve(__dirname, "src/scripts/websockets/index.ts"),
      "@Interfaces": path.resolve(__dirname, "src/frontend/src/interfaces.ts"),
      "@relevant": path.resolve(__dirname, "src/frontend/src/relevant"),
      // "@Service": path.resolve(__dirname, "src/scripts/chat"),
    }
  },

};
