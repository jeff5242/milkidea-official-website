"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSuccess(true)
        setFormData({ name: "", email: "", company: "", message: "" })
        setTimeout(() => setIsSuccess(false), 5000)
      } else {
        alert("發送失敗，請稍後再試或直接透過 Email 聯繫我們。")
      }
    } catch (error) {
      console.error("Submission error:", error)
      alert("連線錯誤，請檢查您的網路或稍後再試。")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "電子郵件",
      value: "jeff@milkidea.com",
      href: "mailto:jeff@milkidea.com",
    },
    {
      icon: Phone,
      label: "聯絡電話",
      value: "聯繫我們取得電話",
      href: "#",
    },
    {
      icon: MapPin,
      label: "公司地址",
      value: "台灣",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              讓我們開始
              <br />
              您的專案
            </h2>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-10">
              無論您有任何數位產品的需求，我們都很樂意與您討論。填寫表單或直接聯繫我們，開啟合作的第一步。
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/60">
                      {info.label}
                    </p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-card text-card-foreground p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-6">填寫諮詢表單</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    姓名
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="您的姓名"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    電子郵件
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium mb-2"
                >
                  公司名稱
                </label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  placeholder="您的公司"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  專案說明
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="請簡述您的專案需求..."
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "發送中..." : isSuccess ? "發送成功！" : "送出諮詢"}
                {isSuccess ? (
                  <div className="w-4 h-4 ml-2 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-[10px] text-white">✓</span>
                  </div>
                ) : (
                  <Send className="w-4 h-4 ml-2" />
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
