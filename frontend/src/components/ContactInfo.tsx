import Link from "next/link";

type Props = {
  email?: string;
  phone?: string;
  location?: string;
  availability?: string;
  className?: string;
  socials?: { label: string; href: string }[];
};

export default function ContactInfo({
  email = "hello@yume.com",
  phone = "+33 6 00 00 00 00",
  location = "Paris, France",
  availability = "Available for work",
  socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "GitHub", href: "https://github.com/" },
    { label: "Twitter", href: "https://twitter.com/" },
  ],
  className = "",
}: Props) {
  return (
    <aside className={`contact-info ${className}`}>
      <ul className="contact-info__list">
        <li>
          <span className="contact-info__label">Email</span>
          <Link href={`mailto:${email}`} className="contact-info__value">
            {email}
          </Link>
        </li>
        <li>
          <span className="contact-info__label">Phone</span>
          <Link
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="contact-info__value"
          >
            {phone}
          </Link>
        </li>
        <li>
          <span className="contact-info__label">Location</span>
          <span className="contact-info__value">{location}</span>
        </li>
        <li>
          <span className="contact-info__label">Status</span>
          <span className="contact-info__value">{availability}</span>
        </li>
      </ul>

      <div className="contact-info__socials">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-info__social"
            aria-label={s.label}
          >
            {s.label}
          </a>
        ))}
      </div>
    </aside>
  );
}
