import React from "react";
import ScrollReveal from "./ScrollReveal";

interface TitleProps {
  text: string;
  align?: "left" | "center";
}

export default function Title({ text, align = "left" }: TitleProps) {
  return (
    <ScrollReveal>
      <h1 className={`page-title ${align}`}>{text}</h1>
    </ScrollReveal>
  );
}
