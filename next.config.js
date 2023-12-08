/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'randomuser.me',
        },
        {
            protocol: 'https',
            hostname: 'images.ctfassets.net',
        },
      ],
    },
  }