"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      {/* Logo container with animation */}
      <div className="relative mb-8">
        {/* Glow effect */}
        <div className="absolute inset-0 blur-2xl opacity-50">
          <div className="w-40 h-40 rounded-full bg-primary/30 animate-pulse" />
        </div>
        
        {/* Logo with scale animation */}
        <div className="relative animate-in zoom-in-50 duration-700">
          <Image
            src="/images/purp5-logo.png"
            alt="PURP5 Logo"
            width={160}
            height={160}
            className="rounded-lg animate-pulse"
            priority
          />
        </div>
      </div>

      {/* Loading text */}
      <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
        <p className="text-sm text-muted-foreground mb-4 tracking-widest uppercase">
          Chargement
        </p>
        
        {/* Progress bar */}
        <div className="w-48 h-1 bg-border rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Progress percentage */}
        <p className="text-xs text-muted-foreground mt-2 font-mono">
          {progress}%
        </p>
      </div>
    </div>
  );
}
