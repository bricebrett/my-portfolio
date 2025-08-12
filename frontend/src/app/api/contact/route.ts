import { NextResponse } from "next/server";
import { Resend } from "resend";

type Body = {
  name: string;
  email: string;
  message: string;
};

function isEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  try {
    const {
      name = "",
      email = "",
      message = "",
    } = (await req.json()) as Partial<Body>;

    // validations simples
    if (!name.trim() || !email.trim() || !message.trim()) {
      return NextResponse.json(
        { ok: false, error: "Merci de remplir tous les champs." },
        { status: 400 }
      );
    }
    if (!isEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Merci d’entrer un email valide." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.EMAIL_TO;
    if (!apiKey || !to) {
      return NextResponse.json(
        { ok: false, error: "Configuration manquante côté serveur." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const subject = `Nouveau message de ${name}`;
    const html = `
      <h2>Nouveau message du portfolio</h2>
      <p><strong>Nom:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `;

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [to],
      subject,
      html,
      text: `Nom: ${name}\nEmail: ${email}\n\n${message}`,
      replyTo: [email],
    });

    if (error) {
      return NextResponse.json(
        { ok: false, error: String(error) },
        { status: 400 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Erreur serveur";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
