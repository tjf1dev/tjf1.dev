import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: "tjf1",
  description: "hiii! website about me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-black">
      <body
        className={`${inter.className} ${inter.className} antialiased tracking-tight`}
      >
        {children}
      </body>
    </html>
  );
}
