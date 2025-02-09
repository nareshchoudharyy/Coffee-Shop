/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['images.pexels.com'],
  },
  basePath: '/Coffee-Shop',
  assetPrefix: '/Coffee-Shop'
}

module.exports = nextConfig