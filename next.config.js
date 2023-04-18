/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/sign-in',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
