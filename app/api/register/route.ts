import { Resend } from "resend";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY nu este încărcată.");
}

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log("DATA:", data);
console.log("SUPABASE URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
  const { error } = await supabase
  .from("registration")
  .insert([
    {
      child_name: data.childName,
      birth_year: data.age,
      parent_name: data.parentName,
      phone: data.phone,
      email: data.email,
      group_name: data.group,
      notes: data.notes,
    },
  ]);

if (error) {
  console.error("SUPABASE ERROR:", JSON.stringify(error, null, 2));

  return NextResponse.json(
    { success: false, error },
    { status: 500 }
  );
}

    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "craulc88@yahoo.com",
      subject: "⚽ Nouă înscriere - Next Level Academy",
      html: `
        <h2>⚽ Înscriere nouă</h2>

        <p><strong>Numele copilului:</strong> ${data.childName}</p>
        <p><strong>Vârsta:</strong> ${data.age}</p>
        <p><strong>Părinte:</strong> ${data.parentName}</p>
        <p><strong>Telefon:</strong> ${data.phone}</p>
        <p><strong>E-mail:</strong> ${data.email}</p>
        <p><strong>Grupa:</strong> ${data.group}</p>
        <p><strong>Observații:</strong> ${data.notes}</p>
      `,
    });

    console.log("RESEND RESULT:", result);
    await resend.emails.send({
  from: "Next Level Academy <onboarding@resend.dev>",
  to: data.email,
  subject: "✅ Anmeldung erfolgreich - Next Level Academy",
  html: `
    <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto; border:1px solid #ddd; border-radius:10px; overflow:hidden;">
      
      <div style="background:#c40000; color:white; padding:20px; text-align:center;">
        <h1>Next Level Academy</h1>
        <p>Trainiere. Entwickle. Erreiche dein nächstes Level.</p>
      </div>

      <div style="padding:30px;">

        <h2>Vielen Dank für Ihre Anmeldung!</h2>

        <p>Hallo <strong>${data.parentName}</strong>,</p>

        <p>
          Wir freuen uns sehr über die Anmeldung von
          <strong>${data.childName}</strong>.
        </p>

        <p>Ihre Anmeldung wurde erfolgreich registriert.</p>

        <hr>

        <h3>Trainingsinformationen</h3>

        <p>⚽ Ort: Muhr am See</p>
        <p>📅 Training: Freitag</p>
        <p>💶 Monatsbeitrag: 50 €</p>

        <hr>

        <p>
          Falls Sie Fragen haben, können Sie uns jederzeit kontaktieren.
        </p>

        <p>
          Mit sportlichen Grüßen<br><br>

          <strong>Raul Crișan</strong><br>
          Next Level Academy
        </p>

      </div>

    </div>
  `,
});

    if ("error" in result && result.error) {
      console.error("RESEND ERROR:", result.error);

      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });

  } catch (err) {
    console.error("REGISTER ERROR:", err);

    return NextResponse.json(
      {
        success: false,
        error: String(err),
      },
      { status: 500 }
    );
  }
}