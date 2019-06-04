const { HashedModuleIdsPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const config = require('./webpack.config.default');

module.exports = merge(config, {
  mode: 'production', // Tree shaking enabled
  plugins: [
    new CleanWebpackPlugin(), // Clean build folder(s) before output
    new HashedModuleIdsPlugin(), // Persist module ids with the hash of module path
  ],
});
