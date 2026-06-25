"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

type Category = "all" | "ai" | "erp" | "crm" | "iot" | "finance"

interface Case {
  title: string
  client: string
  year: string
  category: Category[]
  tags: string[]
  desc: string
  result: string
}

const cases: Case[] = [
  {
    title: "SpeakABC 口說英語 App",
    client: "自主產品",
    year: "2011",
    category: ["crm"],
    tags: ["iOS", "Android", "英語學習", "行動 App"],
    desc: "牛奶創意創立後推出的首個自主產品，口說英語互動練習 App，iOS/Android 雙平台，行動學習市場早期進場者。",
    result: "創業首個自主 App",
  },
  {
    title: "傳統產線 AI 數位轉型",
    client: "精誠資訊 BU",
    year: "2024",
    category: ["ai"],
    tags: ["AI", "ESG", "IoT"],
    desc: "碳排追蹤、稼動管理、良率優化、模具壽命預測，AI 儀表板即時監控。",
    result: "ESG 報表自動化",
  },
  {
    title: "AI 機櫃 CDU 散熱監管",
    client: "精誠資訊 BU",
    year: "2024",
    category: ["ai", "iot"],
    tags: ["AI", "感測器", "異常告警"],
    desc: "感測器即時監控 + 異常通知 + 自動控制設定，企業機房等級維運。",
    result: "7×24 自動監控",
  },
  {
    title: "都市更新審議自動審查 POC",
    client: "政府場域",
    year: "2026",
    category: ["ai"],
    tags: ["AI 規則引擎", "PDF 解析", "Python"],
    desc: "10 條法規自動核對，PDF → HTML 審查報告分鐘內產出，政府 POC 驗證通過。",
    result: "初核 days → minutes",
  },
  {
    title: "Nuwa AI 家教 SaaS",
    client: "自主產品",
    year: "2021–2026",
    category: ["ai"],
    tags: ["LLM", "RAG", "SaaS", "金流"],
    desc: "GPT 多師多科 + PDF 知識庫 + 21 天課程追蹤 + 訂閱金流，405 commits 完整交付。",
    result: "首個 LLM SaaS 落地",
  },
  {
    title: "WFH 出勤管理 × AI 關懷語",
    client: "企業內部",
    year: "2026",
    category: ["ai"],
    tags: ["Claude API", "NestJS", "Google Calendar"],
    desc: "Google OAuth + 出勤管理 + Calendar 同步 + Claude 每日關懷語，18 天交付。",
    result: "AI Coding 工作流驗證",
  },
  {
    title: "Gmail × Claude 自動早報 CLI",
    client: "企業自動化",
    year: "2026",
    category: ["ai"],
    tags: ["Claude API", "TypeScript", "LINE Bot"],
    desc: "讀 Gmail + Calendar → Claude 摘要 → LINE / Slack 推播，Phase 1+2 全交付。",
    result: "每日自動化早報",
  },
  {
    title: "Shopline × Kintone × E-Count ERP",
    client: "零售品牌",
    year: "2026",
    category: ["erp"],
    tags: ["ERP", "API 中介層", "全通路"],
    desc: "三大平台串接中介層，訂單→出貨→發票→入帳全自動化，庫存即時同步。",
    result: "全通路自動化",
  },
  {
    title: "壽米屋 稻米 ERP / B2B / B2C",
    client: "壽米屋",
    year: "2019–2024",
    category: ["erp"],
    tags: ["ERP", "農業科技", "12 大模組"],
    desc: "派工、過磅、烘乾監控、精米、品檢、包裝、出貨、田間管理，835 commits。",
    result: "完整農業 ERP",
  },
  {
    title: "稻米烘乾機 Modbus IoT 監控",
    client: "稻米加工廠",
    year: "2026",
    category: ["iot", "erp"],
    tags: ["工業 IoT", "Modbus RTU", "LINE 推播"],
    desc: "Modbus RTU 輪詢 + 即時儀表板 + 趨勢圖 + LINE 異常告警，手機/iPad 雙版面。",
    result: "工業 IoT 落地",
  },
  {
    title: "山葉機車 YAMAHA CRM APP",
    client: "山葉機車",
    year: "2023",
    category: ["crm"],
    tags: ["CRM", "iOS/Android", "會員系統"],
    desc: "YaPoints 點數兌換、騎士裝品商城、維修歷史、預約服務、油耗/車籍管理。",
    result: "大廠原生 APP 交付",
  },
  {
    title: "高朋卡 Golfriend 場域智慧卡",
    client: "自主產品",
    year: "2023–2026",
    category: ["crm", "iot"],
    tags: ["硬體整合", "Raspberry Pi", "APP", "會員"],
    desc: "無人領球機 + 停車管理 + 擊球預約，硬體 + 軟體 + 卡務一體，10 萬張。",
    result: "10 萬張 · 24h 自動化",
  },
  {
    title: "石頭火鍋 LINE CRM",
    client: "石頭火鍋",
    year: "2023",
    category: ["crm"],
    tags: ["LINE Bot", "CRM", "點數兌換"],
    desc: "LINE 會員卡 + 點數累積兌換 + 禮物券管理 + VIP 升級優惠，整合門市作業。",
    result: "LINE 會員體系建立",
  },
  {
    title: "玉山證券 數位開戶",
    client: "玉山證券",
    year: "2018",
    category: ["finance"],
    tags: ["金融科技", "線上開戶", "身份驗證"],
    desc: "安全便捷的線上數位開戶，金融級身份驗證流程，符合主管機關規範。",
    result: "金融合規交付",
  },
  {
    title: "裕富數位 Urich BNPL APP",
    client: "裕富數位",
    year: "2024",
    category: ["finance"],
    tags: ["BNPL", "先買後付", "iOS/Android"],
    desc: "先買後付商城系統，完整購物流程 + 後台管理，iOS/Android 雙平台原生。",
    result: "FinTech APP 交付",
  },
  {
    title: "第一銀行福利網",
    client: "第一銀行",
    year: "2022",
    category: ["finance"],
    tags: ["金融", "電商", "多元支付"],
    desc: "福利社線上訂購，整合 Taiwan Pay、信用卡、eATM，團購 + 一般商品分類。",
    result: "銀行電商整合",
  },
  {
    title: "雲果長照服務 APP",
    client: "雲果",
    year: "2023",
    category: ["crm"],
    tags: ["長照", "醫療", "LINE 通知"],
    desc: "電商平台 + LINE 通知 + 運動監測，服務超過 5 萬名長照用戶。",
    result: "5 萬用戶服務中",
  },
]

const filters: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "全部案例" },
  { value: "ai", label: "AI 應用" },
  { value: "erp", label: "ERP 整合" },
  { value: "crm", label: "CRM / APP" },
  { value: "iot", label: "IoT / 硬體" },
  { value: "finance", label: "金融科技" },
]

export function JeffAllCases() {
  const [active, setActive] = useState<Category | "all">("all")

  const filtered =
    active === "all"
      ? cases
      : cases.filter((c) => c.category.includes(active))

  return (
    <section id="cases" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            完整作品案例
          </h2>
          <p className="text-lg text-muted-foreground">
            橫跨 AI、ERP 整合、CRM、IoT 硬體與金融科技，16 個代表案例。
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setActive(f.value)}
              className={cn(
                "px-4 py-2 text-sm rounded-full transition-colors",
                active === f.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((c) => (
            <div
              key={c.title}
              className="group p-6 bg-card rounded-xl border border-border hover:border-foreground/20 transition-all hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <span className="text-xs text-muted-foreground">{c.client} · {c.year}</span>
                  <h3 className="font-semibold text-foreground mt-0.5">{c.title}</h3>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{c.desc}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-secondary text-xs text-muted-foreground rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                {c.result}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
