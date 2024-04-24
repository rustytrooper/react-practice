export type ModeType = 'development' | 'production'
export type PathsType = {
  entry: string,
  build: string,
  html: string
}
export type BuildOptionsType = {
  mode: ModeType,
  paths: PathsType,
  isDev: boolean
}
