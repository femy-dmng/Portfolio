import Navbar from "@/components/navbar/navbar";
import "./globals.scss";
import { ReactNode } from "react";
import Footer from "@/components/footer/footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Kalnia:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Bayon&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Cousine:400,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cherish&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="layout">
        <Navbar />

        <main className="content">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
