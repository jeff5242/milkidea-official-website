"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, MapPin, History, CreditCard } from "lucide-react"

export function GolfriendFeature() {
    const features = [
        {
            icon: Smartphone,
            title: "手機即會員卡",
            description: "告別實體卡片，手機 APP 就是您的球卡錢包，隨時查詢餘額與點數。",
        },
        {
            icon: CreditCard,
            title: "智慧出球服務",
            description: "透過手機產生出球號或掃描 QR Code，即可快速啟動發球機，無須排隊。",
        },
        {
            icon: History,
            title: "完整擊球紀錄",
            description: "詳細記錄每一次的練習數據與消費歷程，隨時掌握個人擊球習慣。",
        },
        {
            icon: MapPin,
            title: "球場地圖導航",
            description: "內建地圖功能，快速查詢附近合作的練習場位置與詳細資訊。",
        },
    ]

    return (
        <section className="py-20 md:py-32 bg-green-50/50 dark:bg-green-950/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-500 text-white shadow hover:bg-green-600 mb-6">
                            旗艦產品
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-foreground">
                            高朋卡 Golfriend
                            <br />
                            <span className="text-green-600">智慧高爾夫練習場解決方案</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            專為高爾夫練習場打造的數位轉型方案。整合會員管理、支付系統與硬體設備，讓球友只需一支手機，就能享受流暢的擊球體驗。
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 mb-10">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                        <feature.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                                <a href="https://golfriend.milkidea.com/" target="_blank" rel="noopener noreferrer">
                                    前往官方網站
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-background">
                            <Image
                                src="/images/portfolio/gaopeng-card.png"
                                alt="高朋卡 Golfriend APP 介面"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                            />
                            {/* Decorative elements */}
                            <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-green-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute -z-10 bottom-0 left-0 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
