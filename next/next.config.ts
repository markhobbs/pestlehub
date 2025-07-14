import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  //output: 'export',
  output: 'standalone',
  //images: { unoptimized: true },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
 
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',

  /* config options here 
   webpack: (config) => {
    config.externals = [...config.externals, "bcrypt"];
    return config;
  },*/
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    // ignoreBuildErrors: false,
  },
};

export default nextConfig;
