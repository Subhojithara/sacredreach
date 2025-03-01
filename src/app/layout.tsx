import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import Footer from "@/components/Footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sacredreach",
  description: "Modern Day Traditional Marketing Made Easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Loader />
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
