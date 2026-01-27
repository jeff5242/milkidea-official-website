export function Clients() {
  const clients = [
    "精誠資訊",
    "壽米屋",
    "山葉機車",
    "鮮友集團",
    "高朋高爾夫",
    "玉山證券",
    "雙鴻科技",
    "永豐紙業",
    "第一銀行",
    "裕富數位",
    "台北明明",
  ]

  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          深受各產業領導品牌信賴
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {clients.map((client) => (
            <div
              key={client}
              className="text-base md:text-lg font-semibold text-muted-foreground/60 hover:text-foreground transition-colors"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
