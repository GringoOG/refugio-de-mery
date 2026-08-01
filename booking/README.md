# Booking architecture

```
UI → BookingService → Factory → Provider
                              ├── QloApps
                              ├── Custom
                              ├── Cloudbeds
                              └── Sirvoy
```

## Strict rules

1. **UI → only `BookingService`**
   - `open` / `openRoom` / `getUrl` / `getRoomUrl`
   - `isEnabled` / `isExternal` / `capabilities`
   - No `window.open` to provider URLs in React components.

2. **Room identity = stable slug** (`double-room`, `mountain-terrace`)  
   Map slug → `id_product` / path in `config/rooms.ts` + env.  
   Never hardcode marketing names in providers.

3. **Switch provider = env only** — no React changes:
   ```bash
   NEXT_PUBLIC_BOOKING_PROVIDER=qloapps   # later: custom
   NEXT_PUBLIC_BOOKING_EXTERNAL=true      # later: false
   NEXT_PUBLIC_BOOKING_BASE_URL=https://BOOKING-URL-CAFFE-FINCA
   ```

## Layout

```
src/lib/booking/
  booking.service.ts
  index.ts
  config/          # env + room slug → external id map
  types/
  errors/
  analytics/
  logger/
  hooks/
  factory/
  providers/
  utils/

src/components/BookButton.tsx
```

Public API: `import { BookingService } from "@/lib/booking"`
