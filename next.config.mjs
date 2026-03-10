/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  // Enable static export for GitHub Pages
  output: "export",
  images: {
    // Required for next export when using <Image>
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/adastra-website" : ""
  },
  // Serve under /adastra-website when deployed to GitHub Pages
  basePath: isProd ? "/adastra-website" : "",
  assetPrefix: isProd ? "/adastra-website/" : ""
};

export default nextConfig;


