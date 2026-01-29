import type { NextConfig } from "next";
import { version } from "./package.json"
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  env: {
    version: version

  }
}
export default nextConfig;
