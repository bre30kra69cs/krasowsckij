const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  baseUrl: '/ru/dark',
  webpack(config) {
    config.module.rules.push({
      test: /\.tsx$/,
      use: [
        {
          loader: '@linaria/webpack-loader',
          options: {
            sourceMap: process.env.NODE_ENV !== 'production'
          }
        }
      ]
    });

    return config;
  }
});
