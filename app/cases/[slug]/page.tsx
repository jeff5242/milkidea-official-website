import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  CATEGORY_LABELS,
  PROJECTS,
  getProjectBySlug,
  getRelatedProjects,
} from "@/lib/projects"

const RELATED_LIMIT = 3

interface CasePageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}

  return {
    title: `${project.title}｜案例庫`,
    description: project.description,
    alternates: { canonical: `/cases/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.images?.[0] ?? project.image ?? "/images/logo-milkidea.png",
    },
  }
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const screenshots = project.images ?? (project.image ? [project.image] : [])
  const relatedProjects = getRelatedProjects(project, RELATED_LIMIT)

  return (
    <main className="min-h-screen">
      <Header />

      <article className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-muted-foreground">
            <Link
              href="/cases"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              返回案例庫
            </Link>
          </nav>

          {/* Title */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {project.year && (
                <span className="px-3 py-1 bg-secondary text-xs text-muted-foreground rounded-full tabular-nums">
                  {project.year}
                </span>
              )}
              {project.industry && (
                <span className="px-3 py-1 bg-accent/10 text-xs text-accent rounded-full">
                  {project.industry}
                </span>
              )}
              <span className="px-3 py-1 bg-secondary text-xs text-muted-foreground rounded-full">
                {CATEGORY_LABELS[project.category]}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {project.title}
            </h1>
          </header>

          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-4">專案概述</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </section>

          {/* Screenshots */}
          {screenshots.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-foreground mb-4">系統畫面</h2>
              <div className={screenshots.length > 1 ? "grid sm:grid-cols-2 gap-4" : ""}>
                {screenshots.map((src) => (
                  <div
                    key={src}
                    className="overflow-hidden rounded-xl border border-border bg-secondary"
                  >
                    <Image
                      src={src}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted-foreground/70">
                畫面為系統實際操作示意，機敏資訊已去識別化處理。
              </p>
            </section>
          )}

          {/* Tags */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-4">技術與服務範疇</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-secondary text-sm text-muted-foreground rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="p-8 bg-card border border-border rounded-2xl text-center">
            <h2 className="text-xl font-semibold text-foreground mb-2">有類似的專案需求？</h2>
            <p className="text-sm text-muted-foreground mb-6">
              歡迎與我們聊聊您的情境，我們會以實際案例經驗提供建議。
            </p>
            <Button asChild size="lg">
              <Link href="/#contact">
                立即諮詢
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </section>

          {/* Related */}
          {relatedProjects.length > 0 && (
            <section className="mt-16">
              <h2 className="text-xl font-semibold text-foreground mb-6">相關案例</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {relatedProjects.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/cases/${related.slug}`}
                    className="block p-5 bg-card rounded-xl border border-border hover:border-foreground/20 transition-all hover:shadow-md"
                  >
                    <h3 className="text-sm font-semibold text-foreground mb-2 leading-snug">
                      {related.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {related.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      <Footer />
    </main>
  )
}
