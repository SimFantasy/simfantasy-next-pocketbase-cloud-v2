/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8090',
        pathname: '/api/files/**',
      },
      {
        protocol: 'https',
        hostname: '**.sspai.com',
      },
      {
        protocol: 'https',
        hostname: 'fantasy.pockethost.io',
      },
      {
        protocol: 'https',
        hostname: 'simfantasy.github.io',
      },
    ],
  },
}

module.exports = nextConfig
