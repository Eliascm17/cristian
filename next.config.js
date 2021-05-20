module.exports = {
  future: {
    webpack5: true,
  },
  images: {
    domains: ["github.com"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};
