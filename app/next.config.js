require("dotenv").config();

const path = require("path");
const Dotenv = require("dotenv-webpack");
const withImages = require("next-images");

module.exports = withImages({
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true,
      }),
    ];

    return config;
  },
});
