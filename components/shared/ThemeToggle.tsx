"use client";

import { LucideClockFading, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import RenderIf from "@/lib/RenderIf";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  let isDark = false;
  useEffect(() => {
    setMounted(true);
  }, []);

  // if (!mounted) return null;

  if (mounted) {
    isDark = resolvedTheme === "dark";
  }
  return (
    <Button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center gap-2 transition-all duration-300 dark:shadow-[0_0_10px_#fff] "
    >
      <RenderIf condition={!mounted}>
        <LucideClockFading />
      </RenderIf>
      <RenderIf condition={mounted}>
        <RenderIf condition={isDark}>
          <Sun className="w-5 h-5 !text-yellow-400 transition-transform duration-300 group-hover:!rotate-[-450deg]" />
        </RenderIf>
        <RenderIf condition={!isDark}>
          <Moon className="w-5 h-5 !text-blue-600 transition-transform duration-300 hover:!rotate-[-450deg]  " />
        </RenderIf>
      </RenderIf>
    </Button>
  );
}
/* <span className={`hidden sm:inline ${isDark ? "text-white" : "text-black"} `} > {isDark ? "Light Mode" : "Dark Mode"} </span> */
