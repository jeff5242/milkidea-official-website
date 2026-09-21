import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Navigation } from "lucide-react"
import {
  COMPANY_ADDRESS,
  COMPANY_CONTACT_PERSON,
  COMPANY_PHONE_DISPLAY,
  COMPANY_PHONE_HREF,
  GOOGLE_MAPS_URL,
  GOOGLE_MAPS_DIRECTIONS_URL,
} from "@/lib/company"

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
      { label: "關於我們", href: "/#about" },
      { label: "案例庫", href: "/cases" },
      { label: "資安與信任", href: "/trust" },
      { label: "聯絡我們", href: "/#contact" },
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
            <p className="text-muted-foreground leading-relaxed max-w-sm mb-6">
              專注於行動應用與企業系統開發的數位解決方案公司，成立於 2011 年，深耕農業科技、交通導航、智慧製造及企業資訊系統。
            </p>

            {/* 聯絡資訊 */}
            <address className="not-italic space-y-3 text-sm">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="group-hover:underline underline-offset-4">{COMPANY_ADDRESS}</span>
              </a>
              <a
                href={COMPANY_PHONE_HREF}
                className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="group-hover:underline underline-offset-4">{COMPANY_PHONE_DISPLAY}</span>
              </a>
              <a
                href={GOOGLE_MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground font-medium hover:underline underline-offset-4"
              >
                <Navigation className="w-4 h-4" />
                在 Google 地圖導航前往
              </a>
            </address>
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
            {COMPANY_CONTACT_PERSON} {COMPANY_PHONE_DISPLAY}
          </p>
        </div>
      </div>
    </footer>
  )
}
