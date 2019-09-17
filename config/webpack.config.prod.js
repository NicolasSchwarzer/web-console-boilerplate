const { HashedModuleIdsPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const merge = require('webpack-merge');
const config = require('./webpack.config.default');

module.exports = merge(config, {
  mode: 'production', // Tree shaking enabled.
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({ // Should specify js minimizer when overrides.
        terserOptions: {
          output: {
            ascii_only: true, // Escape Unicode characters in strings and regexps.
          },
        },
      }),
      new OptimizeCssAssetsWebpackPlugin(), // Also minimize css chunk size.
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Clean build folder(s) before output.
    new HashedModuleIdsPlugin(), // Persist module ids with the hash of module path.
  ],
});
