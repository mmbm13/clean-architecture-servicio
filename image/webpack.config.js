/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable comma-dangle */
const path = require('path');
const nodeExternals = require('webpack-node-externals');
// path: la ubicacion del proyecto

const { NODE_ENV } = process.env;

module.exports = {
  name: 'express-server',
  entry: './src/index.ts',
  target: 'node',
  context: __dirname,
  node: {
    __filename: true,
    __dirname: true
  },
  mode: NODE_ENV,
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(ts)$/,
        use: [
          'ts-loader'
        ]
      }
    ]
  }
};
