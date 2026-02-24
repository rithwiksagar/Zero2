import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import TopBar from "@/components/topbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zero2",
  description:
    "Zero2 UI provides a curated set of modern UI components and developer utilities designed for building responsive, customizable, and accessible AI chat experiences in web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-helvetica antialiased">
        <nav>
          <TopBar />
        </nav>
        <aside>
          <Sidebar />
        </aside>
        <div className="ml-84">{children}</div>
      </body>
    </html>
  );
}
