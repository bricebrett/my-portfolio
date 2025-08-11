// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactBody = {
  name: string;
  email: string;
  message: string;
};

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const EMAIL_FROM =
  process.env.EMAIL_FROM || "Portfolio <onboarding@resend.dev>";
const EMAIL_TO = process.env.EMAIL_TO || "";

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

function isEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactBody>;
    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const message = (body.message || "").trim();

    // validations simples
    if (!name || !email || !message) {
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

    // Envoi avec Resend si configuré
    if (resend && EMAIL_TO) {
      const subject = `Nouveau message de ${name}`;
      const html = `
        <h2>Nouveau message du portfolio</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `;

      const { error } = await resend.emails.send({
        from: EMAIL_FROM,
        to: [EMAIL_TO],
        subject,
        html,
        text: `Nom: ${name}\nEmail: ${email}\n\n${message}`,
        // Permettre de répondre directement à l’expéditeur :
        replyTo: [email],
      });

      if (error) {
        return NextResponse.json(
          { ok: false, error: String(error) },
          { status: 400 }
        );
      }
    } else {
      // Mode développement sans Resend (on "simule" l'envoi)
      console.log("[DEV] Contact message:", { name, email, message });
    }

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ ok: false, error: msg }, { status: 400 });
  }
}
