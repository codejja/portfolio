"use client";

import { useEffect, useRef } from "react";

// A soft radial glow that follows the cursor, only visible in dark mode
// (a bright light doesn't make sense against a light background).
export default function SpotlightCursor() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    const handleMouseMove = (event) => {
      spotlight.style.setProperty("--x", `${event.clientX}px`);
      spotlight.style.setProperty("--y", `${event.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={spotlightRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 hidden dark:block"
      style={{
        background:
          "radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(204, 90, 53, 0.15), transparent 80%)",
      }}
    />
  );
}
