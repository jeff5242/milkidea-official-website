"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

// ============================================================
// 📸 輪播照片清單
// 想改某張照片下面的說明文字，直接改該行的 caption 即可。
// 想新增照片：把圖片放到 public/jeff/，然後在這裡加一行。
// pos 是選填，用來微調裁切位置（例如 "object-right-top"）。
// ============================================================
const PHOTOS: { src: string; caption: string; pos?: string }[] = [
  { src: "/jeff-photo.jpg", caption: "", pos: "object-right-top" },
  { src: "/jeff/photo-1.jpg", caption: "COMPUTEX 展場・雙鴻 Auras 展位" },
  { src: "/jeff/photo-2.jpg", caption: "展場水冷機櫃方案實地了解" },
  { src: "/jeff/photo-3.jpg", caption: "雙鴻 Auras 展位現場交流" },
  { src: "/jeff/photo-4.jpg", caption: "客戶端需求訪談會議" },
]

const ROTATE_INTERVAL_MS = 4000

export function JeffPhotoCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % PHOTOS.length)
    }, ROTATE_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="relative w-48 h-64 md:w-56 md:h-72 rounded-2xl overflow-hidden border border-border shadow-md">
          {PHOTOS.map((photo, i) => (
            <Image
              key={photo.src}
              src={photo.src}
              alt={photo.caption || "方乃正 Jeff Fang"}
              width={448}
              height={576}
              priority={i === 0}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                photo.pos ?? ""
              } ${i === current ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>
        {/* AI badge */}
        <div className="absolute -bottom-3 -right-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
          AI Enabled
        </div>
      </div>

      {/* 圓點切換 */}
      <div className="mt-6 flex items-center gap-1.5">
        {PHOTOS.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            aria-label={`第 ${i + 1} 張照片`}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === current
                ? "w-5 bg-accent"
                : "w-1.5 bg-border hover:bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>

      {/* 情境說明文字（固定高度避免版面跳動） */}
      <p className="mt-2 h-5 text-xs text-muted-foreground text-center">
        {PHOTOS[current].caption}
      </p>
    </div>
  )
}
