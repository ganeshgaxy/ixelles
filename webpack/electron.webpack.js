const path = require('path')
const nodeExternals = require('webpack-node-externals');

const rootPath = path.resolve(__dirname, '..')

module.exports = {
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  devtool: 'source-map',
  entry: path.resolve(rootPath, 'electron', 'main.ts'),
  target: 'electron-main',
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  node: {
    __dirname: false
  },
  output: {
    path: path.resolve(rootPath, 'dist'),
    filename: '[name].js'
  }
}
