/** @type {import('next').NextConfig} */
const nextConfig = {  
  // Compress output
  compress: true,
  
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Experimental optimizations
  experimental: {
    optimizePackageImports: ['@deemlol/next-icons', 'lucide-react'],
  },
};

export default nextConfig;
