import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// 確保 API Key 存在
const apiKey = process.env.RESEND_API_KEY;

export async function POST(request: Request) {
  try {
    // 檢查 API Key 是否設定
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { name, email, company, message } = await request.json();

    // 寄信給管理員 (jeff@milkidea.com)
    const { data, error } = await resend.emails.send({
      from: '牛奶創意 Milkidea <noreply@milkidea.com>',
      to: ['jeff@milkidea.com'],
      subject: `[網站諮詢] 來自 ${name} 的新郵件`,
      html: `
        <h2>收到新的網站諮詢</h2>
        <p><strong>姓名：</strong> ${name}</p>
        <p><strong>電子郵件：</strong> ${email}</p>
        <p><strong>公司名稱：</strong> ${company || '未提供'}</p>
        <p><strong>訊息內容：</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: error.message || 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    console.error('API error:', errorMessage);
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
