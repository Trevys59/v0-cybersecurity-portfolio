"use client";

import { useEffect, useState } from "react";

export function DecorativeBlobs() {
  const [auraScale, setAuraScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setAuraScale((prev) => (prev === 1 ? 1.06 : 1));
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
        {/* Main blob - half egg shape */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 150% 55% at -30% 50%, rgba(147, 51, 234, 0.5) 0%, rgba(147, 51, 234, 0.25) 45%, transparent 65%)`,
          }}
        />
        {/* Aura effect - thin, follows egg curve, on right edge */}
        <div
          className="absolute inset-0 transition-transform duration-700 ease-in-out"
          style={{
            background: `radial-gradient(ellipse 150% 55% at -15% 50%, transparent 55%, rgba(139, 0, 78, 0.35) 60%, rgba(139, 0, 78, 0.15) 65%, transparent 70%)`,
            transform: `scaleX(${auraScale})`,
            transformOrigin: "left center",
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
        {/* Main blob - half egg shape */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 150% 55% at 130% 50%, rgba(147, 51, 234, 0.5) 0%, rgba(147, 51, 234, 0.25) 45%, transparent 65%)`,
          }}
        />
        {/* Aura effect - thin, follows egg curve, on left edge */}
        <div
          className="absolute inset-0 transition-transform duration-700 ease-in-out"
          style={{
            background: `radial-gradient(ellipse 150% 55% at 115% 50%, transparent 55%, rgba(139, 0, 78, 0.35) 60%, rgba(139, 0, 78, 0.15) 65%, transparent 70%)`,
            transform: `scaleX(${auraScale})`,
            transformOrigin: "right center",
          }}
        />
      </div>
    </>
  );
}
