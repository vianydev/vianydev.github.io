/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/vianydev.github.io' : '',
  assetPrefix: isProd ? '/vianydev.github.io/' : '',
  reactStrictMode: true,
}

module.exports = nextConfig
