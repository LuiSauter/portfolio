/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [
      'https://gpvc.arturio.dev',
      'gpvc.arturio.dev',
      'https://sauterdev.vercel.app'
    ],
  },
  domains: [
    'localhost',
    'https://sauterdev.vercel.app',
    '192.168.0.10:3000',
    'https://gpvc.arturio.dev',
    'gpvc.arturio.dev'
  ]
}
