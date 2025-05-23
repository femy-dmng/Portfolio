// app/layout.tsx
import Navbar from "@/components/navbar/navbar";
import "./globals.scss";
import { ReactNode } from "react";
import Footer from "@/components/footer/footer";
import { generateMetadata } from "./components/metadata";
import { siteMetadata } from "./metadata";

export { generateMetadata };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={siteMetadata.language}>
      <body className="layout">
        <Navbar />
        <main className="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
