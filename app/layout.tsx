import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import NeonCursor from "@/components/shared/NeonCursor";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Xolmili official website",
  description: "Xolmili official website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className=" bg-black">
        <Navbar />
        <ScrollToTop />
        <NeonCursor />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
