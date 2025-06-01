"use client";

import React from "react";
import Link from "next/link";
import { Contributor } from "../../types";

interface ColumnProps {
    children: (Contributor | string)[];
    title: string;
    path: string;
}

const CreditColumn = ({ 
    children, 
    title,
    path,
    ...props 
  }: ColumnProps) => {
    return (
        <div className="flex-1 px-4 relative :not(:last-child)::after:content-[''] :not(:last-child)::after:bg-[#000] sm:not(:last-child)::after:h-[118%] :not(:last-child)::after:h-[100%] sm:not(:last-child)::after:w-[1.5px] :not(:last-child)::after:absolute :not(:last-child)::after:right-0">
            <h3 className="mb-[0.3rem] font-size-[1.6rem]">{title}</h3>    
            <ul className="list-none p-0 m-0 font-size-[1rem] md:font-size-[1.2rem] line-height-[1.4] tracking-tight md:tracking-tighter">
                {children?.map((item, index) => (
                    <Link 
                    href={path === "none" ? "#" : `${path}/${typeof item === 'object' ? item.path : item.toLowerCase().replace(/\s+/g, '-')}`} 
                    key={index}
                  >
                    <li className="hover:underline cursor-pointer">
                      {typeof item === 'string' ? item : item.name}
                    </li>
                  </Link>
                ))}
            </ul>
        </div>
    );
};

export default CreditColumn;
