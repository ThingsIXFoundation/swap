/** @type {import('next').NextConfig} */

const nextConfig = {
  // reactStrictMode: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  output: 'export',
  distDir: 'dist',
  transpilePackages: ['@uniswap/widgets', '@uniswap/conedison'],
}

module.exports = nextConfig
