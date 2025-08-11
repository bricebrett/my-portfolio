import React from "react";

interface TitleProps {
  text: string;
  align?: "left" | "center";
}

export default function Title({ text, align = "left" }: TitleProps) {
  return <h1 className={`page-title ${align}`}>{text}</h1>;
}
