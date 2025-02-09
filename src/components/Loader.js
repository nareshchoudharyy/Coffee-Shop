'use client';
import { useState, useEffect } from 'react';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate minimum loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-warm-beige">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-4">
          {/* Coffee cup animation */}
          <div className="absolute inset-0 border-4 border-coffee/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-coffee rounded-full animate-spin-slow"
               style={{ clipPath: 'inset(0 0 50% 0)' }}></div>
          
          {/* Steam animation */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 space-y-2">
            <div className="w-1 h-2 bg-coffee/60 rounded-full animate-steam-1"></div>
            <div className="w-1 h-2 bg-coffee/60 rounded-full animate-steam-2"></div>
            <div className="w-1 h-2 bg-coffee/60 rounded-full animate-steam-3"></div>
          </div>
        </div>
        <h2 className="font-display text-coffee text-xl">BREW & CO</h2>
      </div>
    </div>
  );
} 