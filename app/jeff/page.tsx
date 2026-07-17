import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JeffHero } from "./components/jeff-hero"
import { JeffAiCases } from "./components/jeff-ai-cases"
import { JeffActivity } from "./components/jeff-activity"
import { JeffAllCases } from "./components/jeff-all-cases"
import { JeffContact } from "./components/jeff-contact"

// 品牌後綴由 app/layout.tsx 的 title.template 統一附加，此處不重複加入「牛奶創意」
const PAGE_TITLE = "方乃正 Jeff Fang | 全端工程師 · AI 應用開發"
const OG_TITLE = "方乃正 Jeff Fang — 全端工程師 × AI 應用開發"
const OG_DESCRIPTION =
  "牛奶創意共同創辦人 / CTO，15 年餐飲、零售、設施管理場域整合，AI 能力貫穿三條業務線。"

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description:
    "15 年場域整合經驗，9,200+ commits，AI 應用實際落地：精誠資訊 AI 產線、都更審查 POC、Nuwa AI 家教 SaaS。專長：NestJS、React、Python、Claude API、ERP 整合。",
  keywords: [
    "方乃正",
    "Jeff Fang",
    "全端工程師",
    "AI 應用開發",
    "牛奶創意",
    "場域整合顧問",
    "NestJS 開發",
    "Claude API 導入",
  ],
  alternates: {
    canonical: "/jeff",
  },
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: "https://www.milkidea.com/jeff",
    siteName: "牛奶創意 MilkIdea",
    locale: "zh_TW",
    type: "profile",
    images: [
      {
        url: "/jeff-photo.jpg",
        width: 3024,
        height: 4032,
        alt: "方乃正 Jeff Fang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: ["/jeff-photo.jpg"],
  },
}

export default function JeffPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <JeffHero />
        <JeffAiCases />
        <JeffActivity />
        <JeffAllCases />
        <JeffContact />
      </main>
      <Footer />
    </div>
  )
}
