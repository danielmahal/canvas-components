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
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },

      {
        test: /\.(html|png)$/,
        loader: 'file?name=[name].[ext]',
      },
    ],
  },
};
