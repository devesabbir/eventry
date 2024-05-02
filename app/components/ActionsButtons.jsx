"use client";

import Link from "next/link";
import { useAuth } from "@/app/hooks/useAuth";
import { interestedAction } from "@/app/actions";

function ActionsButtons({ eventId, interestedIds }) {
  const { auth, setAuth } = useAuth();

  const toggleInterest = async () => {
    try {
      if (auth) {
        await interestedAction(eventId, auth?.id);
      }
    } catch (error) {}
  };
  return (
    <>
      <button
        onClick={() => toggleInterest()}
        className="w-full bg-indigo-600 hover:bg-indigo-800"
      >
        Interested
      </button>
      <Link href={"/payment"} className="w-full go-link ">
        Going
      </Link>
    </>
  );
}

export default ActionsButtons;
