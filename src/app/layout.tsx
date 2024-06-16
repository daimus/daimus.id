import type { Metadata } from "next";
import "./globals.css"
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import {Analytics} from "@/app/components/Analytics";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Daimus",
  description: "Daimus Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <div className="max-w-screen mx-auto">
          <header className="sticky top-0  backdrop-blur-xl py-2 z-50">
            <Navbar/>
          </header>
          <main className="max-w-3xl mx-auto">{children}</main>
          <Footer/>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
