export function JeffAiCases() {
  const cases = [
    {
      id: "factory-ai",
      year: "2024",
      client: "精誠資訊 BU",
      title: "傳統產線 AI 數位轉型",
      tags: ["AI", "ESG", "IoT", "製造業"],
      pain: "傳統製造業產線數據完全靠人工抄表，碳排與稼動率無從即時掌握。ESG 報告每月耗費大量人工統計，良率異常只能事後發現，模具壽命靠經驗估算，維修成本無法優化。",
      solution: "建立 IoT 感測器數據收集層，即時讀取設備狀態、能耗與生產數據。以 AI 模型分析歷史規律，實現稼動率監控、良率預警、模具壽命預測、碳排追蹤四合一儀表板，並自動產出符合 ESG 揭露規範的報表。",
      outcome: "報表人工作業時間大幅縮減，良率異常可提前預警而非事後追查，模具保養從被動變主動，首個符合 ESG 揭露標準的自動化報告流程上線。",
      metric: "ESG 報表自動化",
    },
    {
      id: "city-reframe",
      year: "2026",
      client: "政府場域 POC",
      title: "都市更新審議自動審查系統",
      tags: ["AI 規則引擎", "PDF 解析", "Python", "政府"],
      pain: "都更審議資料動輒數百頁 PDF，初審需逐頁比對 10 條以上法規要求，容積獎勵計算、文件完整性、個資遮蔽均需人工確認，一件案子審查動輒數天，遺漏風險高。",
      solution: "以 Python + FastAPI 搭建審查服務，pdfplumber 解析 PDF 文字與表格，Docling + Surya 處理掃描件 OCR；10 條法規（111年版）實作為可測試的規則引擎，自動偵測容積獎勵上限、文件存在性、個資遮蔽；Jinja2 產出可列印的 HTML 審查報告。",
      outcome: "POC 階段成功驗證核心流程，初核時間從人工數天縮短至分鐘級自動篩查，10 條規則全數通過實際案件測試，並預留新規則擴充介面。",
      metric: "初核時間 days → minutes",
    },
    {
      id: "nuwa",
      year: "2021–2026",
      client: "SaaS 自主產品",
      title: "Nuwa AI 家教 × 課程 SaaS",
      tags: ["LLM", "RAG", "SaaS", "訂閱金流"],
      pain: "補教業者想導入 AI 家教，卻面臨：OpenAI API 整合複雜、多位老師多科目的對話隔離難做、PDF 教材知識庫建置門檻高、學員訂閱金流需自行串接，從零開始成本極高。",
      solution: "從零建立多租戶 SaaS 平台：GPT 多師多科對話引擎（各老師獨立系統提示與知識庫）、PDF 上傳解析自動入庫、21 天課程對話追蹤與解卡機制、SunPay 紅陽金流訂閱自動扣款，後台提供 AI 對話統計與課程管理。",
      outcome: "405 commits 歷時 4 年持續迭代，從 MVP 到完整可運營 SaaS，支援多位老師並行開課、學員自助訂閱，是公司最早的 LLM 落地產品，驗證了「AI 家教即服務」的商業模式。",
      metric: "4 年 · 405 commits · 首個 LLM 產品",
    },
    {
      id: "hybrid-work",
      year: "2026",
      client: "企業內部工具",
      title: "WFH 出勤管理 × AI 員工關懷語",
      tags: ["Claude API", "NestJS", "Google Calendar", "React"],
      pain: "企業 WFH 管理仰賴 Line 群組自報，HR 難以統計出勤、特休使用率，主管看不到今日 WFH 名單，週三定錨辦公室規定執行靠人盯，員工關懷訊息靠人手動發送。",
      solution: "全端 Web App：Google OAuth 登入、出勤狀態 CRUD 並同步鏡射至個人 + 公司 Google Calendar，週三鎖定不可 WFH、假日自動封鎖、早報/晚報 Email 提醒 Cron 排程，HR 月報 + CSV 匯出；頂端橫幅每日呼叫 Claude API，結合 14 天天氣預報動態生成繁中員工關懷語。",
      outcome: "從第一行 code 到完整系統 18 天交付，完整實踐 AI Coding 工作流（Claude Code + TDD），端到端含 Google Calendar 整合、假日封鎖、HR 報表、AI 關懷橫幅全部上線。",
      metric: "18 天全端交付 · AI Coding 工作流驗證",
    },
  ]

  return (
    <section id="ai-cases" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full text-sm text-muted-foreground mb-6">
            <span className="w-2 h-2 bg-accent rounded-full" />
            AI 代表案例
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            AI 如何解決
            <br />
            <span className="text-muted-foreground">真實業務問題</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            不是 Demo、不是 Prototype——每個案例都已上線運行，有客戶、有數據、有可量化的成效。
          </p>
        </div>

        {/* Cases */}
        <div className="space-y-6">
          {cases.map((c) => (
            <div
              key={c.id}
              className="bg-card rounded-2xl border border-border p-8 md:p-10 hover:border-foreground/20 transition-colors"
            >
              {/* Top row */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20">
                      {c.client}
                    </span>
                    <span className="text-xs text-muted-foreground">{c.year}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    {c.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-secondary text-xs text-muted-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pain / Solution / Outcome */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-destructive/10 border border-destructive/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-destructive">!</span>
                    </div>
                    <span className="text-xs font-bold text-destructive uppercase tracking-wider">客戶痛點</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.pain}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-accent">→</span>
                    </div>
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">我們的解法</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.solution}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">✓</span>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">實際成效</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.outcome}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">{c.metric}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
