const webpack = require('webpack');

const dev = process.env.NODE_ENV !== 'production';

module.exports = {
  context: __dirname + '/src',
  devtool: dev && 'source-map',

  entry: [
    './index.js',
    './index.html',
  ],

  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },

      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': `"${dev ? 'development' : 'production'}"`,
      },
    }),
  ],
};
