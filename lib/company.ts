/**
 * 公司聯絡資訊的單一來源（footer / contact / JSON-LD 共用）。
 * 資料與 lib/organization-schema.ts 一致，僅使用公開登記資訊。
 */

export const COMPANY_ADDRESS = "台北市中正區忠孝西路一段45號9樓之5"

export const COMPANY_PHONE_DISPLAY = "02-2371-1050"
export const COMPANY_PHONE_HREF = "tel:+886223711050"

export const COMPANY_EMAIL = "jeff@milkidea.com"

/** Google Maps 官方 URL 格式，中文地址需編碼，行動裝置會直接開啟 Google 地圖 App */
export const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  COMPANY_ADDRESS,
)}`

/** 直接進入導航模式（規劃路線到公司） */
export const GOOGLE_MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  COMPANY_ADDRESS,
)}`
