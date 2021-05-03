require('dotenv').config();
const { resolve } = require('path');
const withImages = require('next-images');

const nextConfig = withImages({
  webpack: (config) => {
    config.resolve.alias['~'] = resolve(__dirname, 'src');
    return config;
  },
  future: {
    webpack5: true,
  },
});

module.exports = nextConfig;
