import { NextRequest, NextResponse } from "next/server";

// 只保護 /deploy（內部部署狀況清單）
export const config = {
  matcher: ["/deploy", "/deploy/:path*"],
};

export function middleware(req: NextRequest) {
  const expected = process.env.DEPLOY_PASSWORD;
  const user = process.env.DEPLOY_USER || "milkidea";

  // Fail-closed：未設定密碼時一律擋（避免內部部署清單意外公開）。
  if (!expected) {
    return new NextResponse(
      "Deploy console 尚未設定密碼。請於 Vercel 專案設定環境變數 DEPLOY_PASSWORD 後重新部署。",
      { status: 503 }
    );
  }

  const auth = req.headers.get("authorization");
  if (auth?.startsWith("Basic ")) {
    try {
      const decoded = atob(auth.slice(6));
      const sep = decoded.indexOf(":");
      const u = decoded.slice(0, sep);
      const p = decoded.slice(sep + 1);
      if (u === user && p === expected) {
        return NextResponse.next();
      }
    } catch {
      // 解碼失敗 → 落到下方 401
    }
  }

  return new NextResponse("需要授權", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Milkidea Deploy Console"' },
  });
}
