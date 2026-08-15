/**
 * Room mapping: website slug → provider external ids.
 *
 * UI / content uses slugs only.
 * Providers resolve via this map + env — never hardcode marketing names in providers.
 */

import type { BookingProviderId, ProviderRoomRef, RoomSlug } from "../types";
import { BookingProviderId as Provider } from "../types";
import { env } from "./env";

type RoomProviderMap = Partial<Record<BookingProviderId, ProviderRoomRef>>;

const ROOM_MAP: Record<RoomSlug, RoomProviderMap> = {
  "double-bed": {
    [Provider.QLOAPPS]: {
      externalId: env("NEXT_PUBLIC_BOOKING_ROOM_DOUBLE_BED_PRODUCT_ID", "1"),
      url: env("NEXT_PUBLIC_BOOKING_ROOM_DOUBLE_BED_URL") || undefined,
      query: {
        id_product: env("NEXT_PUBLIC_BOOKING_ROOM_DOUBLE_BED_PRODUCT_ID", "1"),
      },
    },
    [Provider.CUSTOM]: {
      externalId: "double-bed",
      path: "/reservations",
      query: { room: "double-bed" },
    },
  },
  "twin-beds": {
    [Provider.QLOAPPS]: {
      externalId: env("NEXT_PUBLIC_BOOKING_ROOM_TWIN_BEDS_PRODUCT_ID", "2"),
      url: env("NEXT_PUBLIC_BOOKING_ROOM_TWIN_BEDS_URL") || undefined,
      query: {
        id_product: env("NEXT_PUBLIC_BOOKING_ROOM_TWIN_BEDS_PRODUCT_ID", "2"),
      },
    },
    [Provider.CUSTOM]: {
      externalId: "twin-beds",
      path: "/reservations",
      query: { room: "twin-beds" },
    },
  },
  "triple-room": {
    [Provider.QLOAPPS]: {
      externalId: env("NEXT_PUBLIC_BOOKING_ROOM_TRIPLE_ROOM_PRODUCT_ID", "3"),
      url: env("NEXT_PUBLIC_BOOKING_ROOM_TRIPLE_ROOM_URL") || undefined,
      query: {
        id_product: env("NEXT_PUBLIC_BOOKING_ROOM_TRIPLE_ROOM_PRODUCT_ID", "3"),
      },
    },
    [Provider.CUSTOM]: {
      externalId: "triple-room",
      path: "/reservations",
      query: { room: "triple-room" },
    },
  },
  "single-room": {
    [Provider.QLOAPPS]: {
      externalId: env("NEXT_PUBLIC_BOOKING_ROOM_SINGLE_ROOM_PRODUCT_ID", "4"),
      url: env("NEXT_PUBLIC_BOOKING_ROOM_SINGLE_ROOM_URL") || undefined,
      query: {
        id_product: env("NEXT_PUBLIC_BOOKING_ROOM_SINGLE_ROOM_PRODUCT_ID", "4"),
      },
    },
    [Provider.CUSTOM]: {
      externalId: "single-room",
      path: "/reservations",
      query: { room: "single-room" },
    },
  },
};

export function getMappedRoom(
  roomSlug: RoomSlug,
  provider: BookingProviderId,
): ProviderRoomRef | undefined {
  return ROOM_MAP[roomSlug]?.[provider];
}

export function listRoomSlugs(): RoomSlug[] {
  return Object.keys(ROOM_MAP);
}

export { ROOM_MAP };
