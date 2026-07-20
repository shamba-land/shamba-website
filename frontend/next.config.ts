import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/login",
        destination: "https://platform.shamba.com/login",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
