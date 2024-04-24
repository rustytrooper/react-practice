import WebpackConfig from "./config/build/buildWebpackConfig";
import { PathsType } from "./config/types/helper";
const path = require('path')
// const HTMLWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')
// import { buildPlugins } from './config/build/buildPlugins';
// import { buildLoaders } from './config/build/buildLoaders';
// import { buildResolvers } from './config/build/buildResolvers';
// import path from 'path';
import webpack from 'webpack';

const pathOptions: PathsType = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html')
}

const mode = 'development';
const isDev = mode === 'development'

const config: webpack.Configuration = WebpackConfig({
  mode: 'development',
  paths: pathOptions,
  isDev
})

export default config