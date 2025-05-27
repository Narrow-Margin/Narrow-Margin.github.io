'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';
import { NavigationItem } from '@/app/types';

interface NavigationProps {
  title: string;
  items: NavigationItem[];
  className?: string;
}

const SITE_INDEX_ITEMS: NavigationItem[] = [
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Subscriptions', path: '/subscriptions' },
  ];

export default function Navigation({ title, items, className }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerContent, setHeaderContent] = useState(title);
  const [routesContent, setRoutesContent] = useState<NavigationItem[]>(items);
  const [animationClass, setAnimationClass] = useState('opacity-100 transform translate-y-0');

    const handleScroll = useCallback(() => {
        const scrollPosition = window.scrollY;
        const showSiteIdex = scrollPosition > 300 && !isScrolled;
        const restore = scrollPosition <= 300 && isScrolled;

        setTimeout(() => {
            if (showSiteIdex) {
                setHeaderContent('site index');
                setRoutesContent(SITE_INDEX_ITEMS);
            } else if (restore) {
                setHeaderContent(title);
                setRoutesContent(items);
            } else {
                return;
            } 
            setAnimationClass('opacity-100 transform translate-y-0');
            setIsScrolled(showSiteIdex);
        }, 600);
    }, [isScrolled, items, title]);
            
    useEffect(() => {   
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

  return (
    <nav className={clsx(
      "flex flex-col fixed bottom-1/4 right-[calc(20%-1.8rem)] w-[250px] transition-all duration-600",
      "md:right-[12%]", 
      className
    )}>
      <h3 className={clsx(
        // Base styles
        "justify-center relative flex transition-all duration-600",
        "-mb-[clamp(-1.3rem,-1vw,-0.8rem)]",
        animationClass
      )}>
        {headerContent}
      </h3>
      
      <div className={clsx(
        "absolute flex flex-col justify-start top-full transition-all duration-600",
        "left-[6.8rem]",
        "xl:left-[6.3rem]",
        headerContent === 'site index' ? "md:-left-[3.3rem]" : "",
        animationClass
      )}>
        {routesContent.map((item, index) => (
          <Link 
            key={index} 
            href={item.path}
            className="flex flex-row justify-start relative -mb-[10px] w-[350px]"
          > 
          {item.number && (
            <h4 className="xl:-tracking-[1.5px]">
              {item.number} &nbsp; &nbsp;
            </h4>
          )}
            <h4 className="xl:-tracking-[1.5px] hover:underline hover:cursor-pointer">
              {item.title}
            </h4>
          </Link>
        ))}
      </div>
    </nav>
  );
}