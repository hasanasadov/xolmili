import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import NeonCursor from "@/components/shared/NeonCursor";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Xolmili – Official Website",
  description: "Welcome to the official website of Xolmili.",
  keywords: ["Xolmili", "Xolmili official", "Xolmili site"],
  robots: "index, follow",
  openGraph: {
    title: "Xolmili – Official Website",
    description: "Welcome to the official website of Xolmili.",
    url: "https://xolmili.vercel.app",
    type: "website",
  },
  other: {
    "google-site-verification": "your-verification-code-if-any", // optional
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />

        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <Navbar />
        <ScrollToTop />
        <NeonCursor />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
