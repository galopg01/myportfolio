import type { Metadata } from "next";
import { inter } from "./fonts/fonts";
import "./globals.css";


export const metadata: Metadata = {
  title: "Galo Pérez Gallego",
  description: "Software Engineer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
