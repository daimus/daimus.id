import type { Metadata } from "next";
import "./globals.css"
import { Inter } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import {Analytics} from "@/app/components/Analytics";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`antialiased min-h-scree bg-white dark:bg-zinc-900 text-gray-800 dark:text-slate-50 ${inter.className}`}>
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
