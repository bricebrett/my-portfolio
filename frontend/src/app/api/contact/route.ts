// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// type Body = {
//   name: string;
//   email: string;
//   message: string;
//   website?: string; // honeypot
// };

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: Request) {
//   try {
//     const { name, email, message, website } = (await req.json()) as Body;

//     // honeypot anti-bot
//     if (website) {
//       return NextResponse.json({ ok: true });
//     }

//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { ok: false, error: "Missing fields" },
//         { status: 400 }
//       );
//     }

//     const { data, error } = await resend.emails.send({
//       from: "Portfolio <no-reply@yourdomain.com>", // configure un domaine Resend
//       to: ["you@yourdomain.com"], // adresse de réception
//       replyTo: email, // ✅ bon nom de propriété + typé
//       subject: `New message from ${name}`,
//       text: `From: ${name} <${email}>\n\n${message}`,
//     });

//     if (error) {
//       return NextResponse.json(
//         { ok: false, error: String(error) },
//         { status: 400 }
//       );
//     }

//     return NextResponse.json({ ok: true, id: data?.id });
//   } catch (err: unknown) {
//     // ✅ plus de any
//     const msg = err instanceof Error ? err.message : "Server error";
//     return NextResponse.json({ ok: false, error: msg }, { status: 500 });
//   }
// }
