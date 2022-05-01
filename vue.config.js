const { defineConfig } = require('@vue/cli-service')
const Dotenv = require('dotenv-webpack');
const path = require('path');
const ENV_DEV = 'dev';
const ENV_PROD = 'prod';

const getEnvironment = () => {
  console.log(process.env.NODE_ENV)
  if (process.env.NODE_ENV === 'production') {
    return ENV_PROD;
  }
  return ENV_DEV;
};
const ENV = getEnvironment();

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new Dotenv()
    ],
    output: ENV === ENV_PROD ? {
      filename: 'js/[name].[contenthash].js',
      chunkFilename: 'js/[name].[contenthash].js',
    } : undefined,
  },
  css: {
    extract: ENV === ENV_PROD ? {
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css',
    } : undefined,
    sourceMap: true,
  },
  outputDir: path.resolve(__dirname, './wwwroot/app'),
  publicPath: '/app/',
  productionSourceMap: false,
})
