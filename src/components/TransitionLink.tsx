import Link from "next/link";
import type { ComponentProps } from "react";

/** App Link — keep a single import site for nav links. */
export function TransitionLink(props: ComponentProps<typeof Link>) {
  return <Link {...props} />;
}
