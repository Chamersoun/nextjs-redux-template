/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `
      @import "@/assets/styles/breakpoints.scss";
    `,
  },

  experimental: {
    optimizePackageImports: ['clsx'],
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })

    return config
  },
};

export default nextConfig;
