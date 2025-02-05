// next.config.js
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  basePath: isGithubActions ? '/website-imseso' : '', // Adjust basePath for GitHub Pages
  assetPrefix: isGithubActions ? '/website-imseso/' : '', // Adjust assetPrefix for GitHub Pages
};

module.exports = nextConfig;