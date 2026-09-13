import type { MetadataRoute } from "next"
import { PROJECTS } from "@/lib/projects"

const SITE_URL = "https://www.milkidea.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const casePages: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${SITE_URL}/cases/${project.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.5,
  }))

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/cases`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/trust`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/jeff`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/ai-training-slides.html`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    ...casePages,
  ]
}
