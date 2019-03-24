const path = require('path');

module.exports = {
  entry: {
    app: ['babel-polyfill', path.resolve(__dirname, '../src/index.js')],
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
    filename: 'public/[name].[hash:6].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
};
