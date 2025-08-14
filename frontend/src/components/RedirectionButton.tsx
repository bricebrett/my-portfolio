import Link from "next/link";
import { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function RedirectionButton({
  href,
  children,
  className = "",
}: ButtonProps) {
  return (
    <ScrollReveal>
      <Link href={href} className={`button ${className}`}>
        {children}
      </Link>
    </ScrollReveal>
  );
}
