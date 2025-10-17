/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  basePath: '/ELWS',
  assetPrefix: '/ELWS/'
}

export default nextConfig
