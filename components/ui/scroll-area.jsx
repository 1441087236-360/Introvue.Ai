'use client';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import React from 'react';

/**
 * A thin wrapper around Radix ScrollArea to match your UI library pattern.
 * You can customize classes or add custom stylings here.
 */
export function ScrollArea({ children, className = '', ...props }) {
  return (
    <ScrollAreaPrimitive.Root className={`overflow-hidden ${className}`} {...props}>
      <ScrollAreaPrimitive.Viewport className="w-full h-full">
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollAreaPrimitive.Scrollbar
        orientation="vertical"
        className="flex select-none touch-none p-[1px] bg-gray-600/50 hover:bg-gray-600 rounded"
      >
        <ScrollAreaPrimitive.Thumb className="flex-1 bg-gray-600 rounded" />
      </ScrollAreaPrimitive.Scrollbar>
    </ScrollAreaPrimitive.Root>
  );
}
