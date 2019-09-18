const { join } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: [
      // As of babel 7.4.0, @babel/polyfill has been deprecated,
      // in favor of directly including core-js/stable (to polyfill ECMAScript features),
      // and regenerator-runtime/runtime (needed to use transpiled generator functions),
      // for more information: https://babeljs.io/docs/en/next/babel-polyfill.html
      'core-js/stable',
      'regenerator-runtime/runtime',
      join(__dirname, '../src/index.jsx'),
    ],
  },
  output: {
    // Use [contenthash] to persist chunk (js entry file) hash.
    chunkFilename: 'public/[id].[contenthash].js', // Non-entry chunk file name.
    filename: 'public/[id].[contenthash].js', // Entry chunk file name.
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
        // Please note that import same scss file in two different scss files,
        // will produce style code duplication,
        // because import handled by sass-loader is beyond webpack module mechanism,
        // only the css we got after sass-loader processing is treated as a module.
        test: /\.scss$/, // Use scss to write styles.
        exclude: /node_modules/, // Extract app's css chunk.
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: { // Enable css modules.
                localIdentName: '[local]--[hash:base64:5]', // Local unique name for, e.g. class.
                context: join(__dirname, '../src'), // Use src directory as basic loader context.
              },
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
      {
        test: /\.(?:bmp|gif|jpe?g|png)$/, // Resolve all image files.
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192, // Use default fallback file-loader if file size equals or exceeds limit.
            // Options for default fallback file-loader,
            // persists files' relative paths in the output directory,
            // with 20 length content hash for persistant cache.
            name: '[path][name].[contenthash:20].[ext]',
            outputPath: 'public/assets',
            context: 'src/assets',
          },
        },
      },
      {
        test: /\.(?:eot|otf|svg|ttf|woff2?)$/, // Resolve all font & svg files.
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[contenthash:20].[ext]',
            outputPath: 'public/assets',
            context: 'src/assets',
          },
        },
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
    // Override partial default splitChunks configuration:
    // https://webpack.js.org/plugins/split-chunks-plugin/#optimizationsplitchunks
    splitChunks: {
      minSize: 0, // Allow chunk to be generated no matter what chunk size.
      cacheGroups: {
        // Extract vendors' libraries into one chunk.
        vendors: {
          test: /node_modules/,
          name: 'vendors',
          chunks: 'all',
          priority: -10,
        },
        // Extract common code into one chunk, which will be loaded on demand,
        // except for code also imported in app entry chunk,
        // and except for code in node_modules due to priority too.
        default: {
          name: 'common',
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
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
