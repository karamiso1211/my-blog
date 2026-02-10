import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-gray-50 min-h-screen text-slate-800 flex flex-col">
        <header className="h-12 bg-[#252525] text-white flex items-center px-2 shadow-md fixed top-0 w-full z-50">
          <nav className="flex items-center gap-1">
            {siteConfig.headerItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-center w-10 h-10 hover:bg-[#3d3d3d] rounded transition-colors duration-200"
              >
                <item.icon />
              </Link>
            ))}
          </nav>
        </header>
        <main className="flex-1 bg-gray-200 pt-12 px-12">{children}</main>
        <footer className="bg-[#252525] text-gray-400 py-6 mt-auto">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* 左側：コピーライト */}
            <p className="text-sm">
              &copy; {new Date().getFullYear()} {siteConfig.author} All Rights
              Reserved.
            </p>

            <div className="flex gap-4">
              {siteConfig.footerItem.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank" // 別タブで開く
                  rel="noopener noreferrer" // セキュリティ対策
                  aria-label={item.label} // アクセシビリティ用（読み上げソフト対策）
                  className="flex items-center justify-center w-10 h-10 hover:bg-[#3d3d3d] rounded transition-colors duration-200"
                >
                  <item.icon />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
