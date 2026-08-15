import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("rooms");

export default function RoomsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
