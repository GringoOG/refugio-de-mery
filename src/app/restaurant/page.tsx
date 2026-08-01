import { redirect } from "next/navigation";

/** Restaurant content lives under /food */
export default function RestaurantPage() {
  redirect("/food");
}
