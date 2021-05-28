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
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     "/": { page: "/" },
  //     "/photos": { page: "/photos" },
  //     "/film": { page: "/film" },
  //     "/contact": { page: "/contact" },
  //     "/photos/fashion": { page: "/photos/fashion" },
  //     "/photos/fashion/shoot-1": {
  //       page: "/photos/fashion/[slug]",
  //       query: { slug: "shoot-1" },
  //     },
  //     "/photos/personal": { page: "/photos/personal" },
  //     "/photos/personal/Caleb": {
  //       page: "/photos/personal/[slug]",
  //       query: { slug: "Caleb" },
  //     },
  //     "/photos/portraits": { page: "/photos/portraits" },
  //     "/photos/portraits/Jess": {
  //       page: "/photos/portraits/[slug]",
  //       query: { slug: "Jess" },
  //     },
  //     "/photos/promos": { page: "/photos/promos" },
  //     "/photos/promos/HEB": {
  //       page: "/photos/promos/[slug]",
  //       query: { slug: "HEB" },
  //     },
  //     "/photos/weddings": { page: "/photos/weddings" },
  //     "/photos/weddings/Aliza & Chris": {
  //       page: "/photos/weddings/[slug]",
  //       query: { slug: "Aliza & Chris" },
  //     },
  //   };
  // },
};
