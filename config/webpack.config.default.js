const { join } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['@babel/polyfill', join(__dirname, '../src/index.jsx')],
  },
  output: {
    // Use [chunkhash] to persist chunk (js entry file) hash.
    chunkFilename: 'public/[id].[chunkhash].js', // Non-entry chunk file name.
    filename: 'public/[id].[chunkhash].js', // Entry chunk file name.
    path: join(__dirname, '../build'),
    publicPath: '/', // Base url to access static assets.
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false, // Do not search relative configuration files.
            configFile: false, // Do not use project-wide configuration file.
            cacheDirectory: true, // Cache loader results in 'node_modules/.cache/babel-loader'.
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
            plugins: [
              // Ant design supports tree shaking, but it needs additional import of css,
              // so we use import plugin to achieve import on demand & auto css import:
              // https://ant.design/docs/react/introduce#Use-modularized-antd
              ['babel-plugin-import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
              // Decorator must comes before class-properties, and legacy must comes with loose:
              // https://babeljs.io/docs/en/babel-plugin-proposal-decorators#note-compatibility-with-babel-plugin-proposal-class-properties
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              '@babel/plugin-transform-runtime', // Externalise references to helpers and builtins.
            ],
          },
        },
      },
      {
        test: /\.scss$/, // Use scss to write styles.
        exclude: /node_modules/, // Extract app's css chunk.
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true, // Enable css modules.
              localIdentName: '[local]-[hash:base64:5]', // Local unique name for, e.g. class.
              importLoaders: 2, // Transformed by 2 loaders (sass & postcss) before @import.
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        include: /node_modules/, // Extract vendors' css chunk.
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@': join(__dirname, '../src'), // Alias corresponding to paths in jsconfig.json.
    },
    extensions: ['.js', '.jsx', '.json'],
  },
  // Optimization for persistent cache:
  // https://webpack.js.org/guides/caching
  optimization: {
    namedChunks: true, // Persist chunk ids with the chunk name.
    runtimeChunk: 'single', // Extract webpack runtime & manifest.
    splitChunks: {
      cacheGroups: {
        // Extract vendors' libraries.
        vendor: {
          test: /node_modules/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    // Determine used & unused exports for each module, prerequisite for tree shaking.
    usedExports: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Use [contenthash] to persist css chunk (entry file) hash.
      chunkFilename: 'public/[id].[contenthash].css', // Non-entry chunk file name.
      filename: 'public/[id].[contenthash].css', // Entry chunk file name.
    }),
    new HtmlWebpackPlugin({
      chunks: ['runtime', 'vendors', 'app'], // inject runtime, vendors & app chunk.
      template: join(__dirname, '../public/index.html'),
    }),
  ],
  performance: {
    hints: false, // Do not warn or report errors when any chunk's size exceeds 250kb.
  },
};
