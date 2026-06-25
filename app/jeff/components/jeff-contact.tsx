import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, ArrowRight } from "lucide-react"

export function JeffContact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
          讓我們開始
          <br />
          <span className="text-muted-foreground">你的下一個專案</span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          無論是 AI 導入評估、系統整合、還是從零打造產品——
          歡迎直接聯繫討論，第一次 30 分鐘需求對談免費。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" asChild>
            <a href="mailto:jeff@milkidea.com" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              jeff@milkidea.com
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a
              href="https://lin.ee/sERO3sK"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#06C755]" />
              LINE 加入好友
            </a>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          或瀏覽{" "}
          <Link href="/" className="text-foreground underline underline-offset-4 hover:text-accent transition-colors">
            牛奶創意官網
          </Link>{" "}
          了解完整服務項目
        </p>
      </div>
    </section>
  )
}
