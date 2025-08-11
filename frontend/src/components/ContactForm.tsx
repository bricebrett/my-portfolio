"use client";

import { FormEvent, useState } from "react";

type Props = {
  className?: string;
  onSuccess?: () => void;
};

type Values = {
  name: string;
  email: string;
  message: string;
  website: string;
};

const initialValues: Values = {
  name: "",
  email: "",
  message: "",
  website: "",
};

export default function ContactForm({ className = "", onSuccess }: Props) {
  const [values, setValues] = useState<Values>(initialValues);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  function isEmail(v: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSent(false);

    if (!values.name || !values.email || !values.message) {
      setError("Merci de remplir tous les champs.");
      return;
    }
    if (!isEmail(values.email)) {
      setError("Merci d’entrer un email valide.");
      return;
    }

    try {
      setLoading(true);

      const base = (process.env.NEXT_PUBLIC_API_BASE_URL || "").replace(
        /\/$/,
        ""
      );
      const url = base ? `${base}/api/contact` : "/api/contact";

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      let data: unknown = null;
      try {
        data = await res.json();
      } catch {
        // certaines implémentations renvoient 204
      }

      const ok =
        res.ok &&
        (data == null ||
          (typeof data === "object" &&
            data !== null &&
            "ok" in data &&
            Boolean(data.ok)));

      if (!ok) {
        const msg =
          (data &&
            typeof data === "object" &&
            // @ts-expect-error simple refinement
            typeof data.error === "string" &&
            // @ts-expect-error
            data.error) ||
          "Erreur d’envoi";
        throw new Error(msg);
      }

      setSent(true);
      setValues(initialValues);
      onSuccess?.();
    } catch (err: unknown) {
      // ✅ no 'any'
      const msg =
        err instanceof Error ? err.message : "Une erreur est survenue.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      className={`contact-form ${className}`}
      onSubmit={handleSubmit}
      noValidate
    >
      {/* Honeypot (caché via CSS) */}
      <input
        type="text"
        name="website"
        value={values.website}
        onChange={handleChange}
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        className="contact-form__hp"
      />

      <label className="contact-form__field">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={values.name}
          onChange={handleChange}
          disabled={loading}
          aria-required="true"
        />
      </label>

      <label className="contact-form__field">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={values.email}
          onChange={handleChange}
          disabled={loading}
          aria-required="true"
        />
      </label>

      <label className="contact-form__field">
        <textarea
          name="message"
          placeholder="Your Message"
          rows={6}
          value={values.message}
          onChange={handleChange}
          disabled={loading}
          aria-required="true"
        />
      </label>

      {error && (
        <p className="contact-form__error" role="alert">
          {error}
        </p>
      )}
      {sent && (
        <p className="contact-form__success" role="status">
          Merci ! Votre message a bien été envoyé.
        </p>
      )}

      <button
        className="contact-form__submit"
        type="submit"
        disabled={loading}
        aria-busy={loading}
      >
        {loading ? "Sending…" : "Send It!"}
      </button>
    </form>
  );
}
