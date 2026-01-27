import {
  Globe,
  ShoppingCart,
  Smartphone,
  Factory,
  Car,
  HeartPulse,
  ArrowUpRight,
} from "lucide-react"
import Link from "next/link"

export function Services() {
  const services = [
    {
      icon: ShoppingCart,
      title: "電商與 ERP 系統",
      description:
        "完整的電子商務解決方案，從 ERP、B2B 到 B2C 系統建置與維運。",
      examples: ["米屋 ERP/B2B/B2C 系統", "永豐券村 Cardo 票券商城", "裕富 BNPL 商城"],
    },
    {
      icon: Smartphone,
      title: "CRM 與會員管理",
      description:
        "客戶關係管理系統，整合會員管理、點數商城、精準行銷等功能。",
      examples: ["山葉機車 CRM APP", "石頭火鍋 Line CRM", "高朋卡系統"],
    },
    {
      icon: Globe,
      title: "金融科技服務",
      description:
        "證券開戶、線上交易、投資平台等金融應用開發，兼顧安全與便利。",
      examples: ["玉山證券", "第一銀行福利網", "裕富數位 BNPL"],
    },
    {
      icon: Factory,
      title: "AI 數位轉型服務",
      description:
        "傳統產線智能化升級，碳排追蹤、稼動管理、良率優化、模具壽命預測。",
      examples: ["AI 機櫃 CDU 散熱監管", "設備保養管理", "ESG 碳足跡追蹤"],
    },
    {
      icon: Car,
      title: "交通導航解決方案",
      description:
        "充電樁服務、車載導航、工程專案等交通相關系統開發。",
      examples: ["北宸導航合作", "山葉機車導航", "世曦工程專案", "充電樁服務"],
    },
    {
      icon: HeartPulse,
      title: "醫療與教育服務",
      description:
        "長照服務、護理排班、教育學習等民生應用開發。",
      examples: ["雲果長照 APP (5萬用戶)", "高榮護理排班", "明明英文學習 APP"],
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            2025 服務項目
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            從設計到開發，我們提供一站式的數位解決方案，協助您的企業在數位時代脫穎而出。
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-foreground/20 transition-all hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground mb-2">代表案例</p>
                <div className="flex flex-wrap gap-1.5">
                  {service.examples.map((example) => (
                    <span
                      key={example}
                      className="px-2 py-0.5 bg-secondary text-xs text-foreground rounded-full"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:underline underline-offset-4"
          >
            了解更多服務內容
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
