"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

type Category = "all" | "ecommerce" | "crm" | "finance" | "ai" | "transport" | "health"

interface Project {
  title: string
  category: Category
  description: string
  tags: string[]
  image?: string
}

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Category>("all")

  const filters: { value: Category; label: string }[] = [
    { value: "all", label: "全部" },
    { value: "ecommerce", label: "電商/ERP" },
    { value: "crm", label: "CRM 系統" },
    { value: "finance", label: "金融科技" },
    { value: "ai", label: "AI 數位轉型" },
    { value: "transport", label: "交通導航" },
    { value: "health", label: "醫療教育" },
  ]

  const projects: Project[] = [
    {
      title: "裕富數位 Urich APP",
      category: "ecommerce",
      description: "Buy Now Pay Later 先買後付商城系統，完整的後台管理功能",
      tags: ["BNPL", "電商平台", "後台管理"],
    },
    {
      title: "米屋 ERP/B2B/B2C 系統",
      category: "ecommerce",
      description: "完整稻米加工管理系統，涵蓋派工、過磅、烘乾監控、精米、品檢、包裝、出貨退貨、田間管理等 12 大模組",
      tags: ["ERP", "農業科技", "智耕雲"],
      image: "/images/portfolio/ricehouse-erp.png",
    },
    {
      title: "永豐券村 Cardo",
      category: "ecommerce",
      description: "電子票券商城 APP，完整購票流程：點擊購買、票夾管理、點擊開鎖使用、出示 QR 碼供商家掃描核銷",
      tags: ["電子票券", "QR核銷", "永豐"],
      image: "/images/portfolio/yongfeng-cardo.png",
    },
    {
      title: "山葉機車 CRM APP",
      category: "crm",
      description: "YAMAHA LIFE 會員 APP，整合 YaPoints 點數兌換、騎士裝品商城、維修歷史、預約服務、油耗紀錄、車籍資料管理",
      tags: ["CRM", "會員系統", "iOS/Android"],
      image: "/images/portfolio/yamaha-crm.png",
    },
    {
      title: "石頭火鍋 Line 官方帳號",
      category: "crm",
      description: "石頭日式炭火燒肉 LINE 會員系統，整合會員卡、點數累積兌換、禮物券管理、顧客意見調查、分店查詢、VIP 升級優惠",
      tags: ["Line", "CRM", "點數兌換"],
      image: "/images/portfolio/stone-hotpot-line.png",
    },
    {
      title: "高朋卡系統",
      category: "crm",
      description: "高爾夫球練習場會員 APP，手機就是練習球卡錢包，可查詢附近球場、產生出球號領球、查詢使用記錄",
      tags: ["會員卡", "高爾夫", "iOS/Android"],
      image: "/images/portfolio/gaopeng-card.png",
    },
    {
      title: "第一銀行福利網",
      category: "finance",
      description: "福利社商品線上訂購系統，支援團購商品、一般商品分類，整合 Taiwan Pay、信用卡、eATM 多元支付",
      tags: ["金融", "福利網", "電商"],
      image: "/images/portfolio/firstbank-welfare.png",
    },
    {
      title: "玉山證券",
      category: "finance",
      description: "數位開戶服務，安全便捷的身份驗證流程",
      tags: ["金融科技", "線上開戶", "證券"],
    },
    {
      title: "AI 機櫃 CDU 散熱監管系統",
      category: "ai",
      description: "感測器監控、異常通知、自動控制設定、網路設定",
      tags: ["AI", "IoT", "散熱監控"],
    },
    {
      title: "傳統產線 AI 數位轉型",
      category: "ai",
      description: "碳排追蹤、稼動管理、良率管理、模具壽命管理、設備保養管理",
      tags: ["AI", "ESG", "智慧製造"],
    },
    {
      title: "北宸導航合作",
      category: "transport",
      description: "物流配送路線規劃系統，整合即時路況、機車/汽車/卡車多種路線模式、多點配送優化",
      tags: ["導航", "物流配送", "路線規劃"],
      image: "/images/portfolio/beichen-navigation.png",
    },
    {
      title: "充電樁服務開發",
      category: "transport",
      description: "電動車充電樁服務系統，支援定位與預約功能",
      tags: ["充電樁", "電動車", "導航"],
    },
    {
      title: "雲果長照服務 APP",
      category: "health",
      description: "電商平台、Line 通知、運動監測，服務超過 5 萬名使用者",
      tags: ["長照", "醫療", "5萬用戶"],
    },
    {
      title: "明明英文學習 APP",
      category: "health",
      description: "台北明明補習班英文智慧王，提供單字列表、詳細解釋、片語例句、自我測驗等功能，支援等級分類學習",
      tags: ["教育", "英文學習", "iOS"],
      image: "/images/portfolio/mingming-app.png",
    },
  ]

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            2025 作品案例
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
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group p-6 bg-card rounded-xl border border-border hover:border-foreground/20 transition-all hover:shadow-md"
            >
              {/* Project Image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-muted rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                ) : (
                  <div className="text-3xl font-bold text-muted-foreground/30 group-hover:scale-105 transition-transform">
                    {project.title.charAt(0)}
                  </div>
                )}
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">
                {project.title}
              </h3>
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
          ))}
        </div>
      </div>
    </section>
  )
}
