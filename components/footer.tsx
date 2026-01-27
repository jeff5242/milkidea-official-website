import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    services: [
      { label: "電商/ERP 系統", href: "#services" },
      { label: "CRM 會員管理", href: "#services" },
      { label: "AI 數位轉型", href: "#services" },
      { label: "交通導航", href: "#services" },
    ],
    company: [
      { label: "關於我們", href: "#about" },
      { label: "作品案例", href: "#portfolio" },
      { label: "聯絡我們", href: "#contact" },
    ],
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo-milkidea.png"
                alt="牛奶創意 Milkidea"
                width={120}
                height={36}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              專注於行動應用與企業系統開發的數位解決方案公司，成立於 2011 年，深耕農業科技、交通導航、智慧製造及企業資訊系統。
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">服務項目</h4>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">公司</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} 牛奶創意 Milkidea. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            方乃正 0936-923-912
          </p>
        </div>
      </div>
    </footer>
  )
}
