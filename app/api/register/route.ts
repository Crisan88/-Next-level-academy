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
      from: "Next Level Academy <onboarding@resend.dev>",
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

    if ("error" in adminMail && adminMail.error) {
      return NextResponse.json(
        { success: false, error: adminMail.error },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: "Next Level Academy <onboarding@resend.dev>",
      to: data.email,
      subject: "✅ Anmeldung erfolgreich - Next Level Academy",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:20px">
          <h1 style="color:#c40000">Next Level Academy</h1>

          <p>Hallo <strong>${data.parentName}</strong>,</p>

          <p>
            Vielen Dank für die Anmeldung von
            <strong>${data.childName}</strong>.
          </p>

          <p>Ihre Anmeldung wurde erfolgreich registriert.</p>

          <hr>

          <p><strong>⚽ Ort:</strong> Muhr am See</p>
          <p><strong>📅 Training:</strong> Freitag</p>
          <p><strong>💶 Monatsbeitrag:</strong> 50 €</p>

          <br>

          <p>Mit sportlichen Grüßen</p>

          <strong>Raul Crișan</strong><br>
          Next Level Academy
        </div>
      `,
    });

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