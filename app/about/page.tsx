import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1 className="flex justify-center">自己紹介</h1>
      <button className="btn-1">
        <Link href="./">前へ</Link>
      </button>
    </main>
  );
}
