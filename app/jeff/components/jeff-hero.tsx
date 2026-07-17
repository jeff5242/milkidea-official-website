import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, MessageCircle } from "lucide-react"
import { JeffPhotoCarousel } from "./jeff-photo-carousel"

export function JeffHero() {
  const stats = [
    { value: "15+", label: "年開發經驗" },
    { value: "9,200+", label: "Git Commits" },
    { value: "100+", label: "交付應用" },
    { value: "15萬+", label: "服務用戶" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full text-sm text-muted-foreground mb-8">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              牛奶創意 MilkIdea · 共同創辦人 / CTO
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight tracking-tight mb-4">
              方乃正
              <br />
              <span className="text-muted-foreground">Jeff Fang</span>
            </h1>

            <p className="text-lg md:text-xl text-accent font-semibold mb-6">
              全端工程師 · 場域整合 · AI 應用開發
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
              15 年深耕餐飲、零售、設施管理場域整合，擅長「最後一哩」——把
              ERP、POS、硬體、會員系統串成一套真正能運作的解決方案。
              2021 年起全面導入 LLM，讓 AI 貫穿客服、自動化與資料分析三條業務線。
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-3 mb-12">
              <Button size="lg" asChild>
                <Link href="#ai-cases">
                  AI 代表案例
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:jeff@milkidea.com" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  jeff@milkidea.com
                </a>
              </Button>
            </div>

            {/* Quick links */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a
                href="https://lin.ee/sERO3sK"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#06C755]" />
                LINE 諮詢
              </a>
              <span className="text-border">·</span>
              <Link href="/" className="hover:text-foreground transition-colors">
                牛奶創意官網
              </Link>
              <span className="text-border">·</span>
              <Link href="#contact" className="hover:text-foreground transition-colors">
                立即聯絡
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-xs text-muted-foreground/50 mr-1">信任背書</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-secondary border border-border rounded-md text-xs text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80 flex-shrink-0" />
                台北市產發局研發補助（2017）
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-secondary border border-border rounded-md text-xs text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 flex-shrink-0" />
                智慧農業機構能量登錄（2025）
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-secondary border border-border rounded-md text-xs text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500/80 flex-shrink-0" />
                雙鴻科技（策略股東）
              </span>
            </div>
          </div>

          {/* Right — Avatar carousel + tags */}
          <div className="flex flex-col items-center gap-8">
            <JeffPhotoCarousel />

            {/* Capability tags */}
            <div className="flex flex-wrap justify-center gap-2 max-w-sm">
              {[
                "Claude API", "OpenAI GPT", "RAG / 知識庫",
                "NestJS", "React", "Laravel", "Python / FastAPI",
                "AWS / GCP", "LINE Bot", "Shopline × Kintone",
                "Modbus IoT", "Raspberry Pi",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-secondary text-xs text-muted-foreground rounded-full border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
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
