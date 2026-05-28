import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amit Saroj | Abyss 2030 Portfolio",
  description:
    "A premium underwater AI interaction lab portfolio for Amit Saroj, Senior MERN and Web3 Engineer.",
  icons: {
    icon: "/stitch/favicon.jpg",
    apple: "/stitch/apple-touch-icon.jpg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
