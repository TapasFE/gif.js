const webpack = require('webpack');

module.exports = {
  module: {
    loaders: [{
      test: /\.coffee$/,
      loader: 'coffee',
    }],
  },
};
