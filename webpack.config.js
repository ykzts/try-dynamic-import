const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');
const merge = require('webpack-merge');

const clientConfig = {
  devtool: 'source-map',
  entry: {
    main: path.join(__dirname, 'src', 'client.jsx'),
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        options: {
          babelrc: false,
          plugins: [
            'add-module-exports',
            'syntax-dynamic-import',
          ],
          presets: [
            ['env', {
              debug: true,
              targets: {
                browsers: [
                  'Chrome >= 55',
                ],
              },
            }],
            'react',
          ],
        },
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
  output: {
    crossOriginLoading: 'anonymous',
    filename: '[name].[chunkhash].js',
    path: path.join(__dirname, 'build', 'public'),
    publicPath: '/',
  },
  plugins: [
    new HtmlPlugin({
      template: path.join(__dirname, 'src', 'templates', 'index.ejs'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = (env) => {
  switch (env) {
    case 'production':
      return clientConfig;
    default:
      return merge(clientConfig, {
        output: {
          filename: '[name].js?[chunkhash]',
        },
      });
  }
};
