"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"

type Category = "all" | "ecommerce" | "crm" | "finance" | "ai" | "field" | "web" | "transport" | "health"

interface Project {
  title: string
  category: Category
  description: string
  tags: string[]
  /** 顯示在卡片上的年份標籤（有查證依據才填） */
  year?: string
  /** 排序用年份，清單依此由新到舊排列 */
  sortYear: number
  image?: string
  /** 多張系統營運圖時每 3.5 秒自動切換 */
  images?: string[]
}

const IMAGE_SWITCH_INTERVAL_MS = 3500

function ProjectImage({ project }: { project: Project }) {
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
          alt={project.title}
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

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Category>("all")

  const filters: { value: Category; label: string }[] = [
    { value: "all", label: "全部" },
    { value: "ecommerce", label: "電商/ERP" },
    { value: "crm", label: "CRM 系統" },
    { value: "finance", label: "金融科技" },
    { value: "ai", label: "AI 數位轉型" },
    { value: "field", label: "場域整合" },
    { value: "web", label: "網站設計" },
    { value: "transport", label: "交通導航" },
    { value: "health", label: "醫療教育" },
  ]

  const projects: Project[] = [
    {
      title: "裕富數位 Urich APP",
      category: "ecommerce",
      year: "2024",
      sortYear: 2024,
      description: "Buy Now Pay Later 先買後付商城系統，完整的後台管理功能",
      tags: ["BNPL", "電商平台", "後台管理"],
      image: "/images/portfolio/urich-app.png",
    },
    {
      title: "米屋 ERP/B2B/B2C 系統",
      category: "ecommerce",
      year: "2019–2026",
      sortYear: 2026,
      description: "完整稻米加工管理系統，涵蓋派工、過磅、烘乾監控、精米、品檢、包裝、出貨退貨、田間管理等 12 大模組，並串接物流貨到付款自動對帳銷帳",
      tags: ["ERP", "農業科技", "物流對帳自動化"],
      image: "/images/portfolio/ricehouse-erp.png",
    },
    {
      title: "我適文創 Shopline × Ecount ERP 整合",
      category: "ecommerce",
      year: "2026",
      sortYear: 2026,
      description: "六家百貨櫃位 POS 訂單每日自動轉入 Ecount ERP 銷貨單，整合庫存同步、每週補貨建議與 LINE 店長日報/週報推播",
      tags: ["ERP 整合", "RPA 自動化", "零售連鎖"],
      images: ["/images/portfolio/iam-dashboard.jpg", "/images/portfolio/iam-inventory.jpg"],
    },
    {
      title: "永豐券村 Cardo",
      category: "ecommerce",
      sortYear: 2021,
      description: "電子票券商城 APP，完整購票流程：點擊購買、票夾管理、點擊開鎖使用、出示 QR 碼供商家掃描核銷",
      tags: ["電子票券", "QR核銷", "永豐"],
      image: "/images/portfolio/yongfeng-cardo.png",
    },
    {
      title: "山葉機車 CRM APP",
      category: "crm",
      year: "2023",
      sortYear: 2023,
      description: "YAMAHA LIFE 會員 APP，整合 YaPoints 點數兌換、騎士裝品商城、維修歷史、預約服務、油耗紀錄、車籍資料管理",
      tags: ["CRM", "會員系統", "iOS/Android"],
      image: "/images/portfolio/yamaha-crm.png",
    },
    {
      title: "石頭火鍋 Line 官方帳號",
      category: "crm",
      year: "2023",
      sortYear: 2023,
      description: "石頭日式炭火燒肉 LINE 會員系統，整合會員卡、點數累積兌換、禮物券管理、顧客意見調查、分店查詢、VIP 升級優惠",
      tags: ["Line", "CRM", "點數兌換"],
      image: "/images/portfolio/stone-hotpot-line.png",
    },
    {
      title: "第一銀行福利網",
      category: "finance",
      year: "2022",
      sortYear: 2022,
      description: "福利社商品線上訂購系統，支援團購商品、一般商品分類，整合 Taiwan Pay、信用卡、eATM 多元支付",
      tags: ["金融", "福利網", "電商"],
      image: "/images/portfolio/firstbank-welfare.png",
    },
    {
      title: "玉山證券",
      category: "finance",
      year: "2018",
      sortYear: 2018,
      description: "數位開戶服務，安全便捷的身份驗證流程",
      tags: ["金融科技", "線上開戶", "證券"],
      image: "/images/portfolio/esun-securities.png",
    },
    {
      title: "AI 機櫃 CDU 散熱監管系統",
      category: "ai",
      year: "2024",
      sortYear: 2024,
      description: "感測器監控、異常通知、自動控制設定、網路設定",
      tags: ["AI", "IoT", "散熱監控"],
      image: "/images/portfolio/ai-rack-cdu.png",
    },
    {
      title: "傳統產線 AI 數位轉型",
      category: "ai",
      year: "2024",
      sortYear: 2024,
      description: "碳排追蹤、稼動管理、良率管理、模具壽命管理、設備保養管理",
      tags: ["AI", "ESG", "智慧製造"],
      image: "/images/portfolio/factory-ai.png",
    },
    {
      title: "IFDCS 工廠設備智慧監控（宏固電子宜蘭廠）",
      category: "ai",
      year: "2026",
      sortYear: 2026,
      description: "電流、電壓、溫度、功率即時監控與電費預估，三層級告警即時推播，雲端＋地端雙軌架構，已於宜蘭廠區上線運行",
      tags: ["IoT 監控", "智慧工廠", "已上線"],
      images: ["/images/portfolio/ifdcs-orders.jpg", "/images/portfolio/ifdcs-query.jpg"],
    },
    {
      title: "雙鴻食堂 員工訂餐系統",
      category: "field",
      year: "2026",
      sortYear: 2026,
      description: "雙鴻科技五廠區 LINE 訂餐服務：整週便當預訂、每日自動結單、各廠區訂單彙整叫貨、QR 領餐報到與未領取追蹤，取代人工統計",
      tags: ["LINE LIFF", "企業員工服務", "雙鴻科技"],
      images: ["/images/portfolio/bandon-menu.jpg", "/images/portfolio/bandon-richmenu.jpg"],
    },
    {
      title: "叼貓菜單 QR 掃碼點餐系統",
      category: "field",
      year: "2026",
      sortYear: 2026,
      description: "烤魚餐廳三端系統：顧客掃碼點餐（辣度、配料客製）、店員桌位圖與訂單看板、後台菜單管理，整合廚房出單機直印與 LINE 送單通知，開幕籌備中",
      tags: ["QR 點餐", "餐飲 POS", "籌備中"],
      images: ["/images/portfolio/diaomao-menu.jpg", "/images/portfolio/diaomao-custom.jpg"],
    },
    {
      title: "三地高市高爾夫總店 停車場管理系統",
      category: "field",
      year: "2026",
      sortYear: 2026,
      description: "練習場停車場管理：LINE 銷單核銷、車牌辨識（LPR）白名單、進出場事件與影像紀錄、高朋卡會員綁定，內部營運專用系統，開發完成驗收中",
      tags: ["LINE 核銷", "車牌辨識", "驗收中"],
      images: ["/images/portfolio/parking-member.jpg", "/images/portfolio/parking-records.jpg", "/images/portfolio/parking-richmenu.jpg"],
    },
    {
      title: "大衛營高爾夫 擊球預約系統",
      category: "field",
      year: "2025–2026",
      sortYear: 2026,
      description: "LINE 開球時段預約與出發臺名單管理，球場營運後台一站管理，近期上線會員電子票券發放與核銷，並已延伸規劃 27 洞三區旗艦版",
      tags: ["LINE LIFF", "預約系統", "電子票券"],
      images: ["/images/portfolio/davidcamp-voucher.jpg", "/images/portfolio/davidcamp-redeem.jpg"],
    },
    {
      title: "女媧 Nuwa AI 家教 SaaS 平台",
      category: "web",
      sortYear: 2026,
      description: "AI 家教與命理 SaaS 平台官網與應用介面，GPT 多師多科、PDF 知識庫、課程追蹤與訂閱金流",
      tags: ["SaaS", "AI 應用", "自主產品"],
      image: "/images/portfolio/web-nuwa.jpg",
    },
    {
      title: "CGX CoreGrid AI 算力交易平台",
      category: "web",
      sortYear: 2025,
      description: "AI 算力交易平台形象官網，深色科技風視覺與產品介紹",
      tags: ["形象官網", "科技業", "RWD"],
      image: "/images/portfolio/web-coregrid.jpg",
    },
    {
      title: "NexiFuel GPU 算力平台官網",
      category: "web",
      sortYear: 2025,
      description: "GPU 算力平台形象官網，產品方案展示與詢價導流",
      tags: ["形象官網", "科技業", "RWD"],
      image: "/images/portfolio/web-nexifuel.jpg",
    },
    {
      title: "GoodClinic 好診所 連鎖官網",
      category: "web",
      sortYear: 2025,
      description: "診所連鎖形象官網（嘉南／新雅院區），門診資訊、醫師陣容與線上預約導流",
      tags: ["形象官網", "醫療院所", "RWD"],
      image: "/images/portfolio/web-goodclinic.jpg",
    },
    {
      title: "澎湖 海島拱門民宿 Landing Page",
      category: "web",
      sortYear: 2025,
      description: "海島風民宿一頁式官網，房型展示、周邊景點與訂房導流，圖片輪播與燈箱瀏覽",
      tags: ["一頁式網站", "旅宿業", "訂房導流"],
      image: "/images/portfolio/web-ponhu.jpg",
    },
    {
      title: "興岩非營利幼兒園 形象官網",
      category: "web",
      year: "2023",
      sortYear: 2023,
      description: "幼兒園形象官網，招生資訊、師資陣容、公佈欄與 LINE 好友導流，溫暖插畫風視覺",
      tags: ["形象官網", "教育機構", "LINE 導流"],
      image: "/images/portfolio/web-shinyan.jpg",
    },
    {
      title: "北宸導航合作",
      category: "transport",
      sortYear: 2020,
      description: "物流配送路線規劃系統，整合即時路況、機車/汽車/卡車多種路線模式、多點配送優化",
      tags: ["導航", "物流配送", "路線規劃"],
      image: "/images/portfolio/beichen-navigation.png",
    },
    {
      title: "充電樁服務開發",
      category: "transport",
      sortYear: 2020,
      description: "電動車充電樁服務系統，支援定位與預約功能",
      tags: ["充電樁", "電動車", "導航"],
      image: "/images/portfolio/ev-charging.png",
    },
    {
      title: "雲果長照服務 APP",
      category: "health",
      year: "2023",
      sortYear: 2023,
      description: "電商平台、Line 通知、運動監測，服務超過 5 萬名使用者",
      tags: ["長照", "醫療", "5萬用戶"],
      image: "/images/portfolio/cloudberry-app.png",
    },
    {
      title: "明明英文學習 APP",
      category: "health",
      sortYear: 2016,
      description: "台北明明補習班英文智慧王，提供單字列表、詳細解釋、片語例句、自我測驗等功能，支援等級分類學習",
      tags: ["教育", "英文學習", "iOS"],
      image: "/images/portfolio/mingming-app.png",
    },
  ]

  // 依年份由新到舊排序（同年維持原始撰寫順序）
  const sortedProjects = [...projects].sort((a, b) => b.sortYear - a.sortYear)

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
            <Reveal key={project.title} delayMs={(index % 3) * 90}>
            <div
              className="group h-full p-6 bg-card rounded-xl border border-border hover:border-foreground/20 transition-all hover:shadow-md"
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
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
