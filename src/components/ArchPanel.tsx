"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type ArchPanelProps = {
  children: ReactNode;
  className?: string;
};

/** Glass arch that morphs from rectangle → rounded top on every route enter. */
export function ArchPanel({ children, className = "" }: ArchPanelProps) {
  const pathname = usePathname();

  return (
    <div key={pathname} className={`arch-panel ${className}`.trim()}>
      {children}
    </div>
  );
}
