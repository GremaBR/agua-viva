import type { Metadata } from "next";
import { Geist, Geist_Mono, Moon_Dance, Zain } from "next/font/google";
import "./globals.css";

// Definindo as fontes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const moonDance = Moon_Dance({
  variable: "--font-moon-dance",
  subsets: ["latin"],
  weight: "400"
});

const zain = Zain({
  variable: "--font-zain",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Fontes de água Viva",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${moonDance.variable} ${zain.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
