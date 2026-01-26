import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 静的エクスポートを有効にする（ビルド時に 'out' フォルダが生成されます） */
  output: "export",

  /* 静的エクスポート時の画像最適化制限を回避する設定 */
  images: {
    unoptimized: true,
  },

  /* 必要に応じて他の設定を追加できます */
  reactStrictMode: true,
};

export default nextConfig;