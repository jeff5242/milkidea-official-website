import { Users, Code2, Smartphone, Factory, Cloud, Database } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Smartphone,
      title: "行動應用開發",
      description: "iOS (Swift/Objective-C) 與 Android (Kotlin) 原生應用開發",
    },
    {
      icon: Code2,
      title: "全端技術能力",
      description: ".NET Core、PHP、Java、Vue.js 等多元技術棧",
    },
    {
      icon: Cloud,
      title: "雲端服務",
      description: "AWS 雲端架構設計與部署，提供穩定可靠的服務",
    },
    {
      icon: Factory,
      title: "智慧製造",
      description: "傳統產線 AI 數位轉型，協助企業實現 ESG 目標",
    },
    {
      icon: Database,
      title: "企業系統",
      description: "ERP/CRM/MES 客製化解決方案開發與維運",
    },
    {
      icon: Users,
      title: "專業團隊",
      description: "8 人精實團隊：4 名前端 + 3 名後端工程師",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              專注創新，
              <br />
              <span className="text-muted-foreground">成就卓越</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              牛奶創意成立於 2011 年，由上市公司與核心團隊共同持股。我們深耕農業科技、交通導航、智慧製造及企業資訊系統，提供客製化解決方案。
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              我們的合作對象涵蓋精誠資訊、壽米屋、山葉機車、鮮友集團、高朋高爾夫練習場、玉山證券、台北明明、雙鴻科技、永豐紙業等知名企業。
            </p>
          </div>

          {/* Right Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 bg-card rounded-xl border border-border hover:border-foreground/20 transition-colors"
              >
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
