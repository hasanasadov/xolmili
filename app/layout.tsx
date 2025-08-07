import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ThemeAndCursorProvider from "@/layouts/ThemeAndCursorProvider";

export const metadata: Metadata = {
  title: "Xolmili - Rəsmi sayt",
  description: "Xolmili'nin rəsmi saytına xoş gəlmisiniz",
  keywords: ["Xolmili", "Xolmili official", "Xolmili site"],
  robots: "index, follow",
  openGraph: {
    title: "Xolmili - Rəsmi sayt",
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
      <body className="min-h-screen  text-white transition duration-500">
        <ThemeAndCursorProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeAndCursorProvider>
      </body>
    </html>
  );
}
