/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
  },
  distDir: ".next",
  trailingSlash: false,
};

module.exports = nextConfig;
