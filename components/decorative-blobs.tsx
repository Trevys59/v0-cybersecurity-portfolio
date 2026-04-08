"use client";

import { useEffect, useState } from "react";

export function DecorativeBlobs() {
  const [auraIntensity, setAuraIntensity] = useState(0.25);
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Pulse up
      setIsPulsing(true);
      setAuraIntensity(0.4);
      
      // Hold the pulse longer, then fade back
      setTimeout(() => {
        setIsPulsing(false);
        setAuraIntensity(0.25);
      }, 900);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Left Blob - Half egg shape pointing right */}
      <div
        className="fixed left-0 top-0 pointer-events-none"
        style={{
          height: "130vh",
          width: "185px",
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
        {/* Aura effect - energy pulse, tightly follows blob edge */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 150% 55% at -30% 50%, transparent 58%, rgba(139, 0, 78, ${auraIntensity}) 62%, rgba(139, 0, 78, ${auraIntensity * 0.4}) 66%, transparent 70%)`,
            transition: isPulsing 
              ? "background 0.6s cubic-bezier(0.4, 0, 0.2, 1)" 
              : "background 1.4s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </div>

      {/* Right Blob - Half egg shape pointing left */}
      <div
        className="fixed right-0 top-0 pointer-events-none"
        style={{
          height: "130vh",
          width: "185px",
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
        {/* Aura effect - energy pulse, tightly follows blob edge */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 150% 55% at 130% 50%, transparent 58%, rgba(139, 0, 78, ${auraIntensity}) 62%, rgba(139, 0, 78, ${auraIntensity * 0.4}) 66%, transparent 70%)`,
            transition: isPulsing 
              ? "background 0.6s cubic-bezier(0.4, 0, 0.2, 1)" 
              : "background 1.4s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </div>
    </>
  );
}
