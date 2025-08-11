import Link from "next/link";
import { ReactNode } from "react";

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
    <Link href={href} className={`button ${className}`}>
      {children}
    </Link>
  );
}
