import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ▼ この2行を追加してください
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
