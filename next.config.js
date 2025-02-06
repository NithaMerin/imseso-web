// next.config.js
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  basePath: isGithubActions ? '/imseso-web' : '', // Adjust basePath for GitHub Pages
  assetPrefix: isGithubActions ? '/imseso-web/' : '', // Adjust assetPrefix for GitHub Pages
};

module.exports = nextConfig;