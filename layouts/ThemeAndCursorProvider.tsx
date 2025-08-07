import { ScrollToTop } from "@/components/shared/ScrollToTop";
import CursorWarningProvider from "./CursorWarningProvider";
import { ThemeProvider } from "./ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
// import NeonCursor from "@/components/shared/NeonCursor";

export default function ThemeAndCursorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CursorWarningProvider>
      <ThemeProvider>
        <ScrollToTop />
        {/* <AntiInspect /> */}
        {/* <NeonCursor /> */}
        {children}
        <SpeedInsights />
      </ThemeProvider>
    </CursorWarningProvider>
  );
}
