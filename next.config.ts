import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "ubudvillastays.com" }],
        destination: "https://www.ubudvillastays.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
