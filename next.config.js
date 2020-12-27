const withCSS = require('@zeit/next-css');

module.exports = withCSS({
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
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ru/dark/home',
        permanent: true
      }
    ];
  }
});
