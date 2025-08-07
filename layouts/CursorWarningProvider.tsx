"use client";

import { useEffect, useState } from "react";

export default function CursorWarningProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const triggerWarning = () => {
      document.body.style.cursor =
        "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2232%22 height=%2232%22><circle cx=%2216%22 cy=%2216%22 r=%2210%22 fill=%22red%22 /></svg>') 16 16, auto";

      setShowWarning(true);

      timeout = setTimeout(() => {
        document.body.style.cursor = "";
        setShowWarning(false);
      }, 1000);
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      triggerWarning();
    };

    const handleKeydown = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey &&
          e.shiftKey &&
          (e.key.toLowerCase() === "i" || e.key.toLowerCase() === "j")) ||
        (e.ctrlKey && e.key.toLowerCase() === "u")
      ) {
        e.preventDefault();
        triggerWarning();
      }
    };

    const handleScreenshot = (e: KeyboardEvent) => {
      if (e.key === "PrintScreen") {
        document.body.style.filter = "brightness(0)";
        triggerWarning();
        setTimeout(() => {
          document.body.style.filter = "";
        }, 1000);
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("keyup", handleScreenshot);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeydown);
      document.removeEventListener("keyup", handleScreenshot);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {children}
      {showWarning && (
        <div className="glass !fixed !bottom-5 !right-5  !border-red-700 text-red-500 z-[9999] font-bold text-lg px-5 py-2.5 rounded-xl ">
          Icazə yoxdur
        </div>
      )}
    </>
  );
}
