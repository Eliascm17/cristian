module.exports = {
  future: {
    webpack5: true,
  },
  images: {
    domains: ["*"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};
