import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ardre | Digital Experience",
  description: "A showcase of digital realms and intelligent systems.",
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
