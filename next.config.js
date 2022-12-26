/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['assignment-api.piton.com.tr'],
  },
  ignoreBuildErrors: true,
}

module.exports = nextConfig
