import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import TopNav from "@/components/TopNav";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "SCE OneHub",
  description: "AI Powered Smart Campus Companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-[#030712] text-white overflow-x-hidden`}
      >
        <TopNav />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}