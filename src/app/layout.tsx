import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://beansded.github.io/Porfortlio"),
  title: {
    default: "Ardre Malonzo — Full-Stack Developer",
    template: "%s — Ardre Malonzo",
  },
  description:
    "Ardre Malonzo is a full-stack developer turning complex ideas into sharp, useful digital products.",
  openGraph: {
    title: "Ardre Malonzo — Full-Stack Developer",
    description: "A kinetic portfolio of AI, automation, civic technology, and data-system work.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
