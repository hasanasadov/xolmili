"use client";

import { useEffect, useState } from "react";

export default function CursorWarningWrapper({
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
        <div
          style={{
            position: "fixed",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#ff4d4f",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "8px",
            zIndex: 9999,
            fontWeight: "bold",
            fontSize: "18px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            pointerEvents: "none",
          }}
        >
          Not allowed to steal
        </div>
      )}
    </>
  );
}
