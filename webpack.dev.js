const {merge} = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    proxy: {
      '/login': {
        target: 'http://localhost:7777/app/main',
        changeOrigin: true,
      },
      '/register': {
        target: 'http://localhost:7777/app/main/auth/register',
        changeOrigin: true,
      },
      '/donasi': {
        target: 'http://localhost:7777/app/main/donasi',
        changeOrigin: true,
      },
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
    static: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
  },
});
