import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
  webpack: (config: Configuration, { isServer }: { isServer: boolean }) => {
    if (!isServer) {
      // Prevent Node.js modules from being bundled for the client side
      config.resolve = {
        ...config.resolve,
        fallback: {
          ...config.resolve?.fallback,
          fs: false, // File system module
          net: false, // Network module
          tls: false, // TLS/SSL module
          dns: false, // DNS module
          child_process: false, // Spawn processes module
          "fs/promises": false, // Promises version of fs
        },
      };
    }
    return config;
  },
};

export default nextConfig;
