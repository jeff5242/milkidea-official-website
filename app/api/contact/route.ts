import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    // 寄信給管理員 (jeff@milkidea.com)
    const { data, error } = await resend.emails.send({
      from: 'Milkidea Contact <onboarding@resend.dev>', // 驗證網域後可更換
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
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
