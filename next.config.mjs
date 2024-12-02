/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "**",
      },
    ],
  },
  // webpack: (config) => {
  //   // Disable Webpack caching (useful for debugging memory issues)
  //   config.cache = false;

  //   // Optional: Add performance optimizations if needed
  //   config.optimization = {
  //     ...config.optimization,
  //     splitChunks: {
  //       chunks: "all",
  //     },
  //   };

  //   return config;
  // },
};

export default nextConfig;
