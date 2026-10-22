"use client"

import { useEffect, useRef, useState } from "react"

const POSTER_SRC = "/video/hero-poster.jpg"

/** 與 Tailwind 的 md 斷點一致；手機只放 poster，不下載影片 */
const VIDEO_MEDIA_QUERY = "(min-width: 768px) and (prefers-reduced-motion: no-preference)"

/**
 * 首頁 hero 背景影片（淺色牛奶風，20 秒無縫循環，無聲）。
 * 桌機且未偏好減少動態時才掛上 <video>；其他情況只顯示 poster 靜態圖。
 * 上方壓一層白色漸層，讓黑色標題維持對比，底部收回頁面背景色。
 */
export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(VIDEO_MEDIA_QUERY)
    const update = () => setShouldPlayVideo(mediaQuery.matches)
    update()
    mediaQuery.addEventListener("change", update)
    return () => mediaQuery.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!shouldPlayVideo || !video) return
    // React 不會把 muted 寫進 SSR 的 HTML，瀏覽器會因此擋下自動播放，所以在這裡補上
    video.muted = true
    // 自動播放被瀏覽器拒絕時就停在 poster，不需要處理
    video.play().catch(() => undefined)
  }, [shouldPlayVideo])

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${POSTER_SRC})` }}
      />
      {shouldPlayVideo && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={POSTER_SRC}
        >
          <source src="/video/hero.webm" type="video/webm" />
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
      )}
      {/* 中央多疊一層白色放射漸層，標題區在任何時刻都保有足夠對比 */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_45%,rgba(255,255,255,0.45),transparent_100%),linear-gradient(to_bottom,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0.4)_50%,var(--background)_100%)]" />
    </div>
  )
}
