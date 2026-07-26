import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ShieldCheck, GitBranch, KeyRound, Lock, Cloud, DatabaseBackup, EyeOff } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "資安與信任",
  description:
    "牛奶創意資訊安全承諾：ISO/IEC 27001:2022 資訊安全管理系統導入中，金融客戶專案 Checkmarx 原始碼弱點掃描修補實績，以及日常開發資安實務與公司登記資格。",
  alternates: { canonical: "/trust" },
}

const ISO_MILESTONES = [
  { label: "專案立案・高層承諾", status: "done" },
  { label: "Annex A 93 項控制措施差異分析", status: "current" },
  { label: "風險評鑑與處理計畫", status: "next" },
  { label: "ISMS 文件化與落地執行", status: "next" },
  { label: "內部稽核・管理審查", status: "next" },
  { label: "第三方驗證（Stage 1 / Stage 2）取證", status: "next" },
] as const

const SECURITY_PRACTICES = [
  {
    icon: GitBranch,
    title: "版本控制與程式碼審查",
    description: "所有專案以 Git 全程版控，交付程式碼經過審查流程，變更皆可追溯。",
  },
  {
    icon: KeyRound,
    title: "機敏資訊管理",
    description: "API 金鑰、憑證等機敏設定以環境變數管理，一律不進入版本庫。",
  },
  {
    icon: Lock,
    title: "加密傳輸",
    description: "官網與交付系統全面採用 HTTPS/TLS 加密傳輸。",
  },
  {
    icon: Cloud,
    title: "雲端存取權限控管",
    description: "AWS 與 GitHub 均設置帳號權限控管，依專案需求授權存取。",
  },
  {
    icon: DatabaseBackup,
    title: "多重備份機制",
    description: "開發資產採本地加異地多重備份，降低資料遺失風險。",
  },
  {
    icon: EyeOff,
    title: "展示資料去識別化",
    description: "官網案例畫面一律去識別化處理，不揭露客戶個資與營運機敏數據。",
  },
]

const COMPANY_FACTS = [
  { label: "公司名稱", value: "牛奶股份有限公司（MILK IDEA INC.）" },
  { label: "統一編號", value: "53535550" },
  { label: "成立時間", value: "2011 年 9 月" },
  { label: "實收資本額", value: "新台幣 2,000 萬元" },
]

const CREDENTIALS = [
  "經濟部 AIGO 計畫特優獎（2020，NLP 場次最高獎項）",
  "台北市產發局研發補助結案（2017）",
  "農業部智慧農業機構能量登錄（2025）",
  "雙鴻科技（上市公司）策略股東",
]

export default function TrustPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-16">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full text-sm text-muted-foreground mb-6">
              <ShieldCheck className="w-4 h-4 text-accent" />
              Trust Center
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              資安與信任
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              我們服務金融、上市製造與政府相關單位的專案，資訊安全是交付品質的一部分。這裡完整揭露我們的資安管理進程、實績與日常開發實務。
            </p>
          </div>
        </section>

        {/* ISO 27001 */}
        <section className="py-16 bg-card border-y border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              ISO/IEC 27001:2022 導入中
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              2026 年 7 月正式立案導入資訊安全管理系統（ISMS），規劃範圍為「軟體開發與雲端服務之營運」，目標通過第三方驗證取得證書。目前進度如下：
            </p>
            <ol className="space-y-3">
              {ISO_MILESTONES.map((milestone, index) => (
                <li key={milestone.label} className="flex items-center gap-3">
                  <span
                    className={
                      milestone.status === "done"
                        ? "flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/15 text-emerald-600 text-xs font-bold flex items-center justify-center"
                        : milestone.status === "current"
                          ? "flex-shrink-0 w-6 h-6 rounded-full bg-accent/15 text-accent text-xs font-bold flex items-center justify-center"
                          : "flex-shrink-0 w-6 h-6 rounded-full bg-secondary text-muted-foreground/60 text-xs font-bold flex items-center justify-center"
                    }
                  >
                    {milestone.status === "done" ? "✓" : index + 1}
                  </span>
                  <span
                    className={
                      milestone.status === "next"
                        ? "text-sm text-muted-foreground/70"
                        : "text-sm text-foreground font-medium"
                    }
                  >
                    {milestone.label}
                    {milestone.status === "current" && (
                      <span className="ml-2 text-xs text-accent">進行中</span>
                    )}
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-xs text-muted-foreground/70">
              本頁如實揭露導入進度，取得證書前不宣稱已通過 ISO 27001 驗證。
            </p>
          </div>
        </section>

        {/* 金融級實績 */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">金融級資安實績</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-card border border-border rounded-xl">
                <h3 className="font-semibold text-foreground mb-2">
                  Checkmarx 原始碼弱點掃描修補
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  第一銀行福利網系統通過 Checkmarx 原始碼安全掃描之弱點修補作業，提交修改說明書與漏洞回覆審查報告（2026），符合金融機構源碼檢測要求。
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl">
                <h3 className="font-semibold text-foreground mb-2">金融機構專案交付經驗</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  第一銀行福利網（多元支付）、玉山證券數位開戶（身分驗證流程）、裕富數位 BNPL 商城等金融場景系統開發與維運經驗。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 開發資安實務 */}
        <section className="py-16 bg-card border-y border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">日常開發資安實務</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SECURITY_PRACTICES.map((practice) => (
                <div key={practice.title} className="p-5 bg-background border border-border rounded-xl">
                  <practice.icon className="w-5 h-5 text-accent mb-3" />
                  <h3 className="text-sm font-semibold text-foreground mb-1.5">{practice.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {practice.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 公司登記與資格 */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">公司登記與資格</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <dl className="space-y-4">
                {COMPANY_FACTS.map((fact) => (
                  <div key={fact.label} className="flex gap-4">
                    <dt className="flex-shrink-0 w-24 text-sm text-muted-foreground">{fact.label}</dt>
                    <dd className="text-sm text-foreground font-medium">{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <ul className="space-y-3">
                {CREDENTIALS.map((credential) => (
                  <li key={credential} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {credential}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">需要資格文件或資安說明？</h2>
            <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              投標或評選所需的公司簡介、資格證明與資安作業說明，歡迎與我們聯繫索取。
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/#contact">
                聯絡我們
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
