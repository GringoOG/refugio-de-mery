"use client";

import type { ReactNode } from "react";
import { BookingService } from "@/lib/booking";
import { useLocale } from "@/lib/i18n";

type BookButtonProps = {
  roomSlug?: string;
  className?: string;
  children?: ReactNode;
  source?: string;
  onNavigate?: () => void;
};

/**
 * Provider-agnostic book CTA.
 * UI never knows QloApps / Agoda / custom — only BookingService.
 */
export function BookButton({
  roomSlug,
  className = "btn btn-bronze",
  children,
  source,
  onNavigate,
}: BookButtonProps) {
  const { t } = useLocale();
  const label = children ?? t.common.bookNow;

  if (!BookingService.isEnabled()) {
    return null;
  }

  const href = roomSlug
    ? BookingService.getRoomUrl(roomSlug)
    : BookingService.getUrl();
  const external = BookingService.isExternal();

  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onClick={(e) => {
        e.preventDefault();
        onNavigate?.();
        if (roomSlug) {
          BookingService.openRoom(roomSlug, { source });
        } else {
          BookingService.open({ source });
        }
      }}
    >
      {label}
    </a>
  );
}
