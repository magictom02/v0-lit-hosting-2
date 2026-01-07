/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    cacheControl: 'public, max-age=31536000, immutable',
  },
  
  eslint: {
    ignoreBuildBuilds: true,
  },
  
  compress: true,
  
  productionBrowserSourceMaps: false,
  
  optimizeFonts: true,
  
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            vendor: {
              filename: 'chunks/vendor-[hash].js',
              test: /node_modules/,
              priority: 10,
            },
            common: {
              filename: 'chunks/common-[hash].js',
              minChunks: 2,
              priority: 5,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
      }
    }
    return config
  },
}

export default nextConfig
