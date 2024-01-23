import "./globals.css";

import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import basementGrotesque from "@/lib/font";

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
      <body className={basementGrotesque.className}>{children}</body>
    </html>
  );
}
