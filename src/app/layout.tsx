import "./globals.css";

import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import basementGrotesque from "@/lib/font";

import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = createMetadata({
  title: "The basement store",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={basementGrotesque.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
