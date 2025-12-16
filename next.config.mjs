/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Porfortlio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Porfortlio/' : '',
  trailingSlash: true,
};

export default nextConfig;
