module.exports = {
  headers:{
      "Access-Control-Allow-Origin": "https://simpletodoapi.herokuapp.com",
      "Access-Control-Allow-Credentials": "true"
  },
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    headers:{
      "Access-Control-Allow-Origin": "https://simpletodoapi.herokuapp.com",
      "Access-Control-Allow-Credentials": "true"
    },
    historyApiFallback: true,
    contentBase: './'
  }
};
