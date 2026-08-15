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

function isPlaceholderBookingUrl(url: string) {
  return (
    !url ||
    /BOOKING-URL|example\.com|localhost|invalid/i.test(url) ||
    url === "/" ||
    url === "#"
  );
}

/**
 * Provider-agnostic book CTA.
 * UI never knows QloApps / Agoda / custom — only BookingService.
 * If booking base URL is still a placeholder, fall back to /contact (trust > broken links).
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

  const preferred = roomSlug
    ? BookingService.getRoomUrl(roomSlug)
    : BookingService.getUrl();
  const useContactFallback = isPlaceholderBookingUrl(preferred);
  const href = useContactFallback ? "/contact" : preferred;
  const external = useContactFallback ? false : BookingService.isExternal();

  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onClick={(e) => {
        onNavigate?.();
        if (useContactFallback) {
          // Let the browser follow /contact — no external open.
          return;
        }
        e.preventDefault();
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
