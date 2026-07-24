import { Resend } from "resend";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY lipsește.");
    }

    if (
      !process.env.NEXT_PUBLIC_SUPABASE_URL ||
      !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ) {
      throw new Error("Variabilele Supabase lipsesc.");
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    const data = await req.json();

    const { error } = await supabase.from("registration").insert([
      {
        child_name: data.childName,
        birth_year: data.age,
        parent_name: data.parentName,
        phone: data.phone,
        email: data.email,
        notes: data.notes,
      },
    ]);

    if (error) {
      console.error("SUPABASE ERROR:", error);

      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    const adminMail = await resend.emails.send({
      from: "Next Level Academy <noreply@nextlevelacademy-fussball.de>",
      replyTo: "craulc88@yahoo.com",
      to: "craulc88@yahoo.com",
      subject: "⚽ Nouă înscriere - Next Level Academy",
      html: `
        <h2>⚽ Înscriere nouă</h2>

        <p><strong>Numele copilului:</strong> ${data.childName}</p>
        <p><strong>Vârsta:</strong> ${data.age}</p>
        <p><strong>Părinte:</strong> ${data.parentName}</p>
        <p><strong>Telefon:</strong> ${data.phone}</p>
        <p><strong>E-mail:</strong> ${data.email}</p>
        <p><strong>Observații:</strong> ${data.notes}</p>
      `,
    });

    console.log("Admin mail:", adminMail);

    if ("error" in adminMail && adminMail.error) {
      console.error("Admin error:", adminMail.error);
      return NextResponse.json(
        { success: false, error: adminMail.error },
        { status: 500 }
      );
    }

    console.log("Parent email:", data.email);

    if (typeof data.email !== "string" || !data.email.trim()) {
      return NextResponse.json(
        { success: false, error: "Parent email is missing or empty." },
        { status: 400 }
      );
    }

    const parentMail = await resend.emails.send({
      from: "Next Level Academy <noreply@nextlevelacademy-fussball.de>",
      replyTo: "craulc88@yahoo.com",
      to: data.email,
      subject: "✅ Anmeldung erfolgreich - Next Level Academy",
      html: `
        <div style="background-color:#f3f3f3;padding:24px 16px;font-family:Arial,Helvetica,sans-serif;color:#111111;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:680px;margin:0 auto;background-color:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08);">
            <tr>
              <td style="background:linear-gradient(135deg,#c40000 0%,#8f0000 100%);padding:24px;text-align:center;">
                <img src="https://nextlevelacademy-fussball.de/logo.png" alt="Next Level Academy Logo" width="140" style="display:block;margin:0 auto 12px auto;border-radius:10px;background-color:#ffffff;padding:8px;" />
                <h1 style="margin:0;color:#ffffff;font-size:28px;line-height:1.2;">Anmeldung erfolgreich!</h1>
                <p style="margin:8px 0 0;color:#ffe6e6;font-size:15px;">Willkommen im Next Level Academy Team</p>
              </td>
            </tr>
            <tr>
              <td style="padding:30px 24px 24px 24px;">
                <p style="margin:0 0 10px;font-size:16px;line-height:1.6;">Hallo <strong>${data.parentName}</strong>,</p>
                <p style="margin:0 0 18px;font-size:16px;line-height:1.6;">
                  Vielen Dank für die Anmeldung von <strong>${data.childName}</strong>.<br>
                  Wir freuen uns, Sie und Ihr Kind bei Next Level Academy begrüßen zu dürfen.
                </p>

                <div style="background:#fff5f5;border:1px solid #f0d6d6;border-radius:14px;padding:16px 18px;margin:20px 0;">
                  <p style="margin:0 0 8px;font-size:15px;color:#333333;"><strong>👦 Kind:</strong> ${data.childName}</p>
                  <p style="margin:0 0 8px;font-size:15px;color:#333333;"><strong>👨‍👩‍👧‍👦 Elternteil:</strong> ${data.parentName}</p>
                  <p style="margin:0 0 8px;font-size:15px;color:#333333;"><strong>📅 Training:</strong> Freitag</p>
                  <p style="margin:0 0 8px;font-size:15px;color:#333333;"><strong>📍 Ort:</strong> Muhr am See</p>
                  <p style="margin:0;font-size:15px;color:#333333;"><strong>💶 Monatsbeitrag:</strong> 50 €</p>
                </div>

                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:0 0 22px 0;">
                  <tr>
                    <td style="padding:0 0 12px 0;">
                      <a href="https://nextlevelacademy-fussball.de" target="_blank" style="display:inline-block;background-color:#c40000;color:#ffffff;text-decoration:none;padding:12px 20px;border-radius:999px;font-weight:bold;font-size:15px;">🌐 Website besuchen</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0;">
                      <a href="https://wa.me/4915906419166?text=Hallo%20Next%20Level%20Academy,%20ich%20habe%20eine%20Frage." target="_blank" style="display:inline-block;background-color:#25d366;color:#ffffff;text-decoration:none;padding:12px 20px;border-radius:999px;font-weight:bold;font-size:15px;">💬 WhatsApp kontaktieren</a>
                    </td>
                  </tr>
                </table>

                <p style="margin:0 0 8px;font-size:14px;line-height:1.6;color:#666666;">Mit sportlichen Grüßen</p>
                <p style="margin:0;font-size:15px;font-weight:bold;color:#111111;">Raul Crișan</p>
                <p style="margin:4px 0 0;font-size:14px;color:#666666;">Next Level Academy</p>
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    console.log("Parent mail:", parentMail);

    if ("error" in parentMail && parentMail.error) {
      console.error("Parent error:", parentMail.error);
      return NextResponse.json(
        { success: false, error: parentMail.error },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        error: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}