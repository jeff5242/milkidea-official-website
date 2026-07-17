const clients = [
  "精誠資訊",
  "壽米屋",
  "山葉機車",
  "鮮友集團",
  "麥留高爾夫",
  "玉山證券",
  "雙鴻科技",
  "永豐紙業",
  "第一銀行",
  "裕富數位",
  "台北明明",
  "宏固電子",
  "大衛營高爾夫",
]

const trustBadges = [
  { color: "bg-blue-500/80", label: "台北市產發局研發補助（2017）" },
  { color: "bg-emerald-500/80", label: "智慧農業機構能量登錄（2025）" },
  { color: "bg-purple-500/80", label: "雙鴻科技 策略股東" },
  { color: "bg-amber-500/80", label: "上市公司與核心團隊共同持股" },
]

export function Clients() {
  return (
    <section className="py-16 bg-card border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          深受各產業領導品牌信賴
        </p>
      </div>

      {/* 無縫跑馬燈：內容複製兩份，位移 -50% 循環；hover 暫停、減少動態時改靜態換行 */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

        <div className="flex motion-safe:w-max motion-safe:animate-[clients-marquee_36s_linear_infinite] motion-safe:hover:[animation-play-state:paused] motion-reduce:flex-wrap motion-reduce:justify-center">
          <div className="flex items-center gap-10 md:gap-14 px-5 md:px-7 motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-6">
            {clients.map((client) => (
              <span
                key={client}
                className="text-base md:text-lg font-semibold text-muted-foreground/60 hover:text-foreground transition-colors whitespace-nowrap"
              >
                {client}
              </span>
            ))}
          </div>
          <div
            aria-hidden="true"
            className="flex items-center gap-10 md:gap-14 px-5 md:px-7 motion-reduce:hidden"
          >
            {clients.map((client) => (
              <span
                key={client}
                className="text-base md:text-lg font-semibold text-muted-foreground/60 hover:text-foreground transition-colors whitespace-nowrap"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 信任徽章 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {trustBadges.map((badge) => (
            <span
              key={badge.label}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary border border-border rounded-full text-xs text-muted-foreground"
            >
              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${badge.color}`} />
              {badge.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
