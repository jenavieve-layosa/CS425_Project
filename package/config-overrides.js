const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = function override(config, env) {
  // Add the MonacoWebpackPlugin to the webpack config
  config.plugins.push(new MonacoWebpackPlugin({
    languages: ['python'],
  }));
  return config;
}