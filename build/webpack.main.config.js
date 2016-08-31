const config = require('./webpack.base.config');

module.exports = Object.assign({}, config, {
  entry: {
    gif: './src/gif.coffee',
  },
  output: {
    path: 'lib',
    filename: '[name].js',
    library: 'GIF',
    libraryTarget: 'commonjs2',
  },
});
