/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.imagin.studio'],
  },
  env: {
    imaginApiKey: process.env.IMAGIN_API_KEY,
  },
};

module.exports = nextConfig;
