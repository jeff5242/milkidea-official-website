import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full text-sm text-muted-foreground mb-8">
            <span className="w-2 h-2 bg-accent rounded-full" />
            成立於 2011 年 · 超過 60+ 應用服務
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight text-balance mb-6">
            打造卓越的
            <br />
            <span className="text-muted-foreground">數位解決方案</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            我們專注於行動應用開發，協助企業實現數位轉型。從網站設計到商城系統，為您提供全方位的技術服務。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="#portfolio">
                瀏覽作品案例
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">聯絡我們</Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {[
            { value: "60+", label: "應用服務" },
            { value: "8", label: "專業團隊" },
            { value: "14+", label: "年經驗" },
            { value: "5萬+", label: "服務用戶" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
