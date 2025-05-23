import Navbar from "@/components/navbar/navbar";
import "./globals.scss";
import { ReactNode } from "react";
import Footer from "@/components/footer/footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="layout">
        <Navbar />

        <main className="content">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
