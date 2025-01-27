/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve = {
        ...(config.resolve || {}),
        fallback: {
          ...(config.resolve?.fallback || {}),
          fs: false,
          net: false,
          tls: false,
          dns: false,
          child_process: false,
          "fs/promises": false,
        },
      };
    } else {
      if (typeof config.externals === "undefined") {
        config.externals = [];
      }

      if (Array.isArray(config.externals)) {
        config.externals.push({
          "react-syntax-highlighter": "commonjs react-syntax-highlighter",
        });
      } else if (typeof config.externals === "object") {
        config.externals = {
          ...config.externals,
          "react-syntax-highlighter": "commonjs react-syntax-highlighter",
        };
      } else {
        console.warn(
          "Unsupported `externals` type. Unable to add `react-syntax-highlighter`."
        );
      }
    }

    return config;
  },
};

module.exports = nextConfig;
