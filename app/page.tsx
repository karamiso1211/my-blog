import { siteConfig, currentStatus } from "@/lib/site-config";
import { ImageWithFallback } from "@/components/image-with-fallback";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-3">
            <siteConfig.homeItems.icon1 className="w-12 h-12" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 h-12">
              {siteConfig.title}
            </h1>
            <p className="text-base text-gray-500">{siteConfig.description}</p>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex flex-col items-end">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
              ステータス
            </span>
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm ${currentStatus.bg}`}
            >
              <span className="relative flex h-3 w-3">
                {currentStatus.animate && (
                  <span
                    className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${currentStatus.dot}`}
                  ></span>
                )}
                <span
                  className={`relative inline-flex rounded-full h-3 w-3 ${currentStatus.dot}`}
                ></span>
              </span>

              <span className="font-semibold text-sm">
                {siteConfig.currentProject.name}
              </span>

              <currentStatus.icon
                className={`w-4 h-4 ml-1 ${currentStatus.animate ? "animate-spin" : ""}`}
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="w-[95%] mx-auto border-gray-300" />
      <div className="w-[95%] max-w-6xl mx-auto mt-8 mb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="bg-white p-8 rounded-xl shadow-sm lg:w-[70%]">
            <ImageWithFallback
              src="/image.jpg"
              alt="画像"
              width={600}
              height={300}
              className="mx-auto block max-w-full h-auto"
            />
            <h1 className="text-2xl font-bold mb-4">タイトル</h1>
            <p>素人が素人なりに頑張って作成しています。</p>
          </main>
          <aside className="lg:w-[30%]">
            <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-col">
              <h3 className="font-bold border-b pb-2 mb-4">実績</h3>
              <ul className="text-sm space-y-2">
                <li>Game Dev</li>
                <li>Web Design</li>
              </ul>
              <Link href="/works" className="ml-auto">
                <button className="bg-[#252525] text-white hover:bg-[#3d3d3d] rounded px-4 py-2">
                  詳しく見る
                </button>
              </Link>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm mb-6 flex flex-col">
              <h3 className="font-bold border-b pb-2 mb-4">Profile</h3>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div>
                  <p className="font-bold">{siteConfig.author}</p>
                  <p className="text-xs text-gray-500">Engineer</p>
                </div>
              </div>
              <Link href="/about" className="ml-auto">
                <button className="bg-[#252525] text-white hover:bg-[#3d3d3d] rounded px-4 py-2">
                  詳しく見る
                </button>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
