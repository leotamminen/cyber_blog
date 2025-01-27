import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
  webpack: (config: Configuration, { isServer }: { isServer: boolean }) => {
    if (!isServer) {
      // Ensure resolve and fallback exist before modifying them
      config.resolve = {
        ...(config.resolve || {}),
        fallback: {
          ...(config.resolve?.fallback || {}),
          fs: false, // File system module
          net: false, // Network module
          tls: false, // TLS/SSL module
          dns: false, // DNS module
          child_process: false, // Spawn processes module
          "fs/promises": false, // Promises version of fs
        },
      };
    } else {
      // Correctly handle externals for the server-side
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

export default nextConfig;
