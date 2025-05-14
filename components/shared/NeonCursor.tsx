"use client";

import { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

export default function NeonCursor() {
  const [trail, setTrail] = useState<Position[]>([]);

  useEffect(() => {
    const moveHandler = (e: MouseEvent) => {
      setTrail((prev) => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY }];
        return newTrail.slice(-8); // Keep last 20 positions
      });
    };
    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  return (
    <>
      {trail.map((pos, index) => (
        <div
          key={index}
          className="fixed top-0 left-0 pointer-events-none z-[9999]"
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px)`,
          }}
        >
          <div
            className="w-6 h-6 rounded-full hidden lg:block bg-cyan-400 blur-md"
            style={{
              opacity: (index + 1) / trail.length, // Fading effect
              transform: `translate(-50%, -50%) scale(${
                1 - index / trail.length
              })`,
              transition: "transform 0.05s, opacity 0.05s",
            }}
          />
        </div>
      ))}
    </>
  );
}
