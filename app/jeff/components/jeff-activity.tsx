export function JeffActivity() {
  const years = [
    { year: "2011–13", commits: 4, label: "創業初期 · SpeakABC 口說英語 App", note: "牛奶創意成立" },
    { year: "2014", commits: 5, label: "pibooth Raspberry Pi 相簿機", note: "硬體開發啟動" },
    { year: "2015–17", commits: 7, label: "高朋卡 App 建置 · 台北市產發局補助通過", note: "政府認可" },
    { year: "2018", commits: 6, label: "玉山證券 / E.SUN 金融整合", note: "金融科技" },
    { year: "2019", commits: 8, label: "稻米 ERP 系統 12 大模組", note: "農業科技" },
    { year: "2020", commits: 24, label: "LINE Bot × ERP × 後端 · 759 commits", note: "多系統並行" },
    { year: "2021", commits: 25, label: "Nuwa AI 家教 SaaS 啟動 · 769 commits", note: "⚡ 首個 LLM 產品" },
    { year: "2022", commits: 23, label: "平台規模化 · 多客戶並行 · 709 commits", note: "" },
    { year: "2023", commits: 9, label: "石頭燒肉 · 稻米 ERP 迭代 · 274 commits", note: "" },
    { year: "2024", commits: 69, label: "CmcDms 文件管理 · YAMAHA CRM · 2,148 commits", note: "大廠客戶" },
    { year: "2025", commits: 5, label: "新業務探索 · 新架構實驗 · 161 commits", note: "" },
    { year: "2026", commits: 100, label: "AI Coding 全面導入 · 59 個專案 · 3,103 commits", note: "⚡ AI 加速", ai: true },
  ]

  const maxCommits = Math.max(...years.map((y) => y.commits))

  const milestones = [
    { year: "2011", text: "牛奶創意成立，SpeakABC 口說英語 App 推出" },
    { year: "2017", text: "台北市產發局研發補助通過（NT$218萬），高朋卡 18 家聯盟 App 建置" },
    { year: "2018", text: "玉山證券、第一銀行金融科技系統交付" },
    { year: "2021", text: "首個 LLM 產品 Nuwa AI 家教 SaaS 上線" },
    { year: "2023", text: "山葉機車 YAMAHA CRM APP、高朋卡系統" },
    { year: "2024", text: "精誠資訊 AI 產線數位轉型、CDU 散熱監管" },
    { year: "2025", text: "通過「智慧農業科技服務體系機構能量登錄」審查" },
    { year: "2026", text: "AI Coding 全面導入，交付速度提升 30%" },
  ]

  return (
    <section id="activity" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              開發活躍度
              <br />
              <span className="text-muted-foreground">2011 – 2026</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              本地 Git 統計：<strong className="text-foreground">7,900+ commits</strong>，
              跨 <strong className="text-foreground">80+ repos</strong>，涵蓋 15 年開發歷程。
              2026 年 AI Coding 工具全面導入後，單年產出
              <strong className="text-foreground">3,100+ commits、橫跨 59 個專案</strong>，
              <strong className="text-foreground">是 2025 年的 19 倍</strong>。
            </p>
          </div>

          {/* Milestones */}
          <div className="space-y-3">
            {milestones.map((m) => (
              <div key={m.year} className="flex gap-4 items-start">
                <span className="text-xs font-bold text-accent w-12 pt-0.5 flex-shrink-0">{m.year}</span>
                <div className="flex-1 pb-3 border-b border-border last:border-0">
                  <p className="text-sm text-muted-foreground">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bar chart */}
        <div className="space-y-3">
          {years.map((y) => (
            <div key={y.year} className="grid items-center gap-3" style={{ gridTemplateColumns: "60px 1fr 160px" }}>
              <span className="text-xs font-semibold text-muted-foreground text-right">{y.year}</span>
              <div className="h-9 bg-secondary rounded-lg overflow-hidden">
                <div
                  className={`h-full rounded-lg flex items-center px-3 transition-all ${
                    y.ai
                      ? "bg-gradient-to-r from-accent/60 to-accent"
                      : "bg-foreground/10 hover:bg-foreground/15"
                  }`}
                  style={{ width: `${Math.max(3, (y.commits / maxCommits) * 100)}%` }}
                />
              </div>
              <div className="pl-1">
                <span className="text-xs text-muted-foreground leading-tight block">{y.label}</span>
                {y.note && (
                  <span className={`text-xs font-semibold ${y.ai ? "text-accent" : "text-muted-foreground/60"}`}>
                    {y.note}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-6 mt-8 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-6 h-3 bg-foreground/10 rounded" />
            <span>一般開發期</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-3 bg-gradient-to-r from-accent/60 to-accent rounded" />
            <span>AI 加速期（2026）</span>
          </div>
        </div>
      </div>
    </section>
  )
}
