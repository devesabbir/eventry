"use client";

import { useAuth } from "@/app/hooks/useAuth";
import { interestedAction } from "@/app/actions";
import { useState, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";

function ActionsButtons({ eventId, interestedIds, goingUserIds }) {
  const { auth } = useAuth();
  const router = useRouter();
  const isInterested = interestedIds?.some((id) => id === auth?.id) || false;
  const [interested, setInterested] = useState(isInterested);
  const [pending, startTransiton] = useTransition();

  const isGoing = goingUserIds?.some((id) => id === auth?.id);
  const [going, setGoing] = useState(isGoing);

  const toggleInterest = () => {
    if (auth) {
      interestedAction(eventId, auth?.id);
      setInterested(!interested);
    } else {
      router.push("/login");
    }
  };

  const markGoing = () => {
    if (auth) {
      router.push(`/payment/${eventId}`);
    } else {
      router.push("/login");
    }
  };

  return (
    <>
      <button
        onClick={() => startTransiton(() => toggleInterest())}
        className={`w-full ${
          interested && "bg-indigo-600 hover:bg-indigo-800"
        }`}
      >
        Interested
      </button>
      <button
        disabled={auth && going}
        onClick={markGoing}
        className=" text-center w-full bg-[#464849] py-2 px-2 rounded-md border border-[#5F5F5F]/50 shadow-sm cursor-pointer hover:bg-[#3C3D3D] transition-colors active:translate-y-1"
      >
        Going
      </button>
    </>
  );
}

export default ActionsButtons;
