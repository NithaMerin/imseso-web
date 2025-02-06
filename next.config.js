/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", // Important for static export
  assetPrefix: isProd ? "/imseso-web/" : "", // Set repo name
  images: {
    unoptimized: true, // Required since Next.js does not optimize images in static exports
  },
};

module.exports = nextConfig;
