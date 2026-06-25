import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JeffHero } from "./components/jeff-hero"
import { JeffAiCases } from "./components/jeff-ai-cases"
import { JeffActivity } from "./components/jeff-activity"
import { JeffAllCases } from "./components/jeff-all-cases"
import { JeffContact } from "./components/jeff-contact"

export const metadata: Metadata = {
  title: "方乃正 Jeff Fang | 全端工程師 · AI 應用開發 · 牛奶創意",
  description:
    "14 年場域整合經驗，9,200+ commits，AI 應用實際落地：精誠資訊 AI 產線、都更審查 POC、Nuwa AI 家教 SaaS。專長：NestJS、React、Python、Claude API、ERP 整合。",
  openGraph: {
    title: "方乃正 Jeff Fang — 全端工程師 × AI 應用開發",
    description:
      "牛奶創意共同創辦人 / CTO，14 年餐飲、零售、設施管理場域整合，AI 能力貫穿三條業務線。",
    url: "https://www.milkidea.com/jeff",
    siteName: "牛奶創意 MilkIdea",
    locale: "zh_TW",
    type: "profile",
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
