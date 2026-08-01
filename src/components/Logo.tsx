import Image from "next/image";
import { site } from "@/lib/content";

type LogoProps = {
  className?: string;
  size?: number;
  priority?: boolean;
};

export function Logo({ className = "", size = 36, priority = false }: LogoProps) {
  return (
    <Image
      src="/logo-bean.png"
      alt={site.fullName}
      width={size}
      height={Math.round(size * 1.48)}
      className={`object-contain ${className}`}
      priority={priority}
    />
  );
}
