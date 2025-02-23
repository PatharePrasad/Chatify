import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chatify",
  description: "Anonymised chat. Make healthy conversations.",
  authors: { url: "https://github.com/PatharePrasad", name: "Prasad Pathare" },
  keywords: ["Chat Room", "Chatify App", "Anonymised chat"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className} antialiased`}>{children}</body>
    </html>
  );
}