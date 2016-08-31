const config = require('./webpack.base.config');

module.exports = Object.assign({}, config, {
  entry: {
    'gif.worker': './src/gif.worker.coffee',
  },
  output: {
    path: 'lib',
    filename: '[name].js',
  },
});
