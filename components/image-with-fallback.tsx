// components/image-with-fallback.tsx
"use client"; // フック(useState)を使うので必須

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { ImageOff } from "lucide-react"; // アイコン用

interface Props extends Omit<ImageProps, "src"> {
  src?: string | null; // srcがない場合も許容する
  fallbackText?: string; // 任意のテキスト
}

export function ImageWithFallback({
  src,
  alt,
  fallbackText,
  className,
  ...props
}: Props) {
  const [isError, setIsError] = useState(false);

  // 画像を表示しない条件（srcが空、または読み込みエラー発生時）
  const showFallback = !src || isError;

  if (showFallback) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gray-200 text-gray-400 ${className}`}
        // width/heightが指定されている場合、親のサイズに合わせるために style を使うこともあります
        style={{ width: props.width, height: props.height }}
      >
        <ImageOff className="w-8 h-8 mb-1" />
        <span className="text-xs font-bold text-gray-500">
          {fallbackText || "NO IMAGE"}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={() => setIsError(true)} // 読み込みに失敗したらエラー状態にする
      {...props}
    />
  );
}
