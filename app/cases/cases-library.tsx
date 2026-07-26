"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"
import { ProjectImage } from "@/components/project-image"
import {
  CATEGORY_LABELS,
  getIndustries,
  getSortedProjects,
  type Category,
  type Industry,
} from "@/lib/projects"

type CategoryFilter = Category | "all"
type IndustryFilter = Industry | "all"

interface FilterRowProps<T extends string> {
  label: string
  options: { value: T; label: string }[]
  active: T
  onSelect: (value: T) => void
}

function FilterRow<T extends string>({ label, options, active, onSelect }: FilterRowProps<T>) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
      <span className="flex-shrink-0 text-sm font-medium text-muted-foreground sm:mt-2 w-16">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onSelect(option.value)}
            className={cn(
              "px-4 py-2 text-sm rounded-full transition-colors",
              active === option.value
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export function CasesLibrary() {
  const [industryFilter, setIndustryFilter] = useState<IndustryFilter>("all")
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("all")

  const industryOptions: { value: IndustryFilter; label: string }[] = [
    { value: "all", label: "全部產業" },
    ...getIndustries().map((industry) => ({ value: industry, label: industry })),
  ]

  const categoryOptions: { value: CategoryFilter; label: string }[] = [
    { value: "all", label: "全部類型" },
    ...(Object.entries(CATEGORY_LABELS) as [Category, string][]).map(([value, label]) => ({
      value,
      label,
    })),
  ]

  const filteredProjects = getSortedProjects().filter(
    (project) =>
      (industryFilter === "all" || project.industry === industryFilter) &&
      (categoryFilter === "all" || project.category === categoryFilter)
  )

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            案例庫
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            2011 年至今的專案實績，依產業與服務類型篩選。每個案例均有獨立頁面，方便於提案與評選文件中引用。
          </p>
        </div>

        {/* Filters */}
        <div className="space-y-4 mb-10 p-5 bg-card border border-border rounded-xl">
          <FilterRow
            label="產業"
            options={industryOptions}
            active={industryFilter}
            onSelect={setIndustryFilter}
          />
          <FilterRow
            label="服務類型"
            options={categoryOptions}
            active={categoryFilter}
            onSelect={setCategoryFilter}
          />
        </div>

        {/* Result count */}
        <p className="text-sm text-muted-foreground mb-6">
          共 {filteredProjects.length} 個案例
        </p>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <p className="py-16 text-center text-muted-foreground">
            此組合目前沒有公開案例，歡迎
            <Link href="/#contact" className="text-foreground underline underline-offset-4 mx-1">
              與我們聯絡
            </Link>
            瞭解相關經驗。
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Reveal key={project.slug} delayMs={(index % 3) * 90}>
                <Link
                  href={`/cases/${project.slug}`}
                  className="group block h-full p-6 bg-card rounded-xl border border-border hover:border-foreground/20 transition-all hover:shadow-md"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                    <ProjectImage project={project} />
                  </div>

                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h2 className="text-lg font-semibold text-foreground">{project.title}</h2>
                    {project.year && (
                      <span className="flex-shrink-0 mt-1 text-xs text-muted-foreground/70 font-medium tabular-nums">
                        {project.year}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.industry && (
                      <span className="px-2 py-0.5 bg-accent/10 text-xs text-accent rounded">
                        {project.industry}
                      </span>
                    )}
                    <span className="px-2 py-0.5 bg-secondary text-xs text-muted-foreground rounded">
                      {CATEGORY_LABELS[project.category]}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
