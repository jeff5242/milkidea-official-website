"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import type { Project } from "@/lib/projects"

const IMAGE_SWITCH_INTERVAL_MS = 3500

/** 案例卡片圖：多張系統營運圖時自動輪播，無圖時顯示字首 */
export function ProjectImage({ project }: { project: Project }) {
  const sources = project.images ?? (project.image ? [project.image] : [])
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (sources.length < 2) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sources.length)
    }, IMAGE_SWITCH_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [sources.length])

  if (sources.length === 0) {
    return (
      <div className="text-3xl font-bold text-muted-foreground/30 group-hover:scale-105 transition-transform">
        {project.title.charAt(0)}
      </div>
    )
  }

  return (
    <div className="relative w-full h-full">
      {sources.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={i === current ? project.title : ""}
          aria-hidden={i !== current}
          width={400}
          height={300}
          className={cn(
            "absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700",
            i === current ? "opacity-100" : "opacity-0"
          )}
        />
      ))}
    </div>
  )
}
