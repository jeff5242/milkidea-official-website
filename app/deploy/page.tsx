import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "部署狀況 · Milkidea（內部）",
  description: "內部部署平台對照表",
  robots: { index: false, follow: false },
};

// 精簡版：僅「專案 × 平台」營運資訊。刻意不含 IP、金鑰位置、單點弱點等敏感內容。
type Row = [group: string, project: string, fe: string, be: string, db: string, space: string];

const ROWS: Row[] = [
  ["高爾夫", "linebot-booking-golf", "Vercel", "Render", "Supabase", "待登入查"],
  ["高爾夫", "golfriend-ec-platform-O2O", "Vercel", "Vercel", "Supabase", "待登入查"],
  ["高爾夫", "linebot-golf-parking", "—", "Render", "Supabase", "待登入查"],
  ["高爾夫", "golfriend-physical-card-sidecar", "—", "Render", "Render PG + Redis", "待登入查"],
  ["高爾夫", "golfriend-raspi-4b", "—", "樹莓派地端", "—", "不適用"],
  ["米屋/餐飲", "roasted-fish-pos", "—", "共用 EC2", "Supabase", "待登入查"],
  ["米屋/餐飲", "ricehouse-modbus-dryer-monitor", "Vercel", "Vercel", "Supabase", "待登入查"],
  ["米屋/餐飲", "bot-rice", "AWS S3 + CloudFront", "自管", "—", "待登入查"],
  ["米屋/餐飲", "linebot-ricehouse-dashboard-webapp", "PWA(待做)", "自管(未上線)", "AWS RDS", "待登入查"],
  ["米屋/餐飲", "store-buffet-onboarding-order-system", "Render", "Render", "Render PG + Redis + S3", "待登入查"],
  ["工廠AIoT/IAM", "ifdcs_serverV1", "AWS S3 + CloudFront", "AWS EB + 地端", "地端 MySQL + Supabase", "待登入查"],
  ["工廠AIoT/IAM", "iam-shopline-ecount-integrated", "容器靜態", "共用 EC2", "Supabase", "待登入查"],
  ["工廠AIoT/IAM", "iam-openstore-layout", "Fly.io", "Fly.io", "Fly Postgres", "待登入查"],
  ["工廠AIoT/IAM", "syspower-fixnet-self-ca-service", "Vue(規劃中)", "客戶機房", "PostgreSQL", "不適用"],
  ["工廠AIoT/IAM", "hw-photobooth", "Kiosk", "樹莓派地端", "—", "不適用"],
  ["LINE/AI", "linebot-little-voice-friend", "Vercel", "Vercel", "Supabase", "待登入查"],
  ["LINE/AI", "app-mingming-oral-speaking-poc", "App", "—", "—", "不適用"],
  ["LINE/AI", "app-hakka-news", "App", "—", "—", "不適用"],
  ["LINE/AI", "crm-kintone-dashboard-api", "—", "Vercel + 客戶地端", "地端 MSSQL + Kintone", "待登入查"],
  ["LINE/AI", "vote-auto-crawl", "GitHub Pages", "Render", "Supabase", "待登入查"],
  ["LINE/AI", "cowork-auto-morning-brief", "—", "地端 CLI", "—", "不適用"],
  ["官網/Web", "milkidea-official-website", "Vercel", "—", "—", "待登入查"],
  ["官網/Web", "website-nexifuel", "Vercel", "—", "—", "待登入查"],
  ["官網/Web", "website-goodclinic", "Vercel", "—", "Supabase", "待登入查"],
  ["官網/Web", "website-shinyan2023", "Vercel", "Vercel", "Supabase", "待登入查"],
  ["官網/Web", "website-ponhu-resort", "Netlify", "—", "—", "待登入查"],
  ["官網/Web", "webapp-chimen-app", "共用 EC2 + Vercel", "共用 EC2", "Supabase", "待登入查"],
  ["官網/Web", "webapp-city-reframe-audition", "—", "EC2", "檔案存 S3", "待登入查"],
  ["內部/其他", "nuwa (v1)", "—", "AWS EB", "AWS RDS", "待登入查"],
  ["內部/其他", "nuwa (v2)", "Vercel", "Vercel", "Supabase", "待登入查"],
  ["內部/其他", "milkidea-deploy", "—", "共用 EC2", "AWS RDS", "待登入查"],
  ["內部/其他", "webapp-milkidea-hybrid-work", "React SPA", "共用 EC2", "AWS RDS", "待登入查"],
  ["內部/其他", "milkidea-aws-mcp-dockr-skill", "—", "部署工具", "—", "不適用"],
  ["內部/其他", "doc-quotation-generator", "Vercel", "Vercel", "Supabase", "待登入查"],
  ["內部/其他", "milkidea-response-rfp-generator", "—", "本機工具", "—", "不適用"],
  ["內部/其他", "jd-spec-project", "本機", "現場自管", "SQLite", "不適用"],
  ["內部/其他", "tada-association-manager", "GitHub Pages", "—", "—", "待登入查"],
  ["內部/其他", "nexthappy", "共用 EC2", "共用 EC2", "Supabase", "待登入查"],
];

const HEAD = ["產品線", "專案", "前端", "後端/主機", "資料庫", "空間用量"];

export default function DeployPage() {
  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px 60px", fontFamily: "system-ui, sans-serif", color: "#1a2233" }}>
      <h1 style={{ fontSize: 24, marginBottom: 4 }}>🚀 專案部署狀況（內部）</h1>
      <p style={{ color: "#6b7280", fontSize: 13, margin: "0 0 4px" }}>
        更新 2026-07 · 精簡版（僅平台對照）· 密碼保護頁面，請勿外流
      </p>
      <p style={{ color: "#9aa7b5", fontSize: 12, margin: "0 0 20px" }}>
        「空間用量」為即時數字，需登入各雲端主控台查詢。完整版（含風險與明細）僅存於內部知識庫。
      </p>
      <div style={{ overflowX: "auto", border: "1px solid #e2e8f0", borderRadius: 10 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, minWidth: 760 }}>
          <thead>
            <tr>
              {HEAD.map((h) => (
                <th key={h} style={{ background: "#0f3d28", color: "#fff", textAlign: "left", padding: "9px 12px", fontWeight: 700 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r, i) => (
              <tr key={r[1]} style={{ background: i % 2 ? "#f6faf7" : "#fff" }}>
                <td style={{ padding: "8px 12px", borderTop: "1px solid #eef2f4", color: "#c9820a", fontWeight: 600 }}>{r[0]}</td>
                <td style={{ padding: "8px 12px", borderTop: "1px solid #eef2f4", fontWeight: 600 }}>{r[1]}</td>
                {r.slice(2).map((c, j) => (
                  <td key={j} style={{ padding: "8px 12px", borderTop: "1px solid #eef2f4", color: c === "—" || c === "不適用" ? "#aab4bd" : "#374151" }}>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
