import path from 'path';
import { WebpackPluginInstance, ProgressPlugin } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin'
import { BuildOptionsType } from 'config/types/helper';

export function buildPlugins({ paths }: BuildOptionsType): WebpackPluginInstance[] {
  return [
    new ProgressPlugin(),
    new HTMLWebpackPlugin(
      {
        template: paths.html
      }
    ),
  ]
}