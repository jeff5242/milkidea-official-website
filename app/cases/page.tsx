import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CasesLibrary } from "./cases-library"

export const metadata: Metadata = {
  title: "案例庫｜依產業與服務類型篩選",
  description:
    "牛奶創意完整專案案例庫：涵蓋金融證券、製造科技、餐飲、零售電商、醫療長照等產業，電商 ERP、CRM、AI 數位轉型、場域整合與網站設計等服務類型，可依產業與服務類型篩選瀏覽。",
  alternates: { canonical: "/cases" },
}

export default function CasesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <CasesLibrary />
      </div>
      <Footer />
    </main>
  )
}
