'use client';

import React, { useEffect, useState } from 'react';
import { clsx } from 'clsx';

interface DownArrowProps {
  delay?: number;
  className?: string;
}

export default function DownArrow({ delay = 3000, className }: DownArrowProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={clsx(
        "fixed bottom-[120px] left-1/2 -ml-[14px] w-0 h-[30px] border-2 border-primary rounded-sm animate-jump-infinite",
        "after:content-[''] after:absolute after:bottom-[-6px] after:left-[-5px] after:w-0 after:h-0",
        "after:border-l-[5px] after:border-l-transparent after:border-r-[5px] after:border-r-transparent",
        "after:border-t-[6px] after:border-t-primary",
        isVisible ? "opacity-100" : "opacity-0",
        "transition-opacity duration-1500 ease-in-out",
        className
      )}
    />
  );
}