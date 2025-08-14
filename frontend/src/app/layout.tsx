import { ReactNode } from "react";
import "../assets/globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FullWidthDivider from "@/components/FullWidthDivider";

export const metadata = {
  title: "Mon Portfolio",
  description: "Portfolio de Brice",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <FullWidthDivider />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
