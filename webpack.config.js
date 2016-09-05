var webpack = require("webpack");

// webpack.config.js
module.exports = {
  entry: './script.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel",
          query:{
            presets: ['react', 'es2015']
          }
        }
      ]
    }
};
