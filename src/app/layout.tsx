import "./globals.css";

import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import basementGrotesque from "@/lib/font";

import { Providers } from "./providers";
import Header from "@/components/header";

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
        <Providers>
          <Header />
          
          {children}
        </Providers>
      </body>
    </html>
  );
}
