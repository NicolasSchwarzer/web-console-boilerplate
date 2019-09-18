const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const merge = require('webpack-merge');
const config = require('./webpack.config.prod');

module.exports = merge(config, {
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
});
