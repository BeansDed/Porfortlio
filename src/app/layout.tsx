import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ardre N. Malonzo | Full-Stack Developer Portfolio",
  description:
    "Portfolio of Ardre N. Malonzo, a junior full-stack developer building scalable web, mobile, and AI-assisted systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
