/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  domains: [
    'localhost',
    'https://sauterdev.vercel.app',
    '192.168.0.10:3000'
  ]
}
