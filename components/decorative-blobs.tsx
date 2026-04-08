"use client";

import { useEffect, useState } from "react";

export function DecorativeBlobs() {
  const [auraScale, setAuraScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setAuraScale((prev) => (prev === 1 ? 1.15 : 1));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Left Blob - Half egg shape pointing right */}
      <div
        className="fixed left-0 top-0 pointer-events-none"
        style={{
          height: "130vh",
          width: "250px",
          zIndex: 1,
        }}
      >
        {/* Aura effect - on right side */}
        <div
          className="absolute inset-0 transition-transform duration-700 ease-in-out"
          style={{
            background: `radial-gradient(ellipse 80% 50% at 100% 50%, rgba(139, 0, 78, 0.5) 0%, rgba(139, 0, 78, 0.25) 40%, transparent 70%)`,
            transform: `scaleX(${auraScale})`,
            transformOrigin: "left center",
          }}
        />
        {/* Main blob - half egg shape */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 150% 55% at -30% 50%, rgba(147, 51, 234, 0.5) 0%, rgba(147, 51, 234, 0.25) 45%, transparent 65%)`,
          }}
        />
      </div>

      {/* Right Blob - Half egg shape pointing left */}
      <div
        className="fixed right-0 top-0 pointer-events-none"
        style={{
          height: "130vh",
          width: "250px",
          zIndex: 1,
        }}
      >
        {/* Aura effect - on left side */}
        <div
          className="absolute inset-0 transition-transform duration-700 ease-in-out"
          style={{
            background: `radial-gradient(ellipse 80% 50% at 0% 50%, rgba(139, 0, 78, 0.5) 0%, rgba(139, 0, 78, 0.25) 40%, transparent 70%)`,
            transform: `scaleX(${auraScale})`,
            transformOrigin: "right center",
          }}
        />
        {/* Main blob - half egg shape */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 150% 55% at 130% 50%, rgba(147, 51, 234, 0.5) 0%, rgba(147, 51, 234, 0.25) 45%, transparent 65%)`,
          }}
        />
      </div>
    </>
  );
}
