/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // All images are served from /public, so no remote patterns are required.
  // next/image local optimization works out of the box on Vercel.
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
