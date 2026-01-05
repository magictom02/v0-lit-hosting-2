/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
  },
  
  eslint: {
    ignoreBuildBuilds: true,
  },
}

export default nextConfig
