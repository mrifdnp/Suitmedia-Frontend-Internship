/** @type {import('next').NextConfig} */
const BASE_URL = process.env.BASE_URL;

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${BASE_URL}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
