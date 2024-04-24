import { RuleSetRule } from "webpack";

export function buildLoaders(): RuleSetRule[] {
  const loaders = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
  return [
    loaders
  ]
}