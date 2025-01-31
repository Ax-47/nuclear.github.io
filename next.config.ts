import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // ปิด Image Optimization เพราะใช้ GitHub Pages
  },
  basePath: 'https://ax-47.github.io/nuclear.github.io/',
  assetPrefix: 'https://ax-47.github.io/nuclear.github.io/' ,
};

export default nextConfig;
