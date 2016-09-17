var webpack = require('webpack');
module.exports = {
  entry: './jsrc/theOne.js',
  // output: {
  // path: './indexT.html'
  // // filename: 'bundle.js'
  // },
  devServer: {
    inline: true,
    publicPath: '/',
    filename: 'bundle.js',
    //contentBase: './indexT.html',
    port: 8087
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: [
            'react-html-attrs', 
            'transform-class-properties', 
            'transform-decorators-legacy', 
            'transform-object-rest-spread'
          ]
        }
      }
    ]
  },
  plugins: [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurrenceOrderPlugin()
  //new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ]
}
