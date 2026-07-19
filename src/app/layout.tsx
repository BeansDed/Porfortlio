import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://beansded.github.io/Porfortlio"),
  title: {
    default: "Ardre Malonzo — Full-Stack Developer",
    template: "%s — Ardre Malonzo",
  },
  description:
    "Full-stack developer building web, mobile, AI-assisted products, and backend services with Python and TypeScript.",
  openGraph: {
    title: "Ardre Malonzo — Full-Stack Developer",
    description: "Selected work across AI, automation, civic technology, and data systems.",
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
