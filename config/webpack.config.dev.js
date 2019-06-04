const { join } = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.config.default');

module.exports = merge(config, {
  mode: 'development',
  devServer: {
    compress: true, // Enable gzip compress
    contentBase: join(__dirname, '../build'), // Base folder to serve
    historyApiFallback: true, // Enable SPA support
    open: true, // Open your default browser on start
    overlay: true, // Show compilation error in the browser window overlay
    port: 8000,
    watchOptions: {
      ignored: /node_modules/,
    },
  },
  devtool: 'source-map',
});
