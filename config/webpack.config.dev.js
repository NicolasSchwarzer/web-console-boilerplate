const { join } = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.config.default');

const devConfig = merge(config, {
  mode: 'development',
  devServer: {
    compress: true, // Enable gzip compress.
    contentBase: join(__dirname, '../build'), // Base folder to serve.
    historyApiFallback: true, // Enable SPA support.
    open: true, // Open your default browser on start.
    overlay: true, // Show compilation error in the browser window overlay.
    port: 8000,
    watchOptions: {
      ignored: /node_modules/,
    },
  },
  devtool: 'source-map',
});

// Print detail filename and line number in the component stack trace for error boundary.
devConfig.module.rules[0].use.options.plugins.push('@babel/plugin-transform-react-jsx-source');

// Use '[path][name]__[local]' in css modules for development in favor of better debugging.
devConfig.module.rules[1].use[1].options.modules.localIdentName = '[path][name]__[local]';

module.exports = devConfig;
