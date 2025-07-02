import type { Metadata } from "next";
import { Geist, Geist_Mono, League_Spartan, Lato } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LIT_C3_L4A_166",
  description: "Infográfico Opet - Literatura",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${leagueSpartan.variable} ${lato.variable} antialiased`}>{children}</body>
    </html>
  );
}
