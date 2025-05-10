import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import NeonCursor from "@/components/shared/NeonCursor";
import { ScrollToTop } from "@/components/shared/ScrollToTop";

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
      <body className=" bg-black">
        <Navbar />
        <ScrollToTop />
        <NeonCursor />
        <div>{children}</div>
      </body>
    </html>
  );
}
