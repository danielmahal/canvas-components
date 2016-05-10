module.exports = {
  context: __dirname + '/src',
  devtool: 'source-map',

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
        test: /\.(html|png)$/,
        loader: 'file?name=[name].[ext]',
      },
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
