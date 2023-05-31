/** @type {import('next').NextConfig} */
const nextConfig = {
  // assetPrefix: ".",
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      "github-readme-stats.vercel.app",
      "ghchart.rshah.org",
    ],
    // unoptimized: true,
  },
  reactStrictMode: true,
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
}

module.exports = nextConfig
