"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"
import { ProjectImage } from "@/components/project-image"
import { CATEGORY_LABELS, getSortedProjects, type Category } from "@/lib/projects"

type Filter = Category | "all"

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all")

  const filters: { value: Filter; label: string }[] = [
    { value: "all", label: "全部" },
    ...(Object.entries(CATEGORY_LABELS) as [Category, string][]).map(([value, label]) => ({
      value,
      label,
    })),
  ]

  const sortedProjects = getSortedProjects()

  const filteredProjects =
    activeFilter === "all"
      ? sortedProjects
      : sortedProjects.filter((project) => project.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            作品案例
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            我們與各產業的領導品牌合作，打造出色的數位產品與服務。
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={cn(
                "px-4 py-2 text-sm rounded-full transition-colors",
                activeFilter === filter.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.slug} delayMs={(index % 3) * 90}>
              <Link
                href={`/cases/${project.slug}`}
                className="group block h-full p-6 bg-card rounded-xl border border-border hover:border-foreground/20 transition-all hover:shadow-md"
              >
                {/* Project Image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                  <ProjectImage project={project} />
                </div>

                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  {project.year && (
                    <span className="flex-shrink-0 mt-1 text-xs text-muted-foreground/70 font-medium tabular-nums">
                      {project.year}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-secondary text-xs text-muted-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* 案例庫入口 */}
        <div className="mt-12 text-center">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            前往完整案例庫（可依產業／服務類型篩選）
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
