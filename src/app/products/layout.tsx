import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata("products");

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
