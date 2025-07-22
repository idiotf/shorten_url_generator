//@ts-check

import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

/** @typedef {import('webpack').Configuration} Configuration */
/** @type {Configuration} */
const config = {
  mode: 'production',
  entry: './src',
  resolve: {
    extensions: ['.css', '.js', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
  },
  output: {
    filename: 'index.js',
    path: path.resolve(import.meta.dirname, 'build/dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        exclude: /node_modules|\.d\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.d\.ts$/,
        use: 'ignore-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin,
  ],
  watchOptions: {
    ignored: /build/,
  },
}

export default config
