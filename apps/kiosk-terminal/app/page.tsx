import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { useLocalStorage } from "@repo/hooks/useLocalStorage";
import { getActivitiesByHotelId } from "@repo/actions/getActivitiesByHotelId";
import { getHotelsByUserId } from "@repo/actions/getHotelsByUserId";

export default async function Page() {
  const activities = await getActivitiesByHotelId(
    "006ee943-6d0e-4045-83c5-e947858a006f",
  );
  const hotels = await getHotelsByUserId();
  console.log({ hotels });
  return (
    <main>
      <div className="text-2xl">Page</div>
    </main>
  );
}
