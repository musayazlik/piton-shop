/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assignment-api.piton.com.tr'],
  },
  ignoreBuildErrors: true,
}

module.exports = nextConfig
