/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [
      'https://gpvc.arturio.dev',
      'sauterdev.vercel.app', // Remove 'https://' as it's already implied
      'https://sauterdev.vercel.app',
      'https://sauterdev.vercel.app', // Remove duplicates
      'www.sololearn.com',
      'i.ibb.co',
      'localhost', // Add 'localhost' if needed
      '192.168.0.10:3000' // Add 'http://' or 'https://' depending on your local setup
    ]
  }
};