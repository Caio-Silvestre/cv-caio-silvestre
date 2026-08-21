/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: [
          "**/node_modules/**",
          "**/.git/**",
          "**/public/assets/libs/**",
          "**/public/assets/videos/**",
          "**/public/assets/docs/**",
        ],
      };
    }
    return config;
  },
};

module.exports = nextConfig;
