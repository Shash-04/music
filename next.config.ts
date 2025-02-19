// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['images.unsplash.com'],
//   },
//    eslint: {
//     ignoreDuringBuilds: true,
//   },
// };


import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Allow images to be loaded from Unsplash
    domains: ['images.unsplash.com'],
  },
  eslint: {
    // Disable ESLint during production builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
