import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("tours");

export default function ToursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
