"use client";

import React from "react";
import Link from "next/link";
import { clsx } from "clsx";

interface BannerProps {
  title: string;
  link: string;
  className?: string;
  variant?: "default" | "issue";
}

const Banner: React.FC<BannerProps> = ({ 
  title, 
  link, 
  className,
  variant = "default" 
}) => {
  return (
    <Link href={link} className="block">
      <div className={clsx(
        "w-full h-[123px] mt-6 bg-primary overflow-x-auto overflow-y-hidden fixed z-50 flex items-center top-0 cursor-pointer",
        className
      )}>
        <h1 className={clsx(
          "font-bebas text-[160px] text-secondary -tracking-[3px] ml-[5px] relative transition-colors duration-500 -top-[6%] uppercase",
          "hover:text-primary hover:stroke-secondary hover:stroke-2 hover:scale-y-[0.982]"
        )}>
          {title}
        </h1>
      </div>
    </Link>
  );
};

export default Banner;