import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("food");

export default function FoodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
