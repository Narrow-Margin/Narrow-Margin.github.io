"use client";
import React from 'react';
import Banner from './components/banner/banner';
import Navigation from './components/navigation/navigation';
import DownArrow from './components/downArrow/downArrow';
import { NavigationItem } from './types';

export default function HomePage() {
  const navigationItems: NavigationItem[] = [
    { title: 'August, 2025', path: '/01', number: '01' },
  ];

  return (
    <main className="min-h-screen">
      <Banner title="NARROW MARGIN" link="/" />
      
      <Navigation 
        title="quarterly issues" 
        items={navigationItems} 
      />
      
      <DownArrow />
      
      {/* Spacer to allow scrolling */}
      <div className="h-[920px]"></div>
    </main>
  );
}