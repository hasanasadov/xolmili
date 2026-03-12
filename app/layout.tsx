import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ThemeAndCursorProvider from "@/layouts/ThemeAndCursorProvider";

const orbitron = Orbitron({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xolmili",
  description: "Azərbaycanda maşın alətləri hissələrinin satışında lider şirkət. 2010-cu ildən fəaliyyətdə.",
  keywords: ["Xolmili", "maşın hissələri", "ehtiyat hissələri", "sənaye"],
  robots: "index, follow",
  openGraph: {
    title: "Xolmili",
    description: "Azərbaycanda maşın alətləri hissələrinin satışında lider şirkət.",
    url: "https://xolmili.vercel.app",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az" suppressHydrationWarning>
      <body className={`${orbitron.className} min-h-screen bg-background text-foreground antialiased`}>
        <ThemeAndCursorProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeAndCursorProvider>
      </body>
    </html>
  );
}
