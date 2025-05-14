"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // To prevent mismatch during hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      variant="outline"
      className="flex items-center gap-2 transition-all duration-300 shadow-[0_0_10px_#0ff]"
    >
      {isDark ? (
        <Sun className="w-5 h-5 !text-yellow-400 transition-transform duration-300 hover:rotate-90" />
      ) : (
        <Moon className="w-5 h-5 !text-blue-600 transition-transform duration-300 hover:rotate-90" />
      )}
      {/* <span
        className={`hidden sm:inline ${isDark ? "text-white" : "text-black"} `}
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </span> */}
    </Button>
  );
}
