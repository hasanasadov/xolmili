import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import Navbar from "@/components/shared/Navbar";
// import NeonCursor from "@/components/shared/NeonCursor";
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
    "google-site-verification": "your-verification-code-if-any",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="" lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <ThemeProvider>
          <Navbar />
          <ScrollToTop />
          {/* <NeonCursor /> */}
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
