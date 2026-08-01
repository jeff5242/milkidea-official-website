export type Category =
  | "ecommerce"
  | "crm"
  | "finance"
  | "ai"
  | "field"
  | "gis"
  | "web"
  | "transport"
  | "health"

export type Industry =
  | "金融證券"
  | "製造科技"
  | "餐飲"
  | "零售電商"
  | "農業食品"
  | "公部門"
  | "運動休閒"
  | "教育"
  | "醫療長照"
  | "交通物流"
  | "旅宿"

export const CATEGORY_LABELS: Record<Category, string> = {
  ecommerce: "電商/ERP",
  crm: "CRM 系統",
  finance: "金融科技",
  ai: "AI 數位轉型",
  field: "場域整合",
  gis: "GIS 地理資訊",
  web: "網站設計",
  transport: "交通導航",
  health: "醫療教育",
}

export interface Project {
  /** 案例庫獨立頁網址（/cases/[slug]） */
  slug: string
  title: string
  category: Category
  /** 客戶所屬產業（有查證依據才填，未填只出現在「全部」） */
  industry?: Industry
  description: string
  tags: string[]
  /** 顯示在卡片上的年份標籤（有查證依據才填） */
  year?: string
  /** 排序用年份，清單依此由新到舊排列 */
  sortYear: number
  image?: string
  /** 多張系統營運圖時每 3.5 秒自動切換 */
  images?: string[]
}

export const PROJECTS: Project[] = [
  {
    slug: "y-connect-twn",
    title: "YAMAHA Y-Connect TWN 車聯網 APP",
    category: "transport",
    industry: "製造科技",
    year: "2026",
    sortYear: 2026,
    description:
      "台灣山葉機車官方車聯網 APP（iOS／Android 雙平台）：手機即時儀表板顯示轉速、油門開度與引擎水溫，GPS 騎乘軌跡與旅程紀錄、電動車遠端控制（車廂開啟、車輛上鎖、藍牙尋車）、測速照相預警導航、保養提醒與線上預約保養，支援油車與電動車指定機種，持續進行版本維護與功能更新",
    tags: ["車聯網", "iOS/Android", "持續維護中"],
    images: ["/images/portfolio/y-connect-1.jpg", "/images/portfolio/y-connect-2.jpg"],
  },
  {
    slug: "urich-bnpl-app",
    title: "裕富數位 Urich APP",
    category: "ecommerce",
    industry: "金融證券",
    year: "2024",
    sortYear: 2024,
    description: "Buy Now Pay Later 先買後付商城系統，完整的後台管理功能",
    tags: ["BNPL", "電商平台", "後台管理"],
    image: "/images/portfolio/urich-app.png",
  },
  {
    slug: "ricehouse-erp",
    title: "米屋 ERP/B2B/B2C 系統",
    category: "ecommerce",
    industry: "農業食品",
    year: "2018–2026",
    sortYear: 2026,
    description:
      "完整稻米加工管理系統，涵蓋派工、過磅、烘乾監控、精米、品檢、包裝、出貨退貨、田間管理等 12 大模組，並串接物流貨到付款自動對帳銷帳；2018 年中衛發展中心輔導公開評選得標起長期合作，並持續營運米屋智農 iOS App（整合藍新金流與電子發票）",
    tags: ["ERP", "農業科技", "物流對帳自動化"],
    image: "/images/portfolio/ricehouse-erp.png",
  },
  {
    slug: "taipei-traffic-gis",
    title: "臺北市交通地理資訊系統加值（圖根點模組）",
    category: "gis",
    industry: "公部門",
    year: "2025–2026",
    sortYear: 2026,
    description:
      "臺北市自動化道路資訊蒐集暨交通地理資訊系統加值案（台灣世曦分包）：開發圖根點購買模組、開放編輯與單點微調、滅失回報、巡查與查詢介面 RWD 改版，分三期開發並完成資料遷移",
    tags: ["GIS", "公部門", "台灣世曦"],
  },
  {
    slug: "ceci-water-monitoring",
    title: "即時水情監測系統",
    category: "gis",
    industry: "公部門",
    year: "2025",
    sortYear: 2025,
    description:
      "即時水情監測核心系統與縣市介面客製化（台灣世曦分包）：跨平台 GIS 圖台介接機關圖資與 Google 底圖，動態座標、地圖套疊、量測與列印工具列，門牌／地號 API 定位查詢",
    tags: ["GIS 圖台", "水情監測", "台灣世曦"],
  },
  {
    slug: "sewer-pipeline-gis",
    title: "下水道營運管理與管線 GIS 系列",
    category: "gis",
    industry: "公部門",
    year: "2024–2026",
    sortYear: 2026,
    description:
      "台灣世曦合格分包廠商長期合作：雲林縣、苗栗縣下水道營運管理系統功能開發，桃園市公共設施管線位置調查（埋深讀數判釋）系統建置，及北部治水計畫雨水下水道規劃報告數位典藏",
    tags: ["GIS", "下水道管線", "台灣世曦"],
  },
  {
    slug: "tari-flower-breeding",
    title: "農試所花卉育種調查系統",
    category: "field",
    industry: "公部門",
    year: "2021",
    sortYear: 2021,
    description:
      "農業部農業試驗所花卉研究中心：花卉育種調查行動 App 與資訊管理系統，QR Code 親本資料管理、雜交組合與性狀調查，支援火鶴花、文心蘭、蝴蝶蘭，並開放高雄區、臺中區農改場帳號使用",
    tags: ["公部門", "農業科技", "行動 App"],
  },
  {
    slug: "knownyou-breeding-app",
    title: "農友種苗 行動育種調查 App",
    category: "field",
    industry: "農業食品",
    year: "2019–2022",
    sortYear: 2022,
    description:
      "田間育種調查 Android App：十餘種主要作物各自性狀定義檔，平板於田間逐株調查並上傳雲端資料庫分析，整合農友端 API 與微型氣象站，後續擴展至高雄區農業改良場使用",
    tags: ["農業科技", "田間調查", "Android"],
  },
  {
    slug: "ricehouse-smart-agri-4",
    title: "壽米屋 智慧農業 4.0（農業科專）",
    category: "ai",
    industry: "農業食品",
    year: "2017",
    sortYear: 2017,
    description:
      "農委會 106 年度智慧農業 4.0 業界參與計畫：稻作田間微氣象觀測、智能倉儲蟲害溫控、智能配置反饋系統與品保數據模型，與村田電子合作土壤感測，支援連續多年績優稻米產銷專業區",
    tags: ["智慧農業", "IoT 感測", "政府補助計畫"],
  },
  {
    slug: "sanshui-poultry-performance",
    title: "山水畜產 土雞場績效紀錄系統",
    category: "field",
    industry: "農業食品",
    year: "2018",
    sortYear: 2018,
    description:
      "高雄山水畜產各土雞場飼養績效紀錄與統計分析系統，中衛發展中心農業經營組引介之農業數位化案例",
    tags: ["畜牧業", "數據分析", "農業數位化"],
  },
  {
    slug: "iam-shopline-ecount",
    title: "我適文創 Shopline × Ecount ERP 整合",
    category: "ecommerce",
    industry: "零售電商",
    year: "2026",
    sortYear: 2026,
    description:
      "六家百貨櫃位 POS 訂單每日自動轉入 Ecount ERP 銷貨單，整合庫存同步、每週補貨建議與 LINE 店長日報/週報推播",
    tags: ["ERP 整合", "RPA 自動化", "零售連鎖"],
    images: ["/images/portfolio/iam-dashboard.jpg", "/images/portfolio/iam-inventory.jpg"],
  },
  {
    slug: "cardo-eticket",
    title: "永豐券村 Cardo",
    category: "ecommerce",
    industry: "零售電商",
    sortYear: 2021,
    description:
      "電子票券商城 APP，完整購票流程：點擊購買、票夾管理、點擊開鎖使用、出示 QR 碼供商家掃描核銷",
    tags: ["電子票券", "QR核銷", "永豐"],
    image: "/images/portfolio/yongfeng-cardo.png",
  },
  {
    slug: "yamaha-crm",
    title: "山葉機車 CRM APP",
    category: "crm",
    industry: "製造科技",
    year: "2023",
    sortYear: 2023,
    description:
      "YAMAHA LIFE 會員 APP，整合 YaPoints 點數兌換、騎士裝品商城、維修歷史、預約服務、油耗紀錄、車籍資料管理",
    tags: ["CRM", "會員系統", "iOS/Android"],
    image: "/images/portfolio/yamaha-crm.png",
  },
  {
    slug: "shanyou-line-crm",
    title: "鮮友 / 極鮮 / 神保町 LINE 會員系統",
    category: "crm",
    industry: "餐飲",
    sortYear: 2023,
    description:
      "與石頭火鍋同架構的 LINE 官方帳號會員系統，導入鮮友、極鮮、神保町等餐飲品牌：會員卡、點數累積兌換、禮物券管理與分店資訊",
    tags: ["LINE", "CRM", "餐飲連鎖"],
  },
  {
    slug: "kintone-mssql-erp",
    title: "Kintone × 地端 MSSQL ERP 資料整合",
    category: "ecommerce",
    year: "2026",
    sortYear: 2026,
    description:
      "地端 MSSQL ERP 排程同步至 Kintone 雲端 CRM：欄位對應與資料驗證、krewDashboard 即時營運儀表板，整合 LINE Bot 自然語言查詢數據",
    tags: ["Kintone", "ERP 整合", "LINE Bot"],
  },
  {
    slug: "stone-hotpot-line",
    title: "石頭火鍋 Line 官方帳號",
    category: "crm",
    industry: "餐飲",
    year: "2023",
    sortYear: 2023,
    description:
      "石頭日式炭火燒肉 LINE 會員系統，整合會員卡、點數累積兌換、禮物券管理、顧客意見調查、分店查詢、VIP 升級優惠",
    tags: ["Line", "CRM", "點數兌換"],
    image: "/images/portfolio/stone-hotpot-line.png",
  },
  {
    slug: "firstbank-welfare",
    title: "第一銀行福利網",
    category: "finance",
    industry: "金融證券",
    year: "2022",
    sortYear: 2022,
    description:
      "福利社商品線上訂購系統，支援團購商品、一般商品分類，整合 Taiwan Pay、信用卡、eATM 多元支付",
    tags: ["金融", "福利網", "電商"],
    image: "/images/portfolio/firstbank-welfare.png",
  },
  {
    slug: "esun-securities",
    title: "玉山證券",
    category: "finance",
    industry: "金融證券",
    year: "2018",
    sortYear: 2018,
    description: "數位開戶服務，安全便捷的身份驗證流程",
    tags: ["金融科技", "線上開戶", "證券"],
    image: "/images/portfolio/esun-securities.png",
  },
  {
    slug: "ai-rack-cdu",
    title: "AI 機櫃 CDU 散熱監管系統",
    category: "ai",
    industry: "製造科技",
    year: "2024",
    sortYear: 2024,
    description: "感測器監控、異常通知、自動控制設定、網路設定",
    tags: ["AI", "IoT", "散熱監控"],
    image: "/images/portfolio/ai-rack-cdu.png",
  },
  {
    slug: "factory-ai-transformation",
    title: "傳統產線 AI 數位轉型",
    category: "ai",
    industry: "製造科技",
    year: "2024",
    sortYear: 2024,
    description: "碳排追蹤、稼動管理、良率管理、模具壽命管理、設備保養管理",
    tags: ["AI", "ESG", "智慧製造"],
    image: "/images/portfolio/factory-ai.png",
  },
  {
    slug: "ifdcs-yilan",
    title: "IFDCS 工廠設備智慧監控（宏固電子宜蘭廠）",
    category: "ai",
    industry: "製造科技",
    year: "2026",
    sortYear: 2026,
    description:
      "電流、電壓、溫度、功率即時監控與電費預估，三層級告警即時推播，雲端＋地端雙軌架構，已於宜蘭廠區上線運行",
    tags: ["IoT 監控", "智慧工廠", "已上線"],
    images: ["/images/portfolio/ifdcs-orders.jpg", "/images/portfolio/ifdcs-query.jpg"],
  },
  {
    slug: "auras-canteen",
    title: "雙鴻食堂 員工訂餐系統",
    category: "field",
    industry: "製造科技",
    year: "2026",
    sortYear: 2026,
    description:
      "雙鴻科技五廠區 LINE 訂餐服務：整週便當預訂、每日自動結單、各廠區訂單彙整叫貨、QR 領餐報到與未領取追蹤，取代人工統計",
    tags: ["LINE LIFF", "企業員工服務", "雙鴻科技"],
    images: ["/images/portfolio/bandon-menu.jpg", "/images/portfolio/bandon-richmenu.jpg"],
  },
  {
    slug: "diaomao-qr-ordering",
    title: "叼貓菜單 QR 掃碼點餐系統",
    category: "field",
    industry: "餐飲",
    year: "2026",
    sortYear: 2026,
    description:
      "烤魚餐廳三端系統：顧客掃碼點餐（辣度、配料客製）、店員桌位圖與訂單看板、後台菜單管理，整合廚房出單機直印與 LINE 送單通知，開幕籌備中",
    tags: ["QR 點餐", "餐飲 POS", "籌備中"],
    images: ["/images/portfolio/diaomao-menu.jpg", "/images/portfolio/diaomao-custom.jpg"],
  },
  {
    slug: "sandi-golf-parking",
    title: "三地高市高爾夫總店 停車場管理系統",
    category: "field",
    industry: "運動休閒",
    year: "2026",
    sortYear: 2026,
    description:
      "練習場停車場管理：LINE 銷單核銷、車牌辨識（LPR）白名單、進出場事件與影像紀錄、高朋卡會員綁定，內部營運專用系統，開發完成驗收中",
    tags: ["LINE 核銷", "車牌辨識", "驗收中"],
    images: [
      "/images/portfolio/parking-member.jpg",
      "/images/portfolio/parking-records.jpg",
      "/images/portfolio/parking-richmenu.jpg",
    ],
  },
  {
    slug: "davidcamp-golf-booking",
    title: "大衛營高爾夫 擊球預約系統",
    category: "field",
    industry: "運動休閒",
    year: "2025–2026",
    sortYear: 2026,
    description:
      "LINE 開球時段預約與出發臺名單管理，球場營運後台一站管理，近期上線會員電子票券發放與核銷，並已延伸規劃 27 洞三區旗艦版",
    tags: ["LINE LIFF", "預約系統", "電子票券"],
    images: ["/images/portfolio/davidcamp-voucher.jpg", "/images/portfolio/davidcamp-redeem.jpg"],
  },
  {
    slug: "nuwa-ai-tutor",
    title: "女媧 Nuwa AI 家教 SaaS 平台",
    category: "web",
    industry: "教育",
    sortYear: 2026,
    description:
      "AI 家教與命理 SaaS 平台官網與應用介面，GPT 多師多科、PDF 知識庫、課程追蹤與訂閱金流",
    tags: ["SaaS", "AI 應用", "自主產品"],
    image: "/images/portfolio/web-nuwa.jpg",
  },
  {
    slug: "coregrid-website",
    title: "CGX CoreGrid AI 算力交易平台",
    category: "web",
    industry: "製造科技",
    sortYear: 2025,
    description: "AI 算力交易平台形象官網，深色科技風視覺與產品介紹",
    tags: ["形象官網", "科技業", "RWD"],
    image: "/images/portfolio/web-coregrid.jpg",
  },
  {
    slug: "nexifuel-website",
    title: "NexiFuel GPU 算力平台官網",
    category: "web",
    industry: "製造科技",
    sortYear: 2025,
    description: "GPU 算力平台形象官網，產品方案展示與詢價導流",
    tags: ["形象官網", "科技業", "RWD"],
    image: "/images/portfolio/web-nexifuel.jpg",
  },
  {
    slug: "goodclinic-website",
    title: "GoodClinic 好診所 連鎖官網",
    category: "web",
    industry: "醫療長照",
    sortYear: 2025,
    description: "診所連鎖形象官網（嘉南／新雅院區），門診資訊、醫師陣容與線上預約導流",
    tags: ["形象官網", "醫療院所", "RWD"],
    image: "/images/portfolio/web-goodclinic.jpg",
  },
  {
    slug: "penghu-bnb-landing",
    title: "澎湖 海島拱門民宿 Landing Page",
    category: "web",
    industry: "旅宿",
    sortYear: 2025,
    description: "海島風民宿一頁式官網，房型展示、周邊景點與訂房導流，圖片輪播與燈箱瀏覽",
    tags: ["一頁式網站", "旅宿業", "訂房導流"],
    image: "/images/portfolio/web-ponhu.jpg",
  },
  {
    slug: "shinyan-kindergarten",
    title: "興岩非營利幼兒園 形象官網",
    category: "web",
    industry: "教育",
    year: "2023",
    sortYear: 2023,
    description: "幼兒園形象官網，招生資訊、師資陣容、公佈欄與 LINE 好友導流，溫暖插畫風視覺",
    tags: ["形象官網", "教育機構", "LINE 導流"],
    image: "/images/portfolio/web-shinyan.jpg",
  },
  {
    slug: "beichen-navigation",
    title: "北宸導航合作",
    category: "transport",
    industry: "交通物流",
    sortYear: 2020,
    description:
      "物流配送路線規劃系統，整合即時路況、機車/汽車/卡車多種路線模式、多點配送優化",
    tags: ["導航", "物流配送", "路線規劃"],
    image: "/images/portfolio/beichen-navigation.png",
  },
  {
    slug: "ev-charging",
    title: "充電樁服務開發",
    category: "transport",
    industry: "交通物流",
    sortYear: 2020,
    description: "電動車充電樁服務系統，支援定位與預約功能",
    tags: ["充電樁", "電動車", "導航"],
    image: "/images/portfolio/ev-charging.png",
  },
  {
    slug: "cloudberry-longcare",
    title: "雲果長照服務 APP",
    category: "health",
    industry: "醫療長照",
    year: "2023",
    sortYear: 2023,
    description: "電商平台、Line 通知、運動監測，服務超過 5 萬名使用者",
    tags: ["長照", "醫療", "5萬用戶"],
    image: "/images/portfolio/cloudberry-app.png",
  },
  {
    slug: "mingming-english",
    title: "明明英文學習 APP",
    category: "health",
    industry: "教育",
    sortYear: 2016,
    description:
      "台北明明補習班英文智慧王，提供單字列表、詳細解釋、片語例句、自我測驗等功能，支援等級分類學習",
    tags: ["教育", "英文學習", "iOS"],
    image: "/images/portfolio/mingming-app.png",
  },
]

/** 依年份由新到舊排序（同年維持原始撰寫順序） */
export function getSortedProjects(): Project[] {
  return [...PROJECTS].sort((a, b) => b.sortYear - a.sortYear)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug)
}

/** 目前案例中實際出現的產業（維持宣告順序） */
export function getIndustries(): Industry[] {
  const seen = new Set<Industry>()
  for (const project of PROJECTS) {
    if (project.industry) seen.add(project.industry)
  }
  return [...seen]
}

/** 同產業或同服務類型的相關案例（排除自己） */
export function getRelatedProjects(project: Project, limit: number): Project[] {
  return getSortedProjects()
    .filter(
      (candidate) =>
        candidate.slug !== project.slug &&
        ((project.industry && candidate.industry === project.industry) ||
          candidate.category === project.category)
    )
    .slice(0, limit)
}
