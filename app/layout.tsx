import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cushon",
  description: "Cushon provides a better financial future worth saving for. Workplace savings, investments and the worlds first Net Zero pension, all together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cushon">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
