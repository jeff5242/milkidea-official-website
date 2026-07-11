/**
 * 首頁 JSON-LD 結構化資料（Organization + LocalBusiness）
 * 資料來源：公司登記資訊（統編 53535550）＋官方聯絡方式，僅使用公開登記資訊。
 */

const SITE_URL = "https://www.milkidea.com"

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: "牛奶股份有限公司",
  alternateName: "牛奶創意 Milkidea",
  legalName: "牛奶股份有限公司 MILK IDEA INC.",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-milkidea.png`,
  image: `${SITE_URL}/images/logo-milkidea.png`,
  description:
    "牛奶創意 Milkidea 成立於 2011 年，是台北的軟體開發公司，專精客製化系統開發、工廠 AIoT 設備故障預知（IFDCS）、電商 ERP／CRM 整合、都更 AI 協審系統與 LINE Bot 開發，服務台灣企業與政府單位。",
  telephone: "+886-2-2371-1050",
  email: "jeff@milkidea.com",
  foundingDate: "2011-09-09",
  founder: {
    "@type": "Person",
    name: "方乃正",
    alternateName: "Jeff Fang",
    jobTitle: "董事長兼總經理",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "忠孝西路一段45號9樓之5",
    addressLocality: "中正區",
    addressRegion: "台北市",
    postalCode: "100",
    addressCountry: "TW",
  },
  areaServed: {
    "@type": "Country",
    name: "TW",
  },
  priceRange: "$$",
  sameAs: ["https://lin.ee/sERO3sK"],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "客製化軟體開發" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "工廠 AIoT 設備故障預知（IFDCS）" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "電商 ERP／CRM 系統整合" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "都更 AI 協審系統" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "LINE Bot 開發" } },
  ],
} as const
