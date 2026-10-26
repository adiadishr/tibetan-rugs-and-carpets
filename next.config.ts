import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   /* config options here */
   cacheComponents: true,
   partialPrefetching: true,
   reactCompiler: true,
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "cdn11.bigcommerce.com",
            pathname: "/s-ajr4uzac3y/images/**",
         },
      ],
   },
   turbopack: {
      rules: {
         "*.css": {
            loaders: ["@tailwindcss/turbopack"],
            as: "*.css",
         },
      },
   },
};

export default nextConfig;
