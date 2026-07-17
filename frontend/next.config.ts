import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/login",
        destination: "https://platform.shamba.com/login",
        permanent: true,
      },
      {
        source: "/signup",
        destination: "https://platform.shamba.com/signup",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
